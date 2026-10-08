# B013 独立検査 round-7

**全10件 PASS。** R193のRTLでの接合を解消し、入力/表示枠/記号位置も一致。正本変更なし。

| 番号 | 部品 | 最終判定 |
|---|---|---|
| R180 | coin-seat-segments | pass |
| R181 | book-jacket-segments | pass |
| R182 | ivory-notch-segments | pass |
| R183 | double-track-segments | pass |
| R184 | bracket-seat-segments | pass |
| R185 | satin-key-segments | pass |
| R191 | locking-plate-check | pass |
| R192 | stitched-seal-check | pass |
| R193 | folded-ticket-check | pass |
| R194 | crossbar-check | pass |

## 残件の解消

全高の折面・読む紙・余白・受け・反対側の破線を論理方向へ揃え、RTLでも確認欄のある右端へ一体で移る。短文/320px長文、LTR/RTL、off/on/mixedで折面から確認欄への接続を確認。入力と表示枠は同じ48px矩形、記号は無地の中央に収まり、残件を解消してA合格。

## 確認範囲

- 固定source100 SHA-256とreview-input-7.jsonが全一致。配布CSS10と正本をimport除外で照合し全一致。reviewer-extra-7/checks.json。
- round-6/7の正本差分はR193 styles.cssのみ。他9件全ファイル不変。
- checkbox4件のnative Space/label/required/form/reset/mixed/disabled/文字安定/320390768長文/RTL/forced/reducedを独立再実行。results4/errors0。reviewer-checks-7。
- R193を通常motionの短文1000px/長文320px×LTR/RTL×off/on/mixedで12状態撮影・矩形計測。各状態で表示枠中央を実クリックしnative checkedが適切に変わることを確認。reviewer-contact-7。
- R193の12状態全てでinput矩形とbox矩形が一致し48×48px。RTLの受けはbox右端へ1px重なり、その先を右の折面が保持。tick35pxとdashは中央に残り、本文/記号へ装飾が重ならない。
- 既合格9件通常造形、segments6機能、近似比較はround-6までの評価を引継ぎ。今回の主対象はR193の方向による接続と回帰。

## 限界

- Chromium固定nativeを独立実行。React実props配布は今回独立再実行していない。
- forced/reducedはブラウザエミュレーション。他エンジン/実OSは未確認。
- 既合格9件と近似比較は正本不変を確認して引継ぎ。
