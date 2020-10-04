const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.join(__dirname, "dist"),
        filename: "index.js",
        publicPath: "/dist"
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader'
        }]
    },
    resolve: {
        modules: [
            "node_modules", // node_modules 内も対象とする
        ],
        extensions: [
            '.ts',
            '.js' // node_modulesのライブラリ読み込みに必要
        ]
    },
    devServer: {
        contentBase: './',
        watchContentBase: true
    }
};