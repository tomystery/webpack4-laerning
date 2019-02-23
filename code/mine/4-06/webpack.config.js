let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let webpack = require('webpack')

module.exports = {
    // mode: 'development',
    optimization:{
        splitChunks:{//分割代码块
            cacheGroups:{//缓存组 我要缓存我的某些代码
                common:{//公共的模块 希望单独抽一个文件
                    chunks:'initial',//从那开始提取代码，从入口开始提取
                    minSize:0,//大于多少个字节需要抽离
                    minChunks:2,//引用多少次需要抽离
                },
                vendor:{
                    priority:1,//权重，
                    test:/node_modules/,//把你抽离出来
                    chunks:'initial',
                    minSize:0,
                    minChunks:2
                }
            }

        }
    },
    mode:'production',
    entry: {
       index: './src/index.js',
       other:'./src/other.js'
    },
    devServer: {
        port: 3000,
        open: true,
        contentBase: './dist' //打包后的结果放到dist目录下

    }, 
    module: {
        noParse: /jquery/, //不去解析jquery中的依赖库
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            include: path.resolve('src'),
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ],
                    plugins:[
                        '@babel/plugin-syntax-dynamic-import'
                      ]
                }
            }]
        }, 
    {
        test:/\.css$/,
        use:['style-loader','css-loader']
    }]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [ 
        new webpack.IgnorePlugin(/\.\/locale/, /moment/), //从moment中如果引入.local那么就把他全部忽略掉
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}