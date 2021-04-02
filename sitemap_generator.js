const sitemap = require("nextjs-sitemap-generator");
const fs = require("fs");

sitemap({
  baseUrl: "https://www.walhallalauf.de",
  pagesDirectory: __dirname + "/.next/serverless/pages",
  targetDirectory: "public/",
  ignoredExtensions: ["js", "map"],
  ignoredPaths: ["404", "500"],
  ignoreIndexFiles: true,
  nextConfigPath: __dirname + "/next.config.js",
});
