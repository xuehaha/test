<template>
  <div class="container">
    // 父子传值在router里面只能用父组件来显示，不然发送的事件接收不到
    // 传递多个事件只需要字啊后面依次添加
    <Location @confirm="receiveData"></Location>
  </div>
</template>
<script>
import Location from "./Location"

export default {
  name: 'ParentReceive',
  components:{
    Location
  },
  data(){
      return {
          
      }
  },
    methods: {
        receiveData(e){
            console.log(e)
            console.log("子组件向父组件传值success！")
        }
    }
}
</script>

<style scoped>
</style>
