<template>
    <div class="">
        <Header title="props" :isLeft="true" btn_icon="fa"></Header>
        <button class="m-2" @click="send_son">向子组件传值</button>
        <PropsSon :data="parent_val" @send_parent = "rec_son" :title="title1"></PropsSon>
    </div>
</template>

<script>
import PropsSon from "./PropsSon"
import Header from "../../components/Header.vue"
export default {
  name:'PropsParent',
  components:{PropsSon,Header},
  data(){
    return {
      parent_val:["苹果","橘子","菠萝"],
      title1:"111111"
    }

  },
  methods:{
    send_son(){
      // this.parent_val = this.parent_val.replace(1,"凤梨");
      this.parent_val.pop();
      this.title1 = 1 + ""
    },
    rec_son(val){
     this.parent_val = val
    }
  }
}
</script>

<style scoped>
.container{
  height:100vh;
}
</style>
