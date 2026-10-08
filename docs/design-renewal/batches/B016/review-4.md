# B016 round-4 独立検査

判定: **changes_requested — 8 pass / 1 adjust / 1 redesign**。固定snapshot/round-4を検査。正本・固定版は未変更。

| 番号 | 判定 | 講評 |
|---|---|---|
| R220 | adjust | 上下の外形を43%軸へ折ったことで二頁の輪郭は改善した。ただし追加した9pxの綴じ面は不透明な紙面の後ろへ隠れ、実像には現れない。外形と内容配置を保持し、描画順の調整を要する。 |
| R221 | pass | Tの太い上帯/大きい見出し/丸い主操作を保持。closeと戻る操作も同系の曲率へ揃え、個別の輪郭が衝突しなくなった。本文と入力を無地へ保ち、元の編集面の精度として合格。 |
| R222 | redesign | 下ポケットの反復は撤去された。しかし新しい中央紙＋左右の円筒＋四つの楕円端は既承認R219とほぼ同じ主構造。幅と色、上帯の有無、Blueprintという名称だけではAの独立した形にならず再設計を要する。 |
| R223 | pass | 本文の台と操作の台を12pxの実空隙で分け、下台を28pxずらした外周が役割と一致する。透ける間隔は下層で塞がらず、両台の切断面も別々に連続する。R214の一体の石台、R097の露頭とは二つの独立した面と操作の分離で異なる。長文/RTLでも成立しA合格。 |
| R224 | pass | 44×126pxの開いたU型へ改め、7pxの上下の腕が紙の端へ6px重なる二箇所の接合が成立。穴は実際に透け、長文末尾/320px RTLでも持ち手が一体で残る。R215の鉢前面とも異なる形として合格。 |
| R225 | pass | Tの本文/控えを分ける切取り線を保持し、二重外枠を上下4pxの紙の厚みへ整理した。線の意味を一つの境界へ集約し、任意本文と操作の可読性も維持。元監査の紙面精度として合格。 |
| R226 | pass | B/Tの実用の確認構成を保持。本文の重い灰青を外面に近い中立色へ整え、nativeフォームが自然に収まる。新規Aの造形差を要求せず、実用性と素材整合として合格。 |
| R228 | pass | B/Tの暖かい通知面を保持。冷たい灰青の本文欄を同系統の薄い砂色へ揃え、外面と本文の温度差を解消。任意入力と操作が読みやすく、過剰な外装を追加せず合格。 |
| R230 | pass | B/Tのフォーム用の中立面を保持。重い本文欄を薄い面へ整理し、任意のnative入力/表を受ける無地が明瞭。元の標準構成を崩さず合格。 |
| R232 | pass | 通常の橋型のつまみとレールは前回合格を保持。forced vendor pseudoのall:revert/margin:0によりnative丸つまみがレール中心へ一致した。実dragのLTR/RTL両端、form/reset/rangeも回帰なく合格。 |

## R220 — R220-spine-hidden

**major / consistency**

9pxの物理的な綴じ面がDOM後方の紙面に全て覆われる。computed geometryが存在しても通常表示には中央の支持がなく、説明の三面の綴じ目が読めない。

根拠: captures/reviewer-spine-4/spine-before.png と spine-diagnostic-z3.png、spine-diagnostic-z3-bottom.png。固定版material i:first-childはz-index:1、後続intro/body/footerもz-index:1で不透明。topはz-index:2。一時DOM styleだけでspineをz-index:3にすると上から下へ連続した綴じ面が現れる。

改善方向: 綴じ面を不透明な紙面より前の描画層へ配置し、文字・close・操作の領域は避ける。現在の43%の上下折れと同じ軸へ接続し、長文の上中下でも面を保つ。狭幅の横折れの構成は保持する。

## R222 — R222-column-repetition

**major / duplication**

主役がR219と同じ二本柱の構成へ置換されている。紙が巻きへ連続する薄い端や開いた巻断面はなく、楕円は柱の閉じた端面として見える。32pxへの幅変更や材質名だけで構造差を説明できない。

根拠: captures/reviewer-spine-4/R219-R222-comparison.jpg。左B015 round6 R219、右B016 round4 R222の固定native実像。双方が中央の矩形紙を左右の全高円筒と上下4つの楕円端で保持する。

改善方向: 二本柱の対称構成から離れ、紙自体の連続した折り/巻きで面を支える構成へ改める。一例は片側の開いた巻断面から平らな本文へ連続して解ける一枚の紙。実際の開口・薄い端・面の連続が外形を決めるようにし、柱を単に紙色へ変える対応を避ける。

## 確認範囲

- 固定source100 SHA-256をreview-input-4.jsonと照合し全一致。配布CSS10もimport除外で正本と一致。reviewer-extra-4/checks.json。round3との差はR220/R222/R224/R232のみ、他6件のsource hash不変。
- native9dialogsをactual modal/ARIA/Tabtrap/restoration/Escape policy/form method=dialog/retained input+selection/rapid/disabled/長文320390768/650px表の局所scroll/close-footer中心hit/RTL/forced/reduced/destroyで独立再実行。9件成功/errors0。reviewer-dialogs-4。
- normal motion全9の入場100ms/500ms、hover leave reenter、Escape復帰、急反転。任意長文/inputを注入し1000/320px×LTR/RTL×scroll上中下108状態を撮影・geometry記録。reviewer-open-4。
- R232 native form/reset/keys/実pointer0/50/100/range2thumb/disabled/readonly/minmaxstep/狭幅/RTL/forced/reduced全成功。追加continuous drag 1000/320×LTR/RTLの左右終値も一致。reviewer-sliders-4、reviewer-slider-extra-4。
- R220実像で隠れた綴じ面を確認。固定版を変更せず一時DOM z-index:3だけで描画原因を切り分け、長文末尾まで撮影。reviewer-spine-4。
- 元730監査/前回比較を継承。R222は直前承認R219の実native画像と並べ、支持の主構造が反復することを確認。R224は前回一点接合とRTL末尾を比較。

## 限界

- 独立実行はChromium固定native。React実propsや現行ギャラリーdetailは今回は独立起動していない。固定closed/openと配布CSS一致を照合。
- forced/reducedはブラウザエミュレーション。他エンジン/実OSは未確認。
- 全730を再監査したものではなく元判定/関連画像/既承認の近似を比較。
