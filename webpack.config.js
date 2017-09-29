/* eslint-disable */

const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const settings = {
    workingDirectory: `${__dirname}/app`,
};

/*
 * Plugins setup
*/

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: './index.html',
    inject: 'body',
});

/* End of Plugins setup */

var config = {
    context: settings.workingDirectory,
    entry: './index.jsx',
    devServer: {
        historyApiFallback: true,
        contentBase: './',
    },
    devtool: 'source-map',
    output: {
        filename: 'index.js',
        path: __dirname + '/dist',
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