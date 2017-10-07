/* eslint-disable */

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const settings = require('./webpack.settings.js');
const combineLoaders = require('webpack-combine-loaders');

const extractTextPluginConfig = new ExtractTextPlugin('[name].bundle.css');
const extractVendorsTextPluginConfig = new ExtractTextPlugin('vendors.bundle.css');

let config = {
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        open: false,
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: combineLoaders([{
                loader: 'style-loader',
                options: {
                    sourceMap: true,
                },
            }, {
                loader: 'css-loader',
                options: {
                    importLoaders: true,
                    localIndentName: '[path]__[name]___[local]___[hash:base64:5]',
                    modules: true,
                },
            }, {
                loader: 'sass-loader',
            }]),
            include: `${settings.workingDirectory}/components`,
        }, {
            test: /\.scss$/,
            loader: combineLoaders([{
                loader: 'style-loader',
                options: {
                    sourceMap: true,
                },
            }, {
                loader: 'css-loader',
                options: {
                    importLoaders: true,
                    modules: true,
                },
            }, {
                loader: 'sass-loader',
            }]),
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000',
        }]
    },
    plugins: [
        extractTextPluginConfig,
        extractVendorsTextPluginConfig
    ],
    // module: {
    //     loaders: [{
    //         test: /\.css$/,
    //         loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
    //     }, {
    //         test: /\.scss$/,
    //         loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
    //     }]
    // },
    // plugins: [
    //     new ExtractTextPlugin('[name].css')
    // ],
};

module.exports = merge(common, config);