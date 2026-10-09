# Folded Score Rating

同じ上の綴じ材から、幅14pxの本当の返しで下がる紙票の評価。元の吊り札/下端の折れを保持し、上の線を8pxの材料へ、星の票への接続を30pxの返しへ揃える。返しは読む紙の上端へ入り、選択した紙も同じ5px/8pxの紙端を持つ。星とnativeラジオを揺らさず、10段階の複数行では各行が同じ8pxの綴じ材と実返しを持ち、上の紙票へ下の返しを誤って重ねない。確定位置の4pxの縁は全状態で余白を確保し、星の読む位置をずらさない。

## 内容と状態の接続
実際のradioとlabelを用います。Space・矢印キーとフォーム値を維持。ホバーはプレビューであり値の変更ではありません。未評価は0。

Reactのpropsは `react/FoldedScoreRating.tsx` がexportする `FoldedScoreRatingProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
