# B005 round 4 — changes_requested

全10件にforced-colors時の選択済み文字消失があるため、最終判定は9 adjust / 1 redesign。通常造形単独では7 pass / 2 adjust / 1 redesign。通常造形が合格の7件に追加の意匠変更は要求しない。

## 共通の重要問題

短い標準ラベルでも選択済みの名称・説明・符号・確定印が白い矩形に埋もれる。`captures/reviewer-4/contact-forced.png`と各`*-forced-short.png`を参照。既存probeの行背景と文字色の比較だけでは検出できなかった。通常モードのコントラスト検査は通過している。

## 個別判定

### R076 interleave-select — adjust（通常造形 pass）

紙の層・背・紙へまたがる綴じ輪が構造として読める。選択の銅色の綴じ線と確定印は情報を邪魔せず、輪が機能と結び付く。 通常造形は合格基準として固定し、残件は共通forced-colors不具合。

最寄比較: R021, R035, R050, R082。

- **blocking / R076-forced-selected-text**: 選択済み行の名称・説明・符号・確定印が白いbackplateに埋もれ、文字を読めない。標準の短いラベルでも再現する。既存probeの行背景と文字色が異なるという判定だけでは、文字直下の実描画を検出できない。
- 根拠: 固定round-4をforced-colors:activeで初期選択のまま展開。captures/reviewer-4/interleave-select-forced-short.png と -forced.png。contact-forced.pngで全10件を比較。forced-paint.jsonは選択行Highlight系背景、子文字rgb(255,255,255)、forcedColorAdjust:autoを記録。
- 改善: forced colorsのシステム色と実描画の組合せを修正する。例えばCanvas/CanvasTextの本文を保ち、選択はHighlightの外枠と確定印で示す構成へ統一する。Highlight面を保持するなら文字直下のbackplateまで含めて読めることを実画像で確認する。行背景だけの比較に加え、短文/長文・選択行変更後の文字の視認を検証する。

### R077 railcar-select — adjust（通常造形 pass）

暗い空隙を挟んで桟から下がる切欠き札が明快。候補を替えても穴・吊り線・札が残り、通常の行背景の色替えとは異なる。 通常造形は合格基準として固定し、残件は共通forced-colors不具合。

最寄比較: R022, R028, R076。

- **blocking / R077-forced-selected-text**: 選択済み行の名称・説明・符号・確定印が白いbackplateに埋もれ、文字を読めない。標準の短いラベルでも再現する。既存probeの行背景と文字色が異なるという判定だけでは、文字直下の実描画を検出できない。
- 根拠: 固定round-4をforced-colors:activeで初期選択のまま展開。captures/reviewer-4/railcar-select-forced-short.png と -forced.png。contact-forced.pngで全10件を比較。forced-paint.jsonは選択行Highlight系背景、子文字rgb(255,255,255)、forcedColorAdjust:autoを記録。
- 改善: forced colorsのシステム色と実描画の組合せを修正する。例えばCanvas/CanvasTextの本文を保ち、選択はHighlightの外枠と確定印で示す構成へ統一する。Highlight面を保持するなら文字直下のbackplateまで含めて読めることを実画像で確認する。行背景だけの比較に加え、短文/長文・選択行変更後の文字の視認を検証する。

### R078 thumb-index-select — adjust（通常造形 pass）

左右の折り込み、候補下端のV字の口、クラフトの表裏が同じ小包の構造にまとまる。固定本文面と折り口の状態変化を分離している。 通常造形は合格基準として固定し、残件は共通forced-colors不具合。

最寄比較: R044, R052, R093。

- **blocking / R078-forced-selected-text**: 選択済み行の名称・説明・符号・確定印が白いbackplateに埋もれ、文字を読めない。標準の短いラベルでも再現する。既存probeの行背景と文字色が異なるという判定だけでは、文字直下の実描画を検出できない。
- 根拠: 固定round-4をforced-colors:activeで初期選択のまま展開。captures/reviewer-4/thumb-index-select-forced-short.png と -forced.png。contact-forced.pngで全10件を比較。forced-paint.jsonは選択行Highlight系背景、子文字rgb(255,255,255)、forcedColorAdjust:autoを記録。
- 改善: forced colorsのシステム色と実描画の組合せを修正する。例えばCanvas/CanvasTextの本文を保ち、選択はHighlightの外枠と確定印で示す構成へ統一する。Highlight面を保持するなら文字直下のbackplateまで含めて読めることを実画像で確認する。行背景だけの比較に加え、短文/長文・選択行変更後の文字の視認を検証する。

