import { request } from "network/request.js"

// 导出一个home页面请求获得的数据
export function getHomeMultidata() {
    // 返回一个promise
    return request({
        url: '/home/multidata',
    })
}
export function getHomeGoods(type, page) {
    // 返回一个promise
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}