<template>
  <div id="app">
    <!-- 直接展现的是占位符，而不是home或者其他大组件 -->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
     
     <main-tab-bar class="maintabbar"></main-tab-bar>
  
   
  </div>
</template>

<script>

import MainTabBar from 'components/content/mainTabBar/MainTabBar.vue'

export default {
  name: 'App',
  components: {
    MainTabBar,
 
  }
}
</script>



<style  scoped>
/* 在这个style标签中就这么使用 */
@import 'assets/css/base.css';
.maintabbar{
  /* 用来解决底部导航被一些重叠权重大的所覆盖 */
  position: relative;
  z-index: 10;

}
</style>

