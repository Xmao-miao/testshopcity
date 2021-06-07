<template>
    <div class="tabcontrol">
        <div v-for="(item,index) in titles" :key="index" class="tabcontrol_item" 
        :class="{active: isActiveIndex==index}" @click="btntab(index)"><span>{{item}}</span></div>

    </div>
</template>

<script>
    export default {
        props:{
            titles:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return {
                isActiveIndex:0
            }
        },
        methods:{
            btntab(index){
                this.isActiveIndex=index;
                this.$emit('tabclcik',index)
            }

        }
        
    }
</script>

<style  scoped>
.tabcontrol{
    display: flex;
    font-size: 16px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #ffffff;


}
/* 注意这里的类名命名不允许有-，下划线才可以 */
.tabcontrol_item{
    flex: 1;
}
.tabcontrol_item span{
    padding: 5px;
}
.active{

    /* 注意带上var才能实现变量css的效果 */
    color: var(--color-high-text);

}
.active span{
    border-bottom: 3px solid var(--color-tint);
}
</style>