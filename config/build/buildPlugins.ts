import webpack, { WebpackPluginInstance } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins({
    paths,
    isDev,
    apiUrl,
    project,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        // new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
        isDev && new webpack.HotModuleReplacementPlugin(),
        isDev && new ReactRefreshWebpackPlugin({ overlay: false }),
        isDev && new BundleAnalyzerPlugin({ openAnalyzer: false }),
    ].filter(Boolean) as WebpackPluginInstance[];
}
