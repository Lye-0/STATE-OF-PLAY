# Copper Progress — CONTINUUM / 4.8.0

Aタイプの再現仕様。銅箔の巻き端が動き、明るい面が繰り出される。

## 進捗の約束
value, min, maxから0〜100%を計算する。本当の進捗を渡し、デモのタイマーを本番へ持ち込まない。native progressの値・読み上げ・数値表示は即座に更新し、装飾だけ補間する。indeterminate=trueでは割合とnative valueを省略する。100%表示は受け取った数値の到達であり、処理の成否を自動判定したものではない。

## 利用先への組み込み
配布時のパスを導入先へ強制しない。対象アプリ、既存のコンポーネント配置、package.json、CSSの読み込み方、AGENTS.mdを確認する。移動したファイルはimport/exportとアセット参照を同時に更新する。既存ファイルを無条件に上書きせず、共通ファイルの互換性を確認する。参照できない構成は推測で確定しない。

## 実装の正本
`continuum/style.css` と、このパーツの `styles.css` を外観の正本とする。`continuum/geometry.ts` は素材ごとの形状、`continuum/art.ts` と `presentation-spring.ts` は操作に追従する装飾。背景の演出だけを簡略化しない。装飾は `aria-hidden`・`pointer-events:none` の層で、文章・ネイティブ入力・フォーカス・値の確定を動かさない。停止時はJavaScript描画ループを停止し、prefers-reduced-motionでは最終状態へ直接移る。使用例だけでなく部品を単独で配置し、入力・フォーム・取り外しを確認する。
