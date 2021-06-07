<template>
    <div class="recommend">
        <div v-for="(item,index) in recommends" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
            <div>{{item.title}}</div>

        </div>

    </div>
</template>

<script>
    export default {
        name:"HomeRecommendView",
        props:{
            recommends:{
                type:Array,
                default(){
                    return []
                }
            }
        }

        
    }
</script>

<style scoped>

.recommend{
    display: flex;
    padding: 10px 0 20px 0;
    font-size: 12px;
    border-bottom: 10px solid #eeeeee;

}
.recommend div{
    flex: 1;  
    text-align: center;
    /* vertical-align: middle; */
    
}
.recommend div img{
    width: 85%;
    margin-bottom: 8px;
}

</style>