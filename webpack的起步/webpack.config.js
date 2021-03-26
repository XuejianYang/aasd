//动态获取main.js的绝对路径
const path =require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')

//通过commonjs导出
 module.exports = {
    entry :'./src/main.js',
    output: {
        path :path.resolve(__dirname,'dist'),
        filename:'bundle.js',
      /*  publicPath: 'dist/'*/
    },
     module:{
     rules: [
         {
             test: /\.css$/,
             //css-loader只负责将css文件进行加载
             //style-loader负责将样式添加到DOM中
             //使用多个loader时是从左向右
             use: [ 'style-loader','css-loader' ]
         },
         {
             test: /\.less$/,
             use: [{
                 loader: "style-loader" // creates style nodes from JS strings
             }, {
                 loader: "css-loader" // translates CSS into CommonJS
             }, {
                 loader: "less-loader" // compiles Less to CSS
             }]
         },
         {
             test: /\.(png|jpg|gif|jpeg)$/,
             use: [
                 {
                     loader: 'url-loader',
                     options: {
                         limit: 8192,
                         name: 'img/[name].[hash:8].[ext]'
                     },
                 }
             ]
         },
         {
             test: /\.js$/,
             exclude: /(node_modules|bower_components)/,
             use: {
                 loader: 'babel-loader',
                 options: {
                     presets: ['es2015']
                 }
             }
         },
         {
             test: /\.vue$/,
             use: ['vue-loader']

         }
     ]
 },
 resolve:{
        extensions:['.js','.css','.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
 },
     plugins:[
         new HtmlWebpackPlugin({
             template:'index.html'
         })
     ]
}
