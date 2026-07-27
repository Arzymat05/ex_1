import {ResolveOptions} from 'webpack'
import {BuildOption} from "./types/config";

export function buildResolve(options:BuildOption):ResolveOptions {

    return  {
        extensions: [".tsx", ".ts", ".js"],
        preferAbsolute:true,
        modules:[options.paths.src, "node_modules"],
        mainFiles: ['index'],
        alias: {}
    }
}