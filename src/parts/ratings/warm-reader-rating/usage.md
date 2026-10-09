# Warm Reader Rating

暖色の読みやすい評価を、広いnative押面と明確な確定位置へ揃える。Bとして淡い紙色と小さな角丸を保持し、14pxの見出し、固定した28pxの星と64pxの実ラジオを作る。確定した位置には面の下端を使い、範囲の塗りと区別する。長文、10段階、未評価、読取専用にも同じ安定した寸法を保つ。


読書の評価に合う穏やかな星。

## 内容と状態の接続
実際のradioとlabelを用います。Space・矢印キーとフォーム値を維持。ホバーはプレビューであり値の変更ではありません。未評価は0。

Reactのpropsは `react/WarmReaderRating.tsx` がexportする `WarmReaderRatingProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
