/*
 * @Author: lichangjun 
 * @Date: 2018-07-21 22:23:39 
 * @Last Modified by: lichangjun
 * @Last Modified time: 2019-01-05 17:01:00
 */
const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");//单独打包css插件
const htmlWebpackPlugin=require("html-webpack-plugin");
module.exports = {
    entry: {
        "index": "./src/pages/index/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: "js/[name].js"
    },
    externals: {
        "jquery": "window.jQuery"
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ["@babel/preset-env"]
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader'
                    }]
                }) //单独打包loader对样式的处理
            }, {
                test: /\.(png|jpeg|jpg|gif|woff|svg|eot|ttf)\??.*$/,
                loader: "url-loader?limit=100&name=resource/[hash:8][name].[ext]"//图片的处理

            }
        ]
    },
    resolve: {//别名的配置
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        //打包css
        new ExtractTextPlugin("css/[name].css"),
        new htmlWebpackPlugin({
            template:"./src/views/index.html",
            filename:"views/index.html",
            hash:true,
            inject:true
        })
    ],
    stats:{
       colors:true
    },
    devServer:{
        contentBase:path.resolve("./dist/views/"),
        port:8080,
        open:true,
        inline:true,
        hot:true
    }
}