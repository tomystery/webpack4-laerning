//webpack是node写出来的 node写法
let path=require('path')
let HtmlWebpackPlugin=require('html-webpack-plugin')
let MiniCssExtractPlugin=require('mini-css-extract-plugin')
let OptimizeCss=require('optimize-css-assets-webpack-plugin')
let UglifyJsPlugin=require('uglifyjs-webpack-plugin')
module.exports={
    optimization:{ //优化项
        minimizer:[
            new OptimizeCss(),
            new UglifyJsPlugin({
                cache:true,
                parallel:true,
                sourceMap:true //映射
            })
        ]
    },
    devServer:{ //开发服务器的配置
        port:3000,
        progress:true, //看到进度条
        open:true,//自动打开浏览器
        compress:true,//启动gzip压缩
        contentBase:'./build' //能够找到我们这个build的文件夹，静态文件 ./build作为我们的静态服务

    },
    // mode:'production',
    mode:'development',//模式 默认两种 production development
    entry:'./src/index.js',//入口
    output:{
        filename:'bundle.[hash:8].js', //打包后的文件名,每次更改的时候都能打包出一个新的文件出来
        path:path.resolve(__dirname,'build') //路径必须是一个绝对路径
    },
    plugins:[ 

        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'main.css'
        })

    ],
    module:{
     rules:[  //loader默认是从右到左，从下到上执行
        //  {
        //     test:/\.js$/,
        //     use:{
        //         loader:'eslint-loader',
        //         options:{
        //             enfore:'pre' //previous  在普通loader之前执行， post在普通loader之后执行
        //         }
        //     }

        //  },
        {
            test:/\.js$/,
            use:{
                loader:'babel-loader',
                options:{ //用babel-loader 需要把es6-es5
                    presets:[
                        '@babel/preset-env'
                    ],
                    "plugins": [
                        ["@babel/plugin-proposal-decorators", { "legacy": true }],
                        ["@babel/plugin-proposal-class-properties", { "loose" : true }],
                        "@babel/plugin-transform-runtime"
                      ]
                }
            },
            include:path.resolve(__dirname,'src'),
            exclude:/node_modules/    
        },
        {
            test:/\.css$/,
            use:[
                MiniCssExtractPlugin.loader, //css解析后，创建一个link标签，把他插入到页面当中去
                'css-loader',
                'postcss-loader',
            ]
        },
        {
            test:/\.less$/,
            use:[
                MiniCssExtractPlugin.loader,
                'css-loader',
                'less-loader',
                'postcss-loader',
            ]
        },

        //sass stylus node-sass sass-loader 
     ]  
    
}
}