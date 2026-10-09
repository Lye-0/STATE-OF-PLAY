# Console Log Timeline

実ログ全体を、一つの開放金属チャンネルの底面へ読む。実履歴の見出しが後ろの壁、各実日付とログが連続した底面へ載り、40pxの折曲げ側面と下48pxの前端が全高の一体材を支える。右端は斜めの断面を露出して開き、日時を横の色列へ閉じ込めない。全記録は同じ底面を続け、イベントごとの金属箱や架空のノブを作らない。狭幅は側面20px・前端44pxへ縮め、実文字14px以上とnative押面を保つ。

## 内容と状態の接続
日付、状態、本文は提示された値の表示。閲覧によってstatusをdoneへ変更しません。詳細はdetails/summary。本文は文字列で、任意HTMLを解釈しません。

Reactのpropsは `react/ConsoleLogTimeline.tsx` がexportする `ConsoleLogTimelineProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
