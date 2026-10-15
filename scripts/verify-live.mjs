import assert from 'node:assert/strict';
import fs from 'node:fs';
import { parseHTML } from 'linkedom';
const origin = 'https://theimamcollective.com';
// Allow the same release checks against a local/staging server. Canonical URLs
// and structured identity must still refer to the production domain.
const target = new URL(process.env.VERIFY_ORIGIN || origin);
assert(['http:','https:'].includes(target.protocol) && !target.username && !target.password && target.pathname==='/' && !target.search && !target.hash, 'VERIFY_ORIGIN must be an HTTP(S) origin without credentials, path, query or fragment');
const routes = JSON.parse(fs.readFileSync(new URL('../dist/seo-routes.json', import.meta.url), 'utf8'));
// Release-specific metadata expectations: detect stale deployments even when
// routes return HTTP 200 and the sitemap is present.
const expectedTitles = {
  '/': 'The Indian Makers | Automation & Marketing',
  '/business-os': 'Business Management Software for growing businesses | The Indian Makers',
  '/business-ai': 'AI Automation for Growing Businesses | The Indian Makers',
  '/studio': 'Web & App Development Services | The Indian Makers',
  '/industries': 'Industry Business Software Solutions | The Indian Makers'
};
let failures = 0;
async function check(route, inspect) {
  try {
    const res = await fetch(target.origin + route, { redirect: 'manual', signal: AbortSignal.timeout(20000), headers: {'User-Agent':'The Indian Makers-Release-Check/1.0'} });
    await inspect(res);
    console.log('PASS', route);
  } catch (err) { failures++; console.error('FAIL', route, err.message); }
}
for (const route of Object.keys(routes)) await check(route, async res => {
  assert.equal(res.status, 200, 'Public page status');
  const html = await res.text();
  const {document} = parseHTML(html);
  assert.equal(document.querySelector('link[rel="canonical"]')?.getAttribute('href'), origin + route, 'Canonical');
  assert(document.querySelector('#seo-prerender'), 'SEO HTML release is missing');
  assert(document.querySelector('#indianmakers-schema'), 'Brand structured data is missing');
  const expected = parseHTML(fs.readFileSync(new URL('../dist' + routes[route], import.meta.url), 'utf8')).document;
  assert.deepEqual(JSON.parse(document.querySelector('#indianmakers-schema').textContent), JSON.parse(expected.querySelector('#indianmakers-schema').textContent), 'Current structured data mismatch (possible stale deployment)');
  const title = document.querySelector('title')?.textContent?.trim();
  assert(title?.includes('The Indian Makers'), 'The Indian Makers title missing');
  assert(document.querySelector('meta[name="description"]')?.getAttribute('content')?.trim(), 'Meta description missing');
  if (expectedTitles[route]) assert.equal(title, expectedTitles[route], 'Current release title mismatch (possible stale deployment)');

  assert(!html.includes('G-XM0TZ7W0GN'), 'Source analytics removed');
});
for (const route of ['/brand/favicon.png','/favicon.ico','/brand/apple-touch-icon.png']) await check(route, async res => {
  assert.equal(res.status, 200); assert.match(res.headers.get('content-type')||'', /^image\//);
  assert((await res.arrayBuffer()).byteLength > 100);
});
await check('/sitemap.xml', async res => {
  assert.equal(res.status,200); const xml=await res.text();
  for(const route of Object.keys(routes)) assert(xml.includes('<loc>'+origin+route+'</loc>'));
});
await check('/robots.txt', async res => {
  assert.equal(res.status,200);
  const text=await res.text();
  assert.match(text,/User-agent: \*/);
  assert.match(text,/Disallow: \/api\//);
  assert(text.includes('Sitemap: '+origin+'/sitemap.xml'));
});
await check('/llms.txt', async res => {
  assert.equal(res.status,200);
  assert.equal(await res.text(),fs.readFileSync(new URL('../dist/llms.txt',import.meta.url),'utf8'));
});
await check('/insights/nonexistent-release-check', res=>assert.equal(res.status,404));
console.log(`${failures} failed checks. A 403 to this diagnostic client does not establish that Googlebot is blocked.`);
process.exitCode = failures ? 1 : 0;
