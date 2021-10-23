process.env.VUE_APP_VERSION = require('./package.json').version;

module.exports = {
  publicPath: process.env.BASE_URL || '/',
  configureWebpack: {
    devServer: {
      watchOptions: {
        ignored: /node_modules/,
      },
    },
  },
};
