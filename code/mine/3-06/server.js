//express  webpack内部集成了这么一个

let express=require('express');

let app=express();
let webpack =require('webpack');

//中间件 webpack-dev-middleware
let middle = require("webpack-dev-middleware");

let config =require('./webpack.config.js') //拿到webpack的config文件
let compiler = webpack(config) //处理后的文件

app.use(middle(compiler));

app.get('/user',(req,res) =>{
    res.json({name:"珠峰架构1"})
})

app.listen(3000)