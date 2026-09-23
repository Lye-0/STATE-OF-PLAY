# Obsidian Stepper

未確定の入力文字を保ち、blur/Enterで数値を確定します。日本語変換中は加工しません。min/max/step/unitを指定できます。

## 組み込み

Reactは同梱のObsidianStepperを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

値はネイティブ入力欄で直接編集できます。編集中の文字を保持し、確定した値はmin／max／stepに従って扱います。データ取得・保存や送信は利用先で接続してください。React版は外側のdivをReactが、内側の要素をcontrollerが管理します。内側へReactのchildrenを挿入せず、公開props/APIから更新してください。

## WAYFINDER 4.10.0
同梱の `wayfinding/number.ts` と `number.css` を必ず一緒に配置します。
`items` のラベル・URL、または `min` / `max` / `step` / `unit` を利用先のデータに置き換えてください。
`onDataChange` は通常DOM版、`onValueChange` はReact版の変更通知です。同名素材を別カテゴリと併用する場合も、`data-wf-kind` によるCSS境界を保ってください。使い終わったら `destroy()` を呼び出します。
前回の未添付ソースは保存されていなかったため、この版はv4.9.0と残っている画像を基に再構築したものです。
