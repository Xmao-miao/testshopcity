<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>

    </div>
</template>

<script>
import BScroll from 'better-scroll'
    export default {
        props:{
            probeType:{
                type: Number,
                default:0
            },
            pullUpLoad:{
                type:Boolean,
                default:false
            }


        },
         data(){
            return{
                scroll:null
            }
        },
        created(){
           
        },
        mounted(){
             this.scroll= new BScroll(this.$refs.wrapper,{
                //  如果不加这个属性，tabcontrol里的三个选项不能带点击
                 click:true,
                 probeType:this.probeType,
                 pullUpLoad:this.pullUpLoad
               
            })
            this.scroll.on('scroll',(position)=>{
                this.$emit('scroll',position)

            })
            this.scroll.on('pullingUp',()=>{
                console.log('上拉加载更多');
                
                this.$emit('upClick')
            })

        },
        methods:{
            scrollTo(x,y,time){
               this.scroll && this.scroll.scrollTo(x,y,time)
            },
            // 因为需要多次上拉加载，所以需要这个函数
            finishPullUp(){
                this.scroll.finishPullUp()

            },
            refresh(){
                console.log('------');   
               this.scroll && this.scroll.refresh()
            },
            getSaveY(){
                return this.scroll ? this.scroll.y : 0
            }


        }
    }
</script>

<style  scoped>

</style>