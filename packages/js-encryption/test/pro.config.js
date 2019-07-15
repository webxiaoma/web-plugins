const IP_PROXY = 'http://www.longwenedu.com/' // 线上接口

module.exports = {
    // 开发环境下
    dev: {
        proxyTable: {
            "/api": {
                target: IP_PROXY,
                changeOrigin: true,
                pathRewrite: {
                   "^/api": ""
                }
            }
        }, // 配置代理
    },

    // 生产环境
    build: {
        baseUrl:"/actives/",
    },
    public:{
        externals: {// 排除打包库
            // "vue":["Vue"],
        },
        webpackConfig(config) {
            // config webpack的配置
        }
    }

  
};