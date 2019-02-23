let path =require('path')
let webpack =require('webpack')
let HtmlWebpackPlugin =require('html-webpack-plugin')
let CleanWebpackPlugin =require('clean-webpack-plugin')
let CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports={
    //多入口
    // mode:'development',
    mode:'production',
    entry:{
        home:'./src/index.js'
    },

   
    devtool:'source-map',

 
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
    watch:true,
    watchOptions:{ // 监控的选项
        poll:1000, // 每秒 问我 1000次
        aggregateTimeout:500, // 防抖 我一直输入代码 
        ignored:/node_modules/ // 不需要进行监控哪个文件
      },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'index.html'
        }),
        new CleanWebpackPlugin('./dist'),
        new CopyWebpackPlugin([
            {from:'./doc',to:'./'}
        ]),
        new webpack.BannerPlugin('make 2019 by jw') //这个就会被插入到每个打包结果的头部

        
    ]
}