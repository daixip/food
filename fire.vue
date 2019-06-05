<template>
    <div class="container">
        <div class="fire_content">
            <h3>燃烧吧！卡路里</h3>
            <div class="icon"></div>  
        </div>
        <div>
            <a href="" class="meals-lists">
                <div class="list" v-for="(item,index) of list" :key="index">
                    <img :src="`http://127.0.0.1:3000/`+item.img" alt="">
                    <div class="content">
                        <p>{{item.title}}</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{list:[]}
    },
    created(){
        this.loadFire()
    },
    methods:{
        loadFire(){
           this.axios.get("index/fire").then(result=>{
               this.list=result.data.data;
               console.log(this.list.title)
           })
        }
    }
}
</script>
<style>
    h3{
        font-size: 32px;
        margin-bottom: 36px;
    }
    div.icon{
        width: 60px;
        height: 3px;
        background-color:#ff2e64;
        margin: 0 auto;
        margin-bottom: 36px;
    }
    .meals-lists{
        display: flex;
        justify-content: space-between;
    }
    .list{
        width: 24%;
        height: 100%;
        position: relative;
        z-index: 1;
        overflow: hidden;
        padding:25px;
        background-color: #ddd;
    }
    .content{
        position: absolute;
        z-index: 999;
        width: 100%;
        height: 100%;
        top:0;
        left: 0;
       
        
        color:#fff;
        font-size: 16px;
    }
    .content p{
        margin-top: 120%;
        margin-right: 55%;
    }
    .list img{
        width: 100%;
    }
    .list img{
        transition: all 1s linear;
    }
   .list:hover img{
        transform: rotate(15deg);
    } 
</style>

