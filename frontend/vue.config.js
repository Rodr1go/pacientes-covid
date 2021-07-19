module.exports = {
  // opções
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    },
    watchOptions: {
      poll: true
    },
    /* proxy: {
      "^/api/v1": {
        target: "http://0.0.0.0:3333",
        pathRewrite: { "^/api/v1": "/api/v1" },
        changeOrigin: true,
        logLevel: "debug"
      }
    } */
  }
}
