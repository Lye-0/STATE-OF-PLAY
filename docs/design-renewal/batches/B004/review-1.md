# B004 round 1 — changes_requested

4 pass / 6 adjust。操作上の前提は10件とも通過。主要な残件は、共通CSSが固有skinを上書きし、設計した背景・角丸が実表示に現れない問題。正本実装は変更していない。

## 個別判定

### R053 sliding-signet-button — pass

切り落とした印面と下のガイドの水平移動がまとまり、既存C字金具や左右の足とは輪郭・運動が異なる。長文でも印面と本文の関係を維持する。

最寄比較: R048, R051, R054。

### R055 satin-runner-button — pass

両側の折り輪が巻き留めに接続し、中央帯と分離してしなる。R047の片側の革把手とは素材と構成が異なる。320px長文でも本文は帯の内側。

最寄比較: R047, R049, R055。

### R061 ceramic-inlay-scroll — adjust

実描画では単色の通常角丸つまみに見える。設計した釉薬の面と非対称の外形がCSS競合で消えているため、まず本来の描画を取り戻してAの差を再評価する。

最寄比較: R072, R074, R023。

- major / R061-skin-specificity: 固有skinのhandleセレクタは3classで、共通baseの4classより弱い。背景・角丸が上書きされ、design.mdの素材・外形と実物が一致しない。横の結果にも差があり、配布先のCSS読込順に依存する箇所を残す。
- 根拠: 固定snapshot/round-1、captures/reviewer-scroll/ceramic-inlay-scroll-vertical.png と ceramic-inlay-scroll-horizontal-ltr.png、extra-checks.jsonのverticalPaint/values[].paint。通常表示のhandle background-imageは縦でnone、border-radiusは3px。横もR071以外はnone。source/ceramic-inlay-scroll/styles.cssとexports内shared/scrollbar-base.cssの競合。
- 改善: 共通baseより確実に強い、部品rootに閉じた詳細度でskinのhandle/各要素を定義する。縦横ともcomputedStyleで固有背景・角丸の適用を確認し、実寸画像で接続・素材・本文非干渉を再検査する。R061の追加造形は本来の非対称陶片を表示してから判断し、現時点で別案への作り直しは要求しない。

### R062 zip-seam-scroll — adjust

交互の歯が閉じた継ぎ目へ変わり、穴付き引き手と位置が結び付く構成は成立。ただしつまみの金属面と端部形状が設計通りに描画されない。

最寄比較: R065, R068。

- major / R062-skin-specificity: 固有skinのhandleセレクタは3classで、共通baseの4classより弱い。背景・角丸が上書きされ、design.mdの素材・外形と実物が一致しない。横の結果にも差があり、配布先のCSS読込順に依存する箇所を残す。
- 根拠: 固定snapshot/round-1、captures/reviewer-scroll/zip-seam-scroll-vertical.png と zip-seam-scroll-horizontal-ltr.png、extra-checks.jsonのverticalPaint/values[].paint。通常表示のhandle background-imageは縦でnone、border-radiusは3px。横もR071以外はnone。source/zip-seam-scroll/styles.cssとexports内shared/scrollbar-base.cssの競合。
- 改善: 共通baseより確実に強い、部品rootに閉じた詳細度でskinのhandle/各要素を定義する。縦横ともcomputedStyleで固有背景・角丸の適用を確認し、実寸画像で接続・素材・本文非干渉を再検査する。R061の追加造形は本来の非対称陶片を表示してから判断し、現時点で別案への作り直しは要求しない。

### R063 spindle-guide-scroll — adjust

芯と両端フランジは明瞭だが巻き線が消えて無地の棒となる。巻き枠としての中心的な素材構造が欠ける。

最寄比較: R070, R071。

- major / R063-skin-specificity: 固有skinのhandleセレクタは3classで、共通baseの4classより弱い。背景・角丸が上書きされ、design.mdの素材・外形と実物が一致しない。横の結果にも差があり、配布先のCSS読込順に依存する箇所を残す。
- 根拠: 固定snapshot/round-1、captures/reviewer-scroll/spindle-guide-scroll-vertical.png と spindle-guide-scroll-horizontal-ltr.png、extra-checks.jsonのverticalPaint/values[].paint。通常表示のhandle background-imageは縦でnone、border-radiusは3px。横もR071以外はnone。source/spindle-guide-scroll/styles.cssとexports内shared/scrollbar-base.cssの競合。
- 改善: 共通baseより確実に強い、部品rootに閉じた詳細度でskinのhandle/各要素を定義する。縦横ともcomputedStyleで固有背景・角丸の適用を確認し、実寸画像で接続・素材・本文非干渉を再検査する。R061の追加造形は本来の非対称陶片を表示してから判断し、現時点で別案への作り直しは要求しない。

### R064 reed-clasp-scroll — adjust

二つの節と細い茎は固有だが、乾いた繊維の面と非対称な端形状が描画されず、均一な黄土色の棒になっている。

最寄比較: R061, R071。

- major / R064-skin-specificity: 固有skinのhandleセレクタは3classで、共通baseの4classより弱い。背景・角丸が上書きされ、design.mdの素材・外形と実物が一致しない。横の結果にも差があり、配布先のCSS読込順に依存する箇所を残す。
- 根拠: 固定snapshot/round-1、captures/reviewer-scroll/reed-clasp-scroll-vertical.png と reed-clasp-scroll-horizontal-ltr.png、extra-checks.jsonのverticalPaint/values[].paint。通常表示のhandle background-imageは縦でnone、border-radiusは3px。横もR071以外はnone。source/reed-clasp-scroll/styles.cssとexports内shared/scrollbar-base.cssの競合。
- 改善: 共通baseより確実に強い、部品rootに閉じた詳細度でskinのhandle/各要素を定義する。縦横ともcomputedStyleで固有背景・角丸の適用を確認し、実寸画像で接続・素材・本文非干渉を再検査する。R061の追加造形は本来の非対称陶片を表示してから判断し、現時点で別案への作り直しは要求しない。

