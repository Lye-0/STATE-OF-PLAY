# B014 独立検査 round-3

**全10件 PASS。** R197の全幅の露出票と非対称の差込みポケットが成立。短長/RTL/3状態/入力領域を確認し残件なし。正本変更なし。

| 番号 | 部品 | 最終判定 |
|---|---|---|
| R195 | ceramic-stamp-check | pass |
| R196 | gimbal-check | pass |
| R197 | bookplate-check | pass |
| R198 | ladder-seat-check | pass |
| R199 | saddle-loop-check | pass |
| R200 | inset-lens-check | pass |
| R201 | margin-flag-check | pass |
| R202 | tabbed-bracket-check | pass |
| R203 | switchyard-check | pass |
| R204 | embossed-disc-check | pass |

## 残件の解消

左の背帯/上下線/小栞を除き、露出する全幅の紙と、左右で高さが異なる斜めの口を持つ下差込みポケットへ再構成した。紙の下端へ前面のポケットが5〜15px重なり、紙が上と右へ露出するため、単なる矩形カードの縁から分かれる。R021の左表紙、R193の全高の折返しと異なる下から保持する構造としてA合格。短文/長文/RTL/off/on/mixedで接点と読む面を確認し、固定の記号と入力を遮らない。

## 確認範囲

- 固定source100 SHA-256とreview-input-3.jsonが全一致。配布CSS10と正本をimport除外で照合し一致。reviewer-extra-3/checks.json。
- round-2/3正本比較で変更はR197 CSS/説明/Reactコメントのみ。他9件の正本全ファイル不変。
- native10チェックのSpace/label/required/form/reset/mixed/disabled/320390768長文/RTL/forced/reducedを独立再実行。results10/errors0。reviewer-checks-3。
- normal motion全10 off/on/mixedの100ms/500ms、hover leave reenterと急反転を再確認し30状態の記号と文字矩形が安定。reviewer-normal-3。
- 全10短文1000px/長文320px×LTR/RTLの混在40状態でinput==boxの48px矩形と中央の実クリックを確認。reviewer-contact-3。
- R197の短文/長文/RTL/3状態の実画像を主に確認。紙の下端へ斜め口が重なり、底の隙間がなく、左右を返してもポケットと紙が同じ関係を保持。normal/checks/contact画像へ保存。
- R197を既承認のR021左表紙/R193全高折返し/R026下チャンネルと比較。前面の非対称の斜め口へ全幅の票を挿す構造として区別。残る9件の近似評価は前回を引継ぎ。

## 限界

- 独立実行はChromium固定native。React実props×配布形式は今回は独立再実行していない。
- forced/reducedはブラウザエミュレーション。他エンジン/実OS未確認。
- 前回合格9件と近似比較は正本不変を確認して引継ぎ。
