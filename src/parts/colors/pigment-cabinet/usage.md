# Pigment Cabinet

色面だけを実トレーへ引き出し、保存色を引出し群へ収納する顔料台。外四辺の色箱を廃し、数値軸を後方の別道具面、SVを左右14pxのスライドへ入る160pxの前の編集面へ分離する。SVの下へ続く44pxの実前面には72×14pxの本当の把手穴が開き、台を透かして見られる。保存色は実色と実HEXが一致する66pxの引出し、HEX入力は台の外の固定面へ置く。狭幅で実HEX全7文字を読める全幅行へ分ける。

## 内容と状態の接続
選択値は不透明sRGB。彩度と明度の平面はポインター用、同じ値をネイティブrangeでキーボード操作可能。色相の輪は位置に応じて変化。無効なHEX入力は勝手に書き換えずエラー。

Reactのpropsは `react/PigmentCabinet.tsx` がexportする `PigmentCabinetProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
