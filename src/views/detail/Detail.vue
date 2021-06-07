<template>
    <div id="detail">
      
        <detail-nav-bar class="detail-nav" ref="nav" @titleClick="titleClick" ></detail-nav-bar>
       


        <scroll class="wrapper" ref="scroll" @scroll="contentScroll" :probe-type="3">

       
            
        <detail-swiper :top-images="topImg"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>

        <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
        <detail-param-info :param-info="paramInfo" ref="params"></detail-param-info>
        <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
        <goods-list :goods="recommends" ref="recommends"></goods-list>
        </scroll>
        <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
        <!-- @click.native是给组件添加事件，本来事件是在组件内部的元素身上，现在是给组件本身添加事件 -->
        <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>

    </div>
</template>

<script>
import DetailNavBar from "./detailChild/DetailNavBar";
import DetailSwiper from './detailChild/DetailSwiper'
import DetailBaseInfo from './detailChild/DetailBaseInfo'
import DetailShopInfo from './detailChild/DetailShopInfo'
import Scroll from 'components/common/scroll/Scroll'
import DetailGoodsInfo from './detailChild/DetailGoodsInfo'
import DetailParamInfo from './detailChild/DetailParamInfo'
import DetailCommentInfo from './detailChild/DetailCommentInfo'
import GoodsList from 'components/content/goods/GoodsList'
import DetailBottomBar from './detailChild/DetailBottomBar'
// import Toast from 'components/common/toast/Toast'
import {obj} from 'components/common/toast/index'


import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'
import {debounce} from 'common/utils/utils.js'
import {itemImgListenerMixin,backTopMixin} from 'common/mixin'

import {mapActions} from 'vuex'
    export default {
        // 这个name属性需要有，因为在app.vue文件中，keep-alive需要排除Detail，而这个排除需要根据name
        name:'Detail',
        components:{
            DetailNavBar,
            DetailSwiper,
            
            DetailBaseInfo,
            DetailShopInfo,
            Scroll,
            DetailGoodsInfo,
            DetailParamInfo,
            DetailCommentInfo,
            GoodsList,
            DetailBottomBar,
            // Toast
         

        },
        // 混入
        mixins:[itemImgListenerMixin,backTopMixin],
        
        data(){
            return{
                iid:null,
                topImg:[],
                goods:{},
                shop:{},
                detailInfo:{},
                paramInfo:{},
                commentInfo:{},
                recommends:[],
                itemImgListener:null,
                themeTopYs:[],
                getThemeTopY:null,
                // newRefresh:null,
                currentIndex:0,
              
             


            }
        },

        created(){
            this.iid=this.$route.params.iid
            getDetail(this.iid).then((res)=>{
                const data=res.result
            this.topImg=data.itemInfo.topImages
            // 获取商品信息
            this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            // 获取店铺信息
            this.shop=new Shop(data.shopInfo)
            // 获取商品详细信息
            this.detailInfo=data.detailInfo
            // 取出参数信息
            this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
            // 取出评论信息
            if(data.rate.cRate!==0){
                this.commentInfo=data.rate.list[0]

            }
            })
            // 请求推荐数据
            getRecommend().then(res=>{
                this.recommends=res.data.list
                
            })
            this.getThemeTopY=debounce(()=>{
            this.themeTopYs=[]
            this.themeTopYs.push(0)
            this.themeTopYs.push(this.$refs.params.$el.offsetTop)
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
            this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
            this.themeTopYs.push(Number.MAX_VALUE)


            },100)   
        },
         mounted(){
           
            },
        activated(){
           
            
            
        },
        destroyed(){
            // 取消全局时间监听
                this.$bus.$off('itemImgLoad',this.itemImgListener)
        },
        methods:{
            ...mapActions(['addCart']),
            imageLoad(){
                this.newRefresh()
                // console.log('-----====');
                
                // this.$refs.scroll.refresh()
                this.getThemeTopY()

            },
            titleClick(index){
                this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)

            },

            // 滚动与位置的联动
            contentScroll(position){
                
                const positionY = -position.y  
                const length=this.themeTopYs.length             
                for(let i=0; i<length-1;i++){
                     // // 也可以往数组里增加一个很大的值，这样就不会i+1就不会溢出了
                    if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) ){
                         this.currentIndex=i
                         this.$refs.nav.currentIndex=this.currentIndex

                         console.log(i);

                         
                     }

                    // // 也可以往数组里增加一个很大的值，这样就不会i+1就不会溢出了
                    //  if(this.currentIndex !== i && ((i<length-1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) 
                    //  || (i===length-1 && positionY>this.themeTopYs[i]))){
                    //      this.currentIndex=i
                    //      this.$refs.nav.currentIndex=this.currentIndex

                    //      console.log(i);

                         
                    //  }

                }
                 // 监听返回顶部的滚动事件-------------------------混入
                this.isShowBackTop=-position.y>1000
            },
            addToCart(){
                // 获取购物车需要展示的信息
                const preduct={}
                preduct.image=this.topImg[0]
                preduct.title=this.goods.title
                preduct.price=this.goods.realPrice
                preduct.desc=this.goods.desc
                preduct.iid=this.iid
                // preduct.count=0
                // 将商品添加到购物车里

                // this.$store.commit('addCart',preduct)

                this.addCart(preduct).then(res=>{

                    // 点击加入购物车，需要弹框，可以使用以下方法，但还有更简单的
                //     this.show=true
                //     this.message=res
                //     setTimeout(()=>{
                //         this.show=false
                //         this.message=''
                //     },1500)
                this.$toast.show(res,2000)

                    // console.log(res);                   
                })


                // dispatch这个方法可以返回一个promise，好处是，在上上面的事情执行完后，再执行这里
                // this.$store.dispatch('addCart',preduct).then(res=>{

                // })

               

            }
    
        }
        
    }


     //  <ul>
        //     <li v-for="(item,index) in $store.state.cartList" :key="index">{{item}}</li>
        // </ul>
</script>

<style  scoped>


#detail{
    position: relative;
    z-index: 12;
    background-color: #ffffff;
    height: 100vh;

}
.detail-nav{
    position: relative;
    z-index: 12;
    background-color: #ffffff;
    
}
.wrapper{
    height: calc(100% - 44px);
   
}
</style>