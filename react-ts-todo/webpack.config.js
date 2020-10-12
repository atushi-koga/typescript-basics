const path = require('path');

module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: 'development', // "production" | "development" | "none"

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: './src/index.ts',

    output: {
        path: path.resolve(__dirname, "dist"),  // ビルドしたファイルの出力先パス
        filename: "index.js",                   // ビルドしたファイルのファイル名
        publicPath: path.resolve(__dirname, "dist") // ブラウザで参照する際の出力ディレクトリの公開URLを指定する。オンデマンドロードを使用したり、画像やファイルなどの外部リソースをロードしたりする場合など。
    },

    module: {
        rules: [{
            // 拡張子 .ts の場合、TypeScript をコンパイルする(node_modules配下は除く)
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    // import 文で .ts ファイルを解決するため
    resolve: {
        modules: [
            "node_modules", // node_modules 内も対象とする
        ],
        // import文に渡された拡張子無しのパスに対して、'.ts','.js'ファイルを探しに行く
        extensions: [
            '.ts',
            '.js' // node_modulesのライブラリ読み込みに必要
        ]
    },
    devServer: {
        contentBase: './',    // 公開するリソースのドキュメントルート
    }
};
