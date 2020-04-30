<template>
  <div class="box">
       <!-- <h1>props传值的时候如果用 :key="变量名" 这是后里面传的值可以根据子组件里面定义使用，但是如果不用: 来传递，传给子组件的值的类型为String</h1> -->   
    <Header title="首页" :isLeft="true" btn_icon="fa"></Header>
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="http://01imgmini.eastday.com/mobile/20200430/20200430122830_347e37c78d44f05ae0934ba565292013_1_mwpm_03200403.jpg">  
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="http://01imgmini.eastday.com/mobile/20200430/20200430122830_347e37c78d44f05ae0934ba565292013_1_mwpm_03200403.jpg">  
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="http://01imgmini.eastday.com/mobile/20200430/20200430122830_347e37c78d44f05ae0934ba565292013_1_mwpm_03200403.jpg">  
        </mt-swipe-item>
    </mt-swipe>
    <div class="middle">
      <div class="icon_box">
        <span><router-link to="/tabs">tab切换/滚动</router-link></span>
        <span><router-link to="/propsparent">props传值</router-link></span>
      </div>
      <div class="icon_box">
        <span><router-link to="/upload">文件上传</router-link></span>
        <span><router-link to="/location">地区联动</router-link></span>
      </div>
      <div class="icon_box">
        <span><router-link to="/timmer">登录计时器</router-link></span>
        <span><router-link to="/debounce">防抖函数</router-link></span>
      </div>
      <div class="icon_box">
        <span><router-link to="/demo">test</router-link></span>
      </div>
    </div>

    <router-view></router-view>

    <div v-for="(item,index) in info_arr" :key="index" class="mt-3">
      <input type="radio" :id="'name'+index" v-model="picked" :value="item.name">
      <label :for="'name' + index">{{item.name}}</label>
    </div>

    <Toast1></Toast1>
    <button @click="showt">show Toast</button>
  </div>
</template>

<script>

import { Toast } from 'mint-ui'

//全局配置后只需引入这一个就够了
import { Swipe, SwipeItem } from 'mint-ui'

// import axios from "axios"
import {request} from "@/network/request"
import Header from "@/components/Header.vue"
import Toast1 from "@/components/toast/Toast.vue"

export default {
  name:'Home',
  components:{
    Header,Toast1
  },
  //在进入当前路由出发
  beforeRouteEnter: (to,from,next) =>{
				console.log("beforeRouteEnter Home message");
        next();
		},

  data(){
    return {
      picked:"",
      banner_arr:[],
      info_arr:[
        {name:"xhh", age: 20},
        {name:"xfy", age: 21},
        {name:"zmr", age: 22}
      ],
    }

  },
  created(){
    this.getBanner();
  },
  methods:{
    showt(){
      console.log(this.$tt);
      this.$tt.show("6666666666",1000);
    },
    getBanner(){
      request({
        url:"/api/index?type=top&key=f477f24efd0e1ae1fd8e6080b23afefd"
      }).then(res=>{
          console.log(res)
          if(res.error_code == 10012){
            return;
          }
          var json_obj =res.data;
          // console.log(json_obj.result.data)
          var data_arr = json_obj.result.data;
          for(var i=0; i< 4; i++){
            this.banner_arr.push(data_arr[i].thumbnail_pic_s)
          }
      }).catch(err=>{
        console.log(err)
      })
      // axios.get("/api/index?type=top&key=f477f24efd0e1ae1fd8e6080b23afefd")
      //   .then(result=>{
      //     console.log(result)
      //     var json_obj =result.data;
      //     // console.log(json_obj.result.data)

      //     var data_arr = json_obj.result.data;

      //     for(var i=0; i< 4; i++){
      //       this.banner_arr.push(data_arr[i].thumbnail_pic_s)
      //     }
      //   })
    },
    parent_event(val){
      alert(val)
    }
  }
}
</script>

<style scoped>


.mint-swipe{height: 200px; width: calc(100% - 0px);}
.mint-swipe img{height: 100%; width: 100%; }
.mint-swipe-item:nth-child(even) {background: orange}
.mint-swipe-item:nth-child(odd) {background: purple}

/* moddle  */
.middle>div{height: 50px; width: 100%; display: block; display: flex; margin-top: 5px; }

.icon_box span{display: block; flex: 1; height: 50px; width: 50px; border: 1px solid #ccc;  text-align: center; justify-content: space-around; margin: 0 5px; line-height:50px;}
.icon_box span:nth-child(odd){background: skyblue; }
.icon_box span:nth-child(even){background: orange; }

.mt-50{
  margin-top:50px;
}
</style>
