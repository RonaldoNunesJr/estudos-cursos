const webpack = require("webpack");

module.exports = {
    entry: "./ex/index.jsx",
    output: {
        path: __dirname + "/public",
        filename: "./bundle.js"
    },
    devServer: {
        port: 8080,
        contentBase: "./public"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders : [{
            test: /.js[x]?$/,
            loader: "babel-loader",
            exclude: /node_module/,
            query : {
                presets: ["es2015", "react"],
                plugins: ['transform-object-rest-spread']
            }
        }]
    }
}

