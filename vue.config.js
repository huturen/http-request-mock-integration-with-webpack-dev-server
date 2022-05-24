const path = require('path');
const { defineConfig } = require('@vue/cli-service')
const httpRequestMockMiddleware = require('http-request-mock/plugin/middleware');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080,

    // for webpack 3
    // before(app) {
    //   httpRequestMockMiddleware({
    //     mockDir: path.resolve(__dirname, 'mock'),
    //     app,
    //     index: 'http-request-mock.pure.js'
    //   });
    // }

    // Prior to webpack v4.7.0
    // onBeforeSetupMiddleware(devServer) {
    //   httpRequestMockMiddleware({
    //     mockDir: path.resolve(__dirname, 'mock'),
    //     app: devServer.app,
    //     index: 'http-request-mock.pure.js'
    //   });
    // },

    // As of webpack v4.7.0
    setupMiddlewares: (middlewares, devServer) => {

      httpRequestMockMiddleware({
        mockDir: path.resolve(__dirname, 'mock'),
        app: devServer.app,
        index: 'http-request-mock.pure.js'
      });

      return middlewares;
    },
  }
})
