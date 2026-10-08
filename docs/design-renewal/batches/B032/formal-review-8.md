# B032 round-8 最終独立検査

**全10件合格。** R441の残る読字余白を解消。固定snapshot/round-8だけを評価し、実装・snapshotは編集していない。

R438の袖縫い代、R441の名称橋と件数鋳弓、R442のT横尺と読む紙は主形から再構成済み。R441の通常/強制色と下段余白、R452のRTL負号順・長い数値の全幅表示も確認した。

|番号|部品|判定|
|---|---|---|
|R438|stitched-label-tags|pass|
|R439|bracket-tags|pass|
|R440|index-flag-tags|pass|
|R441|embossed-label-tags|pass|
|R442|drafting-note-tags|pass|
|R443|ribbon-end-tags|pass|
|R444|recessed-chip-tags|pass|
|R445|letterpress-tags|pass|
|R449|outline-filter-tags|pass|
|R452|bridge-control-number|pass|

## R438 stitched-label-tags

合格。端の楕円孔とC裏帯を廃し、一枚の布の全長にわたる38pxの開いた袖縫い代へ再構成。高さ10pxの実空隙の下で読む布へ6px接続し、布の自由端は片側の斜めの裁断で終わる。側孔へ別帯を通すR418とは、主形・空隙の位置・素材の連続が異なる。長文/RTLでも袖と本文が分離し、空隙を下層で塞がない。

近似比較：418, 278, 283。

## R439 bracket-tags

合格。単なる両端の括弧記号から、一つの幅50pxの厚いC支持と、その腕に20px入る読む板へ主形が変わった。中央の空隙・上下の24%の腕・8pxの端面が実寸で見え、文字は56px内側へ固定される。R399の全索引を挟む二本の曲材とは、各札を片側から受ける一体の大きいCで異なる。狭幅長文の最広行91.05px/6行、LTR/RTLで接点・hitを維持。

近似比較：399, 262, 282。

## R440 index-flag-tags

合格、T保持。元の太い始端を30pxの返る旗へ整え、14pxから始まる紙が16px入り、7px上面/6px小口が同じ支持になる。単に旗の色を変えず、元の控えめな選択札の輪郭を保って差込みを精密化した。狭幅の名称/件数/削除も分離される。

近似比較：元R440, 259, 321。

## R441 embossed-label-tags

合格。上の実名称橋と下の実件数/削除の鋳弓を実空隙で分けた主形を維持。下段に論理両端20pxを予約し、短い名称「項目A」＋9桁件数＋削除でも、実数字の近い側の外周余白がLTR/RTLとも20px確保された。上橋は全幅を保って16px支柱へ接続する。件数無しは短い返端、通常の件数/削除は#21190f（選択床5.13:1/未選択床6.89:1）、forcedはシステム色の対で読める。長文・選択・削除・native keyboardでも形と読む位置を維持した。

近似比較：元R441, 旧R239, 旧R424。

## R442 drafting-note-tags

合格。C材/円切欠きを廃し、一つの16pxのT横尺へ、斜めの自由端を持つ紙を12px重ねる。上の接点から紙が開いた側へ伸び、各札を上下から挟むR439、三角定規で受けるR317と異なる。RTLは輪郭の鏡映が一度となり、縦の背も露出したまま連続する。

近似比較：439, 317, 313。

## R443 ribbon-end-tags

合格、T保持。元の両端の巻込みを12pxの曲面へ広げ、読む帯と上下4pxの小口を整えた。左右の巻いた端が同じ一枚の帯を閉じ、元の細い針のような端より素材が読み取りやすい。名称/件数/削除はhoverや選択で移動せず、狭幅でも同じ帯の連続性を保つ。

近似比較：元R443, 283, 333。

## R444 recessed-chip-tags

合格。通常の角丸と別の数値箱から、始端を36px高で大きく欠く実切欠き・平らな低い床・始端側の6/7pxの内壁と丸い終端の一つの凹材へ変わった。外の負形と内床の高低差が一体で読め、色差だけの変更を超える。旧R239の同心の二重ピルと異なり、開いた始端と深い片側の床を持つ。孔を飾りとして増やさず、中央の名称と操作を平面へ保つ。

近似比較：元R444, 旧R239, 384。

## R445 letterpress-tags

合格、T保持。元の活字・実数値・罫の関係を保ち、下端を2pxの小口と上の1pxの罫へ軽くした。余計な囲いや偽の印字を足さず、実名称と実件数を明瞭に読む分類票として成立。狭幅の別段配置とforcedでも選択が明瞭。

近似比較：元R445, 435, 401。

## R449 outline-filter-tags

合格、B基準。元監査でもBの実用タグとして状態強化を求めた対象。固定輪郭とnativeチェック、明るい青の選択面が一致し、元の淡い緑面より状態が明快。Aの独創性の合格例には数えず、Bの可読性/操作性として判定した。

近似比較：元R449。

## R452 bridge-control-number

合格、T保持。native入力/範囲のLTR isolateに加え、font上限26pxへ調整。-12345.678の実Canvas字幅は最も大きい768px時も156.533203125px、実入力の内幅164pxへ収まる。320/390/768×LTR/RTLすべて先頭負号と全桁を表示し、梁/単位の離隔・native入力/IME/caret/form/上下限/操作hitも維持した。

近似比較：元R452, 344, 239。

## 今回の実施範囲と継承

- 固定round-8正本100 SHA-256/CSS10一致。7→8は99正本不変、R441 styles.cssだけ変更。captures/reviewer-extra-8/checks.json/inheritance.json。
- R441短名称「項目A」+icon+9桁件数123456789+削除を320/390/768×LTR/RTLで実撮影・Range計測。LTR start20/end60px、RTL start60/end20pxで、読字の論理近端に20pxを確保。外周への端一致を解消。captures/reviewer-final-8/checks.json とtag各画像。
- R441は固定native実配布でSpace/checked/API/focus、readOnly/disabled/controlled拒否/実remove、empty/one、実form reset、長文320/390/768×LTR/RTL、glyph/font固定、forced/reduced/destroyを再実行して成功。logs/reviewer-badges-r8.log、captures/reviewer-badges-8。
- 全9タグのforced選択名の文字/実背景をround-8で照合。R441長文選択時もHighlight/HighlightTextで名称/件数/削除を読める。reviewer-forced-8/checks.json、reviewer-badges-8/embossed-label-tags-forced.png。
- R441通常字色と鋳弓色はround-6以降不変。未選択6.8936:1/選択5.1304:1。短長名称・件数有無・削除有無の実像で、読む橋/空隙/下弓/短い返端を確認した。
- R452は7から10正本不変。8でも-12345.678の320/390/768×LTR/RTLを再計測・撮影しLTR順/実字幅<=入力内幅を確認。最大156.533203125px/内幅164px。全native API/IME/caret/form/上下限/長単位非干渉は7の独立成功を継承。
- 残る8タグは7から正本不変。6の独立native全9成功、54実TEXT_NODE Range、通常hover/leave/reenterとreadOnly実pointer/nearest remove focusの結果を継承。通常造形/近似比較は4以降の合格基準を保持し再設計を要求しない。

## 限界

- 独立実操作はChromiumの固定native配布。React4形式/全基盤回帰は今回独立再実行しておらず、主担当の成功報告と区別する。
- 元730全件を今回再操作したわけではない。既存監査と対象・近似画像/固定CSSを使った構造比較。
- R449は元監査/設計通りB基準。残る9件をA（うちTは元形保持の精度）として評価した。
