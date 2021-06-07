import axios from 'axios'


// 封装一个发送请求的函数
export function request(config) {

    // 创建xsios实例

    // #########################################################################
    // 错误找了半天，原来是axios.create({}）忘记写后面的creste了
    // ##########################################################################
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 5000
    })


    // 配置请求拦截
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log('err')
        return err

    })

    // 配置响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log('shibai')
        return err
    })

    // 发送真正的请求，返回promise
    return instance(config)

}