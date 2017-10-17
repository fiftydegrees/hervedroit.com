/* eslint-disable */

const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const settings = require('./webpack.settings.js');
const webpack = require('webpack');

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
            loaders: ['eslint-loader'],
            include: settings.workingDirectory,
        }, {
            test: /\.jsx?$/,
            loaders: ['eslint-loader'],
            include: path.join(__dirname, '../app/'),
        }],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: `${settings.workingDirectory}/index.html`,
            filename: './index.html',
            inject: 'body',
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            jquery: 'jquery',
            $: 'jquery',
        })
    ],
};

module.exports = config;
