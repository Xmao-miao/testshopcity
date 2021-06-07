<template>
    <div id="home"> 
        <!-- 头部导航-购物街 -->
       <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
        <tab-control :titles="['流行','新款','精选']" class="tabcontrol" 
        ref="tabcontrol1" @tabclcik="tabclcik" v-show="isFixed"></tab-control>


      <scroll class="wrapper" ref="scroll" :probe-type="3" @scroll="scrollClick" :pull-up-load="true" @upClick="loadMore"> 
       <!-- 轮播图区域 -->
         <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>

         <home-recommend-view :recommends="recommends"></home-recommend-view>
         <feature-view></feature-view>

         <tab-control :titles="['流行','新款','精选']"
         ref="tabcontrol2" @tabclcik="tabclcik"></tab-control>

         <goods-list :goods="goods[currentType].list"></goods-list>
      </scroll>

      <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    </div>
</template>

<script>
// 子组件
import HomeSwiper from './childHome/HomeSwiper'
import HomeRecommendView from './childHome/HomeRecommendView'
import FeatureView from './childHome/FeatureView'

// 公共组件
import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backtop/BackTop'
import {debounce} from 'common/utils/utils.js'
// 请求，导入不需要带参数
import {getHomeMultidata,getHomeGoods} from 'network/home.js'
import {itemImgListenerMixin} from 'common/mixin'
    export default {
        components:{
              NavBar,
              HomeSwiper,
              HomeRecommendView,
              FeatureView,
              TabControl,
              GoodsList,
              Scroll,
              BackTop
             
             
        },
         // 混入，混入mounted函数对象
        mixins:[itemImgListenerMixin],
        // #########################################################33
        data(){
            return{
                // result:null,
                banners:[],
                recommends:[],
                goods:{
                    'pop':{page:0,list:[]},
                    'new':{page:0,list:[]},
                    'sell':{page:0,list:[]}
                },
                currentType:'pop',
                isShowBackTop:false,
                topOffSetTop:0,
                isFixed:false,
                 saveY:0,
                 itemImgListener:null

            }
        
        },
        // ################################################################
        created(){
            this.getHomeMultidata()
// 请求在这真正实现，先把数据请求下来，而不是点击谁，再去请求
            this.getHomeGoods('pop')  
            this.getHomeGoods('new') 
            this.getHomeGoods('sell')      
            
           
               

           
        },
        mounted(){
           
            },
        // #######################################################################
        computed:{
            shoeGoods(){
              return this.goods[this.currentType].list

            },
            destroyed(){

            },
            activated(){
                this.$refs.scroll.refresh()
                this.$refs.scroll.scrollTo(0,this.saveY)
                


            },
            deactivated(){
                this.saveY=this.$refs.scroll.getSaveY()
                // 取消全局时间监听
                this.$bus.$off('itemImgLoad',this.itemImgListener)

            }
            

        },
        // ###########################################################
        // 最写在方法里
        methods:{
            // 监听轮播图图片加载完成事件，注意与防抖的区别，这里是写在方法里，
            // 总线事件没有绑定在home里，直接使用，这里需要在组件中绑定一下
            swiperImgLoad(){
                //  console.log(this.$refs.tabcontrol2.$el.offsetTop);
                 this.topOffSetTop=this.$refs.tabcontrol2.$el.offsetTop

            },
            tabclcik(index){
                switch(index){
                    case 0:
                    this.currentType='pop'
                    break
                     case 1:
                    this.currentType='new'
                    break
                     case 2:
                    this.currentType='sell'
                    break
                }
                 this.$refs.tabcontrol1.isActiveIndex=index;
                 this.$refs.tabcontrol2.isActiveIndex=index;
            },
            backClick(){
                // 返回顶部按钮的点击事件，返回选哟1s
                this.$refs.scroll.scrollTo(0,0,1000)

            },
            scrollClick(position){
                // 监听返回顶部的滚动事件
                this.isShowBackTop=-position.y>1000
                // 监听吸顶效果的滚动事件
                this.isFixed=-position.y>this.topOffSetTop


            },
            loadMore(){
                this.getHomeGoods(this.currentType)
                // const refresh=this.debounce(this.$refs.scroll.refresh,500)
                // refresh()
                //this.$refs.scroll && this.$refs.scroll.refresh()
                

            },

          // *********************************************************8
            getHomeMultidata(){
                //页面一旦加载，就请求多个数据，请求轮播图
            getHomeMultidata().then(res=>{              
                // 由于垃圾回收机制，所以要接收请求的数据
                 this.banners=res.data.banner.list;
                 this.recommends=res.data.recommend.list
            })
            // 如果在这打印，那么大概率是空，因为请求是异步操作
            //  console.log(res);

            },

            getHomeGoods(type){
            const page=this.goods[type].page+1
                // 请求商品数据 
            getHomeGoods(type,page).then(res=>{
                console.log(res);
                this.goods[type].list.push(...res.data.list)
                 this.goods[type].page+=1   
                 this.$refs.scroll.finishPullUp()                                             
            })


            }
                
            }
    }
</script>

<style  scoped>
#home{
    /* padding-top: 44px; */
   position: relative;
    height: 100vh;
}
.home-nav{
    background-color: var(--color-tint);
    color: #ffffff;
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0; */

    /* 注意这里的设置是让导航显示在上面，因为position之后，跑到轮播图下面去了 */
    /* z-index: 10; */
}
.tabfixed{
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
}
.tabcontrol{
    position: relative;
    z-index: 9;
}
/* .tabcontrol{ */
    /* position: sticky;
    top: 44px;
     加上z-index=9之后，就浮在上满了，而不是在下面被遮住 */
    /* z-index: 9;  */
/* } */
.wrapper{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;

    /* 以下是利用视口的原理来计算中间的高度，需要设置home为100vh */
    /* height: calc(100vh - 93px);
    overflow: hidden;
     margin-top: 44px; */
}
</style>