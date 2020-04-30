<template>
    <div>
        账号：<input type="text" v-model="email" placeholder="请输入账号..." class="ml-2"><br>
        密码：<input type="password" v-model="pass" placeholder="请输入密码..." class="ml-2">
        <mt-switch v-model="value" class="m-3">开/关</mt-switch>
        <button class="login " @click="login" >登录</button>
        
    </div>
</template>

<script>
import { Switch } from 'mint-ui';
export default {
  name:'Login',
    components:{

    },
  data(){
    return {
        role:1,
        value:true,
        email:"",
        pass:""
    }

  },
  methods:{
      login(){
        sessionStorage.setItem("role",this.role);
        this.$router.push("/home");
      }
  }
}
</script>

<style scoped>
input{
    width: calc(100% - 50px);
    margin:0 auto;
 }
 .login{
     width:calc(100% - 50px);
     margin:50px 25px 50px;
 }
</style>
