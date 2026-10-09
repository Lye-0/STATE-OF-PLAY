# Seal Score Rating

同じ一つの蝋の端面を持つ封印の評価。丸い封印と星の主形を保持し、細い二重線を5pxの上面/8pxの押した下面へ揃える。星の大きさとnativeラジオの64pxの当たりは全段階で固定し、選んだ範囲だけ蝋の面を濃くする。確定位置は縁の密度へ示し、hoverのプレビューは評価値へ書き込まない。最大10段階でもnative押面の幅44pxを確保し複数行へ並べる。

## 内容と状態の接続
実際のradioとlabelを用います。Space・矢印キーとフォーム値を維持。ホバーはプレビューであり値の変更ではありません。未評価は0。

Reactのpropsは `react/SealScoreRating.tsx` がexportする `SealScoreRatingProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
