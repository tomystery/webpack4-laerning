let path =require('path')
let webpack =require('webpack')
let HtmlWebpackPlugin =require('html-webpack-plugin')
let CleanWebpackPlugin =require('clean-webpack-plugin')

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
               test:/\.css$/,
               use:['style-loader','css-loader'] 
            },
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
    resolve:{
        modules:[path.resolve('node_modules')],
        mainFields:['style','main'],
        // mainFiles:[],//入口文件的名字，如果没指定找的就是index.js
       /*  alias:{
            bootstrap:'bootstrap/dist/css/bootstrap.css'
        } */
        extensions:['.js','.css','.json']
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
       
        new webpack.BannerPlugin('make 2019 by jw') //这个就会被插入到每个打包结果的头部

        
    ]
}