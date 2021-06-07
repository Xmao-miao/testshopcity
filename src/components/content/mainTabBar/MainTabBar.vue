<template>
  <div>
    <tab-bar>
     <!-- tabbaritem中的path就是组件中的path变量，用到父传子通信 -->
     <TabBarItem path="/home" activeColor="#1AFA29">
     <!-- 注意在url和dom里引用文件的别名时要带上~ -->
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
         <img slot="item-icon-active" src="~assets/img/tabbar/home-active.svg" alt="">
        <div slot="item-text">首页</div>
     </TabBarItem>
     <TabBarItem path="/category" activeColor="#1AFA29">
        <img slot="item-icon" src="~assets/img/tabbar/class.svg" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/class-active.svg" alt="">
        <div slot="item-text">分类</div>
     </TabBarItem>
     <TabBarItem path="/cart" activeColor="#1AFA29">
        <img slot="item-icon" src="~assets/img/tabbar/shop.svg" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/shop-active.svg" alt="">
        <div slot="item-text">购物车</div>
     </TabBarItem>
     <TabBarItem path="/profile" activeColor="#1AFA29">
        <img slot="item-icon" src="~assets/img/tabbar/mine.svg" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/mine-active.svg" alt="">
        <div slot="item-text">我的</div>
     </TabBarItem>
   </tab-bar>
   </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
    export default {
        components:{
             // 目前是两个子组件
             TabBar,
             TabBarItem
        }
        
    }
</script>

<style scoped>


</style>