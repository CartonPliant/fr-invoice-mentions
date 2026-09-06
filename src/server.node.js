import http from "node:http";
import worker from "./worker.js";

const port = Number(process.env.PORT || 8787);

http
  .createServer(async (req, res) => {
    const host = req.headers.host || `127.0.0.1:${port}`;
    const url = `http://${host}${req.url}`;
    const chunks = [];
    for await (const c of req) chunks.push(c);
    const buf = Buffer.concat(chunks);
    const headers = new Headers();
    for (const [k, v] of Object.entries(req.headers)) {
      if (v) headers.set(k, Array.isArray(v) ? v.join(", ") : v);
    }
    const init = { method: req.method, headers };
    if (buf.length && req.method !== "GET" && req.method !== "HEAD") init.body = buf;
    const out = await worker.fetch(new Request(url, init), process.env);
    const outHeaders = {};
    out.headers.forEach((val, key) => {
      outHeaders[key] = val;
    });
    res.writeHead(out.status, outHeaders);
    res.end(Buffer.from(await out.arrayBuffer()));
  })
  .listen(port, () => {
    console.log(`fr-invoice-mentions http://127.0.0.1:${port}`);
  });
