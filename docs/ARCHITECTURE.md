# 開発構成

## 3つの責務

1. **パーツの正本**: `src/parts`と`src/shared`。型付きロジック、CSS、マークアップ、React版、使用例、仕様。
2. **サイト**: `src/app`。DOMの責務を保ったままTypeScript・ES Modulesへ。Viteが開発と本番ビルドを担当。
3. **配布生成**: `scripts/catalog.ts`、`layout.ts`、`source-tools.ts`でソースと配置を作り、`src/catalog/delivery.ts`でUI・ZIP・CLI共通の配布内容を構築する。

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

## 配布を一貫させる境界

```text
元の実装（TS / TSX / CSS / HTML）
  ↓ 依存関係・用途の判定、パスマップ、AST参照更新、形式変換
元構成のfiles / 導入向けportableFiles（メモリ内）
  ↓ getDelivery(part, format, layout)
コードツリー・表示・選択ファイルの保存・使い方・AIプロンプト
  ↓ packageContents(part, format, layout, includeCode)
サイトのZIP / CLIのZIP
```

画面側でZIPだけ別の配置へ組み替えません。画面の選択とパッケージは同じ型付きデータを使用します。
元ファイルの`sourceName`は、出力形式や配置の違いで変化しない識別子です。選択の維持と`INTEGRATION.json`の配置対応に使います。

TypeScriptのコンパイラーやAST解析はNode側だけで使い、ブラウザーには配布ソース文字列と軽量な共通モデルを渡します。
実際にサイトで動くパーツは元の実装、コピーするコードはそこから参照先だけを変換した配布ソースです。
この区別を補うため、配布ソースを使うReact・Vanilla・移動後の消費側テストを用意しています。

導入向けでも依存ライブラリ全体を同梱するわけではありません。Reactなどの外部依存は明示し、利用先のアプリが用意します。
フラット配布、任意の外部依存、バイナリアセット、自動上書きインストーラーは今回の範囲外です。

## Scrollbars / native-first

`scroll-area.ts`はnative viewportのscrollTop/scrollLeftを読むだけでスクロールを置き換えません。レール操作のときのみ同じviewportへscrollToし、メトリクスは`scroll-metrics.ts`で計算します。ResizeObserver、内容のMutationObserver、スクロール・画像load・サイズ変更で必要なフレームだけ更新します。orientation／RTLのマッピング、ARIA、ID、イベント・Observer・RAF・タイマーの後片付けも共有します。

`scrollbar-base.css`は構造、個別`styles.css`はスキンです。共有CSSはパーツの依存へ含めます。サイトはViteのCSS import、配布ソースは相対import、独立デモとオフライン検証だけはCSSを依存順に展開します。内容とスタイルの正本を別々に複製するものではありません。

スクロール見本は`src/catalog/scroll-sample.ts`と`src/app/scroll-samples.css`です。サンプル部分は持ち出すコンポーネントの実行時依存に入りません。README・AIプロンプト・ZIPに含める本体には自由な内容スロットが残ります。


## 入力パーツの所有範囲

textboxesは6番目のカテゴリです。ネイティブinput/textareaが文字列とブラウザーの編集履歴を所有します。text-field.tsは装飾データ、カウンター、自動高さ、validation、フォームreset、イベントとobserverの寿命だけを管理します。React版は値・ID・追加ボタンの状態をReact側に持ち、ControllerのmanageIds/manageActionsをfalseにして二重操作を避けます。

共有ViewはReactの制御値を勝手に加工しません。非制御モードではdefaultValueを入力に渡すだけにし、文字列の重複stateを作りません。クリアはnative value setterとinputイベントで実際のReact onChangeにも接続します。ギャラリーへはsop:field-stateに真偽値だけを通知し、文字列を保存したり配信したりしません。
