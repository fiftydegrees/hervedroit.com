/* eslint-disable */

const settings = require('./webpack.settings.js');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

/*
 * Plugins setup
*/

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: `${settings.workingDirectory}/index.html`,
    filename: './index.html',
    inject: 'body',
});

/* End of Plugins setup */

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
            test: /\.css$/,
            loader: 'style-loader',
        }, {
            test: /\.css$/,
            loader: 'css-loader',
            query: {
                modules: true,
                localIndentName: '[name]__[local]___[hash:base64:5]',
            }
        }, {
            test: /\.jsx?$/,
            include: settings.workingDirectory,
            loader: 'eslint-loader',
        }],
    },
    plugins: [
        HTMLWebpackPluginConfig
    ],
};

module.exports = config;