### R068 sightline-scroll — pass

長短の目盛り、読取窓、主読取線が別の役割を持ち、実寸でも位置を読む器具として成立。共通CSSによる角丸の小さな差は残る。

最寄比較: R062, R075。

- minor / R068-radius-specificity: 共通baseが固有の角丸指定を上書きする。読取窓と目盛りの造形は成立しており、A判定を覆す差ではない。
- 根拠: captures/reviewer-scroll/extra-checks.json: handle radius=3px、skin指定2px。
- 改善: 他のスクロールと合わせて詳細度を整理し、指定した2pxを適用する。

### R069 beaded-wire-scroll — pass

細い芯を通る三粒と中央銀・外側金の大小関係が明快。通常のつまみ輪郭を持たず、最小長でも粒を識別できる。

最寄比較: R064, R065。

### R070 spline-seat-scroll — adjust

二本のガイドと開いた受けの切欠きはR063と明確に異なる。ただし曲面の濃淡と丸みがCSS競合で失われ、平板なC字へ寄る。

最寄比較: R063, R067, R048。

- major / R070-skin-specificity: 固有skinのhandleセレクタは3classで、共通baseの4classより弱い。背景・角丸が上書きされ、design.mdの素材・外形と実物が一致しない。横の結果にも差があり、配布先のCSS読込順に依存する箇所を残す。
- 根拠: 固定snapshot/round-1、captures/reviewer-scroll/spline-seat-scroll-vertical.png と spline-seat-scroll-horizontal-ltr.png、extra-checks.jsonのverticalPaint/values[].paint。通常表示のhandle background-imageは縦でnone、border-radiusは3px。横もR071以外はnone。source/spline-seat-scroll/styles.cssとexports内shared/scrollbar-base.cssの競合。
- 改善: 共通baseより確実に強い、部品rootに閉じた詳細度でskinのhandle/各要素を定義する。縦横ともcomputedStyleで固有背景・角丸の適用を確認し、実寸画像で接続・素材・本文非干渉を再検査する。R061の追加造形は本来の非対称陶片を表示してから判断し、現時点で別案への作り直しは要求しない。

### R071 parallel-pencil-scroll — adjust

木口と暗い芯、銀の留めは読めるが、縦表示で木軸の三面が消える。横表示では三面が現れ、方向によって素材が変わる。

最寄比較: R065, R066, R064。

- major / R071-skin-specificity: 固有skinのhandleセレクタは3classで、共通baseの4classより弱い。背景・角丸が上書きされ、design.mdの素材・外形と実物が一致しない。横の結果にも差があり、配布先のCSS読込順に依存する箇所を残す。
- 根拠: 固定snapshot/round-1、captures/reviewer-scroll/parallel-pencil-scroll-vertical.png と parallel-pencil-scroll-horizontal-ltr.png、extra-checks.jsonのverticalPaint/values[].paint。通常表示のhandle background-imageは縦でnone、border-radiusは3px。横もR071以外はnone。source/parallel-pencil-scroll/styles.cssとexports内shared/scrollbar-base.cssの競合。
- 改善: 共通baseより確実に強い、部品rootに閉じた詳細度でskinのhandle/各要素を定義する。縦横ともcomputedStyleで固有背景・角丸の適用を確認し、実寸画像で接続・素材・本文非干渉を再検査する。R061の追加造形は本来の非対称陶片を表示してから判断し、現時点で別案への作り直しは要求しない。

## 実施検査

- review-input-1のsourceHashes 100ファイルを固定sourceと照合し全一致。10件のnative CSSはimportパスを除きsourceと一致。
- Chromium /usr/bin/chromium、Vite、固定native export実行。実内容32段落を8件へ注入。320pxで縦50%・Home/End・dragを実操作。
- 横LTR/RTLで50%、Home=0/End=100、広い32px hitの端(y+3)から30pxドラッグで8件とも50→66。見た目の細さと操作域を分離。
- hover→leave→reenterを通常motionで操作。8件のforced-colorsでcustom rail hidden、data-enhanced=false、native scrollbar-width:auto、native viewportのキー操作を確認。
- 8件のreduced-motionでhandle transition=0s/animation=none。2ボタンもart/spinnerのreducedを計測。
- 2ボタンをEnterでbusy化、Enter/Space/programmatic click再実行抑止、解除後Spaceで再実行。label相対矩形/色、button矩形、面背景/opacityは初期とbusyで完全一致。320px長文でもdocument幅320。forced spinnerの開口とfocusを画像確認。
- 730件baselineメタデータの関連候補を検索、scrollbars/buttonsカテゴリ原画像と今回実寸/拡大画像、B001〜B003既検査の機構を比較。各partに最寄番号を記載。
- 追加のhorizontal-detail.pngで巻き線消失を発見し、extra-checks.jsonで背景と角丸をcomputedStyle計測。CSS詳細度に原因を特定。

## 範囲と制限

- 全730件を今回再操作したわけではない。既存監査と関連候補画像を比較した。
- Chromiumでの検査。実機touch、他ブラウザは未実施。forced colorsはemulation。
- CSS競合修正後の本来の素材表現は未検査。R061のA造形最終判定は修正後の実物で行う。
