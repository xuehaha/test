<template>
  <div class="login">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username" class="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <div>
        <button :disabled="disabled" @click="sendcode" class="sendcode">{{btntxt}}</button>
      </div>
  </div>
</template>

<script>

export default {
 data() {
    return {
        disabled:false,
        time:5,
        btntxt:"发送验证码",
        username:"",
        password:""
    };
 },
 methods: {
    sendcode(){
        this.time=5;
        this.timer(); 
    },
    //发送手机验证码倒计时
    timer() {
        if (this.time > 0) {
            this.disabled=true;
            this.time--;
            this.btntxt=this.time+"秒";
            setTimeout(this.timer, 1000);
        } else{
            this.time=0;
            this.btntxt="发送验证码";
            this.disabled=false;
        }
    },
    }
}
</script>

<style scoped>
.login{
    width: calc(100% - 50px);
    height: 400px;
    border-radius: 10px;
    padding: 50px 0px;
}
input{
    margin-top: 14px;
}
button{
    width: 100px;
    height:50px;
    margin-top: 10px;
    float: right;
}
.login{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
select, textarea, input[type='text'], input[type='search'], input[type='password'], input[type='datetime'], input[type='datetime-local'], input[type='date'], input[type='month'], input[type='time'], input[type='week'], input[type='number'], input[type='email'], input[type='url'], input[type='tel'], input[type='color']{
    margin-bottom: 0px;
}
</style>