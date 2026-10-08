# B032 round-5 限定再検査

**9件合格、R441の通常時下段の読字のみ調整。**

通常造形は合格。件数/削除の無い札を短い返端へ収め、不要な空の下段を解消。forcedの名称面はHighlight/HighlightText等へ揃い、白文字と薄茶背景の不整合を解消。ただし通常時の実件数/削除の色は未変更で、下弓上の2.55:1/1.58:1が残る。

- 通常時の件数・削除を濃い下弓へ載せたが文字は旧色のまま。未選択#735a43/#bd9e7cが2.55:1、選択#876441/#a98560が1.58:1。上橋の名前は読めても、下の実情報と操作が床へ沈む。
- 改善：下段の件数と削除に下弓で読める専用の暗い文字色を与える。forcedでは親のシステム色を継承する上書きを保ち、選択/未選択と大きい件数を実画像で照合する。
- 根拠：captures/reviewer-badge-extra-4/embossed-label-tags-rtl-dark.png、reviewer-badges-4/embossed-label-tags-selected.png。固定CSSのbefore下border色とsmall/buttonの継承色。

## 全10件判定

- R438 stitched-label-tags: pass
- R439 bracket-tags: pass
- R440 index-flag-tags: pass
- R441 embossed-label-tags: adjust
- R442 drafting-note-tags: pass
- R443 ribbon-end-tags: pass
- R444 recessed-chip-tags: pass
- R445 letterpress-tags: pass
- R449 outline-filter-tags: pass
- R452 bridge-control-number: pass

## 今回の実施範囲

- 固定正本100hash一致。round-4から99正本不変、embossed-label-tags/styles.cssのみ変更。captures/reviewer-extra-6/inheritance.jsonの4-to-5。
- 全9タグforcedの選択labelの実背景/文字色を再検査し、R441通常背景の残存が解消。captures/reviewer-forced-5/checks.json とembossed-selected-short.png。
- 通常の固定native9件を撮影し、R441件数無しの短い返端を確認。SOP_CAPTURE_ONLYであり、この撮影をAPIの再実行成功として数えない。reviewer-badges-5。
- 通常時のR441のsmall/button色と下弓色はround-4から不変。前版の実描画とCSSのコントラスト問題を引継ぎ。
- 他9件の造形/操作はround-4から正本不変のため前版の独立結果を引継ぎ。

## 限界

- 独立実操作はChromiumの固定native配布。React4形式/全基盤回帰は今回独立再実行しておらず、主担当の成功報告と区別する。
- 元730全件を今回再操作したわけではない。既存監査と対象・近似画像/固定CSSを使った構造比較。
- R449は元監査/設計通りB基準。残る9件をA（うちTは元形保持の精度）として評価した。
