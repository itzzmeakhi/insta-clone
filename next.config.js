const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["upload.wikimedia.org", "1000logos.net", "cloudflare-ipfs.com"]
  }
}