### R079 split-ticket-select — adjust（通常造形 pass）

固定半径の非対称な凹みと露出した明るい断面、右外周の削りが石の厚みを示す。長文でも角が読む面へ入り込まず、R033の旧長文問題を再発していない。 通常造形は合格基準として固定し、残件は共通forced-colors不具合。

最寄比較: R025, R033, R061。

- **blocking / R079-forced-selected-text**: 選択済み行の名称・説明・符号・確定印が白いbackplateに埋もれ、文字を読めない。標準の短いラベルでも再現する。既存probeの行背景と文字色が異なるという判定だけでは、文字直下の実描画を検出できない。
- 根拠: 固定round-4をforced-colors:activeで初期選択のまま展開。captures/reviewer-4/split-ticket-select-forced-short.png と -forced.png。contact-forced.pngで全10件を比較。forced-paint.jsonは選択行Highlight系背景、子文字rgb(255,255,255)、forcedColorAdjust:autoを記録。
- 改善: forced colorsのシステム色と実描画の組合せを修正する。例えばCanvas/CanvasTextの本文を保ち、選択はHighlightの外枠と確定印で示す構成へ統一する。Highlight面を保持するなら文字直下のbackplateまで含めて読めることを実画像で確認する。行背景だけの比較に加え、短文/長文・選択行変更後の文字の視認を検証する。

### R080 shelf-bay-select — adjust（通常造形 pass）

大きな索引列と右へ折れた耳の連続が候補を探す構造を作る。本文列と索引列の階層が明快で、左右交互の不安定な外形を解消。 通常造形は合格基準として固定し、残件は共通forced-colors不具合。

最寄比較: R028, R076, R084。

- **blocking / R080-forced-selected-text**: 選択済み行の名称・説明・符号・確定印が白いbackplateに埋もれ、文字を読めない。標準の短いラベルでも再現する。既存probeの行背景と文字色が異なるという判定だけでは、文字直下の実描画を検出できない。
- 根拠: 固定round-4をforced-colors:activeで初期選択のまま展開。captures/reviewer-4/shelf-bay-select-forced-short.png と -forced.png。contact-forced.pngで全10件を比較。forced-paint.jsonは選択行Highlight系背景、子文字rgb(255,255,255)、forcedColorAdjust:autoを記録。
- 改善: forced colorsのシステム色と実描画の組合せを修正する。例えばCanvas/CanvasTextの本文を保ち、選択はHighlightの外枠と確定印で示す構成へ統一する。Highlight面を保持するなら文字直下のbackplateまで含めて読めることを実画像で確認する。行背景だけの比較に加え、短文/長文・選択行変更後の文字の視認を検証する。

### R082 marginalia-select — adjust（通常造形 pass）

折った留め帯が背の縫い線をまたぎ、布の候補へつながる。紫色だけに頼らず、R055の輪やR047の取っ手と異なる留め方が読める。 通常造形は合格基準として固定し、残件は共通forced-colors不具合。

最寄比較: R031, R047, R055, R076。

- **blocking / R082-forced-selected-text**: 選択済み行の名称・説明・符号・確定印が白いbackplateに埋もれ、文字を読めない。標準の短いラベルでも再現する。既存probeの行背景と文字色が異なるという判定だけでは、文字直下の実描画を検出できない。
- 根拠: 固定round-4をforced-colors:activeで初期選択のまま展開。captures/reviewer-4/marginalia-select-forced-short.png と -forced.png。contact-forced.pngで全10件を比較。forced-paint.jsonは選択行Highlight系背景、子文字rgb(255,255,255)、forcedColorAdjust:autoを記録。
- 改善: forced colorsのシステム色と実描画の組合せを修正する。例えばCanvas/CanvasTextの本文を保ち、選択はHighlightの外枠と確定印で示す構成へ統一する。Highlight面を保持するなら文字直下のbackplateまで含めて読めることを実画像で確認する。行背景だけの比較に加え、短文/長文・選択行変更後の文字の視認を検証する。

### R083 hex-bolster-select — redesign（通常造形 redesign）

面へかかる左右の顎は改善したが、C字の金具で矩形を両側から挟み、内側へ締める構造と動きが合格済みR048を反復する。

最寄比較: R048, R042, R051。

