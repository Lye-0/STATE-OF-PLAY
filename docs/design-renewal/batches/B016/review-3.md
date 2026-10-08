# B016 独立検査 round-3

**6件 PASS、R220/R224/R232 ADJUST、R222 REDESIGN。** 機能試験の成功と造形・実描画の問題を分けて記録。固定snapshotのみ検査し正本変更なし。

## R220 brushed-case-dialog — adjust

理由を左・本文と操作を右へ分ける機能的な二頁配置は改善。狭幅でも順序を保つ。ただし通常像は一つの矩形を6px/3pxの縦線で区切った汎用二列パネルに近く、二頁をつなぐ綴じ目/支持が外周と結び付いていない。内容配置を維持して中央と頁の接合を調整したい。

- **R220-flat-spread-joint**: 二頁の内容配置だけでは標準の二列レイアウトに近い。中央の2本の帯は上の共通ヘッダーと下辺へ直角で接する単なる仕切線で、左右の頁が綴じ目へ収まる折面や独立した頁の小口として見えない。名称をOpen Spreadへ変えたこと自体はAの根拠にならない。 根拠: captures/reviewer-dialogs-3/brushed-case-dialog-initial.png、reviewer-open-3/brushed-case-dialog-short.png。左右の境界はintro border-inline-end:6pxとbody/footer border-inline-start:3px、全周は一つの矩形。 改善: 内容の左右分割は維持し、中央を両頁が戻って収まる狭い谷の面/接合へ変え、頁の上下の小口へ連続させる。線や影の本数を増やすだけでなく、中央と外周に接続する実際の面の向きを作る。文字は固定し、狭幅の縦積みでも接合が途切れない構成へする。

## R221 stepped-corner-dialog — pass

Tの太い上帯/大きい見出し/丸い主操作を保持。closeと戻る操作も同系の曲率へ揃え、個別の輪郭が衝突しなくなった。本文と入力を無地へ保ち、元の編集面の精度として合格。

## R222 canvas-pocket-dialog — redesign

全幅紙と斜め口の下ポケットは実際に重なり、長文でも接続は保つ。ただし主構造が既承認R197の「平たい紙の下端に中央の高い斜め口の前面を重ねる」構成と同じ。縫い目/色/ダイアログへの拡大だけではカテゴリを跨ぐ反復から分かれず、Aとして再設計が必要。

- **R222-pocket-repetition**: Aの主役となる保持構造がR197と同じで、左右の布縁と縫い目、色、全dialogへの拡大が違いの中心になっている。カテゴリを変えた同じ斜め下ポケットの反復を合格理由にできない。 根拠: captures/reviewer-dialogs-3/canvas-pocket-dialog-initial.png、reviewer-open-3/canvas-pocket-dialog-320-rtl-1.png。比較: B014/captures/reviewer-checks-3/bookplate-check-checked.png。双方とも全幅紙の前へ中央の高い斜め口を下から重ねる。 改善: 支持の方向と構造を変える。一例として横から図面を差し込む布のスリーブにし、片側の入口の厚い返し、奥の縫い止め、外へ露出する紙端の関係で輪郭を作る。下の斜め前壁を主役に残したまま色/縫い目だけ変える対応は避ける。本文と操作は固定の無地へ置き、全scroll位置で実口を維持する。

## R223 separated-plinth-dialog — pass

本文の台と操作の台を12pxの実空隙で分け、下台を28pxずらした外周が役割と一致する。透ける間隔は下層で塞がらず、両台の切断面も別々に連続する。R214の一体の石台、R097の露頭とは二つの独立した面と操作の分離で異なる。長文/RTLでも成立しA合格。

## R224 letterpress-dialog — adjust

実際に抜ける40×120pxの楕円の持ち手を加え、R215の浅鉢の前壁と違う方向へ進んだ。ただし閉じた楕円の右端が盆の左端へ中央一点で接するだけで、上下の付け根がない。外へ添えた輪から一体の磁器の持ち手へ接合を調整する必要がある。

