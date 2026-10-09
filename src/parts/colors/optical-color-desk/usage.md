# Optical Color Desk

光学の色相輪と実色面を、別々の編集面として示す。元の上下の色相輪/色面の配置を保持し、160pxの輪と20pxの色相帯へ整理する。輪の中心は実確認色、下のSV面は実彩度/明度を編集し、同じ一つのHSV値へつなぐ。輪や文字を連続回転させず、native軸も44px高で残す。

## 内容と状態の接続
選択値は不透明sRGB。彩度と明度の平面はポインター用、同じ値をネイティブrangeでキーボード操作可能。色相の輪は位置に応じて変化。無効なHEX入力は勝手に書き換えずエラー。

Reactのpropsは `react/OpticalColorDesk.tsx` がexportする `OpticalColorDeskProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
