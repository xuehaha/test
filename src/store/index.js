// 使用vuex     vuex模块
import Vue from 'vue'

import Vuex from 'vuex'
Vue.use(Vuex)


var car = JSON.parse(localStorage.getItem("car") || "[]");

export default new Vuex.Store({
    state: {
        count: 0,  //vuex内部想要访问vuex内部的变量要通过this.$store.state.count 来获取
        Val: 1,
        car: car
    },
    mutations: {
        // 如果想要改变 state 的值，必须要通过mutations 来操作，不能直接在组件内操作，可能会导致数据混乱
        // 组件内部想要调用mutations里面的方法必须通过 this.$store.commit("方法名")来调用
        /**  mutations 里面的函数最多传两个参数 第一个为方法名后面可以为数组或者对象*/
        increment(state) {
            state.count++
        },
        reduce(state, obj) {
            if (state.count != 0) {
                state.count -= (obj.a + obj.b)
            }
        },
        addToCar(state, goods_info) {
            console.log(1)
            //默认没有商品
            var flag = false;
            // 如果有商品值增加数量，否则push到数组里面去
            state.car.some(item => {
                if (item.id == goods_info.id) {
                    item.count += parseInt(goods_info.count);
                    flag = true;
                    return true;
                }
            })
            //没有商品增加商品
            if (flag == false) {
                state.car.push(goods_info);
            }
            localStorage.setItem("car", JSON.stringify(state.car))
        },
        testVal(state) {
            state.Val++;
        }
    },
    getters: {
        // 可以获取state里面的值
        //注意：  这里的getters 只负责*****往外****提供数据，类似于computed计算属性的工作.，不负责修改数据。如果想修改数据请在mutation里面修改。
        optCount: function (state) {
            return "当前最新值：" + state.count;
        },
        getAllCount(state) {
            var c = 0;
            state.car.forEach((item) => {
                c += item.count
            })
            return c
        }
    }
})
