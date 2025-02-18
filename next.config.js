/** @type {import('next').NextConfig} */
const nextConfig = {
 reactStrictMode: true,
  typescript: {
    tsconfigPath: process.env.NEXT_PAGES_PATH
      ? "./tsconfig.pages.json"
      : "./tsconfig.json", // we override this error on purpose for now until we fully move to app dir
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  swcMinify: true,
  experimental: {
    // webpackBuildWorker: true, // fix build during early access program
    reactRoot: "concurrent",
    typedRoutes: true,
    clientRouterFilter: true,
    serverActions: true,
    serverActionsBodySizeLimit: "5mb",
  },
}

module.exports = nextConfig