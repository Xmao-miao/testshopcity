import { debounce } from 'common/utils/utils.js'
import BackTop from 'components/content/backtop/BackTop'


export const itemImgListenerMixin = {
    data() {
        return {
            newRefresh: null

        }
    },
    mounted() {
        // 通过事件总线来直接操作goodsitemimg的图片加载完成事件
        // 刷新+防抖函数
        this.newRefresh = debounce(this.$refs.scroll.refresh, 500)
        this.itemImgListener = () => {
                // this.$refs.scroll && this.$refs.scroll.refresh()
                this.newRefresh()
            }
            // 执行事件总线的事件
        this.$bus.$on('itemImgLoad', this.itemImgListener)
    }
}

// 混入返回顶部
export const backTopMixin = {
    components: {
        BackTop

    },
    data() {
        return {
            isShowBackTop: false
        }
    },
    methods: {
        backClick() {
            // 返回顶部按钮的点击事件，返回选哟1s
            this.$refs.scroll.scrollTo(0, 0, 1000)

        }
    }

}