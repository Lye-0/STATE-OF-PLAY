# Ribbon Swatch Color

実保存色を、上下一続きの蛇腹の色見本帯へ変える。四辺の額縁と矩形の外箱を廃し、112pxの色面を18px重ね、右下がりと右上がりの共有折線で次の面へ切れ目なく接続する。帯の最初と最後の斜端は本当の展示背景へ抜ける自由端。実HEXは無変形の面の中央へ固定し、選択はラベルの明暗だけで示す。色の面もnative当たりもhoverや値変更で移動しない。

## 内容と状態の接続
選択値は不透明sRGB。彩度と明度の平面はポインター用、同じ値をネイティブrangeでキーボード操作可能。色相の輪は位置に応じて変化。無効なHEX入力は勝手に書き換えずエラー。

Reactのpropsは `react/RibbonSwatchColor.tsx` がexportする `RibbonSwatchColorProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
