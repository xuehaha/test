<template>
    <div class="shopCar">
        <Header title="购物车" btn_icon="abc"></Header>        
       <!-- <h1>当前数量为：{{$store.state.count}}</h1> -->   
        <h3>当前数量为：{{$store.getters.optCount}}</h3>
        <input type="text" v-model="$store.state.count">
        <input type="button" @click="add" value="增加">
        <input type="button" @click="lose" value="减少">
        <mt-button type="danger" @click="addCar">加入购物车</mt-button>
        <mt-button type="primary" @click="buy">立 即 购 买</mt-button>
        <Toast></Toast>
    </div>
</template>

<script>
import Header from "../components/Header.vue"
import Toast from "../components/toast/Toast.vue"
export default {
    name:"Test",
    components:{
        Header,Toast
    },
    data(){
        return{
            goods_info: {},
            id: 1,
            lunboto: [],
            ballFlag: false,
            selectedCount: 1
        }
    },
    methods:{
        buy(){
            this.$tt.show("1231",1000);
        },
        add(){
            this.$store.commit("increment")
        },
        lose(){
            // mutations 方法中最多传俩参数，第二个可以为对象或者数组
            this.$store.commit("reduce", {a:1,b:3})
        },
        addCar(){
            this.ballFlag = !this.ballFlag;

            var goods_info ={
                id: 1,
                count: this.selectedCount,
                price: this.goods_info.price,
                selected: true
            }

            //调用vuex 里面的方法
            this.$store.commit("addToCar",goods_info)
            
        }
    }
    ,
    mounted(){

    }
}
</script>

<style scoped>
.shopCar{
    height:100vh;
}
h3{margin-top: 50px; }
.mint-button{line-height: 41px; }
</style>
