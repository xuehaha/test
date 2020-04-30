import axios from "axios"

export function request(config) {
    //后期开发如果在多个服务器上调用接口可是实例化多个instance，不同的名字即可


    const instance = axios.create({
        baseURL: "",
        timeout: 5000
    })

    instance.interceptors.request.use(function (config) {
        // console.log("config", config) //这里可以打印一下看看里面内容
        let token = sessionStorage.getItem("token"); //获取到从后端传来的token，然后存到session里面
        if (token) {
            config.headers["X-Access-Token"] = token;
        } else {
            // config.headers["X-Access-Token"] = token;
        }
        return config
    }, function (error) {
        return Promise.reject(error)
    })



    return instance(config)

    // 假如还有另外一个服务器上的接口只需要实例化另一个axios
    const instance2 = axios.create({
        baseURL: "",
        timeout: 5000
    })
    return instance2(config)

    //后期开发如果在多个服务器上调用接口可是实例化多个instance，不同的名字即可
    // return new Promise((resolve, reject) => {
    //     const instance = axios.create({
    //         baseURL: "",
    //         timeout: 5000
    //     })
    //     instance(config)
    //         .then(res => {
    //             // console.log(res)
    //             resolve(res)
    //         })
    //         .catch(err => {
    //             // console.log(err)
    //             reject(res)
    //         })
    // })
}