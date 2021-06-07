<template>
   
 <div id="tabbar">
   <!-- 虽然值预留了一个插槽，但是却可以插入很多 -->
   <slot></slot>
  </div>
   
</template>

<script>

// 这个只是一个没有内容的组件，它只有一个形状，就是下面的导航
// 只有一个插槽，插槽里又封装一个组件，做具体的填充
    export default {
      components:{

      }
        
    }
</script>

<style >

#tabbar{
  display: flex;
  background-color: #f6f6f6;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
/* 第三个是模糊程度，第一二个分别是x,y偏移 */
  box-shadow:0px -2px 1px rgba(100,100,100,.1);


}

</style>