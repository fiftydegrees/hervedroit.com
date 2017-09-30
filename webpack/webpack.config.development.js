/* eslint-disable */

const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const combineLoaders = require('webpack-combine-loaders');

let config = {
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        open: false,
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [{
            test: /\.css$/,
            loader: combineLoaders([{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                    query: {
                        modules: true,
                        localIndentName: '[name]__[local]___[hash:base64:5]'
                    }
                }
            ])
        }],
    },
    plugins: [],
};

module.exports = merge(common, config);