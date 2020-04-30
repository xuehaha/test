<template>
  <div id="app">
    <transition>
      <router-view class="view"></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>
<script>
// 子组件引入

import Footer from './components/Footer'
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    Footer
  }

}
</script>

<style>
  *{
    margin:0;
    padding:0
  }
  /* #app{
    max-width: 640px;
    min-width: 320px;
  } */
  /* .view{margin-top: 52px; } */

  /* 动画的必须加，点击切换页面时，移动效果，现在页面上定义transtion 然后 加上这两端代码  */
  /* 如果有上下移动不好的体验， position：absolute  */
  .v-enter,.v-leave{opacity: 0; transform: translateX(100%); }
  .v-enter-active, .v-leave-active{transition: all 0.5s ease;}
</style>
