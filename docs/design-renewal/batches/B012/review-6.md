# B012 独立検査 round-6

**全10件 PASS。** R178の中央への横縞は解消。短文/長文・白/暗色・横/縦・3選択で左右だけの縫い目と読む面を確認。正本変更なし。

| 番号 | 部品 | 最終判定 |
|---|---|---|
| R170 | night-work-tabs | pass |
| R171 | ceramic-key-segments | pass |
| R172 | spool-window-segments | pass |
| R173 | relay-bank-segments | pass |
| R174 | slate-divider-segments | pass |
| R175 | stitched-channel-segments | pass |
| R176 | lever-stop-segments | pass |
| R177 | raised-bridge-segments | pass |
| R178 | tape-splice-segments | pass |
| R179 | circuit-rail-segments | pass |

## 残件の解消

左右の独立した9px幅の背景と破線maskへ変更し、中央への横縞が消えた。短文/長文、白/暗色、横/縦、選択1/2/3で帯の内側の縫い目だけが残り、本文は無地で読める。8pxの斜め切口に沿う一定水平差を保持し、320pxの110px基準のwrapも維持。Tの形を保って残件を解消し合格。

## 確認範囲

- source100 SHA-256とreview-input-6.json全一致。配布CSS10と正本をimport除外で照合して全一致。reviewer-extra-6/checks.json。
- round-5/6の正本差分はR178 styles.cssのみ。他9件は全ファイル不変。
- 固定native segments9を再操作。radio/form/reset/キー/disabled/hover leave reenter/文字位置/長文320390768/縦/RTL/forced/reduced全成功、results9/errors0。reviewer-segments-6/checks.json。
- R178を短文の横/縦×3選択で撮影し、320px wrap/白背景も確認。さらに320px長文の横/縦×白/暗色×3選択を撮影。左右縫い目の位置と中央の無地、本文の可視性を確認。reviewer-joints-6。
- R170操作、残る9件通常造形、既存730件/承認110件との近似比較は前回までの合格を引継ぐ。今回はR178の残件と回帰を評価。

## 限界

- Chromiumの固定native配布を独立実行。Reactは今回独立再実行していない。
- forced/reducedはブラウザエミュレーション。他エンジン/実OSは未確認。
- 前回合格9件と近似比較は正本不変を確認して引継ぎ。
