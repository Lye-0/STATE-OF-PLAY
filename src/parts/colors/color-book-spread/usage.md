# Color Book Spread

見本と実軸を、一つの開いた色見本帳の両ページで編集する。二つの普通のカードを廃し、中央の28pxの露出した綴じと40pxの空隙を挟む見本紙/数値紙へ組む。左の色面と保存色、右のnative軸とHEXはそれぞれ同じ紙へ読み、紙の下10pxの束と綴じ端が一つの帳面を示す。狭幅では同じ綴じを横へ残して一列にする。

## 内容と状態の接続
選択値は不透明sRGB。彩度と明度の平面はポインター用、同じ値をネイティブrangeでキーボード操作可能。色相の輪は位置に応じて変化。無効なHEX入力は勝手に書き換えずエラー。

Reactのpropsは `react/ColorBookSpread.tsx` がexportする `ColorBookSpreadProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
