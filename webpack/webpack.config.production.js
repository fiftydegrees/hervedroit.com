/* eslint-disable */

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const combineLoaders = require('webpack-combine-loaders');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const webpack = require('webpack');

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
        new ExtractTextPlugin('styles.css')
    ],
};

module.exports = merge(common, config);