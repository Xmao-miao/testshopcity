<template>
    <div>
        <swiper> 
            <swiper-item v-for="(item,index) in banners" :key="index">
                <a :href="item.link">
                    <img :src="item.image" alt=""  @load="imgload">
                </a>
            </swiper-item>
        </swiper>
    </div>
</template>

<script>

import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
    export default {
        components:{
             Swiper,
              SwiperItem
        },
        // 涉及到父子组件通信，父传子
        props:{
            banners:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return{
                isLoad:false

            }

        },
        methods:{
            imgload(){ 
                if(!this.isLoad){
                     this.$emit('swiperImgLoad')

                }          
              this.isLoad=true
    
            }

        }
        
    }
</script>

<style  scoped>

</style>