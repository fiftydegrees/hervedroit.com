const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

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
    context: __dirname + '/app',
    entry: './index.jsx',
    devServer: {
        historyApiFallback: true,
        contentBase: './',
    },
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
        }],
    },
    plugins: [
        HTMLWebpackPluginConfig
    ],
};

module.exports = config;