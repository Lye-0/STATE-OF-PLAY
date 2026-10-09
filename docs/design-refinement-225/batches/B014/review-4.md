# B014 round4 独立検査

**changes_required — 5件 pass / 5件差戻し。**

合格: R460・R463・R475・R478・R482。修正要: R461・R462・R468・R470・R489。作者・共有ソースは編集していない。凍結版と現行作者hashは実計測終了時に全一致。

## R460 bookend-counter — pass

狭幅でも左右のブックエンドと数値面を同じ軸へ保つ。木口の明暗と下縁の支えが読み面へ接続し、数値・キャレット・キーを動かさない。


証拠: [numbers-portable-base-1-sheet.jpg](evidence-4/numbers-portable-base-1-sheet.jpg), [numbers-portable-native-1-sheet.jpg](evidence-4/numbers-portable-native-1-sheet.jpg), [numbers-gallery-base-1-sheet.jpg](evidence-4/numbers-gallery-base-1-sheet.jpg), [numbers-gallery-native-1-sheet.jpg](evidence-4/numbers-gallery-native-1-sheet.jpg), [react-0-sheet.jpg](evidence-4/react-0-sheet.jpg)

## R461 recessed-dial-number — changes_required

読み取り面を円のまま維持し、狭幅では増減キーを下へ分離。実値に対応する指標は成立するが、hoverの白い＋の可読性が不足。

- **contrast**: hover完了後の＋は22px/weight400の白文字、背景rgb(222,105,62)で3.389:1。portable/gallery一致。24px以上の通常文字または18.67px以上の太字という大きい文字の条件を満たさず、4.5:1を下回る。 改善案: 現在の寸法を保つならhover面を暗くするか記号を濃くし、往復途中も読める組合せにする。

証拠: [numbers-portable-base-1-sheet.jpg](evidence-4/numbers-portable-base-1-sheet.jpg), [numbers-portable-native-1-sheet.jpg](evidence-4/numbers-portable-native-1-sheet.jpg), [numbers-gallery-base-1-sheet.jpg](evidence-4/numbers-gallery-base-1-sheet.jpg), [numbers-gallery-native-1-sheet.jpg](evidence-4/numbers-gallery-native-1-sheet.jpg), [react-0-sheet.jpg](evidence-4/react-0-sheet.jpg)

## R462 rail-stop-number — changes_required

目盛りの上の値と小さな指標、両端のキーに整理され、galleryのキーhover衝突は解消。ただし単位と範囲の補助文字が薄い。

- **contrast**: 単位UNITSは11px、範囲0–24UNITS・STEP1は12px。rgb(113,139,157)と実背景rgb(237,243,247)で3.190:1。通常/hover/解除、portable/galleryで一致する有効情報の可読性不足。 改善案: 補助文字専用色を濃くし4.5:1以上へ。キーhoverの暗い面と白記号は維持。

証拠: [numbers-portable-base-1-sheet.jpg](evidence-4/numbers-portable-base-1-sheet.jpg), [numbers-portable-native-1-sheet.jpg](evidence-4/numbers-portable-native-1-sheet.jpg), [numbers-gallery-base-1-sheet.jpg](evidence-4/numbers-gallery-base-1-sheet.jpg), [numbers-gallery-native-1-sheet.jpg](evidence-4/numbers-gallery-native-1-sheet.jpg), [react-0-sheet.jpg](evidence-4/react-0-sheet.jpg)

## R463 ribbon-count-number — pass

前面を平らにし、薄い裏面の折返しを両端に抑えた。旧大きく突出する形より数量を読め、狭幅でも本文と増減キーが重ならない。


証拠: [numbers-portable-base-1-sheet.jpg](evidence-4/numbers-portable-base-1-sheet.jpg), [numbers-portable-native-1-sheet.jpg](evidence-4/numbers-portable-native-1-sheet.jpg), [numbers-gallery-base-1-sheet.jpg](evidence-4/numbers-gallery-base-1-sheet.jpg), [numbers-gallery-native-1-sheet.jpg](evidence-4/numbers-gallery-native-1-sheet.jpg), [react-0-sheet.jpg](evidence-4/react-0-sheet.jpg)

