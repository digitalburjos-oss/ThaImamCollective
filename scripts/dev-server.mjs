import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const root = path.resolve(import.meta.dirname, '../dist');
const types = {html:'text/html; charset=utf-8',js:'text/javascript; charset=utf-8',css:'text/css',json:'application/json',webmanifest:'application/manifest+json',svg:'image/svg+xml',png:'image/png',webp:'image/webp',ico:'image/x-icon',woff2:'font/woff2',txt:'text/plain',xml:'application/xml'};
const routes = JSON.parse(fs.readFileSync(path.join(root,'seo-routes.json')));
const api = Object.fromEntries(['contact','lead','subscribe'].map(n=>['/api/'+n,require('../api/'+n+'.js')]));
const server = http.createServer(async (req,res) => {
  res.setHeader('X-Content-Type-Options','nosniff');
  let url; try { url = new URL(req.url,'http://localhost'); } catch { res.writeHead(400).end(); return; }
  if (url.pathname.startsWith('/api/')) {
    if (!api[url.pathname]) {res.writeHead(404).end();return;}
    res.status = code => {res.statusCode=code;return res;};
    res.json = value => {res.setHeader('Content-Type','application/json');res.end(JSON.stringify(value));};
    let raw='';
    try {
      for await (const chunk of req) {raw+=chunk;if(raw.length>16384){res.status(413).json({error:'Request too large'});return;}}
      if(raw) {try{req.body=JSON.parse(raw);}catch{res.status(400).json({error:'Invalid JSON'});return;}}
      await api[url.pathname](req,res);
    } catch {if(!res.writableEnded)res.status(500).json({error:'Request unavailable. Please try again later.'});}
    return;
  }
  if(!['GET','HEAD'].includes(req.method)){res.writeHead(405).end();return;}
  let decoded;try{decoded=decodeURIComponent(url.pathname);}catch{res.writeHead(400).end();return;}
  if(decoded==='/index.html'){res.writeHead(302,{Location:'/'}).end();return;}
  const file = path.resolve(root,'.'+(routes[decoded] || decoded));
  if(!file.startsWith(root+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile()) {
    res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'}).end('<!doctype html><html lang="en"><meta name="viewport" content="width=device-width"><title>Page not found | The Indian Makers</title><body style="background:#FAF8F0;color:#0B211C;font:18px system-ui;padding:10vw"><h1>That page could not be found.</h1><p><a href="/">Return to The Indian Makers</a></p></body></html>');return;
  }
  res.writeHead(200,{'Content-Type':types[file.split('.').pop()]||'application/octet-stream','Cache-Control':'no-cache'});
  if(req.method==='HEAD')res.end();else fs.createReadStream(file).pipe(res);
});
const port=Number(process.env.PORT||3000);
server.listen(port,'0.0.0.0',()=>console.log(`The Indian Makers development server on port ${port}`));
