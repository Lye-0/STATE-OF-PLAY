# 開発構成

## 3つの責務

1. **パーツの正本**: `src/parts`と`src/shared`。型付きロジック、CSS、マークアップ、React版、使用例、仕様。
2. **サイト**: `src/app`。DOMの責務を保ったままTypeScript・ES Modulesへ。Viteが開発と本番ビルドを担当。
3. **配布生成**: `scripts/catalog.ts`と`source-tools.ts`。元実装から読みやすい配布ソースと完全な依存・配置パスを作る。

## Viteの仮想モジュール

- `virtual:sop-catalog`: 詳細画面のコード・ガイド・プロンプト・独立デモ。
- `virtual:sop-mounts`: 登録されたinit.tsの静的importとマップ。
- `virtual:sop-styles`: 元パーツCSSへのimport。

カタログはプロセス内のキャッシュです。編集・追加・削除で無効化し、必要な仮想モジュールを再読込します。
元ソースに`*.generated.*`を書き込む仕組みはありません。

## 型チェック

- `tsconfig.json`: ギャラリーとDOM処理、カタログ型、Vanilla、共有処理。
- `tsconfig.react.json`: 公式React型定義でTSX・使用例・フックを検証。
- `tsconfig.tools.json`: Nodeの生成ツール、Vite設定、テスト。

通常の`npm run typecheck`／`verify`にはすべてを含みます。型がないまま成功させるダミーのReact／Vite定義は置きません。

## バンドルの区別

サイトのbundlerと開発サーバーはViteです。
持ち出し用の独立デモだけは、小さなCommonJSラッパーを使った単体のapp.jsを生成し、分離HTML/CSSとともにZIPに入れます。
テストの`offline-fixture.ts`は制約環境用の検証アダプターで、Viteの代替実装や配信ファイルではありません。
標準の開発・ビルド・verifyでは使用しません。

## 公開とGit管理

`dist`は配信用、`release`は配布ZIP、`.test-output`は検証用です。いずれも元実装とは分離します。
通常の全体ZIPには再生成可能な展開済みコピーを含めません。
`package-lock.json`を一度実生成できた環境では、ロックファイルも管理して`npm ci`で再現してください。
