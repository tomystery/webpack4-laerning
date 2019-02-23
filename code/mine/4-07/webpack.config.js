let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let webpack = require('webpack')

module.exports = {
    // mode: 'development',
    mode:'production',
    entry: {
       index: './src/index.js',
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