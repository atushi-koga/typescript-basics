// webpackに記述するパスは絶対パス
const path = require('path');

module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: 'production', // "production" | "development" | "none"

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: './src/index.ts',

    output: {
        path: path.resolve(__dirname, "test"),  // ビルドしたファイルの出力先パス
        filename: "index.js"                   // ビルドしたファイルのファイル名
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/ // node_modules配下は探しに行かないようにする
            }
        ]
    },
    resolve: {
        // import文に渡された拡張子無しのパスに対して、'.ts','.js'ファイルを探しに行く
        extensions: ['.ts', '.js']
    }
};