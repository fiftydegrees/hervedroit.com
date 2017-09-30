/* eslint-disable */

const settings = require('./webpack.settings.js');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

let config = {
    context: settings.workingDirectory,
    entry: './index.jsx',
    output: {
        filename: 'index.js',
        path: settings.buildDirectory,
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.json'
        ],
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: [
                'babel-loader'
            ],
        }, {
            test: /\.jsx?$/,
            include: settings.workingDirectory,
            loader: 'eslint-loader',
        }],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: `${settings.workingDirectory}/index.html`,
            filename: './index.html',
            inject: 'body',
        })
    ],
};

module.exports = config;
