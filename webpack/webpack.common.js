const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, '..', 'src/index.tsx'),
    },
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '/',
        filename: '[name].[contenthash].js',
        assetModuleFilename: '[name][ext]',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(svg|jpg|jpeg|png|ico|pdf)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(ts|js)x?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '..', 'src/index.html'),
            title: 'Connor Barker',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '..', 'src/assets'),
                    to: 'assets',
                },
            ],
        }),
    ],
};
