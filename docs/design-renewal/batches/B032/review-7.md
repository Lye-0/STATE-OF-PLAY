# B032 round-7 独立検査

**9件合格、R441のみ読字余白の限定調整。通常造形は全10件合格。**

通常造形と色は合格。下段を#21190fに変更し、未選択床6.89:1/選択床5.13:1へ改善。forcedの名称/下段はシステム色の対を維持し、件数無しの空床も短い返端へ解消。ただし短い名称＋大きい件数＋削除では下段の論理端に余白がなく、実数字が外周へ接する。配置の限定調整が残る。

- **R441-short-name-count-edge**：名称「項目A」＋アイコン＋9桁件数123456789＋削除の条件で札幅132.078125px、件数幅70.078125pxとなり、LTRの件数左端が札左端、RTLの件数右端が札右端と完全一致する。実数字が下弓の外周/曲がる側面へ詰まり、読む平面の内側の余白がなくなる。長い名称だけの検査では札が広いため現れない。
- 改善：下段の件数/削除の両端に論理的な読字余白を予約する。短い名称でも下段の必要幅を札へ反映し、狭いコンテナでは件数の折返し/下段分割で収める。形を再設計せず、LTR/RTL・短長名称・9桁件数・削除有無で実Rangeと読む面を照合する。
- 根拠：captures/reviewer-final-7/tag-320-ltr.png、tag-320-rtl.png、checks.json。320/390/768の両方向で同じ端一致を実測。

合格、T保持。native入力/範囲のLTR isolateに加え、font上限26pxへ調整。-12345.678の実Canvas字幅は最も大きい768px時も156.533203125px、実入力の内幅164pxへ収まる。320/390/768×LTR/RTLすべて先頭負号と全桁を表示し、梁/単位の離隔・native入力/IME/caret/form/上下限/操作hitも維持した。

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

- 固定round-7正本100hash/CSS10一致。6→7は99正本不変、R452 CSSのみ変更。4→5/5→6も各99不変でR441 CSSだけ。reviewer-extra-7/checks.json/inheritance.json、reviewer-extra-6/inheritance.json。
- 全9タグはround-6で独立native再実操作して成功。Space/checked/API/focus、disabled/readOnly/controlled拒否/実remove、form reset、empty/one、long320/390/768×LTR/RTL、forced/reduced/destroy。7ではその90正本が不変。logs/reviewer-badges-r6.log。
- 全9タグの54実TEXT_NODE Range（最広行の最小88.1875px、最大6行）、近い有効項目へのremove焦点、readOnly実pointer、通常hover/leave/reenterを全9×LTR/RTLで再確認。reviewer-reading-6、reviewer-badge-extra-6。
- R441 forced選択名を実画像/computedで確認。白文字とHighlight背景が対になる。通常の下弓small/buttonの#21190fは未選択#bd9e7c上6.8936:1、選択#a98560上5.1304:1。reviewer-forced-6、reviewer-badges-6/embossed-label-tags-forced.png。
- R441の短い名称/9桁件数/削除をround-7で320/390/768×LTR/RTL実撮影・Range測定し、外周と件数字面の端一致を発見。reviewer-final-7/checks.jsonとtag各画像。
- R452はround-7固定native実配布で全API/キー/上下限/step/draft確定/invalid/Escape/IME/selection保持/readOnly/disabled/controlled拒否/form reset/長い負数と単位6条件/forced/reduced/destroyを再実行して成功。logs/reviewer-numbers-r7.log。
- R452は別検査で-12345.678の実fontによるCanvas字幅と入力content幅を320/390/768×LTR/RTL測定。最大156.533203125px <= 164px、direction:ltr、全画像で符号/全桁を確認。reviewer-final-7/checks.json、number各画像。
- 通常造形はround-4の独立実像・接合・近似比較の合格を保持。R441のcount無しは5で短い返端へ調整され、6実像でも確認。元730を再度全件操作したわけではない。

## 限界

- 独立実操作はChromiumの固定native配布。React4形式/全基盤回帰は今回独立再実行しておらず、主担当の成功報告と区別する。
- 元730全件を今回再操作したわけではない。既存監査と対象・近似画像/固定CSSを使った構造比較。
- R449は元監査/設計通りB基準。残る9件をA（うちTは元形保持の精度）として評価した。
