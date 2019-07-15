/**
 * @msg postcss 配置 
 * @http https://www.postcss.com.cn/
 */

module.exports = {
    plugins: {
        autoprefixer: {
        },
        "postcss-pxtorem": {
            rootValue: 75,
            propList: ['*'],
            selectorBlackList:["el-"]
        }
    }
}



