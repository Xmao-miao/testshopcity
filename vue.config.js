module.exports = {
    configureWebpack: {
        resolve: {
            // 配置别名
            // '@'='src'内部已经配置好这个
            alias: {
                assets: '@/assets',
                common: '@/common',
                components: '@/components',
                network: '@/network',
                views: '@/views'


            }
        }
    }
}