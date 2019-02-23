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

    devServer:{
       // 3） 有服务端，不用代理来处理 能不能在服务端中启动webpack 端口用服务端端口，相当于前端和服务端启在同一个端口
       

       // 2）前端只想要单纯模拟数据
      /*  before(app){ //提供的方法，钩子,现在就相当于没有跨域了
        app.get('/user',(req,res)=>{
            res.json({name:'珠峰前端架构'})
        })
       } */


        // proxy:{//重写的方式 把请求代理daoexpress集成
        //     '/api':{
        //         target:'http://localhost:3000', //配置一个代理
        //         /* 都是/api，人家后端不一定就会这么做啊，那么可以这样，请求的时候api开头，转发的时候就去掉 */
        //         pathRewrite:{'/api':''}
        //     }
            
        // }
    },
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
       
        new webpack.BannerPlugin('make 2019 by jw') //这个就会被插入到每个打包结果的头部

        
    ]
}