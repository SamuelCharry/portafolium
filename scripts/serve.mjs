// Servidor local sin dependencias. Ejecuta: node scripts/serve.mjs
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = Number(process.env.PORT || 4173);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".pdf": "application/pdf",
  ".ttf": "font/ttf",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};
http
  .createServer((req, res) => {
    let pathname;
    try {
      pathname = decodeURIComponent(
        new URL(req.url, "http://localhost").pathname,
      );
    } catch {
      res.writeHead(400);
      res.end("Bad request");
      return;
    }
    const file = path.resolve(
      root,
      "." + (pathname.endsWith("/") ? pathname + "index.html" : pathname),
    );
    if (
      !file.startsWith(root + path.sep) ||
      /(^|[\\/])\./.test(path.relative(root, file))
    ) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }
    if (!["GET", "HEAD"].includes(req.method)) {
      res.writeHead(405);
      res.end("Method not allowed");
      return;
    }
    fs.stat(file, (error, stat) => {
      if (error || !stat.isFile()) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }
      res.writeHead(200, {
        "Content-Type": mime[path.extname(file)] || "application/octet-stream",
        "Content-Length": stat.size,
        "Cache-Control": "no-store",
      });
      if (req.method === "HEAD") {
        res.end();
        return;
      }
      fs.createReadStream(file).pipe(res);
    });
  })
  .listen(port, "127.0.0.1", () =>
    console.log(`Portfolio local: http://127.0.0.1:${port}`),
  );
