# Folio Calendar — CONTINUUM / 4.8.0

Aタイプの再現仕様。紙の層と折り目がほどけ、薄い面に広がる。

## 日時の約束
日付はYYYY-MM-DD、期間はその配列、時刻はHH:mm、日時はYYYY-MM-DDTHH:mmのローカル文字列。UTCへ自動変換しない。mode=date/range/datetime/timeを支援する。日付入力はnative input、カレンダーは既存のキーボード操作を維持。フォームname、上下限、無効日、reset、readonlyを維持する。カレンダーはモーダルではないポップオーバーで、Tabで外へ移れば閉じる。Escapeでトリガーへ戻す。月移動時に背景だけめくり、選択中にボタンのクリック位置を動かさない。選択帯と今日/キーボードフォーカスは区別する。時刻だけの場合はOS標準の時刻編集を活かす。

## 利用先への組み込み
配布時のパスを導入先へ強制しない。対象アプリ、既存のコンポーネント配置、package.json、CSSの読み込み方、AGENTS.mdを確認する。移動したファイルはimport/exportとアセット参照を同時に更新する。既存ファイルを無条件に上書きせず、共通ファイルの互換性を確認する。参照できない構成は推測で確定しない。

## 実装の正本
`continuum/style.css` と、このパーツの `styles.css` を外観の正本とする。`continuum/geometry.ts` は素材ごとの形状、`continuum/art.ts` と `presentation-spring.ts` は操作に追従する装飾。背景の演出だけを簡略化しない。装飾は `aria-hidden`・`pointer-events:none` の層で、文章・ネイティブ入力・フォーカス・値の確定を動かさない。停止時はJavaScript描画ループを停止し、prefers-reduced-motionでは最終状態へ直接移る。使用例だけでなく部品を単独で配置し、入力・フォーム・取り外しを確認する。
