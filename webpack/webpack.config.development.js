/* eslint-disable */

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin');
const common = require('./webpack.common.js');
const path = require('path');
const merge = require('webpack-merge');
const settings = require('./webpack.settings.js');
const combineLoaders = require('webpack-combine-loaders');

const extractTextPluginConfig = new ExtractTextPlugin('[name].bundle.css');
const extractVendorsTextPluginConfig = new ExtractTextPlugin('vendors.bundle.css');
const copyWebpackPluginConfig = new CopyWebpackPlugin([{
    from: 'assets',
    to: 'assets',
}]);


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
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000',
        }, {
            test: /\.jpg$/,
            loader: 'file-loader',
        }]
    },
    plugins: [
        extractTextPluginConfig,
        extractVendorsTextPluginConfig,
        copyWebpackPluginConfig,
    ]
};

module.exports = merge(common, config);