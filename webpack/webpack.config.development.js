/* eslint-disable */

const common = require('./webpack.common.js');
const merge = require('webpack-merge');

let config = {
    devServer: {
        historyApiFallback: true,
        contentBase: './',
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [],
    },
    plugins: [],
};

module.exports = merge(common, config);