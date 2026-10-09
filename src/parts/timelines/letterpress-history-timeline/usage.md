# Letterpress History Timeline

実日時・出来事・本文が異なる基線と余白を共有する非対称の活版組版。72pxの実日時は全幅の上段で右へ寄せ、26pxの実summaryは次の左の基線へ、本文は96px深く掛け込む。大きい日時が作る上の空白、実見出しの左の面、本文の内側の幅で一件の読む領域を組む。普通の同じ左揃えの縦積みを廃し、任意の長い日時も最初から全幅の独立段で組む。狭幅は日時48px・本文の掛け込み24pxへ調整し、字面とnative押面は変形しない。

## 内容と状態の接続
日付、状態、本文は提示された値の表示。閲覧によってstatusをdoneへ変更しません。詳細はdetails/summary。本文は文字列で、任意HTMLを解釈しません。

Reactのpropsは `react/LetterpressHistoryTimeline.tsx` がexportする `LetterpressHistoryTimelineProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
