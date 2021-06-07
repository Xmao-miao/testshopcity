<template>
    <div class="cart">
        <!-- 导航 -->
        <nav-bar class="cart-bar">
            <div slot="center">购物车（{{cartLength}}）</div>
        </nav-bar>

        <!-- 商品列表 -->
        <cart-list class="cart"></cart-list>


        <!-- 底部汇总 -->
        <cart-bottom-bar :isShowMessage="isShowMessage"></cart-bottom-bar>

    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

import CartList from  './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

import {mapGetters} from 'vuex'
    export default {
        name:'Cart',
        components:{
            NavBar,
            CartList,
            CartBottomBar

        },
        data(){
            return{
                isShowMessage:false

            }
        },
        computed:{

            // cartLength(){
            // return this.$store.state.cartList.length

            // 也可以这样
            // return this.$store.getters.cartlength
            // }
            // 两种语法
            ...mapGetters(['cartLength','cartList'])
            // 也可以是对象的形式，好处是可以自定义命名
            // ...mapGetters（{
            //     length:''
            // }


        }
        
    }
</script>

<style scoped>
.cart {
    /*height: 100vh;*/
    position: relative;
  }
.cart-bar{
    background-color:  var(--color-tint);
    color:#fff;
    /* font-weight: 700; */


}

</style>