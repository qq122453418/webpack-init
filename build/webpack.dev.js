const merge = require('webpack-merge'),
    common = require('./webpack.base'),
    rewrites = require('../rewrites.config.js'),
    path = require('path'),
    // apiMocker = require('webpack-api-mocker');

    module.exports = merge(common, {
        mode: 'development',
        devtool: 'inline-source-map',
        /* devServer: {
         *     contentBase: '../public',
         *     historyApiFallback: {
         *         rewrites
         *     },
         *     before: function(app) {
         *         apiMocker(app, path.resolve('public/mocker.js'));
         *     },
         *     port:8889,
         *     open: 'http://localhost:8889/',
         *     host:'0.0.0.0'
         * }, */
        output: {
            filename: 'js/[name].[hash:5].js',
            path: path.resolve(__dirname, '../dist')
        },
        devServer: {
            // 运行代码的目录
            contentBase: path.resolve(__dirname, 'dist'),
            // 监视 contentBase 目录下的所有文件，一旦文件变化就会reload
            watchContentBase: true,
            watchOptions: {
                //忽略文件
                ignored: /node_modules/
            }
            // 启动gzip压缩
            compress: true,
            //端口号
            port: 5000,
            //域名
            host: 'localhost',
            // 自动打开浏览器
            open: true,
            // 开启HMR功能
            hot: true,
            // 启动devServer时不要显示启动服务器日志信息
            clientLogLevel: 'none',
            // 除了一些基本启动信息以外，其他内容都不要显示
            quiet: true,
            // 如果出错了，不要全屏提示
            overlay: false
            // 服务器代理
            // 可以解决开发环境的跨域问题
            /* proxy: {
             *     'api': {
             *     // 一旦devServer(:5000)服务器接收到 /api/xxx 的请求，就会把请求转发到另外一个服务器(:3000)
             *         target: 'http://localhost:3000',
             *         // 发送请求时，请求路径重写：将 /api/xxx 转成 /xxx (去掉 /api)
             *         pathRewrite: {
             *             '^/api': ''
             *         }
             *     }
             * } */
        }
    });
