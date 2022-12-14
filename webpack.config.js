const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const BundleAnalyzerPlugin =
    require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isDev = process.env.NODE_ENV === 'development';
const withReport = process.env.npm_config_withReport;

module.exports = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
        filename: '[name].bundle.[chunkhash].js',
        path: path.resolve(__dirname, './build'),
    },

    resolve: {
        extensions: ['.jsx', '.js', '.tsx', '.ts', '.scss', '.jpg', '.png', '.svg'],
    },

    devtool:
        process.env.NODE_ENV === 'production'
            ? 'hidden-source-map'
            : 'eval-source-map',
    devServer: {
        compress: true,
        port: 8000,
        client: {
            logging: 'info',
        },
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.s?css?$/i,
                exclude: /\.module\.s?css$/i,
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'icss',
                                localIdentName: '[name]___[hash:base64:5]',
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.module\.s?css$/,
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]___[hash:base64:5]',
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'static/[hash][ext]',
                },
            },
        ],
    },
    optimization: {
        minimizer: ['...', new CssMinimizerPlugin()],
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html',
        }),
        ...(isDev
            ? [new MiniCssExtractPlugin()]
            : [
                new MiniCssExtractPlugin({
                    filename: '[name].[contenthash].css',
                    chunkFilename: '[name].[contenthash].css',
                }),
            ]),
        ...(withReport ? new BundleAnalyzerPlugin() : ''),
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      src: path.resolve(__dirname, 'src'),
    },
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
  },
};