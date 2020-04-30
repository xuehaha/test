<template>
  <div class="debouce">
      函数防抖用来防止在监听是发送过多无用请求
  </div>
</template>

<script>
import {debounce, b} from '@/components/common/common.js'
import {request} from "@/network/request"

export default {
    name:"Debounce",
    data(){
        return {

        }
    },
    mounted(){
        // window.addEventListener('scroll', debounce(this.getScroll,100));
        window.addEventListener('scroll', debounce(this.getScroll,200));
    },
    methods:{
        getScroll(){
            console.log("------防抖生效了-------");
            request({
                url:"/api/index?type=top&key=f477f24efd0e1ae1fd8e6080b23afefd"
            }).then(res=>{
                console.log(res)
            })

            b();
            
        }
    }
}
</script>

<style scoped>
.debouce{
    height: 2000px;
    width: 100%;
    background: #eeeeee;
}
</style>