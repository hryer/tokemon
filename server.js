const express = require("express");
const path = require("path");
var expressStaticGzip = require('express-static-gzip');

const app = express();

app.use(expressStaticGzip(path.join(__dirname, "dist"), {
  enableBrotli: true,
  orderPreference: ['br','gz'],
  setHeaders: function (res, path) {
    res.setHeader("Cache-Control", "public, max-age=31536000");
  }
}));

  app.use("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"));
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log("\x1b[32m%s\x1b[0m", `[App] running http:localhost:${PORT}`)
);
