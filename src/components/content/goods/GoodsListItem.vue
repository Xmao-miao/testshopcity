<template>
    <div class="goodsitem" @click="detailClick">
        <!-- 使用图片懒加载，用v-lazy代替src引用 -->
         <img v-lazy="shoeImage" alt="" @load="loadClick">    
        <div class="goodsinfo">
            <p>{{goodsItem.title}}</p>
             <span class="price">{{goodsItem.price}} </span>
             <span class="cfav">{{goodsItem.cfav}}</span>
        </div>
       

    </div>
</template>

<script>
    export default {
        props:{
            goodsItem:{
                type:Object,
                default(){
                    return []
                }
            }
        },
        computed:{
            shoeImage(){
                return this.goodsItem.image || this.goodsItem.show.img

            }

        },
        methods:{
            loadClick(){
                // 图片加载事件，放在事件总线上
                this.$bus.$emit('itemImgLoad')
            },
            detailClick(){
                this.$router.push('/detail/'+this.goodsItem.iid)
            }
            
        }
        
    }
</script>

<style scoped>
.goodsitem{
    padding-bottom: 40px;
    position: relative;
    width: 48%;


}
.goodsitem img{
    width: 100%;
    border-radius: 5px;
}
.goodsinfo{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    text-align: center;
    overflow: hidden;

}
.goodsinfo p{
    /* 以下三条共同设置超出隐藏与变成。。。 */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
   
    margin-bottom: 3px;
}
.goodsinfo .price{

    color: var(--color-high-text);
    margin-right: 20px;
}
.goodsinfo .cfav{
    position: relative;
}
.goodsinfo .cfav::before{
    content: '';
    position: absolute;
    left: -15px;
    top: 0px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/home/collect.svg") 0 0/14px 14px;
}
</style>