# Recessed Record Timeline

全記録を、一方が全長で開いた凹曲面の床へ読む。左の本当の外形は全高を通じて80から28、104pxへ大きく湾曲し、そこから24pxの曲がる壁面だけが床へ続く。反対側は上の囲いを作らず、床の切断面24pxだけを露出する。固定の四辺枠と角丸ケースを廃し、20件に増えても全長の輪郭が内容の収納量に沿って曲がる。狭幅は曲面を比例縮小し、日時・見出し・本文は広い平底へ平らに保つ。

## 内容と状態の接続
日付、状態、本文は提示された値の表示。閲覧によってstatusをdoneへ変更しません。詳細はdetails/summary。本文は文字列で、任意HTMLを解釈しません。

Reactのpropsは `react/RecessedRecordTimeline.tsx` がexportする `RecessedRecordTimelineProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
