let path =require('path')
let HtmlWebpackPlugin =require('html-webpack-plugin')
module.exports={
    //多入口
    mode:'development',
    entry:{
        home:'./src/index.js',
        other:'./src/other.js'
    },
    output:{
     filename:'[name].js',
     path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'home.html',
            chunks:['home'] //放代码块，需要那个放那个
        }),
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'other.html',
            chunks:['other']
        })
    ]
}