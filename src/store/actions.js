import {
    ADD_COUNTER,
    ADD_TO_CART
} from './mutations-types'


export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            // 查找之前数组中是否有该商品

            let oldPreduct = null
            for (let item of context.state.cartList) {
                if (item.iid === payload.iid) {
                    oldPreduct = item
                }
            }
            // 如果有
            if (oldPreduct) {
                // oldPreduct.count += 1
                // 通过context.commit拿到mutations里面的事件，这样mutations里面处理的事件就少了
                context.commit(ADD_COUNTER, oldPreduct)
                resolve('商品数量+1')
            } else {
                payload.count = 1
                    // state.cartList.push(payload)
                context.commit(ADD_TO_CART, payload)
                resolve('添加商品数量成功')
            }

        })

    }
}