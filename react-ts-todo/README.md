## React + Redux + TypeScript + Webpack で作るTodoアプリ

## TypeScriptインストール、設定
- インストール
- コンパイル設定(tsconfig.json)
- 動作確認

## Webpackインストール、設定
- インストール
- コンパイル設定(webpack.config.js)
- 動作確認

## Reactインストール
- インストール
yarn add react react-dom
yarn add -D @types/react @types/react-dom

- 動作確認

## Reduxインストール
- インストール
yarn add redux react-redux
yarn add -D @types/react-redux
 
- 動作確認

## Note
- tsconfig.json, webpack.config.json の設定内容に過不足ないか
- dependenciesとdevDependencies に入れるものの区別
- webpackの本番環境用の設定ファイル
- plugin
  - babel-loader
  - html-webpack-plugin


## 参考
- [TypeScript + React のセットアップ](https://typescript-jp.gitbook.io/deep-dive/tsx/react)
  - ファイル拡張子.tsx(.tsの代わりに)を使用してください。
  - tsconfig.jsonのcompilerOptionsで "jsx" : "react"を使ってください。
  - JSXとReactの定義をあなたのプロジェクトにインストールします：(npm i -D @types/react @types/react-dom)。
  - reactを.tsxファイルにインポートします(import React from "react"となります)。