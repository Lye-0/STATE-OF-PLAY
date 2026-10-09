# B038 round-7 最終独立検査

全10件pass。R523/R534の主形再設計、R533の接合と狭幅読字改善を実像と操作で確認。

## R520 letterpress-ink-color — pass

Tとして元のRGB校正構成を保持。セリフ見出し、実RGBの三つの58px行、色見本と読むHEXの序列が明瞭。偽の活字や模擬目盛りを追加せず、実色値とnative軸を固定。R515もRGBだが、ここは大きい活字と横罫の密度が元の長所でありTの精度基準で合格。

近似比較：元R520、R515

## R521 stacked-swatch-color — pass

92pxの実保存色カードを24px重ね、各68pxの読む・選ぶ面を露出。偶数カードの16pxの差込みと実HEXが積層を決め、単なる外枠の重なり影ではない。hoverで前後関係や文字が動かず、狭幅でも全カードに十分な選択面を残す。R261の三層背景と異なり、全層が実保存色の選択対象。

近似比較：元R521、R261、R511

## R522 linear-lab-color — pass

Tの線形の軸配置を保持し、128pxのSVと64pxの実軸、同じ左基準線、HEXの全幅行を整理。科学値はLTR、長文・狭幅で実値と44px操作を隠さない。汎用枠を新規Aの理由とせず元の整列構成の精度として合格。

近似比較：元R522、R512

## R523 ribbon-swatch-color — pass

四辺の面取りタイルと外箱を廃し、実112pxの保存色面が18pxずつ重なり、交互の斜め端を共有する一枚の折帯へ再設計。各隣面の上端と前面の下端が一致し、最上・最下の自由端は背景へ開く。文字とnative hitを変形せず、色が変わる実保存面ごとに折方向が替わる。R521の独立した積層カードとは、共有する端と連続面で区別される。R222の静的三内容紙を反復する配置ではなく、各面が同一編集値へ送る実色見本の連続帯としてA合格。

近似比較：元R523、R403旧額縁案、R175、R222

## R524 stone-pigment-color — pass

Tとして120pxの実色相輪と156px SVを同じ台へ並べ、上8px・下14pxの密度を整理。狭幅は上下へ戻り、輪四方クリックでH=0/90/180/270と実API値が一致。R517の上下の輪・SVとは同じ語彙だが、元の隣接する二操作面を保持するT精度基準で合格。

近似比較：元R524、R517

## R525 archive-ink-color — pass

72×112pxの保存色自体を22px首と肩を持つ瓶の輪郭へ変更し、実HEXの収蔵ラベルを広い胴へ固定。架空の裏瓶を足さず、すべての瓶が実選択色に対応する。普通の色箱から輪郭・選択密度を変え、R511の引出しやR521の重なる紙とは異なる一群の容器として成立。狭幅でも胴の有効hitを保ち、選択とfocusを内側線で示す。

近似比較：元R525、R511、R521

## R531 editorial-spread-skeleton — pass

Tの左画像列と右の人物・本文という編集誌面を保持。セリフ見出しと14px本文、下の資料列が待機中／読込後で同じ領域へ対応する。狭幅の長文は縦に伸びるが本文約113pxと人物名約108pxを確保し、文字を縮小・切取りしない。元の情報構成の精度として合格。

近似比較：元R531、R220

## R532 blueprint-wire-skeleton — pass

Tの図面と右資料列、下の人物・本文という構成を保持。曖昧な細い装飾曲線を整理し、実内容面と待機の骨格が一致。狭幅で本文192pxを使い、14pxの実本文とnative追加入力を明瞭に読む。

近似比較：元R532、R482

## R533 folded-cover-skeleton — pass

広幅の人物フラップと本文紙の構成を維持し、実border6pxを含む26px折背で接点を成立させた。狭幅は全幅の人物面と30px縦接続を介する本文紙へ配置変更。320px展示の名前幅は61→96px、本文108→186px、名前16px／役割14pxとなり、同じ紙の関係を保って読む幅を改善。実待機・読込・長文・RTLで接続が切れない。前回の2残件を解消。

近似比較：元R533、R220、R516、R473

## R534 stone-mosaic-skeleton — pass

丸角矩形の独立カード群を廃し、実画像を載せる上石と人物・本文・資料が共有する下石の二つへ再設計。上石の104px幅・32px深さの切口と下石の対応する舌が同じ位置で噛み合い、下の一体面は長文に応じて伸びる。待機／読込後で接合を維持し、右下の大きい斜め自由端まで一つの下石として読める。R174の別々の割石、R374の曜日石台、R494の連続アーチ支持とは異なる二つの機能面の実継ぎとしてA合格。

近似比較：元R534、R174、R374旧42石キー、R494旧個別石

## 実施確認

- 固定round7正本100 SHA-256と配布CSS10一致。round5から変更15ファイルはR523/R533/R534のみ。他7件70ファイル同一。captures/reviewer-hashes-7.json。
- 独立実portable native色6件の全protocolをround7で再操作。HEX/errors/draft caret、palette focus/Space、native axis keyboard、SV drag、controlled拒否／受入、readonly/disabled、実FormData/reset、destroy後不作動。reviewer-colors-7/checks.json:6成功/errors0。
- 色6×320/390/768×LTR/RTLの36長文条件、native44px、forced dark/reduced。実font HEX全7glyphの内幅36条件とR524実色相輪の4方向pointerを再確認。reviewer-hex-7。
- 色6×1000/320×LTR/RTL=24条件の通常hover/leave/reenter、白黒値変更とnative color inputで、入力・出力・見出し・保存色のroot基準矩形とfontが固定。R523の共有斜め端と実自由端を通常／暗背景で撮影。reviewer-materials-7。
- 独立実スケルトン4件：実待機／読込、native input同一DOM・値・caret、rootへのfocus退避と復帰、外部focusを奪わない、inert/ARIA、rows2/8、escaped label、paused、destroy後reset/update/pause不作動を再確認。reviewer-skeletons-7/checks.json:4成功/errors0。
- スケルトン4×320/390/768×LTR/RTL×待機／読込48条件の長文画像とforced dark/reduced。R533の26px／30px接合と読む幅、R534の実切口・舌・下石一体面を確認。24条件のnormal hover文字固定・接点computed寸法・idempotent destroyも記録。reviewer-geometry-7。
- 主担当React色6×4形式round6とReactスケルトン4×4形式round7の成功ログを補助確認。色6→7のソースは不変。独立React実行とは区別。
- 共有Skeleton runtimeは変更なし。前回のprovenance照合と実Vite22回帰ログ確認を継承。元730と既承認の近似比較を再設計3件に適用。

## 限界

- 独立実ブラウザはChromium。Firefox/Safari未確認。
- React4配布形式・恒久22試験は主担当ログ参照で、独立再実行ではない。
- 変更のない7件の通常造形は正式5の判定と70ファイル同一性を継承。操作は全10件を再確認。
