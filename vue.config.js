module.exports = {
  lintOnSave: false, // 设置是否在开发环境下每次保存代码时都启用 eslint验证
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    host: 'localhost',
    port: 8080,
    https: false,
    open: true,
    hotOnly: true,
    proxy: {
      '/api': {
        target: 'http://api.vikingship.xyz/api',//跨域接口的地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
};
