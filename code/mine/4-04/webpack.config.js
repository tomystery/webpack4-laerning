let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let webpack = require('webpack')
//模块 happypack 可以实现多线程打包 进程
let Happypack = require('happypack')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        port: 3000,
        open: true,
        contentBase: './dist' //打包后的结果放到dist目录下

    },
    module: {
        noParse: /jquery/, //不去解析jquery中的依赖库

        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve('src'),
                use: 'Happypack/loader?id=js' //标志一下不只是js要多线程，可能css也要多线程,
            },
            {
                test: /\.css$/,
                use: 'Happypack/loader?id=css'
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new Happypack({
            id: 'css',
            use: ['style-loader', 'css-loader']

        }),
        new Happypack({
            id: 'js',
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ]
                }
            }]
        }),
        /*  new webpack.DllReferencePlugin({
             manifest:path.resolve(__dirname,'dist','manifest.json') //这样就会先查找manifest文件。
         }), */
        new webpack.IgnorePlugin(/\.\/locale/, /moment/), //从moment中如果引入.local那么就把他全部忽略掉
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}