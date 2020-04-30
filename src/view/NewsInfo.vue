<template>
    <div>
        <div class="say">
            <textarea name="" id="words" cols="20" rows="5" placeholder="请输入您的评论..."  v-model="msg"></textarea>
            <mt-button type="primary" @click="send()"> 发 表 </mt-button>
        </div>
        <div class="show">
            <div class="">

            </div>
        </div>
    </div>

</template>

<script>
import { Toast } from 'mint-ui';

export default {
    name:"NewsInfo",
    data(){
        return{
            info:[],
            msg:""
        }
    },

    mounted(){
    },

    methods:{
        send(){
            if(this.msg == ""){
                Toast({
                    message: '输入文字吧！',
                    position: 'middle',
                    duration: 2000
                });
            }
        }
    }
}
</script>

<style scoped>
textarea{width: calc(100% - 10px); margin: 5px; outline: none;  }
.mint-button{width: calc(100% - 10px );  line-height: 41px; margin:0 5px; }
</style>
