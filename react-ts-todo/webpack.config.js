const path = require('path');

module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: 'development', // "production" | "development" | "none"

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: './src/index.tsx',

    output: {
        path: path.resolve(__dirname, "dist"),  // ビルドしたファイルの出力先パス
        filename: "index.js",                   // ビルドしたファイルのファイル名
        // ブラウザで参照する際の出力ディレクトリの公開URLを指定する。
        // ローカル環境だと相対パスで良いが、本番環境で画像などがCDN上にある場合はCDNのURLを記述する。
        publicPath: "/dist"
    },

    module: {
        rules: [{
            // 拡張子 .tsx の場合、TypeScript をコンパイルする(node_modules配下は除く)
            // TS と Reactを組み合わせる場合、基本的に .tsx のみを使うので、それだけを指定
            test: /\.tsx$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    // import 文で .ts ファイルを解決するため
    resolve: {
        modules: [
            "node_modules", // node_modules 内も対象とする
        ],
        // import文に渡された拡張子無しのパスに対して、'.ts','.js'ファイルを探しに行くようにする。
        // これにより、拡張子を書かなくて済む。
        extensions: [
            '.ts',
            '.tsx',
            '.js' // node_modulesのライブラリ読み込みに必要
        ]
    },
    devServer: {
        contentBase: './',    // 公開するリソースのドキュメントルート
    }
};
