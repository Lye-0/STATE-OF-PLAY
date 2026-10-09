# Textile Dye Color

実SV色面そのものを、一枚の大きい染布として編集する。親の額縁を廃し、228pxの無変形の色面の下端の実黒から30pxの房へ続ける。房の14pxの糸束の間は8pxずつ実展示背景へ抜け、左右5pxの織端は編集面の外へ置く。数値軸/HEX/保存色は布の外の別の道具面に分離し、淡い紙色で実値を読む。clothを入力文字へ掛けず、nativeのキャレットとHSVの位置は固定する。

## 内容と状態の接続
選択値は不透明sRGB。彩度と明度の平面はポインター用、同じ値をネイティブrangeでキーボード操作可能。色相の輪は位置に応じて変化。無効なHEX入力は勝手に書き換えずエラー。

Reactのpropsは `react/TextileDyeColor.tsx` がexportする `TextileDyeColorProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
