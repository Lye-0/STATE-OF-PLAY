# Prism Tabs

切り欠いた結晶と偏光。選択が移るたび、光の面が変わる。

## React
`items` に `value`（重複しない識別値）と `label` を渡します。タブは各項目にcontent: ReactNodeも必要です。隠れたパネルはアンマウントせず、入力内容を保ちます。
展示は3項目ですが、itemsを2・4・5以上に増減して使えます。選択はvalueで追跡し、並べ替えでも保持します。項目が消えた場合は最初の有効な項目を表示します。controlledでは親の値も必要に応じて整えてください。無効な項目だけ・空配列では選択しません。空valueと重複valueはエラーにします。
`value/onValueChange` は外部制御、`defaultValue` は非制御の初期値です。`disabled`、項目別disabled、`orientation="vertical"`に対応。`dir="rtl"`はrootまたは祖先へ指定できます。
activation="manual" は矢印キーではフォーカスのみ移動し、Enter/Spaceで確定します。初期値automaticは矢印で内容も切り替えます。重い非同期表示にはmanualを選んでください。

## 項目数とラベル
CSSに3等分・3番目までの固定計算はありません。実際の要素サイズから選択マーカーを計測します。タブは多い場合に横スクロール、セグメントは幅に応じて折り返します。長い日本語ラベルも表示できます。ラベルに別のボタン・リンクを入れません。

## Vanilla
markup.htmlの子項目と対応するdata-panel-valueのパネルを変更し、init(root, options)で初期化。`setValue/getValue/refresh/setDisabled/setOrientation/destroy`を利用できます。DOMの項目増減後はrefresh()を呼びます。Reactの項目追加では不要です。
フォームの送信・検索・保存やタブのURL同期は利用先で行います。展示サンプルはexamples/だけの参考です。

## 操作・配慮
矢印キー、Home/End、クリック、キーボードフォーカス。選択は色だけでなく、面・線・点でも伝えます。reduced-motionで移動アニメーションを停止します。取り外し時はdestroy()でイベント/ResizeObserver/保留RAFを解除。常時描画ループやCanvasは不要です。


## TRANSFORM edition
結晶のファセットが切り替え方向へ回り、分光する面を作る。
公開APIは維持しています。演出は値の変更を妨げず、停止後はJavaScriptの描画を止めます。必要な共有ファイルも同じ配布物に含まれます。
