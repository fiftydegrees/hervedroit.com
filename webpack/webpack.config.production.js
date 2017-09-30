/* eslint-disable */

const common = require('./webpack.common.js');
const merge = require('webpack-merge');

let config = {
    devtool: 'hidden-source-map',
    module: {
        loaders: [],
    },
    plugins: [],
};

module.exports = merge(common, config);