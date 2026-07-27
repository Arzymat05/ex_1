import webpack from "webpack";
import {BuildOption} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders({isDev}: BuildOption): webpack.RuleSetRule[] {

    const svgLoaders = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    }

    const babelLoaders = {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [
                    "@babel/preset-env",
                    "@babel/preset-react",
                    "@babel/preset-typescript"
                ]
            }
        }
    }
    const scssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules:
                        {
                            auto: ((resPath: string) => Boolean(resPath.includes(".module."))),
                            localIdentName: isDev ? "[path]-[name]__[local]___[hash:base64:5]" : "[hash:base64:8]",
                            namedExport: false
                        }
                    ,
                }
            },
            "sass-loader",
        ],
    }


    const tsLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    }
    const fileLoaders = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    return [
        tsLoader,
        scssLoaders,
        svgLoaders,
        babelLoaders,
        fileLoaders
    ]
}