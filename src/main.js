import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast/index'
import VueLazyload from "vue-lazyload"


Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
    // 安装toast插件
Vue.use(toast)

// 使用图片懒加载
Vue.use(VueLazyload, {
    loading: require('assets/img/common/placeholder.png')
});


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})