## R468 soft-amount-number — changes_required

数量と単位を短い一体の入力欄へまとめるB用途は明確。長い単位が中央列を占有して数値入力幅0pxになるため未完成。

- **layout_overflow**: viewport320でunit="LongUnbrokenUnitIdentifier"を設定すると、portable root222px/gallery235pxともinputの実幅0px。156pxの単位が44pxの左右キー領域へ重なり、数値3/4/8が見えない。React4配布形式でも長単位の同じ崩れを確認。forcedでは数値は戻るが単位が中央列からキー側へ張り出す。 改善案: 数値とキーの最低幅を確保し、単位は下段の全幅へ配置する等、文字量が増えても数値の直接入力を維持する。forcedも同じ収まりを検証。

証拠: [numbers-portable-base-2-sheet.jpg](evidence-4/numbers-portable-base-2-sheet.jpg), [numbers-portable-native-2-sheet.jpg](evidence-4/numbers-portable-native-2-sheet.jpg), [numbers-gallery-base-2-sheet.jpg](evidence-4/numbers-gallery-base-2-sheet.jpg), [numbers-gallery-native-2-sheet.jpg](evidence-4/numbers-gallery-native-2-sheet.jpg), [react-4-sheet.jpg](evidence-4/react-4-sheet.jpg)

## R470 warm-unit-number — changes_required

分量を大きな数値と同じ基線の単位で読み、増減操作を下へ分けた用途差は成立。長い単位を細い右列へ縦積みするため、折返し先の情報配置が必要。

- **design_judgment_long_unit**: root222pxで単位の列幅63.69px、長い日本語と英数字の単位が7行/156.73pxになる。ミリリットルだけでも2行。数値の右側の小さい列へ縦に積み、入力面の高さと読み順を不必要に増やす。値の消失や操作不能ではなく、Bの分量入力としての情報配置に関する改善判断。 改善案: 短い単位は基線を保ち、長い単位は数値の下の広い行へ折り返す。forcedの長単位も中央列からキー側へ張り出さないようにする。

証拠: [numbers-portable-base-2-sheet.jpg](evidence-4/numbers-portable-base-2-sheet.jpg), [numbers-portable-native-2-sheet.jpg](evidence-4/numbers-portable-native-2-sheet.jpg), [numbers-gallery-base-2-sheet.jpg](evidence-4/numbers-gallery-base-2-sheet.jpg), [numbers-gallery-native-2-sheet.jpg](evidence-4/numbers-gallery-native-2-sheet.jpg), [react-4-sheet.jpg](evidence-4/react-4-sheet.jpg)

## R475 bookplate-profile — pass

小さいしおり、二重の紙縁、縦長の肖像と明朝氏名の対で蔵書票の構造を示す。hover往復で氏名と肖像位置を固定し、長文と選択を保持。


証拠: [avatars-portable-base-1-sheet.jpg](evidence-4/avatars-portable-base-1-sheet.jpg), [avatars-portable-native-1-sheet.jpg](evidence-4/avatars-portable-native-1-sheet.jpg), [avatars-gallery-base-1-sheet.jpg](evidence-4/avatars-gallery-base-1-sheet.jpg), [avatars-gallery-native-1-sheet.jpg](evidence-4/avatars-gallery-native-1-sheet.jpg), [react-6-sheet.jpg](evidence-4/react-6-sheet.jpg)

## R478 stitch-label-profile — pass

折りカードをやめ、細かい布目・縫い目・布端の厚みを一枚の横名札にまとめた。画像と氏名を横に読み、選択やキー操作の位置が安定。


