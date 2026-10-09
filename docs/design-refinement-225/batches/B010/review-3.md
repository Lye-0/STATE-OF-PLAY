# B010 round 3 独立検査

10件中5件 pass、5件 changes_required。R336/R338は造形判断、R334はRTL実配置の重なり、R360/R361は既定ラベルの狭幅一文字折返し。作者ファイルは変更していない。

## R334 vertical-survey-progress — changes_required

空の額縁を除き、縦の測量尺と固定数値の役割は明快。ただし狭いRTLホストで数値列とphysical leftの尺が重なり、100%の単位が尺へ入る。

- 320px viewport・222pxホスト・RTL・100%で尺x77〜121pxの内側に単位%x108.47〜115.48pxが重なる。grid列はRTLで反転するが尺はphysical leftのまま。portableおよびgalleryを222pxへ制限したprobeで再現。 改善案：尺と数値列を同じ論理方向で配置し、LTR/RTLの0/25/100で単位も含めて交差しない余白を確保する。

証拠：[measurements-3.json](measurements-3.json), [contrast-summary-3.json](contrast-summary-3.json), [motion-summary-3.json](motion-summary-3.json), [evidence-3/progress-portable-0-sheet.jpg](evidence-3/progress-portable-0-sheet.jpg), [evidence-3/progress-portable-3-sheet.jpg](evidence-3/progress-portable-3-sheet.jpg), [evidence-3/progress-gallery-0-sheet.jpg](evidence-3/progress-gallery-0-sheet.jpg), [evidence-3/progress-gallery-3-sheet.jpg](evidence-3/progress-gallery-3-sheet.jpg)

## R336 segmented-ruler-progress — changes_required

値と充填は対応するが、一般的な十区画の分割バーへ下の細い尺と中央の切欠きを加えた構成に留まる。元の独自性不足に対する改善がまだ弱く、Aとして構造の再設計を要求する。

- 値と充填は対応するが、一般的な十区画の分割バーへ下の細い尺と中央の切欠きを加えた構成に留まる。元の独自性不足に対する改善がまだ弱く、Aとして構造の再設計を要求する。 改善案：折尺の面・節・継ぎ目など、分割自体が測る構造として読める形へ。一般的な分割バーとの構造差を作り、値の明快さを保つ。

証拠：[measurements-3.json](measurements-3.json), [contrast-summary-3.json](contrast-summary-3.json), [motion-summary-3.json](motion-summary-3.json), [evidence-3/progress-portable-0-sheet.jpg](evidence-3/progress-portable-0-sheet.jpg), [evidence-3/progress-portable-3-sheet.jpg](evidence-3/progress-portable-3-sheet.jpg), [evidence-3/progress-gallery-0-sheet.jpg](evidence-3/progress-gallery-0-sheet.jpg), [evidence-3/progress-gallery-3-sheet.jpg](evidence-3/progress-gallery-3-sheet.jpg)

## R338 caption-band-progress — changes_required

R339との階段形の重複は解消した。しかし現状は右揃え数値と標準的な充填バーが中心で、左側の内容を持たない短い二本線が浮く。キャプション帯という意図と情報を支える構造の関係が弱い。

- R339との階段形の重複は解消した。しかし現状は右揃え数値と標準的な充填バーが中心で、左側の内容を持たない短い二本線が浮く。キャプション帯という意図と情報を支える構造の関係が弱い。 改善案：色や罫線の追加に留めず、値を示す帯・節・支持面そのものの関係で用途を説明する構造へ再設計する。R338は空の短線を廃し、数値やキャプションが帯へ属する理由を形にする。

証拠：[measurements-3.json](measurements-3.json), [contrast-summary-3.json](contrast-summary-3.json), [motion-summary-3.json](motion-summary-3.json), [evidence-3/progress-portable-0-sheet.jpg](evidence-3/progress-portable-0-sheet.jpg), [evidence-3/progress-portable-3-sheet.jpg](evidence-3/progress-portable-3-sheet.jpg), [evidence-3/progress-gallery-0-sheet.jpg](evidence-3/progress-gallery-0-sheet.jpg), [evidence-3/progress-gallery-3-sheet.jpg](evidence-3/progress-gallery-3-sheet.jpg)

