<template>
    <div>
        这是son页面的内容, 子组件里面想拿到父元素的值可以用watch来获取
        <ul>
            <li v-for="(item,index) in data" :key="index">{{item}}</li>
        </ul>
        <button @click="send_parent">子向父传值</button>
        <div>{{title}}</div>
    </div>
</template>

<script>

export default {
  name:'son',
  props:{
      data:Array,
      title:String
  },
  data(){
    return {
        son_arr:[1,2,3,4],

        son_title:""
    }

  },
  methods:{
    send_parent(){
          this.$emit("send_parent", this.son_arr);
    }
  },
  watch:{
      data(newVal,oldVal){
        // console.log("new = " + newVal)
        // console.log("old =" + oldVal)
      },
      title(newVal,oldVal){
        console.log(newVal)
        // console.log(this.son_title)
      }
  }

}
</script>

<style scoped>

</style>
