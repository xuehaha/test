<template>
  <div class="demo">
      <div class="info-text">
          Less 引入
      </div>
      <!-- 测试sass和less -->
  </div>
</template>

<script>
export default {
    name:"Test",
    data(){
        return{

        }
    }
}
</script>

<style lang="less" scoped>
@import "../components/common/css/normalize.css";
@import "../components/common/css/test.css";
    .demo{
        height: 100px;
        background: darkcyan;
        line-height: 100px;
        .info-text{
            height: 100px;
            font-size: 33px;
        }
    }
</style>