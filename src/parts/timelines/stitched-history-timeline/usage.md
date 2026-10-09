# Stitched History Timeline

時系列の実接点を、大きい連続チェーンステッチへ変える。76pxの縫い代の実孔に日時の始点を揃え、28pxの長円糸が次の接点へ伸びる。上のループの先端を次の短い濃い糸がくぐり、前後の層を分ける。本文が伸びても糸の上端と次の日時の接点は固定し、架空の小さいステッチ列を本文へ増やさない。狭幅は縫い代46px・ループ20pxへ縮め、日時と本文14px以上の読む面を広く確保する。

## 内容と状態の接続
日付、状態、本文は提示された値の表示。閲覧によってstatusをdoneへ変更しません。詳細はdetails/summary。本文は文字列で、任意HTMLを解釈しません。

Reactのpropsは `react/StitchedHistoryTimeline.tsx` がexportする `StitchedHistoryTimelineProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
