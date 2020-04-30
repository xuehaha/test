<template>
  <div class="box">
  <Header title="新闻" />
    <div class="list" v-for="(item,index) in info_arr" :key="index">
        <div class="l_img">
          <a @click="shwo_info(item.info_url)">
              <img :src="item.img" alt="">
          </a> 
          
        </div>
        <div class="r_info">
           <router-link to="/NewsInfo"> 
          
           <!-- <a @click="shwo_info(item.info_url)">  -->
            <span class="title">{{item.title}}</span>
            <span class="time"><span style="color:#999999">发布时间：{{item.time}}</span></span>
           <!-- </a>  -->
           </router-link> 
        </div>
    </div>
    </a>

  </div>
</template>

<script>
import Header from "../components/Header.vue"
export default {
  name:'NewsList',
  components:{
    Header
  },
  data(){
    return {
      obj:{},
      news_arr:[],
      info_arr:[],
      link:""
    }
  },  
  created(){
    this.getList();
  },
  methods:{
    getList(){
      this.$http.get("/api/index?type=top&key=f477f24efd0e1ae1fd8e6080b23afefd")
        .then(result=>{
          console.log(result)
          
          var json_obj = JSON.parse(result.bodyText);
          console.log(json_obj.result.data)

          var data_arr = json_obj.result.data;
          for(var i=0; i<data_arr.length; i++){
            // this.obj.title = data_arr[i].title;
            // this.obj.img = data_arr[i].thumbnail_pic_s;
            
            this.info_arr.push(
              {
                title:data_arr[i].title,
                info_url:data_arr[i].url,
                img : data_arr[i].thumbnail_pic_s,
                time : data_arr[i].date.substring(0,10)
              }
            )
          }
        })
    },
    shwo_info(e){
       window.location.href = e
    }
  }
}
</script>

<style scoped>
.box{padding-bottom: 60px; }
.list{width: calc(100% - 10px); margin:10px 5px; display: flex; height: 80px; border-bottom: 1px solid #f1f1f1;}

/*图片区域  */
.list .l_img{width: 120px; height: 80px;}
.l_img img{width: 100%; height: 100%; }


/* 文本区域  */
.list .r_info{width: calc(100% - 130px); float: left; height: 80px; }
 .r_info .title{display: block; height: 48px; overflow: hidden; line-height: 25px; text-overflow:ellipsis } 

.list .r_info span{display: block; float: right; padding-left: 5px; }

.list .r_info .time{display: block; float: right; font-size: 13px; margin-right: 10px; }
</style>
