<template>
    <div class="container-flud">
        <ul class="float-left">
            <li v-for="(item,index) in items" v-text="item" @click="clk(index)" :key="index"></li>
        </ul>
        <div v-for="(item,index) in arry" :key="index" v-show="index === flg ? true : false"   class="float-left right_box ml-5">{{item.txt}}</div>
        <div>{{dtime | special}}</div>
        <div>{{dataStr | ellipsis}}</div>
        <div>{{dataNum | NumberFormat}}</div>

        <div class="title">
            <div v-for="(item, index) in titleArr" :key="index" @click="toPosition">
                {{item}}    
            </div>
        </div>
        <div class="goods" ref="goods">
        </div>
        <div class="params" ref="params">
        </div> 
        <div class="pic" ref="pic">
        </div>  
    </div>
</template>

<script>
import filter from "../common/filter"
export default {
  name:'tabs',
  data(){
    return {
       //初始化显示第1个div里面的内容
        flg:0,
        cur:'li_current tab_li',
        //items是从后台获取到的li内容
        items:["标签1","标签2","标签3"],
        // arry是从后台获取到的div中要显示的内容
        arry:[
            {"txt":"aaaaaa"},
            {"txt":"bbbbb"},
            {"txt":"ccccc"}
        ],
        dtime:"2018-1-1 10:00:00",
        dataStr:"1231d2f31a31f3s",
        dataNum:12313123123132132,
        titleArr:["商品","参数","图片"]
    }

  },
  mounted(){
        // 点击事件不能时时监听scroll
        // window.addEventListener('scroll', this.toPosition);
  },
  methods:{
    clk(idx){
            if(idx !== 0){
                this.cur = 'tab_li';
            }else{
                // 点击的第几个li显示第几个div的内容,第几个li高亮显示
                this.cur = 'li_current tab_li';
            }
            this.flg = idx;
        },
    toPosition(){
        var goodsTop = this.$refs.goods.offsetTop;
        var paramsTop = this.$refs.params.offsetTop;
        var picTop = this.$refs.pic.offsetTop;
        window.scrollTo(0, paramsTop-40)
    }
  }
}
</script>

<style scoped>
.container{
  height:100vh;
}
ul{
    height:120px;
    background:skyblue;
}
ul li{
    height:40px;
    line-height:40px;
    width:100px;
}
.right_box{
    width:calc(100% - 200px);
    height:120px;
    background:skyblue;
}

.title{
    display: flex;
    background: #fff;
    height: 44px;
    line-height: 44px;
    text-align: center;
    position: fixed;
    width: 100%;
    top:0;
}
.title div{
    flex: 1;
}
.goods{
    height: 300px;
    background: chocolate;
}
.params{
    height: 400px;
    background:skyblue;
}
.pic{
    height: 600px;
    background: cornflowerblue;
}
</style>
