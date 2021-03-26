//使用commonjs的模块化规范依赖
const {add ,mul}=require('./js/mathUtils.js')
console.log(add(20.30));
console.log(mul(20.30));

//使用ES6规范依赖
import {name,age,height} from "./js/info";
console.log(name);
console.log(age);
console.log(height);

//3.依赖css文件
require('./css/normal.css')

 //package.json 中 webpack 命令 优先在本地找 见下面
//" build":"webpack"

//4,依赖less文件
require('./css/special.less')
document.writeln('<h2>你好啊 杨学剑</h2>')
//5使用vue开发
 import Vue from 'vue'
 //
import App from './vue/App.vue'
new Vue({
    el: '#app',
    template:'<App/>',
    components:{
        App
    }
    // data : {
    //     message: 'hello webpack'
    // }
})