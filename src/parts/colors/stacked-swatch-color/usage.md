# Stacked Swatch Color

保存した色そのものを重ねる、実見本カードの色選択。外箱の偽の重なり影を廃し、92pxのnativeカードを24pxずつ実際に重ね、各カードの上68pxを確実に露出する。偶数のカードは16px奥へ差し込み、実HEXを同じ紙ラベルに印字する。hoverでカードや文字を動かさず、選択線だけを変える。色面・数値軸・HEXは積層の外で読める。

## 内容と状態の接続
選択値は不透明sRGB。彩度と明度の平面はポインター用、同じ値をネイティブrangeでキーボード操作可能。色相の輪は位置に応じて変化。無効なHEX入力は勝手に書き換えずエラー。

Reactのpropsは `react/StackedSwatchColor.tsx` がexportする `StackedSwatchColorProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
