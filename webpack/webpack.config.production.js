/* eslint-disable */

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const combineLoaders = require('webpack-combine-loaders');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const webpack = require('webpack');

const copyWebpackPluginConfig = new CopyWebpackPlugin([{
    from: 'assets',
    to: 'assets',
}]);
const extractTextPluginConfig = new ExtractTextPlugin('[name].bundle.css');


let config = {
    devtool: 'hidden-source-map',
    module: {
        loaders: [{
            test: /\.(css|scss)$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            modules: true,
                            localIndentName: '[name]__[local]___[hash:base64:5]',
                            importLoaders: 3,
                            sourceMap: true,
                        },
                    }, {
                        loader: 'sass-loader',
                    },
                ]}
            )
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000',
        }, {
            test: /\.jpg$/,
            loader: 'file-loader',
        }],
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
        copyWebpackPluginConfig
    ],
};

module.exports = merge(common, config);