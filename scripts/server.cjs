"use strict";
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const ROOT = path.resolve(__dirname, '..');
const mime = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.md':'text/plain; charset=utf-8','.ts':'text/plain; charset=utf-8','.tsx':'text/plain; charset=utf-8','.jsx':'text/plain; charset=utf-8'};
function startServer(port = Number(process.env.PORT || 5173), host = '127.0.0.1') {
  const server = http.createServer((req, res) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') {res.writeHead(405);res.end();return;}
    let requested;
    try {requested = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);} catch {res.writeHead(400);res.end();return;}
    const segments = requested.replaceAll('\\','/').split('/');
    if (segments.some(s=>s.startsWith('.') && s !== '.' || s === 'node_modules')) {res.writeHead(403);res.end();return;}
    let file = path.resolve(ROOT, '.' + requested);
    if (file !== ROOT && !file.startsWith(ROOT + path.sep)) {res.writeHead(403);res.end();return;}
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file=path.join(file,'index.html');
    if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {res.writeHead(404);res.end('Not found');return;}
    res.writeHead(200, {'Content-Type':mime[path.extname(file)] || 'application/octet-stream','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});
    if (req.method === 'HEAD') res.end();else fs.createReadStream(file).pipe(res);
  });
  return new Promise((resolve,reject)=>{server.once('error',reject);server.listen(port,host,()=>resolve(server));});
}
if (require.main === module) startServer().then(server=>console.log(`STATE OF PLAY: http://127.0.0.1:${server.address().port}`)).catch(error=>{console.error(error.message);process.exitCode=1;});
module.exports={startServer};
