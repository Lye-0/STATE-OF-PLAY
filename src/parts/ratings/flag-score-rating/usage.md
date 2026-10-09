# Flag Score Rating

実際の評価旗が支柱から自由端へ開く評価。普通の四角い星セルを廃し、8pxの実支柱と28pxの足へ接続した一枚の旗を作る。旗の始点は支柱へ4px入り、終端は13pxの二股へ切り開く。星は旗の読む平面へ固定し、布の返りと選択範囲の密度で値を示す。RTLでも支柱と自由端だけを鏡映し、操作順と表示値は保つ。

## 内容と状態の接続
実際のradioとlabelを用います。Space・矢印キーとフォーム値を維持。ホバーはプレビューであり値の変更ではありません。未評価は0。

Reactのpropsは `react/FlagScoreRating.tsx` がexportする `FlagScoreRatingProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