## R339 terraced-progress — pass

五段の高さ・細い間隔・下端の断面で段丘として読める。値の実充填と割合不明の解除も整合し、R338との重複は整理された。


証拠：[measurements-3.json](measurements-3.json), [contrast-summary-3.json](contrast-summary-3.json), [motion-summary-3.json](motion-summary-3.json), [evidence-3/progress-portable-0-sheet.jpg](evidence-3/progress-portable-0-sheet.jpg), [evidence-3/progress-portable-3-sheet.jpg](evidence-3/progress-portable-3-sheet.jpg), [evidence-3/progress-gallery-0-sheet.jpg](evidence-3/progress-gallery-0-sheet.jpg), [evidence-3/progress-gallery-3-sheet.jpg](evidence-3/progress-gallery-3-sheet.jpg)

## R342 linear-radar-progress — pass

金色の重い額縁を抑え、細い格子面と実値に追従する指示線を主役へ変更。0/25/100の位置と割合不明時の線非表示が対応する。


証拠：[measurements-3.json](measurements-3.json), [contrast-summary-3.json](contrast-summary-3.json), [motion-summary-3.json](motion-summary-3.json), [evidence-3/progress-portable-0-sheet.jpg](evidence-3/progress-portable-0-sheet.jpg), [evidence-3/progress-portable-3-sheet.jpg](evidence-3/progress-portable-3-sheet.jpg), [evidence-3/progress-gallery-0-sheet.jpg](evidence-3/progress-gallery-0-sheet.jpg), [evidence-3/progress-gallery-3-sheet.jpg](evidence-3/progress-gallery-3-sheet.jpg)

## R350 warm-reading-progress — pass

細い本文沿いの線と端の小さな数値、見出しと段階名の組版が読み物の進捗に適する。広い計器面を使うAとの用途差があり、最小文字contrastも4.521:1。


証拠：[measurements-3.json](measurements-3.json), [contrast-summary-3.json](contrast-summary-3.json), [motion-summary-3.json](motion-summary-3.json), [evidence-3/progress-portable-0-sheet.jpg](evidence-3/progress-portable-0-sheet.jpg), [evidence-3/progress-portable-3-sheet.jpg](evidence-3/progress-portable-3-sheet.jpg), [evidence-3/progress-gallery-0-sheet.jpg](evidence-3/progress-gallery-0-sheet.jpg), [evidence-3/progress-gallery-3-sheet.jpg](evidence-3/progress-gallery-3-sheet.jpg)

## R356 open-corner-upload — pass

左右のガイドと手前の立ち上がった受け皿が、ファイルを受け取る開いたトレーとして読める。選択後の書類行と削除も明快で、単なる四隅線より構造が進んだ。


証拠：[measurements-3.json](measurements-3.json), [contrast-summary-3.json](contrast-summary-3.json), [motion-summary-3.json](motion-summary-3.json), [measurements-uploads-3.json](measurements-uploads-3.json), [evidence-3/uploads-portable-0-sheet.jpg](evidence-3/uploads-portable-0-sheet.jpg), [evidence-3/files-portable-sheet.jpg](evidence-3/files-portable-sheet.jpg), [evidence-3/uploads-gallery-0-sheet.jpg](evidence-3/uploads-gallery-0-sheet.jpg), [evidence-3/files-gallery-sheet.jpg](evidence-3/files-gallery-sheet.jpg)

## R359 stone-recess-upload — pass

斜めの外縁を細くし、広い水平の読取り床を確保。枠より案内と選択が先に見え、素材の切面は残る。通常・長文・選択済みの表示は安定。


