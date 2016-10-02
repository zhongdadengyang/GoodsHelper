var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var WebpackDevServer = require('webpack-dev-server');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
//var WebpackDevMiddleware = require("webpack-dev-middleware");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'js/[name].[hash].js'
    },
    plugins: [
        new CleanWebpackPlugin(['./build'], {
            verbose: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true
        }),
        new ExtractTextPlugin("[name].[hash].css"),
        // new webpack.optimize.OccurenceOrderPlugin(true),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: true,
        //     mangle: false
        // }),
        new CopyWebpackPlugin([{
            from: 'src/assets/images',
            to: './images'
        }])
    ],
    module: {
        preLoaders: [
            { test: /\.json$/, loader: "json-loader" }
        ],
        loaders: [{
            test: /\.(png|jpg|jpeg|gif)$/,
            loader: 'url?name=./assets/[name].[hash].[ext]'
        }, {
            test: /\.(woff(2)?|eot|ttf|svg)(\?[#a-z0-9=\.]+)?$/,
            loader: 'url-loader?name=./assets/[name].[hash].[ext]&limit=100000'
        }, {
            test: /\.html$/,
            loader: 'raw'
        }, {
            test: /\.css$|\.less$/,
            loader: ExtractTextPlugin.extract('style', 'css-loader?sourceMap')
        }]
    },
    node: {
        console: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};

var compiler = webpack(require('./webpack.config'));
var server = new WebpackDevServer(compiler, {
    contentBase: './build',
    hot: true,
    historyApiFallback: true,
    proxy: {
        '/web/*': {
            target: 'http://localhost:8080'
        }
    }
});
server.listen(8000, 'localhost', function() {
    console.log('Server is running');
});