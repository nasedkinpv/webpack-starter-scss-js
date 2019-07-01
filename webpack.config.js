const path = require('path');

// the path(s) that should be cleaned
let pathToClean = [
    'dist/*.js',
    'dist/*.css',
    'dist/*.*.map'
]

// the clean options to use
let cleanOptions = {
    root: path.resolve(__dirname),
    exclude: [],
    verbose: true,
    dry: false,
    watch: true
}

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");



module.exports = {
    entry: {
        scripts: './src/js/main.js',
        styles: './src/scss/main.scss',
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:8].js',
    },
    plugins: [
        new CleanWebpackPlugin(pathToClean, cleanOptions),
        new HtmlWebpackPlugin({
            inject: true,
            hash: true,
            template: 'src/index.html',
            filename: 'index.html',
            showErrors: true
        }),
        new FixStyleOnlyEntriesPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash:8].css',
            hunkFilename: '[id].css'
        }),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./dist directory is being served
            host: 'localhost',
            port: 3000,
            server: {
                baseDir: ['dist']
            }
        }),
    ],
    devtool: 'source-map',
    module: {
        rules: [{
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {}
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                },
            }
        ]
    }
};