import Vue from 'vue'
// 注意这里的是小写
import VueRouter from 'vue-router'

const Home = () =>
    import ('../views/home/Home.vue')
const Category = () =>
    import ('../views/category/Category.vue')
const Cart = () =>
    import ('../views/cart/Cart.vue')
const Profile = () =>
    import ('../views/profile/Profile.vue')
const Detail = () =>
    import ('../views/detail/Detail.vue')
    // 安装插件
Vue.use(VueRouter)

// 创建路由
const routes = [{
        path: '/',
        redirect: '/home'

    },
    {
        path: "/home",
        component: Home
            // 注意不用引号

    },
    {
        path: "/category",
        component: Category

    },
    {
        path: "/cart",
        component: Cart

    },
    {
        path: "/profile",
        component: Profile

    },
    {
        path: "/detail/:iid",
        component: Detail

    }

]
const router = new VueRouter({

    routes,
    mode: 'history'
})

// 导出router
export default router