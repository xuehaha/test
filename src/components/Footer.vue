<template>
  <div class="box">
    <!-- <router-link to="/" exact> <img src="../../static/imgs/home.png"></router-link>
    <router-link to="/newslist" exact><img src="../../static/imgs/news.png"></router-link>
    <router-link to="/Test" exact><img src="../../static/imgs/car.png"></router-link>
    <router-link to="/search" exact><img src="../../static/imgs/search.png"></router-link> -->

    		<nav class="mui-bar mui-bar-tab">
          <router-link class="mui-tab-item" to="/home">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
          </router-link>
          <router-link class="mui-tab-item" to="/newslist">
            <span class="mui-icon mui-icon-contact"></span>
            <span class="mui-tab-label">新闻</span>
          </router-link>
          <router-link class="mui-tab-item" to="/Test">
            <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{$store.getters.getAllCount}}</span></span>
            <span class="mui-tab-label">购物车</span>
          </router-link>
          <router-link class="mui-tab-item" to="/search">
            <span class="mui-icon mui-icon-gear"></span>
            <span class="mui-tab-label">设置</span>
          </router-link>
		  </nav>
  </div>
</template>

<script>
export default {
    name:'Footer',
    
}
</script>

<style scoped>
    .box{height: 60px; width: 100%; display: flex; position: fixed; bottom: 0; }
    /* a{text-decoration: none; color: #333333; flex: 1; justify-content: space-around; text-align: center; background: #f6f6f6; line-height: 52px; display: block;}
    a:hover{color:#f00; } */
    img{ text-align: center; height: 30px; width: 30px; }
     
</style>
