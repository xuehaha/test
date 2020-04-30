<template>
  <div class="container">
    <div class="upBox rounded mt-5" ref="upBox" @click="to_upload">
      <img :src="imgUrl" alt="" ref="userImg" width="100%" height="100%" v-if="imgUrl">
      <div class="text-center d-block" v-else="!imgUrl">
        <div class="bg-primary icon mx-auto img_box">+</div>
      </div>
      <input type="file" ref="file_input" class="file_input" @change="upSave($event)" id="fileUpload">
    </div>
    <div class="my-4">上传图片的大小格式限制等</div>
    <div class="my-4">v-for的优先级要比v-if高</div>
  </div>
</template>
<script>
  export default {
    name: 'Upload',
    data() {
      return {
        imgUrl: ""
      }
    },
    methods: {
      alert1(e) {
        var _this = this;
        console.log(this)
        console.log(_this.$refs.file_input)
      },
      to_upload() {
        console.log(this)
        this.$refs.file_input.click();
      },
      upSave(e) {
        console.log(e.target.files[0]);
        this.imgUrl = e.target.files[0];

        var reader = new FileReader(); //调用FileReader
        reader.readAsDataURL(e.target.files[0]); //将文件读取为 DataURL(base64)
        reader.onload = () => {
          //读取操作完成时触发。
          this.$refs.userImg.src = reader.result;
        };
      }
    }
  }

</script>

<style scoped>
    .mt-30{
        margin-top:30px;
    }
  .upBox {
    height: 200px;
    width: 300px;
    background: #ccc;
    position: relative;
  }

  .file_input {
    visibility: hidden;
  }

  .img_box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }

  .icon {
    height: 50px;
    width: 50px;
    line-height: 50px;
    font-size: 29px;
    font-weight: bold;
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
  }
</style>