証拠: [avatars-portable-base-1-sheet.jpg](evidence-4/avatars-portable-base-1-sheet.jpg), [avatars-portable-native-1-sheet.jpg](evidence-4/avatars-portable-native-1-sheet.jpg), [avatars-gallery-base-1-sheet.jpg](evidence-4/avatars-gallery-base-1-sheet.jpg), [avatars-gallery-native-1-sheet.jpg](evidence-4/avatars-gallery-native-1-sheet.jpg), [react-6-sheet.jpg](evidence-4/react-6-sheet.jpg)

## R482 blueprint-id-profile — pass

大きい支持脚を取り除き、細い基準線と肖像/氏名の整列に主従を戻した。狭幅の一列化、氏名折返し、RTLとnative選択が成立。


証拠: [avatars-portable-base-1-sheet.jpg](evidence-4/avatars-portable-base-1-sheet.jpg), [avatars-portable-native-1-sheet.jpg](evidence-4/avatars-portable-native-1-sheet.jpg), [avatars-gallery-base-1-sheet.jpg](evidence-4/avatars-gallery-base-1-sheet.jpg), [avatars-gallery-native-1-sheet.jpg](evidence-4/avatars-gallery-native-1-sheet.jpg), [react-6-sheet.jpg](evidence-4/react-6-sheet.jpg)

## R489 outline-person-profile — changes_required

角形肖像と行の区切りによる人物一覧としてBの用途差が成立し、通常Profile文字の比率も改善。しかしforcedでは選択した氏名が白い帯へ消える。

- **forced_colors**: forced-colors:activeで選択したSora MoriまたはRin Aokiの氏名が白い矩形へ消える。長い名前に限らず既定名で再現し、portable/galleryとReact4形式で確認。computedの名前色は白、選択面はHighlight相当、forced-color-adjust:auto。実描画は文字背面が白になるため、computed背景透明だけでは検出できない。 改善案: 選択行と名前/補助文字の前景・背景を一組のシステム色で整合させる。必要な範囲へforced-color-adjustを指定し、氏名の可読性と選択の識別を実画像で確認。

証拠: [avatars-portable-base-1-sheet.jpg](evidence-4/avatars-portable-base-1-sheet.jpg), [avatars-portable-native-1-sheet.jpg](evidence-4/avatars-portable-native-1-sheet.jpg), [avatars-gallery-base-1-sheet.jpg](evidence-4/avatars-gallery-base-1-sheet.jpg), [avatars-gallery-native-1-sheet.jpg](evidence-4/avatars-gallery-native-1-sheet.jpg), [react-6-sheet.jpg](evidence-4/react-6-sheet.jpg)

## 検査条件

全10件を凍結portableと実galleryで操作。通常・hover入口40ms/退出60ms/再進入60ms/解除後、320px・長文・RTL・forced/reducedを確認。比較画像15枚と個別の候補画像を視認。文字の相対位置は測定したhover各段階で0.5px超のずれなし、reduced状態の実行アニメーションは全20例で0件。

10部品×TSX/JSX×portable/original=40実配置。StrictMode、ページerror0、各形式unmount後0部品。B2件は別ページでpointer/keyboardの定常値を再確認。
R470は既定250、step5で250→255→260、12.5確定→15、reset250、新bounds2..8 step2でreset8。他5件は3→4→5、12.5→13、reset3、新boundsで4。

B2件のラベル/単位/既定値/範囲/stepはVanillaとReactで一致。React連続検査の一部pointer採取は直後値が更新前だったため、独立ページで待機後のpointer/Enterを再検査した。最終根拠はmeasurements-react-pointer-4.json。型・ビルド全体の再実行を意味しない。

人物の通常2文字イニシャルと氏名はhoverで固定。長い氏名・役職を主たる長文条件として判定。任意の長いイニシャル記号列すべての収まりを保証するものではない。

特定状態・対象の検査。造形判断と再現不具合を区別。全状態の無欠陥保証ではない。React人物コンポーネントの既定Your nameとVanilla展示3人物はデータ差として扱い、同じusers propsでも描画・選択を確認。
