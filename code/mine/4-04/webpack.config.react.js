let path=require('path');

module.exports={
    mode:'development',
    entry:{
        test:'./src/test.js',
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist'),
        library:'ab', //加上名字
        libraryTarget:'commonjs' //var this commonjs umd
    }
} 