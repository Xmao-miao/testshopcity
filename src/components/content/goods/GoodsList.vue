<template>
    <div class="goodslist">
        <!-- 得到列表里面的每一项 -->
        <goods-list-item v-for="(item,index) in goods" :key="index" :goods-item="item"></goods-list-item>
       
        <!-- {{goods}} -->

    </div>
</template>

<script>
import GoodsListItem from 'components/content/goods/GoodsListItem'
    export default {
        components:{
            GoodsListItem

        },
        props:{
            goods:{
                type:Array,
                default(){
                    return []
                }
            }
        }
        
    }
</script>

<style  scoped>
.goodslist{
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    /* 使得均等分 */
    justify-content:space-around;  
}
</style>