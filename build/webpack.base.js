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
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',

                    // postcss-loader
                    // https://www.postcss.com.cn/
                    {
                        loader: 'postcss-loader',
                        options: { // 如果没有options这个选项将会报错 No PostCSS Config found
                            plugins: loader => [
                                require('autoprefixer')()
                            ]
                        }
                    },
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
