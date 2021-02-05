const path = require('path'),
    VueLoaderPlugin = require('vue-loader/lib/plugin'),
    HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/entry/index.js',
    module: {
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                //匹配哪些文件
                test:/\.css$/,

                //使用哪些loader进行处理
                use:[
                    //use数组中loader执行顺序：从右到左，从上到下 依次执行(所以，先执行css-loader,再执行style-loader)

                    //创建style标签，将js中的样式资源插入进来，添加到head中生效
                    'style-loader',

                    //将css文件变成commonjs模块加载js中， 里面内容是样式字符串
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',

                    //将less文件编译成css文件
                    //需要下载less-loader 和less
                    'less-loader'
                ]
            },
            {
                test: /\.(sa|sc)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5000,
                            name: 'imgs/[name].[ext]'
                        }
                    }
                ]
            },
            //让url-loader能够处理img标签图片
            {
                test: /\.html$/,
                loader: 'html-loader'
            },

            //处理其他文件
            {
                exclude: /\.(png|jpeg|jpg|gif|html|css|less|js|vue|sass|scss)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'other'
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html')
        })
    ]
};
