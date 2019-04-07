module.exports = {
    devServer: {
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