# Liquid Glass 全体確認

対象は現行70部品（35カテゴリのA/B）。通常パーツと同じ一覧上での配置、詳細、明暗の背景、展開後の面、選択・入力・通知などの操作を確認した。

## 展示と素材

- 展示カードは全パーツ共通のグリッド行で見出しをそろえる。ガラス背景は既存の展示領域の背面に置き、背景のための最小高さや内側余白を部品へ追加しない。
- 背景に斜線と円弧を加え、面の透過・ぼかしを比較できるようにした。背景は配布パーツに含めない。
- Aタイプの面の濃さを従来の82%へ調整。詳細の透明度50が展示テンプレートに対応する。
- 透明度は背景色のアルファへ反映する。持ち手・選択片・進捗線は緩やかに変化させ、文字・縁・影・無効状態のopacityを変更しない。
- 調整内容はコード、両形式のプロンプト、ZIP、独立デモ、INTEGRATION.jsonに反映し、展示カードや元のカタログデータを変更しない。

## 確認中に修正した箇所

アコーディオンの本文と選択カードの配色、スクロールバーの素材指定と文字色、コマンドの起動面・展開面、スケルトンとタイムラインの旧背景、ボタンとリンクに重なっていた展示用説明を修正した。明るい背景の選択欄・進捗・スケルトンのコントラスト、狭い詳細欄での評価・セグメントの折り返しも調整した。

狭い表で固定列が他の列の操作を覆う問題は、狭幅で先頭データ列を横スクロールさせて解消した。検索フィルターは、内部へのフォーカス移動時に候補一覧を閉じないようにし、pointerdownからpointerupまでボタンの位置を保つ。

## 検証

背景のぼかしを独立したスライダーとして追加し、`tests/glass-blur.browser.ts` で全70部品を確認した。0で背景blurがなくなること、100で基準の2倍になること、色の透過率や文字のopacityが変わらないこと、展開した面にも設定が引き継がれることを検査する。両方の値は配布CSS・プロンプト・ZIP・独立デモへ反映する。

全70部品で245件の操作を記録し、素材の反映漏れ・文字色／要素opacityの意図しない変更・ページ例外は0件だった。全カテゴリの展示内の見出し・説明文の整列と320px・390pxの収まりも確認した。既存の展示回帰22件、ホバー復帰、Reactの全70部品のStrictMode・SSR・hydration・取り外し、調整済みZIPの実ダウンロードと独立デモの検査が成功している。

`tests/glass-review.browser.ts` は全70部品を巡回し、展示の行内整列、詳細の透明度と文字の不変性、展開した面への値の継承、明るい背景、320px・390pxでの収まりを検査する。実操作の記録と各状態の画像は `.test-output/glass-review/` に出力する。静的な表示部品は操作がないため表示と素材を検査する。

`tests/glass-transparency.test.ts` は70部品 × 4形式 × 2配置の調整済みコード・プロンプト・ZIP内容を照合する。`tests/glass-transparency-export.browser.ts` はA/Bの実ダウンロードを開き、独立デモでも調整値が有効なことを確認する。既存の `tests/liquid-glass-gallery.browser.ts` は移動・選択・開閉・各カテゴリ、`tests/liquid-glass-hover.browser.ts` はホバー復帰の回帰確認を担う。

確認環境はWindowsのChromeと、1440px・390px・320pxのビューポート。各部品の主な操作と状態を確認した記録であり、任意の利用先背景・データ量・全ブラウザーの組み合わせを保証するものではない。

## 巡回対象

| カテゴリ | A | B |
|---|---|---|
| toggles | Lens Toggle | Mist Toggle |
| buttons | Pressure Button | Frost Button |
| tabs | Flow Tabs | Index Tabs |
| dropdowns | Bloom Select | Clarity Select |
| blocks | Glass Shelf | Mist Surface |
| scrollbars | Lens Rail | Mist Rail |
| accordions | Laminated Accordion | Mist Accordion |
| textboxes | Refraction Field | Frost Field |
| links | Lucent Arrow | Mist Link |
| segments | Lens Segments | Mist Segments |
| checkboxes | Glint Check | Mist Check |
| popups | Floating Window | Mist Dialog |
| sliders | Meniscus Range | Mist Range |
| radios | Lucent Choice | Mist Choice |
| comboboxes | Lens Finder | Mist Finder |
| toasts | Floating Notice | Mist Notice |
| hints | Lens Hint | Mist Hint |
| progress | Meniscus Progress | Mist Progress |
| uploads | Glass Inbox | Mist Dropzone |
| datepickers | Lens Calendar | Mist Calendar |
| pagination | Lens Pages | Mist Pages |
| breadcrumbs | Lucent Trail | Mist Trail |
| badges | Glass Tokens | Mist Chips |
| numbers | Lens Stepper | Mist Stepper |
| avatars | Lens Portraits | Mist Profiles |
| ratings | Prismatic Rating | Mist Rating |
| colors | Spectrum Glass | Frost Palette |
| skeletons | Glass Placeholder | Mist Skeleton |
| timelines | Lens Timeline | Mist Timeline |
| wizards | Glass Journey | Mist Wizard |
| searchbars | Lens Search | Mist Search |
| commands | Glass Commands | Mist Commands |
| contextmenus | Lens Context | Mist Context |
| navigation | Floating Navigation | Mist Navigation |
| tables | Glass Ledger Collection | Mist Table |