- **R224-handle-root**: 閉じた楕円の外周と盆の端が中央一点で接し、面積を持つ重なりや上下の付け根がない。上下では楕円と盆に空隙が残り、盆と一体の持ち手でなく外へ置いた輪に見える。 根拠: captures/reviewer-dialogs-3/letterpress-dialog-initial.png、reviewer-open-3/letterpress-dialog-320-rtl-1.png。handle left0 width40 border7 radius50%、shell margin-inline-start40。 改善: 楕円の上下の付け根を盆の端へ戻して接続する肩/短い腕を設け、同じ釉薬の断面で二箇所を重ねる。穴の実透過と40×120px程度の識別できる大きさは維持し、本文・持ち手を一体でRTLへ返す。単に楕円を内側へ大きく埋めて穴を塞ぐ修正は避ける。

## R225 split-frame-dialog — pass

Tの本文/控えを分ける切取り線を保持し、二重外枠を上下4pxの紙の厚みへ整理した。線の意味を一つの境界へ集約し、任意本文と操作の可読性も維持。元監査の紙面精度として合格。

## R226 plain-confirm-dialog — pass

B/Tの実用の確認構成を保持。本文の重い灰青を外面に近い中立色へ整え、nativeフォームが自然に収まる。新規Aの造形差を要求せず、実用性と素材整合として合格。

## R228 warm-message-dialog — pass

B/Tの暖かい通知面を保持。冷たい灰青の本文欄を同系統の薄い砂色へ揃え、外面と本文の温度差を解消。任意入力と操作が読みやすく、過剰な外装を追加せず合格。

## R230 neutral-form-dialog — pass

B/Tのフォーム用の中立面を保持。重い本文欄を薄い面へ整理し、任意のnative入力/表を受ける無地が明瞭。元の標準構成を崩さず合格。

## R232 bridge-saddle-range — adjust

Tの橋脚形のつまみを保ち、主6pxレールと補助1px線に強弱を付けた。橋下の実切口、38pxつまみ中心/19px端点、LTR/RTLのfillと実dragは成立し通常造形合格。ただしforced native fallbackでカスタムmargin-topが残り、丸つまみがレール上へ浮く。表示の調整が必要。

- **R232-forced-thumb-offset**: forced native fallbackの丸いつまみがレールより14px上に浮く。値やキーは動くが、視覚上はレールに接していない別の点に見え、現在値の位置を読む構造が崩れる。 根拠: captures/reviewer-slider-extra-3/forced-before.png と forced-diagnostic-margin0.png。forced時appearance:autoのまま::-webkit-slider-thumb margin-top:-14pxが残る。診断の一時DOM styleでmargin-top:0にすると丸つまみがレールへ一致（正本未変更）。 改善: forced-colorsではvendor thumbのカスタム余白をnativeの0へ戻し、必要なサイズ/境界/transform等もnative fallbackに不要な指定が残らないよう限定してresetする。通常の橋型の幾何は維持し、実画像でnativeつまみ中心とレールの一致を確認する。

## 確認範囲

- 固定source100 SHA-256とreview-input-3.json全一致。配布CSS10と正本をimport除外で照合し一致。reviewer-extra-3/checks.json。
- native9dialogsをactual modal/ARIA/Tabtrap/restoration/Escape policy/form method=dialog/retained input+selection/rapid/disabled/長文320390768/650px表の局所scroll/close-footer中心hit/RTL/forced/reduced/destroyで再実行。results9/errors0。reviewer-dialogs-3。
- normal motion全9の100ms/500ms入場、hover leave reenter、Escape復帰、急反転を操作。任意の長文/inputを注入し1000/320px×LTR/RTL×scroll上中下108状態を撮影・geometry記録。reviewer-open-3。
- R232 native form/reset/keys/実ポインター0/50/100/range2thumb/disabled/readonly/minmaxstep/狭幅320390768/RTL/forced/reducedを独立再実行し機能は成功。reviewer-sliders-3。
- R232追加の実dragを1000/320px×LTR/RTLで連続実施。左/右の終値はLTR0/100、RTL100/0。forcedの位置ずれを実画像で発見し、一時DOMのmargin0で原因を切分け。reviewer-slider-extra-3。
- 元730監査の対象10件の判定/理由、旧版native-expanded/mobile画像と既承認の近似構造を比較。Aの構造差とT/Bの保持調整を区別し評価。

## 限界

- 独立実行はChromium固定native。React実propsや現行ギャラリーdetailは今回は独立起動していない。固定closed/openと配布CSS一致を照合。
- forced/reducedはブラウザエミュレーション。他エンジン/実OSは未確認。
- 全730を再監査したものではなく元判定/関連画像/既承認の近似を比較。
