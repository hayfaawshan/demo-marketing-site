const withExperimentalFeatures = (config) => {
 if (!process.env.API_KEY) {
    console.log("** warn ** : `API_KEY` not found in environment variables.");
  }

  return {
    ...config,
    eslint: { ignoreDuringBuilds: true },
    typescript: { ignoreBuildErrors: true },
    images: { unoptimized: true },
    experimental: {
      webpackBuildWorker: true,
      parallelServerBuildTraces: true,
      parallelServerCompiles: true,
    },
  };
};

module.exports = withExperimentalFeatures();