# B015 独立検査 round-6

**全10件 PASS。** 再設計R205/R215と、R213/R216/R218の支持・接合・スクロール残件を解消。正本変更なし。

| 番号 | 部品 | 最終判定 |
|---|---|---|
| R205 | quarter-cut-check | pass |
| R211 | dispatch-sheet-dialog | pass |
| R212 | porthole-dialog | pass |
| R213 | theatre-wing-dialog | pass |
| R214 | ledger-flap-dialog | pass |
| R215 | ceramic-basin-dialog | pass |
| R216 | folded-folio-dialog | pass |
| R217 | console-bay-dialog | pass |
| R218 | gallery-mat-dialog | pass |
| R219 | ribbon-heading-dialog | pass |

## 変更5件の判断

- **R205**: 3/4円の支持環と独立した四分円の切片へ再設計。実空隙へ切片だけが5px戻り、確認面の48px native欄・記号は固定される。環が読む票へ接触し、単なる切角カードから形と確認動作の関係を持つ構造へ変わった。R196の外枠回転、R199の革ループとは分割した円環を閉じる支持で分かれる。短長/RTL/混在でも接点と入力を確認しA合格。
- **R213**: 左右の袖の幅/折面は前回の合格形を維持。包含基準を固定dialogへ移し、長文の上/中/下で同じ位置と高さの支持が残る。320px/RTLでも本文と操作を遮らず残件を解消。
- **R215**: 読む平底と56pxの楕円の前曲面、26pxの釉薬の口を別面へ組み、平底から低い前縁へ連続する浅い受けが成立。単に角丸を太くした枠を脱し、全幅の前壁が輪郭を決める。R121の注ぎ溜まりやR195の小さい陶印を反復せず、内容を載せる鉢の構造としてA合格。長文の上/中/下でも固定の前縁と無地を保持。
- **R216**: Tの大きい見出し/縦操作と全高の折返しは前回合格を維持。固定dialogを基準にした31pxの返しが本文スクロールでも消えず、RTLでは対応する側へ移る。長文の操作も到達可能で残件解消。
- **R218**: 対角の布角を固定dialogの角へ移し、34pxの角が18pxマットと読む紙を実際にまたぐ。外の布から内の紙へ保持する接点が見え、長文スクロールでも二つの角が同じ端に残る。本文とcloseの余白を保持し、普通の紫の枠から角の保持を持つマットへ完成。A合格。

## 確認範囲

- 固定source100 SHA-256とreview-input-6.json全一致。配布CSS10と正本をimport除外で照合し一致。reviewer-extra-6/checks.json。
- round-4/6比較で変更は対象5件のCSSと再設計2件の説明/Reactコメント。他5件全正本ファイル不変。
- native9dialogsを実modal/ARIA/Tabtrap/restoration/Escape policy/form method=dialog/保持input+selection/rapid/disabled/長文320390768/650px表の局所横scroll/close-footer中心hit/RTL/forced/reduced/destroyで再実行。results9/errors0。reviewer-dialogs-6。
- normal motion全9の100ms入場/500ms後、hover leave reenter、Escape復帰、急反転を再確認。任意本文とinputを注入し1000/320px×LTR/RTL×上/中/下108状態を撮影/geometry記録。reviewer-open-6。
- R213/R216/R218のart矩形がscroll上/中/下で完全に同一であることを実測し、長文末端の実画像でも支持が残ることを確認。R215の固定前縁/平底とR219の柱も維持。
- R205 native checkboxのform/required/Space/label/reset/mixed/disabled/長文/RTL/forced/reduced全成功。normal off/on/mixed100ms/500msと急反転でglyph/枠が固定。reviewer-checks-6、reviewer-normal-6。
- R205の短文1000/長文320×LTR/RTLの混在状態でinput==boxの48px矩形と実中央クリックを確認。環と読む票の接点、切片の移動方向、記号との余白を画像で確認。reviewer-contact-6。
- 再設計2件を既承認の支持環/ジンバル/陶の構造と比較し、前回の近似比較を更新。合格済み通常造形は同じ基準で固定。

## 限界

- 独立実行は固定native。React実propsや現行ギャラリーdetailは今回独立起動していない。正本CSS/配布CSS一致と固定closed/openを照合。
- Chromiumでのforced/reducedエミュレーション。他エンジン/実OS未確認。
- 既合格5件と既存730の近似比較は前回を引継ぎ、変更5件を残件と回帰の観点で再評価。
