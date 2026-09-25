# Mist Segments / Liquid Glass

v4.15.0の動作部品から派生した、独立したガラススキンです。ギャラリーの背景・UIは配布本体に含みません。

## ガラスの配置
通常の同カテゴリと同じ入口・値・イベントを使います。半透明面の背後には、利用先の背景が必要です。これはCSSの背景ぼかしとハイライトによる表現で、Appleのネイティブ描画や物理的屈折の完全再現ではありません。
- 背景に応じて、ルートに `data-lg-appearance="light"` または `"dark"` を指定できます。
- 透過を抑える場合は `data-lg-material="solid"`。CSS変数 `--lgc-fill`、`--lgc-panel`、`--lgc-ink` でも調整できます。
- Reactではクラスにより素材が成立します。必要なdata属性は既存コンポーネントのHTML属性APIの範囲で渡すか、外部CSSでルートの変数を調整してください。
- `prefers-reduced-motion`、`prefers-reduced-transparency`、強制配色にフォールバックを用意しています。
- 専用GLASS LABや展示背景はアプリへ持ち込む必要はありません。

## 基礎コンポーネントの使い方
# Mist Segments

丸みと控えめなコントラスト。やさしい切り替え。

## React
`items` に `value`（重複しない識別値）と `label` を渡します。ラベルを選ぶネイティブradio群です。複数候補から1つを選択し、同時複数選択にはしません。
展示は3項目ですが、itemsを2・4・5以上に増減して使えます。選択はvalueで追跡し、並べ替えでも保持します。項目が消えた場合は最初の有効な項目を表示します。controlledでは親の値も必要に応じて整えてください。無効な項目だけ・空配列では選択しません。空valueと重複valueはエラーにします。
`value/onValueChange` は外部制御、`defaultValue` は非制御の初期値です。`disabled`、項目別disabled、`orientation="vertical"`に対応。`dir="rtl"`はrootまたは祖先へ指定できます。
name/form/requiredで実フォームへ接続します。nameを省略すると個体ごとに一意の名前を付けます。別個体に同じnameを指定するとネイティブの同じradioグループとなるため、独立に使う場合は別nameを指定してください。

## 項目数とラベル
CSSに3等分・3番目までの固定計算はありません。実際の要素サイズから選択マーカーを計測します。タブは多い場合に横スクロール、セグメントは幅に応じて折り返します。長い日本語ラベルも表示できます。ラベルに別のボタン・リンクを入れません。

## Vanilla
markup.htmlの子項目を変更し、init(root, options)で初期化。`setValue/getValue/refresh/setDisabled/setOrientation/destroy`を利用できます。DOMの項目増減後はrefresh()を呼びます。Reactの項目追加では不要です。
フォームの送信・検索・保存やタブのURL同期は利用先で行います。展示サンプルはexamples/だけの参考です。

## 操作・配慮
矢印キー、Home/End、クリック、キーボードフォーカス。選択は色だけでなく、面・線・点でも伝えます。reduced-motionで移動アニメーションを停止します。取り外し時はdestroy()でイベント/ResizeObserver/保留RAFを解除。常時描画ループやCanvasは不要です。
