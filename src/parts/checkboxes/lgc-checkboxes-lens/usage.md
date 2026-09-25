# Glint Check / Liquid Glass

v4.15.0の動作部品から派生した、独立したガラススキンです。ギャラリーの背景・UIは配布本体に含みません。

## ガラスの配置
通常の同カテゴリと同じ入口・値・イベントを使います。半透明面の背後には、利用先の背景が必要です。これはCSSの背景ぼかしとハイライトによる表現で、Appleのネイティブ描画や物理的屈折の完全再現ではありません。
- 背景に応じて、ルートに `data-lg-appearance="light"` または `"dark"` を指定できます。
- 透過を抑える場合は `data-lg-material="solid"`。CSS変数 `--lgc-fill`、`--lgc-panel`、`--lgc-ink` でも調整できます。
- Reactではクラスにより素材が成立します。必要なdata属性は既存コンポーネントのHTML属性APIの範囲で渡すか、外部CSSでルートの変数を調整してください。
- `prefers-reduced-motion`、`prefers-reduced-transparency`、強制配色にフォールバックを用意しています。
- 専用GLASS LABや展示背景はアプリへ持ち込む必要はありません。

## 基礎コンポーネントの使い方
# Glint Check
日常のフォームになじむ、ニュートラルなチェック。

本物のinput[type=checkbox]です。label全体をクリックでき、Space・Tab・FormData・required・fieldsetのdisabledはネイティブのままです。複数の独立したチェックで複数選択を作れます。独自のキーイベントでSpaceを二重処理しません。

Reactはchecked/defaultCheckedとonCheckedChangeに対応し、refや標準入力属性はinputへ渡します。className/styleはラベルルートへ渡します。label/descriptionは差し替え可能です。label内へ別のボタンやリンクを入れず、必要な利用規約リンクなどはラベルの外に置いてください。

一部選択はindeterminate/defaultIndeterminateを使います。これは見た目と支援技術の状態で、フォームへ第三の値を送る属性ではありません。親チェックを混合状態にするときは子の選択から算出してください。クリックするとブラウザーはmixedを解除します。外部制御の場合はonIndeterminateChangeも接続します。

Vanillaはinit(root, options)で初期化し、setChecked/getChecked/setIndeterminate/getIndeterminate/setDisabled/refresh/destroyを使います。setCheckedはmixedを勝手に解除しません。両方変更する場合はsetIndeterminate(false)も呼びます。DOMを直接変えた後はrefresh()を使って展示用状態を同期できます。取り外すときにdestroy()します。

フォームのresetをキャンセルしない場合、初期checkedとmixedへ戻します。通常のフォーム送信ではチェックされたinputだけが送信されます。展示に送信・保存処理はありません。
