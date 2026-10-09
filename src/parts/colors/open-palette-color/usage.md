# Open Palette Color

実色面と本当の手掛け穴を持つ、一枚の開いた絵具板で色を編集する。L字の細線と底線を廃し、右へ64px広がる非対称の絵具板と半径18pxの実穴を主形にする。数値軸を板より上へ分離し、SVは板の無変形の矩形面で編集し、穴と曲がる外端は入力領域の外に置く。保存色は同じ板の下部へ並ぶ48pxの実絵具面、HSVとHEXは板の外の別の道具面へ分ける。暗緑で全面を埋めず、選ぶ色と板の空隙を主役にする。

## 内容と状態の接続
選択値は不透明sRGB。彩度と明度の平面はポインター用、同じ値をネイティブrangeでキーボード操作可能。色相の輪は位置に応じて変化。無効なHEX入力は勝手に書き換えずエラー。

Reactのpropsは `react/OpenPaletteColor.tsx` がexportする `OpenPaletteColorProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
