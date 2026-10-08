# B001 round 2 再検査

**9件pass、R004のみadjust。overall: changes_requested。**

固定版 `snapshot/round-2/`、正本ハッシュ100/100一致。round-2後に修正された作業ツリーは評価していない。

重大項目はR004の新しい受けの接合未達だけが残る。逆ドラッグは解消しているため、受けの位置修正と終端確認で完了できる。R010のブレーキ、R011の格子、R021の独立表紙など、前回求めた改善は成立している。

## R004 concertina-latch-toggle — adjust

右40pxのドラッグに留め具が右40px追従し、逆方向の問題は解消。新しいON終端の受けへの接合に16pxの空きが残るため調整。

- **major / receiver-gap**: ONでも銀の留め具と銅の受けの間に16px空く。新しい設計の「ONで受けへつなぐ」が実際の終端で成立しない。ドラッグ逆追従自体は解消済み。 根拠: snapshot/round-2/source/concertina-latch-toggle/styles.css、captures/reviewer-round2/concertina-latch-toggle-on.png。留め具89+48+8=右端145px、受けleft20+width144-right(-2)-width5=左端161px。 改善: 銅の受けを16px左へ置く等で留め具のON右端145pxへ合わせる。造形全体のやり直しは不要。通常ON、ドラッグ終端、OFFの空隙を固定版で再確認する。

## R005 curtain-track-toggle — pass

前回合格した布・窓の造形を維持。操作・狭幅・強制色の回帰なし。

## R006 screw-jack-toggle — pass

ONでナット右端147pxと銅端子左端147pxが一致し、画像でも接合を確認。前回の13pxの空きは解消。

## R008 drawbridge-toggle — pass

前回合格した橋桁と中央継手の構造を維持。操作・狭幅・強制色の回帰なし。

## R009 capstan-toggle — pass

前回合格した巻胴・ロープ・位置表示を維持。操作・狭幅・強制色の回帰なし。

## R010 anemometer-toggle — pass

OFFで中心へ係合する銅のブレーキがONで左へ離れ、回転角だけに依存しない終端の差が成立した。カップ・軸の造形は保たれ、前回の指摘を解消。

## R011 raster-reveal-toggle — pass

OFFの遮蔽からONの明るい縞の開口へ移り、格子の端と持ち手も残る。位相の逆転と説明不一致が解消。

## R013 comb-contact-toggle — pass

前回合格した交互の銅・銀の歯の接合を維持。操作・狭幅・強制色の回帰なし。

## R014 compartment-toggle — pass

右ドラッグ40pxに戸が右40px追従する。明るい左室が現れる終端と更新した説明が一致。開口と固定ラベルで状態が読める。

## R021 bookcloth-case — pass

左の布表紙・細い関節・右の固定紙面が別の輪郭として成立し、ホバーでは本文を動かさず表紙が変形する。前回の色帯付き矩形から構造が分離した。展示のidea.も暗いインク色に改善し、長文320px・強制色・動き軽減も確認。Aとして合格。

## 実施した検査

- response-1.md、更新design.md、固定round-2の実装と配布を参照。正本100ファイルのハッシュ全一致。
- 全9トグルをnative JS独立画面で通常クリック・Space・Enter操作。値は即時true/false/trueとなり、全件でボタンとラベルの座標・寸法が一致。ページエラー0。
- 全9トグルを通常モーションの切替100msで逆切替し、中間transformを計測。全10件でhover/leave/途中reenterを実操作。
- R004/R014の右40pxドラッグで移動+40pxを計測し、方向問題の解消を確認。
- 320pxの操作後画像を確認。全体scrollWidth=clientWidth=320。R021の長い日本語と英数字で横overflow=0。
- reduced-motionで全9トグルのtransition 0s。R021の表紙も0s。forced-colorsのOFF/ON双方で選択側だけに下線が出ることを確認。
- R021の通常ホバー再進入前後で見出しの座標・寸法を測定。固定本文と独立表紙の構造、更新されたgallery写真の見出し色を確認。
- R005/R008/R009/R013の前回合格した通常造形の判定を維持。変更した6件は前回の重大項目の解消と回帰を確認し、新しい好みで評価基準を追加しない。

証拠: `captures/reviewer-round2/`。再検査スクリプト: `tools/review-b001-r2.mjs`、`review-b001-r2-extra.mjs`、`review-b001-r2-focus.mjs`。

## 限界

- 実機タッチ・OS実高コントラスト・スクリーンリーダーは未実施。Chromiumで検査。
- 全730件との比較と配布形式全体の範囲はreview-1記載を引き継ぐ。今回の独立実操作は固定portable native JS。
- round-2固定後のメインの修正は評価に含めない。
