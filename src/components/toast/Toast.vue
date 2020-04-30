<template>
  <div class="dialog" v-show="isShow">
        <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data(){
      return {
          msg:"",
          isShow:false
      }
  },
    methods:{
        show(message,duration){
            this.isShow = true;
            this.msg = message;

            setTimeout(()=>{
                this.isShow = false;
                this.msg = "";
            },duration)
        }
    }
};
</script>
<style scoped>
    .dialog{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        background:#666;
        transtion:all 0.5s;
    }
</style>
