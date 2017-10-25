/* eslint-disable */

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const combineLoaders = require('webpack-combine-loaders');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const webpack = require('webpack');

const extractTextPluginConfig = new ExtractTextPlugin('[name].bundle.css');
const extractVendorsTextPluginConfig = new ExtractTextPlugin('vendors.bundle.css');
const copyWebpackPluginConfig = new CopyWebpackPlugin([{
    from: 'assets',
    to: 'assets',
}]);

let config = {
    devtool: 'hidden-source-map',
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
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            },
        }),
        new UglifyJSPlugin({
            test: /\.jsx?$/,
        }),
        extractTextPluginConfig,
        extractVendorsTextPluginConfig,
        copyWebpackPluginConfig
    ],
};

module.exports = merge(common, config);