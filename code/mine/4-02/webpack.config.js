let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let webpack = require('webpack')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    module: {
        noParse:/jquery/,//不去解析jquery中的依赖库
        
        rules: [{
            test: /\.js$/,
            exclude:/node_modules/,
            include:path.resolve('src'),
            use: {
                loader: 'babel-loader',
                options: {
                    presets:[
                    '@babel/preset-env',
                    '@babel/preset-react'
                ]}
            }
        }]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.IgnorePlugin(/\.\/locale/,/moment/),//从moment中如果引入.local那么就把他全部忽略掉
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}