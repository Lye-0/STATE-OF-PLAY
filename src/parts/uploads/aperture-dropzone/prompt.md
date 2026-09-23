# Aperture Dropzone — CONTINUUM / 4.8.0

Aタイプの再現仕様。重なった絞り羽根の開口が、実際の状態と連動する。

## 選択の約束
input[type=file]を使い、表示ファイルとFormDataを一致させる。ラベルやドラッグ領域を装飾で遮らない。getData()/onDataChange（ReactはonValueChange）はFile[]。選択はアップロードではない。疑似送信・疑似成功・架空の進捗率を表示しない。acceptとサイズ検査はクライアント側の補助にすぎず、送信先での検査を省かない。画像のObject URLを除去・reset・destroyで解放する。無効/readonlyはドラッグと削除も禁止する。既存ファイルのDOMを無関係な更新で作り直さない。

## 利用先への組み込み
配布時のパスを導入先へ強制しない。対象アプリ、既存のコンポーネント配置、package.json、CSSの読み込み方、AGENTS.mdを確認する。移動したファイルはimport/exportとアセット参照を同時に更新する。既存ファイルを無条件に上書きせず、共通ファイルの互換性を確認する。参照できない構成は推測で確定しない。

## 実装の正本
`continuum/style.css` と、このパーツの `styles.css` を外観の正本とする。`continuum/geometry.ts` は素材ごとの形状、`continuum/art.ts` と `presentation-spring.ts` は操作に追従する装飾。背景の演出だけを簡略化しない。装飾は `aria-hidden`・`pointer-events:none` の層で、文章・ネイティブ入力・フォーカス・値の確定を動かさない。停止時はJavaScript描画ループを停止し、prefers-reduced-motionでは最終状態へ直接移る。使用例だけでなく部品を単独で配置し、入力・フォーム・取り外しを確認する。
