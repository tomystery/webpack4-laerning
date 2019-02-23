let path =require('path')
let HtmlWebpackPlugin =require('html-webpack-plugin')
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
    watchOptions:{ //监控的选项
        poll:1000,//每秒问1000次
        aggreatment:500, //防抖 我一直输入代码
        ignored:/node_modules/ //不需要进行监控的文件
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'index.html'
        })
    ]
}