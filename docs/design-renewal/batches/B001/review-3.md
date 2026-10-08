# B001 round 3 最終再検査

**全10件pass。overall: pass。未解消の指摘なし。**

R004の受け位置だけの変更を確認した。固定版100ファイルのハッシュは全一致し、残り9件を含む99ファイルはround-2から不変。

R004は通常クリックON・右ドラッグ終端とも接点の隙間0px。OFF・SpaceでOFFへ戻した状態は48pxの空隙となり、接合と開放の両方を実ブラウザで確認した。前回までの合格判定を変える新しい基準は追加していない。

|番号|部品|判定|
|---|---|---|
|R004|concertina-latch-toggle|pass|
|R005|curtain-track-toggle|pass|
|R006|screw-jack-toggle|pass|
|R008|drawbridge-toggle|pass|
|R009|capstan-toggle|pass|
|R010|anemometer-toggle|pass|
|R011|raster-reveal-toggle|pass|
|R013|comb-contact-toggle|pass|
|R014|compartment-toggle|pass|
|R021|bookcloth-case|pass|

## 限定して実施した検査

- response-2.mdとround-2/round-3の差分を確認。変更はR004 styles.cssの受けright:-2px→14pxのみ。ほか99ファイルはハッシュ不変。
- 固定round-3の全100正本ファイルをreview-input-3.jsonと照合し、SHA-256全一致。
- 固定portable native JSをVite+Chromiumで独立起動。R004を通常モーションでOFF→クリックON→OFF→右48pxドラッグ→SpaceでOFFの順に操作。
- DOMと疑似要素の計算値で接点を実測。OFF空隙48px、クリックON 0px、ドラッグ終端0px、SpaceでOFF復帰48px。ON画像で接合も視覚確認。
- 残り9件の通常造形・操作・狭幅・強制色・reduced-motion等は、ハッシュ不変を根拠にround-2の実検査結果を引き継ぐ。

証拠: `captures/reviewer-round3/checks.json`、`off.png`、`on.png`、`drag-end.png`、`keyboard-off.png`。スクリプト: `tools/review-b001-r3.mjs`。

## 限界

- 本ラウンドはR004の受け位置と終端動作に限定。全10件の操作一式や全730件との再比較を繰り返していない。
- 実機タッチ・OS高コントラスト・スクリーンリーダー、および全配布形式についてはreview-1/review-2の検査範囲・限界を引き継ぐ。
