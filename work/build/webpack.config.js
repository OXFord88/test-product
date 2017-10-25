/**
 * @file webpack config
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const IS_DEV = process.env.NODE_ENV !== 'production';

const extractTextPlugin = new ExtractTextPlugin({
    filename: 'static/[name].[hash:7].css',
    disable: IS_DEV
});

module.exports = {
    entry: {
        app: ['./src/main.js']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: IS_DEV ? '/' : '/ipl_monitor/',
        filename: 'static/[name].[hash:7].js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: extractTextPlugin.extract({
                        use: [{
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                                // minimize: true
                            }
                        }],
                        fallback: 'vue-style-loader'
                    }),
                    less: extractTextPlugin.extract({
                        use: [{
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                importLoaders: 1
                            }
                        }, {
                            loader: 'less-loader',
                            options: {
                                sourceMap: true
                            }
                        }],
                        fallback: 'vue-style-loader'
                    })
                }
                // other vue-loader options go here
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(css|less)$/,
            use: extractTextPlugin.extract({
                use: ['css-loader', 'less-loader', 'postcss-loader'],
                fallback: 'style-loader'
            })
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 3000,
                name: 'static/img/[name].[hash:7].[ext]'
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 3000,
                name: 'static/fonts/[name].[hash:7].[ext]'
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true
        }),
        extractTextPlugin,
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [require('postcss-cssnext')()]
            },
            vue: {
                postcss: [require('postcss-cssnext')()]
            }
        })
    ],
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            vue$: 'vue/dist/vue.esm.js'
        }
    },
    performance: {
        hints: false
    },
    devtool: '#inline-source-map'
};
// production
if (!IS_DEV) {
    module.exports.devtool = '#source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || [])
        .concat([
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                compress: {
                    warnings: false
                }
            })
        ]);
}
