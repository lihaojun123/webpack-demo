/*
 * @Author: lichangjun 
 * @Date: 2018-07-21 22:23:39 
 * @Last Modified by: lichangjun
 * @Last Modified time: 2019-01-08 19:38:56
 */
const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");//单独打包css插件
const CopyWebpackPlugin = require("copy-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: {
        "index": "./src/pages/index/index.ts",
        "react": "./src/pages/react/index.js",
        "vuedemo": "./src/pages/vue/index.js"
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
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
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
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            "@": path.resolve(__dirname, 'src/')
        }
    },
    plugins: [
        //打包css
        new ExtractTextPlugin("css/[name].css"),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src/plugins'),
                to: path.resolve(__dirname, 'dist/plugins')
            }
        ]),
        new htmlWebpackPlugin({
            template: "./src/views/index.html",
            filename: "views/index.html",
            hash: true,
            inject: true,
            chunks: ['index']
        }),
        new htmlWebpackPlugin({
            template: "./src/views/react.html",
            filename: "views/react.html",
            hash: true,
            inject: true,
            chunks: ['react']
        }),
        new htmlWebpackPlugin({
            template: "./src/views/vuedemo.html",
            filename: "views/vuedemo.html",
            hash: true,
            inject: true,
            chunks: ['vuedemo']
        })
    ],
    stats: {
        colors: true
    },
    performance: {
        hints: "error",
        maxEntrypointSize: 250000,
        maxAssetSize: 250000
    }
}