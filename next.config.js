module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false;
        config.resolve.fallback.child_process = false;
        config.resolve.fallback.worker_threads = false;
      }
      return config;
    },
  }