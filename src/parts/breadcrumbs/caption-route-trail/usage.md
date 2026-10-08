# Caption Route Trail

実経路と現在の展示名を、一つの浮いた展示キャプションの読む板へ組むパンくず。元の斜線の読みやすさを保持し、書体変更だけに頼らず、9pxの板小口と42pxの片側の成形された支え、開いた下の余白を作る。支えは板の裏へ4px入り、現在名は板の平らな読む床から動かさない。

小見出しから現在地へ段をつけて下ろす。末尾は現在地です。長い階層は途中をまとめて表示します。

## 組み込み

Reactは同梱のCaptionRouteTrailを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
