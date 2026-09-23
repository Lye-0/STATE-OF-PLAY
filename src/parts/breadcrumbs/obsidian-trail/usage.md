# Obsidian Trail

itemsのhrefを実際のページへ変更してください。末尾は現在地です。長い階層は途中をまとめて表示します。

## 組み込み

Reactは同梱のObsidianTrailを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

祖先の階層は実際のリンク、末尾は現在地として扱います。`items`のラベル・URLや設定を更新すると、開いている省略メニューを閉じ、必要なら利用可能な階層操作へフォーカスを戻します。通信とルーティングは利用先で接続してください。React版は外側のdivをReactが、内側の要素をcontrollerが管理します。内側へReactのchildrenを挿入せず、公開props/APIから更新してください。

## WAYFINDER 4.10.0
同梱の `wayfinding/breadcrumbs.ts` と `breadcrumbs.css` を必ず一緒に配置します。
`items` のラベル・URL、または `min` / `max` / `step` / `unit` を利用先のデータに置き換えてください。
`onDataChange` は通常DOM版、`onValueChange` はReact版の変更通知です。同名素材を別カテゴリと併用する場合も、`data-wf-kind` によるCSS境界を保ってください。使い終わったら `destroy()` を呼び出します。
前回の未添付ソースは保存されていなかったため、この版はv4.9.0と残っている画像を基に再構築したものです。
