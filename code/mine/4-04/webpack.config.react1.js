let path=require('path');
let webpack =require('webpack');

module.exports={
    mode:'development',
    entry:{
       react:['react','react-dom'],
    },
    output:{
        filename:'_dll_[name].js',//产生的文件名
        path:path.resolve(__dirname,'dist'),
        library:'_dll_[name]',//_dll_react
        // libraryTarget:'var' //默认是var
    },
    plugins:[
        //动态链接库
        new webpack.DllPlugin({
            name:'_dll_[name]',
            path:path.resolve(__dirname,'dist','manifest.json') //在dist目录下就能打包出.dll_react.js,manifest.json
        })

    ]
}