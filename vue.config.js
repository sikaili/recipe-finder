process.env.VUE_APP_VERSION = require('./package.json').version;

module.exports = {
  productionSourceMap: false,
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
      },
      scss: {
      },
    },
  },
};
