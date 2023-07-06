/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    publicPath: "/build/", // default value, can be removed
    serverBuildPath: "api/index.js",
    serverMainFields: ["main", "module"], // default value, can be removed
    serverMinify: false, // default value, can be removed
    serverModuleFormat: "cjs", // default value, can be removed
    serverPlatform: "neutral", // default value, can be removed
  };
