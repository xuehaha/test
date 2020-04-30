<template>
    <div class="box">
        	<div class="mui-card" v-for="(item,index) in info_arr" :key="item.uniquekey">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <mt-switch></mt-switch>
                        <img :src="item.img" alt="">

                        <div class="info">
                            <h4>{{item.author_name}}</h4>
                            <p>
                              <span class="price">$ <span> 200</span></span>
                              <input type="button" value="-" class="lose">
                               <input type="text" v-model="num"> 
                              <input type="button" value="+" class="add">
                               <a href="#" @click.prevent="del(index)">删除</a>     
                            </p>
                        </div>

					</div>
				</div>
			</div>
    </div>
</template>

<script>

export default {
    name:"Search",
    data(){
        return{
            num:"1",
            obj:{},
            news_arr:[],
            info_arr:[]
        }
    },

    created(){
        this.getList();
    },
    methods:{
        getList(){


            var idArr = [];
            this.$store.state.car.forEach(item=>{
                idArr.push(item.id)
            })

            if(idArr.length <= 0){
                return false;
            }


            this.$http.get("/api/index?type=top&key=f477f24efd0e1ae1fd8e6080b23afefd")
            .then(result=>{
            console.log(result)
            
            var json_obj = JSON.parse(result.bodyText);
            console.log(json_obj.result.data)

            var data_arr = json_obj.result.data;
            for(var i=0; i<10; i++){
                // this.obj.title = data_arr[i].title;
                // this.obj.img = data_arr[i].thumbnail_pic_s;
                
                this.info_arr.push(
                {
                    author_name: data_arr[i].author_name,
                    uniquekey: data_arr[i].uniquekey,
                    img : data_arr[i].thumbnail_pic_s,
                }
                )
            }
            })
        },

        del(){
            alert(1)
        }
    }
}
</script>

<style scoped>
    .box{padding-bottom: 30px; }
    .mui-card{padding: 5px 0;}
    .mint-switch{float: left; display: block; width: 50px; margin: 10px  0 0 0; }

    img{height: 60px; width: 40px; line-height: 50px; float: left; margin: 0 5px; }

    .info{display: block; float: left; margin-left: 5px; width: calc(100% - 120px)}
    span{color: #f00;}
    .price{display:block; line-height: 20px; float: left; line-height: 33px; }
    input{display: block; float: left;  margin: 0 1px; color: #fff; }
    input[type="text"]{width:43px; height: 32px; color: #111}

    .add{background: #3f9bc0}
    .lose{background: #e13f3f}
    a{line-height: 33px; margin:0 10px; }

    h4{text-align: center; }
</style>
