# Folded Swatch Color

同じ見本紙から折り出した二つの舌を、実切口へ通して自立させる色見本スタンド。通常パネルの下の折面を廃し、SVを載せた完全な矩形の紙面から左右36pxの舌を出し、後方台紙の32pxの実切口へ入れる。切口の前の保持端が舌を4px以上覆い、舌の上下には8px以上の本当の空気が通る。SV自体は無変形で固定し、HSV/HEX/保存色は後の台紙の別の平面へ置く。上下二ページやZ折を反復せず、同じ紙の自己支持で色を編集する。

## 内容と状態の接続
選択値は不透明sRGB。彩度と明度の平面はポインター用、同じ値をネイティブrangeでキーボード操作可能。色相の輪は位置に応じて変化。無効なHEX入力は勝手に書き換えずエラー。

Reactのpropsは `react/FoldedSwatchColor.tsx` がexportする `FoldedSwatchColorProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
