<template>
    <div class="wrapper" ref="aaa">
       
            <ul class="content">
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
                <li>商品列表</li>
            </ul>

    </div>
</template>

<script>
import BScroll from 'better-scroll'
    export default {
        data(){
            return{
                scroll:null
            }
        },
        created(){
           
        },
        mounted(){
             this.scroll= new BScroll(this.$refs.aaa,{

            })

        }
        
    }
</script>

<style scoped>
.wrapper{
    height: 300px;
    background-color: pink;
    overflow: hidden;
    /* overflow-y: scroll; */
}

</style>