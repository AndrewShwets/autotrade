// Helps to resolve absolute paths
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  webpack: (config, options) => {
    if (config.resolve.plugins) {
      config.resolve.plugins(new TsconfigPathsPlugin());
    } else {
      config.resolve.plugins = [new TsconfigPathsPlugin()];
    }

    return config;
  },
  target: "serverless"
};