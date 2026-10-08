# B011 独立検査 round-5

**結論: 全10件 PASS。** 固定 `snapshot/round-5` を検査し、round-4の4件の残件を解消。実装の正本・snapshotは変更していない。

| 番号 | 部品 | 最終判定 |
|---|---|---|
| R156 | copper-pin-tabs | pass |
| R157 | stitched-folio-tabs | pass |
| R158 | instrument-tabs | pass |
| R159 | floating-bookmark-tabs | pass |
| R160 | negative-slot-tabs | pass |
| R161 | slanted-spine-tabs | pass |
| R162 | rung-tabs | pass |
| R163 | embossed-archive-tabs | pass |
| R164 | open-corner-tabs | pass |
| R165 | film-caption-tabs | pass |

## 残件の確認

- **R158**: Tの目盛り/小番号/選択カーソルを保持。三角の根元を変えず高さ13px・bottom:-11pxとしたことで、先端y657.890625が本文topと一致し、実画像でも3pxの隙間が解消した。文字・押し面を保持し合格。
- **R160**: Tの下索引と論理順を保持。6pxの口をscrollport内の背景とpaddingへ移し、選択足がクリップされず本文へ連続する。実画像で帯をまたぐ選択紙を確認し、狭幅の横スクロールも維持。合格。
- **R162**: 二本の桁と三段、本文の上下支持が一体として成立。縦ではlistとpanelのy/高さが一致し、任意の長文でも桁が下支持まで伸びる。横では5pxの桁へ段が接触し、従来の上下4pxの空隙が消えた。一本の案内溝とは異なる梯子の構造を保持しA合格。
- **R164**: 54×36px/48×34pxの実開角と12px離したL断面のA造形は前回合格を維持。縦列の不要な横配置用余白を除き、320pxの長文見出しも96pxの押し面内で読める幅へ復帰した。本文footerの折返しも確認し、UI残件を解消。

## 確認範囲

- 固定source100ファイルのSHA-256がreview-input-5.jsonと全一致。native配布CSS10件と正本CSSをimport除外で照合し全一致。captures/reviewer-extra-5/checks.json。
- round-4/5正本比較で変更はR158/R160/R162/R164のstyles.cssのみ。他6件は全正本ファイル不変で、合格済み通常造形を引継ぎ。
- 全10の固定nativeを実本文で再操作。ARIA/ID/hidden、方向キー/End、R162初期verticalのArrowDown、manual、disabled skip、input値とselection保持、hidden panelからのfocus移動、縦横、320/390/768長文、RTL、forced/reducedが全成功。captures/reviewer-tabs-5/checks.json: results10、errors0。
- 全10を横/縦の第2選択で再撮影しpseudoと本文/列の位置を記録。R158の三角先端と本文topの一致、R160の帯を越える選択足、R162の横木と5px桁の接触を実画像で確認。captures/reviewer-joints-5。
- R162縦でlist/panelはy598.671875・高さ290.890625で一致。長い任意本文を追加した状態でも下支持が桁へ接続。rung-tabs-vertical-tall.png。
- 全10を320px×vertical×長い見出し×inputを持つ第3本文で再撮影。R164タブ幅96pxへ復帰、ラベルがhit内へ収まり、document幅320px。captures/reviewer-vertical-320-r5。
- R157/R163/R164/R165の白背景での孔/切欠きも再撮影。通常造形、素材/接合、既存730件とB001〜B010の最寄比較はreview-4の評価を継承。hover/leave/reenterの文字・hit安定はround-4実測を継承し、今回の変更対象では選択/縦横/長文の回帰を再確認。

## 限界

- Chromiumでの実操作とforced-colors/reduced-motionのエミュレーション。実OSの高コントラストや他エンジンの確認ではない。
- React実items×4形式は主担当のtabs-react-r5成功報告を参照。独立検査は固定native actual exportを実行した。
- 今回の造形判断は前回合格を固定し、4件の残件解消と回帰に限定。既存730件の全画像を再監査したものではない。
