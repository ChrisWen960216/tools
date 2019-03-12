module.exports = {
  extraBabelPlugins: [
    ["import", { libraryName: "antd", libraryDirectory: "es", style: true }]
  ],
  disableCSSModules: true,
  define:{
    "process.env.ENV": process.env.ENV
  },
  env: {
    development: {
      extraBabelPlugins: [
        "dva-hmr"
      ]
    }
  },
  proxy:{
    "/mock": {
      target: "http://yapi.dae.org/mock/56",
      changeOrigin: true,
      pathRewrite: { "^/mock" : "" }
    }
  }
}

