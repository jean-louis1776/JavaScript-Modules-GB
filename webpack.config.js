const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { extendDefaultPlugins } = require('svgo');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'src/assets/images'),
                to: path.resolve(__dirname, 'dist', 'assets/images')
            }]
        }),
        new ImageMinimizerPlugin ({
            minimizerOptions: {
                plugins: [
                  ["gifsicle", { interlaced: true }],
                  ["jpegtran", { progressive: true }],
                  ["optipng", { optimizationLevel: 5 }],
                ],
              }
        }),
        new CompressionWebpackPlugin ({
          algorithm: "gzip",
          compressionOptions: { level: 1 },
        })

    ],
    module: {
        rules: [{
                test: /\.(scss)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']

            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: "asset",
              },
              {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                  {
                    loader: ImageMinimizerPlugin.loader,
                    options: {
                      severityError: "warning",
                      minimizerOptions: {
                        plugins: ["gifsicle"],
                      },
                    },
                  },
                ],
              },
              {
                  test: /\.(mp3|wav|wma)$/i,
                  use: ['file-loader']
              },
              {
                test: /\.(mp4|avi|mow)$/i,
                use: ['file-loader']
            },
        ]
    },
    devServer: {
        port: 8080,
        static: './dist',
        hot: true
    }
}