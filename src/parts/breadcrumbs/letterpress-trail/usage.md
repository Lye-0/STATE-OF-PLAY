# Letterpress Trail

実祖先が占める一体の組版胴から、現在名の校正紙を一枚引き出すパンくず。離れていた矩形片と紙カードを廃し、全祖先の読む面を隙間なく一つの鋳物の胴へ結び、7pxの上面/12pxの下面/丸く返る両端を作る。現在の紙は胴の裏へ6px入って接合し、実階層の組版面から直接出る一つの自由な読む面になる。紙の26pxの返端と8pxの小口を描き、文字は材料に合わせて変形させない。

活版の行と細い区切りで階層を読む。末尾は現在地です。長い階層は途中をまとめて表示します。

## 組み込み

Reactは同梱のLetterpressTrailを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
