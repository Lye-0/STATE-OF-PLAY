# B032 round-4 独立検査

**9件合格、R441のみUI調整。通常造形は全10件合格。** 固定版のみを評価し、実装を編集していない。

## R438 pass

合格。端の楕円孔とC裏帯を廃し、一枚の布の全長にわたる38pxの開いた袖縫い代へ再構成。高さ10pxの実空隙の下で読む布へ6px接続し、布の自由端は片側の斜めの裁断で終わる。側孔へ別帯を通すR418とは、主形・空隙の位置・素材の連続が異なる。長文/RTLでも袖と本文が分離し、空隙を下層で塞がない。

## R439 pass

合格。単なる両端の括弧記号から、一つの幅50pxの厚いC支持と、その腕に20px入る読む板へ主形が変わった。中央の空隙・上下の24%の腕・8pxの端面が実寸で見え、文字は56px内側へ固定される。R399の全索引を挟む二本の曲材とは、各札を片側から受ける一体の大きいCで異なる。狭幅長文の最広行91.05px/6行、LTR/RTLで接点・hitを維持。

## R440 pass

合格、T保持。元の太い始端を30pxの返る旗へ整え、14pxから始まる紙が16px入り、7px上面/6px小口が同じ支持になる。単に旗の色を変えず、元の控えめな選択札の輪郭を保って差込みを精密化した。狭幅の名称/件数/削除も分離される。

## R441 adjust

通常造形は合格。閉じた厚い角丸を廃し、実名称を読む上橋と実件数/削除を載せる64px下弓を16pxの支柱でつなぐ。二つの実読む位置の間の大きい空隙が主形を決め、既存の囲い札から独立した。ただし新しい下材と上橋の文字色をそれぞれの背景へ適合させる必要がある。

- **R441-forced-name-contrast**：forced-colorsの選択札で新labelが通常背景rgb(230,205,174)を保持し、親からHighlightText白を継承する。名称は約1.53:1で読みにくい。
- 改善：新しい名称面もCanvas/CanvasText、選択時Highlight/HighlightTextの一組で指定する。親だけでなく文字の実背景面を検査する。
- 根拠：captures/reviewer-badges-4/embossed-label-tags-forced.png、reviewer-forced-4/checks.json/embossed-selected-short.png。

- **R441-count-floor-contrast**：通常時の件数・削除を濃い下弓へ載せたが文字は旧色のまま。未選択#735a43/#bd9e7cが2.55:1、選択#876441/#a98560が1.58:1。上橋の名前は読めても、下の実情報と操作が床へ沈む。
- 改善：下段の件数と削除に下弓で読める専用の暗い文字色を与える。forcedでは親のシステム色を継承する上書きを保ち、選択/未選択と大きい件数を実画像で照合する。
- 根拠：captures/reviewer-badge-extra-4/embossed-label-tags-rtl-dark.png、reviewer-badges-4/embossed-label-tags-selected.png。固定CSSのbefore下border色とsmall/buttonの継承色。

## R442 pass

合格。C材/円切欠きを廃し、一つの16pxのT横尺へ、斜めの自由端を持つ紙を12px重ねる。上の接点から紙が開いた側へ伸び、各札を上下から挟むR439、三角定規で受けるR317と異なる。RTLは輪郭の鏡映が一度となり、縦の背も露出したまま連続する。

## R443 pass

合格、T保持。元の両端の巻込みを12pxの曲面へ広げ、読む帯と上下4pxの小口を整えた。左右の巻いた端が同じ一枚の帯を閉じ、元の細い針のような端より素材が読み取りやすい。名称/件数/削除はhoverや選択で移動せず、狭幅でも同じ帯の連続性を保つ。

## R444 pass

合格。通常の角丸と別の数値箱から、始端を36px高で大きく欠く実切欠き・平らな低い床・始端側の6/7pxの内壁と丸い終端の一つの凹材へ変わった。外の負形と内床の高低差が一体で読め、色差だけの変更を超える。旧R239の同心の二重ピルと異なり、開いた始端と深い片側の床を持つ。孔を飾りとして増やさず、中央の名称と操作を平面へ保つ。

## R445 pass

合格、T保持。元の活字・実数値・罫の関係を保ち、下端を2pxの小口と上の1pxの罫へ軽くした。余計な囲いや偽の印字を足さず、実名称と実件数を明瞭に読む分類票として成立。狭幅の別段配置とforcedでも選択が明瞭。

## R449 pass

合格、B基準。元監査でもBの実用タグとして状態強化を求めた対象。固定輪郭とnativeチェック、明るい青の選択面が一致し、元の淡い緑面より状態が明快。Aの独創性の合格例には数えず、Bの可読性/操作性として判定した。

## R452 pass

合格、T保持。native入力と範囲ヒントにLTR isolateを指定し、RTLでも-12345.678の負号/小数の順序が保たれる。ラベルと操作柱のRTL配置は維持。梁/支点の通常形を変えず、長い単位の非干渉、途中遷移中の入力の矩形/字体/即時値を再確認した。

## 実施範囲

- 固定100hash/CSS10一致、round-3から84正本不変。変更はR438/R441/R442各5ファイルとR452 CSS。reviewer-extra-4/checks.json/inheritance.json。
- 9タグの独立native操作全成功：Space/checked/API/focus、readOnly/disabled/controlled拒否/remove、実form reset、empty/one、長文320/390/768×LTR/RTL、forced/reduced/destroy。logs/reviewer-badges-r4.log。
- 9タグの実TEXT_NODE Range54状態と、nearest remove focus/readOnly実pointer/normal hover-leave-reenterを全9×LTR/RTLで再確認。reviewer-reading-4、reviewer-badge-extra-4。
- R452実native全API/入力draft/IME/選択保持/上下限/実form/reset/long6条件/forced/reduced成功。LTR/RTLのmin→max途中0/100/350msを撮影し入力矩形/font固定。reviewer-numbers-4、reviewer-number-motion-4。
- 3変更造形の初期・selected・dark背景RTL・長文を実像で検査。布の袖空隙/6px接点、鋳弓の空隙/上橋/下弓、T横尺の12px紙接点をCSSと照合。各既承認近似との主構造を再比較した。
- 全9タグのforced選択labelのcomputed foreground/実背景を検査し、R441だけ通常色の背景が残ることを特定。reviewer-forced-4/checks.json。通常の下弓について実CSS色からコントラストを計算した。

## 限界

- 独立実操作はChromiumの固定native配布。React4形式/全基盤回帰は今回独立再実行しておらず、主担当の成功報告と区別する。
- 元730全件を今回再操作したわけではない。既存監査と対象・近似画像/固定CSSを使った構造比較。
- R449は元監査/設計通りB基準。残る9件をA（うちTは元形保持の精度）として評価した。