- **blocking / R083-forced-selected-text**: 選択済み行の名称・説明・符号・確定印が白いbackplateに埋もれ、文字を読めない。標準の短いラベルでも再現する。既存probeの行背景と文字色が異なるという判定だけでは、文字直下の実描画を検出できない。
- 根拠: 固定round-4をforced-colors:activeで初期選択のまま展開。captures/reviewer-4/hex-bolster-select-forced-short.png と -forced.png。contact-forced.pngで全10件を比較。forced-paint.jsonは選択行Highlight系背景、子文字rgb(255,255,255)、forcedColorAdjust:autoを記録。
- 改善: forced colorsのシステム色と実描画の組合せを修正する。例えばCanvas/CanvasTextの本文を保ち、選択はHighlightの外枠と確定印で示す構成へ統一する。Highlight面を保持するなら文字直下のbackplateまで含めて読めることを実画像で確認する。行背景だけの比較に加え、短文/長文・選択行変更後の文字の視認を検証する。

- **major / R083-clamp-duplication**: R048と同じ左右C字金具、平らな矩形面、内側へ締める動きが主役。popupに三行並べる差だけではカテゴリを跨ぐAの別案として不十分。六角という名称の再現自体が要件ではない。
- 根拠: reviewer-4/hex-bolster-select-initial.png、-expanded.png、-selected-last.png。B003/captures/reviewer-round2/reframed-key-button-initial.png、-hover.png。skinでは左右border4pxのC字を選択時translateX(+2px/-2px)。
- 改善: 対角の支点と楔など、荷重と接続が異なる保持構造へ再設計する。例えば上下/斜めの別方向から固定点と可動点を組み、選択時に可動点だけが係合する。本文/行hit領域は固定し、単にC字を六角に塗り替える変更で終えない。

### R084 twin-column-select — adjust（通常造形 adjust）

本文と符号の列、選択時の区切り維持は改善。現状は紙色の罫線リストと細い穿孔模様が中心で、Aの固有構造はまだ弱い。

最寄比較: R080, R305, R615, R685。

- **blocking / R084-forced-selected-text**: 選択済み行の名称・説明・符号・確定印が白いbackplateに埋もれ、文字を読めない。標準の短いラベルでも再現する。既存probeの行背景と文字色が異なるという判定だけでは、文字直下の実描画を検出できない。
- 根拠: 固定round-4をforced-colors:activeで初期選択のまま展開。captures/reviewer-4/twin-column-select-forced-short.png と -forced.png。contact-forced.pngで全10件を比較。forced-paint.jsonは選択行Highlight系背景、子文字rgb(255,255,255)、forcedColorAdjust:autoを記録。
- 改善: forced colorsのシステム色と実描画の組合せを修正する。例えばCanvas/CanvasTextの本文を保ち、選択はHighlightの外枠と確定印で示す構成へ統一する。Highlight面を保持するなら文字直下のbackplateまで含めて読めることを実画像で確認する。行背景だけの比較に加え、短文/長文・選択行変更後の文字の視認を検証する。

- **major / R084-receipt-structure**: 通常の紙色の一覧に罫線・右端4pxの穿孔模様・傾けた四角いチェックを加えた構成が中心。本文列の整列は良いが、R305/R615/R685にも現れる紙と帳票の表層的な装飾との差が弱く、Bにも自然に収まる。
- 根拠: reviewer-4/twin-column-select-expanded.png、-selected-last.png、-closed-long.png。原730のR305 receipt-tail-notice、R615 ledger-command、R685 receipt-register-table画像と比較。
- 改善: 読み面の簡潔さを維持し、独立した打刻半券や切取り部の段差/折れを一つ設け、選択確定の印がその構造に収まるようにする。穿孔を増やすだけでなく本文と確定欄の接合を外形で示す。本文全体を動かしたり多重装飾を足したりする必要はない。

### R085 brass-ledger-select — adjust（通常造形 pass）

木の面板と下の木口、棚の暗い空隙、二つの支点を持つ取っ手が一貫する。金と水色の混在を解消し、確定印と取っ手の状態が対応する。 通常造形は合格基準として固定し、残件は共通forced-colors不具合。

最寄比較: R029, R079, R026。

