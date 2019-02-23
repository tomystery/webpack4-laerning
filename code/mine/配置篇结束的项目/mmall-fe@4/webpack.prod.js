let {smart} =require('webpack-merge')
let base =require('./webpack.base.js')
// var PurifyWebpack = require('purifycss-webpack') //实现tree shaking的
var CleanWebpackPlugin = require('clean-webpack-plugin')
let OptimizeCss = require('optimize-css-assets-webpack-plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var path = require('path')


var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin


module.exports = smart(base,{
    mode:'production',
    devtool:'eval-source-map',
    optimization:{
        minimizer:[
            new UglifyJsPlugin({ //js打包压缩
              cache: true,
              parallel: true,
              sourceMap: true 
            }),
            new OptimizeCss() //css打包压缩 
          ],
        splitChunks:{
            cacheGroups:{
                common:{
                    name:'common',
                    chunks:'initial',
                    minSize:0,
                    minChunks:2,
                }
            }
        }
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new CleanWebpackPlugin(path.resolve(__dirname, 'dist')),
    ]
})