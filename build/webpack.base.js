const path = require('path'),
    VueLoaderPlugin = require('vue-loader/lib/plugin'),
    HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/entry/index.js',
    module: {
        rules:[
            /* {
             *     test: /\.js$/,
             *     loader: 'babel-loader',
             *     exclude: /node_modules/
             * }, */
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    // 预设：指示babel怎么样的兼容性处理
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                // 设置为按需加载
                                useBuiltIns: 'usage',

                                // 指定core-js版本
                                corejs: {
                                    version: 3
                                },

                                // 指定兼容性做到哪个版本浏览器
                                targets: {
                                    chrome: '60',
                                    firefox: '60',
                                    ie: '9',
                                    safari: '10',
                                    edge: '17'
                                }
                            }
                        ]
                    ]
                }
            }
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
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
