//webpack是node写出来的 node写法
let path=require('path')
let htmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    devServer:{ //开发服务器的配置
        port:3000,
        progress:true, //看到进度条
        open:true,//自动打开浏览器
        compress:true,//启动gzip压缩
        contentBase:'./build' //能够找到我们这个build的文件夹，静态文件 ./build作为我们的静态服务

    },
    mode:'production',//模式 默认两种 production development
    entry:'./src/index.js',//入口
    output:{
        filename:'bundle.[hash:8].js', //打包后的文件名,每次更改的时候都能打包出一个新的文件出来
        path:path.resolve(__dirname,'build') //路径必须是一个绝对路径
    },
    plugins:[ 
        new htmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            minify:{
                removeAttributeQuotes:true, //删掉引号
                collapseWhitespace:true,//删掉空格，变成一行
            },
            hash:true //加上hash戳
        })
    ]
}