証拠：[measurements-3.json](measurements-3.json), [contrast-summary-3.json](contrast-summary-3.json), [motion-summary-3.json](motion-summary-3.json), [measurements-uploads-3.json](measurements-uploads-3.json), [evidence-3/uploads-portable-0-sheet.jpg](evidence-3/uploads-portable-0-sheet.jpg), [evidence-3/files-portable-sheet.jpg](evidence-3/files-portable-sheet.jpg), [evidence-3/uploads-gallery-0-sheet.jpg](evidence-3/uploads-gallery-0-sheet.jpg), [evidence-3/files-gallery-sheet.jpg](evidence-3/files-gallery-sheet.jpg)

## R360 folio-band-upload — changes_required

冊子の綴じ代と選択済み書類のつながりは成立。ただし222pxホストでは主ラベルの最後「プ」だけが次行に残り、元の狭幅指摘が残る。

- 320px viewport・222pxホストで通常ラベル「ここにドロップ」の「プ」だけが32px下の行に孤立する。LTR/RTL双方、portableとgallery幅制限probeで再現。gallery通常264pxでは一行。 改善案：狭いホストの綴じ代/切取帯と本文padding、書体寸法を調整して既定ラベルの一文字孤立を防ぐ。viewport幅だけでなくhost幅を基準にする。

証拠：[measurements-3.json](measurements-3.json), [contrast-summary-3.json](contrast-summary-3.json), [motion-summary-3.json](motion-summary-3.json), [measurements-focused-3.json](measurements-focused-3.json), [measurements-uploads-3.json](measurements-uploads-3.json), [evidence-3/uploads-portable-0-sheet.jpg](evidence-3/uploads-portable-0-sheet.jpg), [evidence-3/files-portable-sheet.jpg](evidence-3/files-portable-sheet.jpg), [evidence-3/uploads-gallery-0-sheet.jpg](evidence-3/uploads-gallery-0-sheet.jpg), [evidence-3/files-gallery-sheet.jpg](evidence-3/files-gallery-sheet.jpg)

## R361 perforated-upload — changes_required

細い切取帯と主紙面の関係は成立。ただし222pxホストでは主ラベルの最後「プ」だけが次行に残り、元の狭幅指摘が残る。

- 320px viewport・222pxホストで通常ラベル「ここにドロップ」の「プ」だけが32px下の行に孤立する。LTR/RTL双方、portableとgallery幅制限probeで再現。gallery通常264pxでは一行。 改善案：狭いホストの綴じ代/切取帯と本文padding、書体寸法を調整して既定ラベルの一文字孤立を防ぐ。viewport幅だけでなくhost幅を基準にする。

証拠：[measurements-3.json](measurements-3.json), [contrast-summary-3.json](contrast-summary-3.json), [motion-summary-3.json](motion-summary-3.json), [measurements-focused-3.json](measurements-focused-3.json), [measurements-uploads-3.json](measurements-uploads-3.json), [evidence-3/uploads-portable-0-sheet.jpg](evidence-3/uploads-portable-0-sheet.jpg), [evidence-3/files-portable-sheet.jpg](evidence-3/files-portable-sheet.jpg), [evidence-3/uploads-gallery-0-sheet.jpg](evidence-3/uploads-gallery-0-sheet.jpg), [evidence-3/files-gallery-sheet.jpg](evidence-3/files-gallery-sheet.jpg)

## 範囲

8枚のcontact sheetと個別画像を視認。全20経路のhover文字矩形差0px。定常文字contrast最小4.521:1。アップロード8経路でnative/API/FormData同期・削除・reject・disabled・resetを確認。

特定状態・ターゲットの確認で無欠陥保証ではない。実galleryのCSS環境へ同一hashの凍結initを組み込んだ長文/API/form fixtureを含む。専用upload fixtureのform幅未指定による初回縮みはwidth100%指定後に全8経路を再実行し記録を置換。空file inputのFormDataは標準の空名Fileを含む。dropは実ブラウザのDataTransferを使った合成イベント。
