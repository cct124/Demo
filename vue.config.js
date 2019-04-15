module.exports = {
    devServer: {
        host: '127.0.0.1',
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000/', // 正式环境
                changeOrigin: true,
                autoRewrite: true,
                cookieDomainRewrite: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    }
}