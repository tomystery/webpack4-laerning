
let {smart} =require('webpack-merge')
let base =require('./webpack.base.js')
module.exports = smart(base,{
    mode:'development',
    devtool: 'source-map',
    devServer: {
        port: 8088,
        inline: true,
        proxy : {
            '**/*.do' : {
                target: 'http://test.happymmall.com',
                changeOrigin : true
            }
        }
    }
}) 