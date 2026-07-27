import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolve} from "./buildResolve";
import {BuildOption} from "./types/config";
import {buildDevServer} from "./buildDevServer";


export function buildWebpackConfig(options:BuildOption):webpack.Configuration {
    return {
        entry: options.paths.entry,

        output:{
            path: options.paths.output,
            filename: 'js/[name].[contenthash].js',
            chunkFilename: 'js/[name].[contenthash].js',
            clean:true
        },

        optimization: {
            splitChunks: {
                chunks: "all",
            },
            runtimeChunk: "single",
        },

        plugins:buildPlugins(options),

        module: {
            rules:buildLoaders(options),
        },

        resolve: buildResolve(options),

        mode:options.mode,

        devtool: options.isDev
            ? 'inline-source-map'
            : undefined,

        devServer:buildDevServer(options)
    }
}