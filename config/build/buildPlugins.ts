import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOption} from "./types/config";

export function buildPlugins(options:BuildOption):webpack.WebpackPluginInstance[] {

    return [

        new HtmlWebpackPlugin({
            template: options.paths.html
        }),

        new MiniCssExtractPlugin({
            filename: "css/[name]-[contenthash].css",
            chunkFilename: "css/[name]-[contenthash].css"
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(options.isDev),
        })
    ]

}