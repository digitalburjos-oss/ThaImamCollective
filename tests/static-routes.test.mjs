import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const dist=path.resolve(import.meta.dirname,'../dist');
const routes=JSON.parse(fs.readFileSync(path.join(dist,'seo-routes.json')));
test('every canonical route works on an HTML-aware static host without rewrite configuration',()=>{
 for(const [route,file] of Object.entries(routes)){
  const staticPath=path.join(dist,route==='/'?'index.html':route.slice(1)+'.html');
  assert(fs.existsSync(staticPath),`${route} missing static-host entry`);
  assert.equal(fs.readFileSync(staticPath,'utf8'),fs.readFileSync(path.join(dist,file),'utf8'),route);
 }
});
test('static hosting preserves legacy aliases and redirects internal page URLs',()=>{
 const redirects=fs.readFileSync(path.join(dist,'_redirects'),'utf8');
 assert(redirects.includes('/business-os /services/os 301'));
 for(const [route,file] of Object.entries(routes))assert(redirects.includes(`${file.replace(/\.html$/,'')} ${route} 301`),route);
});
