## React + Redux + TypeScript + Webpack で作るTodoアプリ

## TypeScriptインストール、設定
- インストール
- コンパイル設定(tsconfig.json)
- 動作確認

## Webpackインストール、設定
- インストール
- コンパイル設定(webpack.config.js)
- 動作確認

## React、Reduxインストール
- インストール
- 動作確認

## Note
- tsconfig.json, webpack.config.json の設定内容に過不足ないか
- webpackの本番環境用の設定ファイル

babel-loader
html-webpack-plugin


セットアップ
https://typescript-jp.gitbook.io/deep-dive/tsx/react

- ファイル拡張子.tsx(.tsの代わりに)を使用してください。
- tsconfig.jsonのcompilerOptionsで "jsx" : "react"を使ってください。
- JSXとReactの定義をあなたのプロジェクトにインストールします：(npm i -D @types/react @types/react-dom)。
- reactを.tsxファイルにインポートします(import React from "react"となります)。