import Toast from "./Toast.vue"

const obj = {};

obj.install = function (Vue) {
    // 1. 创建组件构造器
    const toastConstrustor = Vue.extend(Toast)
    // 2.根据组件构造器创建组件对象
    const toast = new toastConstrustor();
    // 3将组件对象手动挂载到某一个元素上
    toast.$mount(document.createElement("div"))
    // 4. toast.$el对应就是div
    document.body.appendChild(toast.$el);
    Vue.prototype.$tt = toast
}

export default obj;