- **blocking / R085-forced-selected-text**: 選択済み行の名称・説明・符号・確定印が白いbackplateに埋もれ、文字を読めない。標準の短いラベルでも再現する。既存probeの行背景と文字色が異なるという判定だけでは、文字直下の実描画を検出できない。
- 根拠: 固定round-4をforced-colors:activeで初期選択のまま展開。captures/reviewer-4/brass-ledger-select-forced-short.png と -forced.png。contact-forced.pngで全10件を比較。forced-paint.jsonは選択行Highlight系背景、子文字rgb(255,255,255)、forcedColorAdjust:autoを記録。
- 改善: forced colorsのシステム色と実描画の組合せを修正する。例えばCanvas/CanvasTextの本文を保ち、選択はHighlightの外枠と確定印で示す構成へ統一する。Highlight面を保持するなら文字直下のbackplateまで含めて読めることを実画像で確認する。行背景だけの比較に加え、短文/長文・選択行変更後の文字の視認を検証する。

### R086 folding-caption-select — adjust（通常造形 adjust）

本文の整列と対角配置は良いが、留めは紙の内側に描いたL字印に留まり、保持の接合が成立していない。

最寄比較: R032, R028, R051。

- **blocking / R086-forced-selected-text**: 選択済み行の名称・説明・符号・確定印が白いbackplateに埋もれ、文字を読めない。標準の短いラベルでも再現する。既存probeの行背景と文字色が異なるという判定だけでは、文字直下の実描画を検出できない。
- 根拠: 固定round-4をforced-colors:activeで初期選択のまま展開。captures/reviewer-4/folding-caption-select-forced-short.png と -forced.png。contact-forced.pngで全10件を比較。forced-paint.jsonは選択行Highlight系背景、子文字rgb(255,255,255)、forcedColorAdjust:autoを記録。
- 改善: forced colorsのシステム色と実描画の組合せを修正する。例えばCanvas/CanvasTextの本文を保ち、選択はHighlightの外枠と確定印で示す構成へ統一する。Highlight面を保持するなら文字直下のbackplateまで含めて読めることを実画像で確認する。行背景だけの比較に加え、短文/長文・選択行変更後の文字の視認を検証する。

- **major / R086-corner-joint**: 対角の金具が紙端をまたがず、面内に浮いたL字のコーナー印として見える。小さな鋲も紙の内側で、金具がどこへ留まり紙を押さえるか不明。単なる角丸リストからの改善はあるが、保持構造がAの見せ場になるには弱い。
- 根拠: reviewer-4/folding-caption-select-expanded.png と -closed-long.png。option::beforeはleft5px/top6pxの26×20px、3px上左border。afterも内側right5px/bottom6px。B002 R032の外周をまたぐ保持板と比較。
- 改善: 金属の角帽子など、台・紙端・上にかかる唇を一続きの断面で描き、鋲を台と金具の接合へ置く。triggerとpopupで同じ保持原理を使い、本文への侵入を避ける。R032の片隅の回転板をそのまま反復せず、対角配置の必然性を保つ。

## 実施検査

- 最新固定round-4のみ検査。review-input-4のsourceHashes100件一致。nativeとsourceの10件CSSはimportパス以外一致。
- Chromium /usr/bin/chromium、Viteでportable native版を実行。10件ともSpace展開、End/Enterで別候補確定、focus復帰、Home/Escapeで確定維持、クリック確定を操作。
- trigger disabledで展開抑止、別検査で候補2をaria-disabledにしてHome/ArrowDown/Enterがpublishedへスキップすることを全10件確認。
- normal motionのhover→leave→reenterで行と本文の相対矩形が不変。初期/展開/hover/別候補確定後の画像を取得し、選択済み行の面と造形の保持を目視。
- 320px長文の日本語＋空白なし英字を全候補へ注入。popup/文字が収まりdocument幅320。長文を実際に確定した閉じたtriggerも全10件撮影し幅320維持。
- RTL展開、reduced-motionでtransient animationなしを確認。通常色のpopup可視文字contrast検査はrailcarを除き失敗0、railcarはpseudo面を実画像で確認。
- forced-colorsは初回probeの数値判定こそ通過したが、画像で全10件の選択済み本文消失を発見。新規ページ・標準短文でも再現しforced-shortとforced-paint.jsonへ記録。forcedの視覚検査は不合格。
- 730件baselineメタデータから素材/機構の近似候補を検索し、dropdownsカテゴリ原画像、R305/R615/R685、B003 R048、B002 R032の画像を比較。既検査40件の確定構造も比較基準に使用。

## 制限

- 全730件の再操作は実施していない。既存監査と近似画像の比較。
- Chromiumとforced/reduced emulationでの検査。実機touchと他ブラウザ未実施。
- 旧round1〜3とgallery round2画像は最終色判定に使っていない。
- 一時的なブラウザ上のforced表示改善案の試験は固定snapshotの合格証拠に含めない。正本実装は未変更。
