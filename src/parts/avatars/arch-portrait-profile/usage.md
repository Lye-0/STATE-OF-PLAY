# Arch Portrait Profile

肖像と本人名を一枚の明るいアーチへ揃えるプロフィール。元のアーチ形の肖像枠を保持し、別の黄土色の名前ブロックを廃止する。84×96pxの写真のすぐ下へ同じ材料の16pxの本人名を置き、上6px/下8pxのアーチの成形面へ繋ぐ。本人名と役職の全文を同じ一枚の面で読み、選択でサイズ/写真の形を変えない。

## 内容と状態の接続
画像が読み込めないときはイニシャルを表示。氏名や在席状態を外部から渡し、存在しないオンライン状態を捏造しない。ユーザーの選択とプロフィール表示は別の機能です。

Reactのpropsは `react/ArchPortraitProfile.tsx` がexportする `ArchPortraitProfileProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
