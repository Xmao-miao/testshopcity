<template>
  
   <div class="tabbar-item" @click="itemclick"> 
     <div v-if="!isActive"> <slot name="item-icon"></slot></div>
     <div v-else> <slot name="item-icon-active"></slot></div>
      <div :style=" activeStyle"><slot name="item-text"></slot></div>

      <!-- 因为插槽是直接被替换那边的自定义标签中的标签，所以这里给插槽添加的属性可能无效 -->
      <!-- 所以在外面加一个div，把属性用在div上 -->
     
   </div>
</template>

<script>
    export default {
      props:{
        path:String,
        activeColor:{
          type:String,
          default:'red'
        }

      },
      data(){
          return{
            // isActive:true
 
         }
      },
      computed:{
        isActive(){
          // return this.$route.path.indexOf(this.path)!==-1
          return this.$route.path.includes(this.path)
        },
        activeStyle(){
          // 这是一个三元判断，如果是，就执行前面的，如果不是就执行后面的
          return this.isActive ? {color:this.activeColor} : {}
        }
      },

      // 代码路由跳转
      methods:{
        itemclick(){
          this.$router.replace(this.path).catch(err=>err)

        }

      },
      components:{
        
      }
        
    }
</script>

<style>
.tabbar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tabbar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
/* .active{
  color:#1AFA29;
} */
</style>