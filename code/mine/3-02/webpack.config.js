let path =require('path')
let HtmlWebpackPlugin =require('html-webpack-plugin')
module.exports={
    //多入口
    // mode:'development',
    mode:'production',
    entry:{
        home:'./src/index.js'
    },

    //1） 源码映射 会单独生成一个sourcemap文件,出错了会标示出错的列和行,大和全
    // devtool:'source-map',//增加映射文件，可以帮我们调试代码

    //2） 不会产生单独的文件 但是可以显示行和列
    devtool:"eval-source-map",

    //3) 不会产生列，但是是一个单独的映射文件
    // devtool:'cheap-module-source-map', //产生后你可以保留起来
    
    //4）不会产生文件，集成在打包后的文件中，不会产生列
    // devtool:"cheap-module-eval-source-map",
    output:{
     filename:'[name].js',
     path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'index.html'
        })
    ]
}