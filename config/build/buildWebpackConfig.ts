import {BuildOptions} from "./types/config";
import webpack from "webpack";
import path from "path";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options:BuildOptions):webpack.Configuration {
    const {mode, paths} = options
    return {
        mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders()
        },
        devtool: 'inline-source-map',
        devServer: buildDevServer(options),
        resolve: buildResolvers(),
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true

        },
        plugins: buildPlugins(options),
    };
}