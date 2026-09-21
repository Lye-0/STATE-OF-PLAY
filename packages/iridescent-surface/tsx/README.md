# Iridescent Surface / 2.2.0

見る位置で揺らぐ、偏光のスペクトル。

## React + TypeScript / JavaScript
同じパッケージのファイルを1つのディレクトリに置き、`IridescentSurface` をimportします。CSSはコンポーネントから読み込まれます。React 18以降を前提とするソースです。JSX版はTSXから型を除去したものです。Next.jsなどではクライアントコンポーネントとして使います。

## 通常のHTML / TypeScript
`markup.html` の要素を配置し、`styles.css` を読み込み、`init(element, options)` を実行します。`init`の返り値の `destroy()` を、画面や部品を取り外すときに必ず呼び出します。TS版は利用先のビルド環境で変換して使います。JS版の `index.html` はローカルサーバーから開きます。ZIP内の `preview/index.html` はダブルクリックでも開ける独立デモです。

## そのまま保たれるもの
外観のCSS、素材別の動き、マウスとキーボードの操作、動きを減らす設定。音は展示サイト専用の任意機能で、配布パーツには含めません。展示枠やサンプル文言は部品本体から分離しています。

## 調整
- `children` (ReactNode): 文章、画像、ボタンなど好きな中身を配置できます。
- `className / style` (標準のReact属性): 幅、余白、外側のレイアウトを設定します。
- `--sop-padding` (CSSカスタムプロパティ): 内側の余白。初期値は28pxです。
- `--sop-accent` (R,G,B): Original Surfaceの追従光の色を指定できます。

## コピーと依存関係
コード画面の「コピー」で表示中ファイルの本文をコピーし、「ファイルを保存」でそのファイルだけをダウンロードできます。関連ファイル一式は「パーツZIP」で取得してください。共通処理を含む全ファイルを同じ構成で配置してください。JavaScript/TypeScript版の実行時外部依存はありません。React版はReactが必要です。
