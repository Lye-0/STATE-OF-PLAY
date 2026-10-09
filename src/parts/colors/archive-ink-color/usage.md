# Archive Ink Color

保存色を実インク瓶として収蔵する色資料室。72×112pxのnative瓶に22pxの首と広い色の胴を持たせ、実HEXを白い収蔵ラベルへ記す。選ぶ色と瓶の胴色は同じ値で、架空の裏瓶や文字を作らない。SVは上の色見本、HSV/HEXは平らな道具面へ置く。瓶の有効中心を44px以上確保し、選択とfocusは移動せず内側の線で示す。

## 内容と状態の接続
選択値は不透明sRGB。彩度と明度の平面はポインター用、同じ値をネイティブrangeでキーボード操作可能。色相の輪は位置に応じて変化。無効なHEX入力は勝手に書き換えずエラー。

Reactのpropsは `react/ArchiveInkColor.tsx` がexportする `ArchiveInkColorProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
