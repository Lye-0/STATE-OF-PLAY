# B008 round 4 独立検査

10件中6件 pass、4件 changes_required。凍結版と実galleryを確認し、現在作者・共有ソースのmanifest hash一致を確認。作者ファイルは変更していない。

## R238 pinstripe-range — changes_required

上下の目盛をまたぐ移動枠と読取り線が値の操作を説明し、元の赤線だけの構造から独自性は改善。通常の操作と長文は安定。ただしforced colorsのつまみ位置は残存不具合。

- reproducible_rendering: forced-colors:active でネイティブつまみ中心がネイティブ軌道中心より14px上に浮く。旧カスタム軌道も残る。portable/gallery双方で再現。 改善案: forced colorsではカスタム軌道を隠し、thumbの従来margin-topを解除してnative軌道へ揃える。

証拠: [measurements-4.json](measurements-4.json), [sliders-measurements-4.json](sliders-measurements-4.json), [reset-probe-4.json](reset-probe-4.json), [evidence-4/sliders-portable-sheet.jpg](evidence-4/sliders-portable-sheet.jpg), [evidence-4/sliders-gallery-sheet.jpg](evidence-4/sliders-gallery-sheet.jpg)

## R245 enamel-peg-range — changes_required

青灰の頭と軸が一体のエナメル留め具になり、旧淡金色より把持点が明快。通常の可読性と狭幅は成立。forced colorsの旧塗り線を除去する必要がある。

- reproducible_rendering: forced colorsでnative軌道の下に旧金色の塗り線が残り、二本の値表示が並ぶ。portable/gallery双方で再現。 改善案: forced colorsでは残存するカスタムrail/fillを隠し、nativeの値表示へ統一する。

証拠: [measurements-4.json](measurements-4.json), [sliders-measurements-4.json](sliders-measurements-4.json), [reset-probe-4.json](reset-probe-4.json), [evidence-4/sliders-portable-sheet.jpg](evidence-4/sliders-portable-sheet.jpg), [evidence-4/sliders-gallery-sheet.jpg](evidence-4/sliders-gallery-sheet.jpg)

## R253 loop-label-choice — changes_required

ネイティブ選択丸との競合は解消したが、現状は普通の紙面上端へ楕円を移した形で、綴じ糸と紙を結ぶ穴・接点・前後関係が見えない。Aの構造的独自性として改善不足と判断。

- design_judgment: ネイティブ選択丸との競合は解消したが、現状は普通の紙面上端へ楕円を移した形で、綴じ糸と紙を結ぶ穴・接点・前後関係が見えない。Aの構造的独自性として改善不足と判断。 改善案: 紙に穴や綴じ代を設け、糸が穴を通り表裏へ回る接点と遮蔽を示す。単に楕円を追加した印象から、紙を綴じる構造へ進める。

証拠: [measurements-4.json](measurements-4.json), [choices-measurements-4.json](choices-measurements-4.json), [evidence-4/radios-portable-sheet.jpg](evidence-4/radios-portable-sheet.jpg), [evidence-4/radios-gallery-sheet.jpg](evidence-4/radios-gallery-sheet.jpg)

## R258 clasp-band-choice — pass

右側の布帯が金属状の留め具を通り、面を留める構造として読める。選択表示との役割が分かれ、長文・RTLでも文字を妨げない。


証拠: [measurements-4.json](measurements-4.json), [choices-measurements-4.json](choices-measurements-4.json), [evidence-4/radios-portable-sheet.jpg](evidence-4/radios-portable-sheet.jpg), [evidence-4/radios-gallery-sheet.jpg](evidence-4/radios-gallery-sheet.jpg)

## R261 stapled-card-choice — pass

左の折り返した綴じ代と連続金具が紙束をまとめる構造を作り、単一の小さな飾りより成立。文字・選択・操作も安定。


証拠: [measurements-4.json](measurements-4.json), [choices-measurements-4.json](choices-measurements-4.json), [evidence-4/radios-portable-sheet.jpg](evidence-4/radios-portable-sheet.jpg), [evidence-4/radios-gallery-sheet.jpg](evidence-4/radios-gallery-sheet.jpg)

## R264 shallow-bowl-choice — pass

縁を一周と下部の断面に絞り、重なる楕円光沢の古さを解消。薄い器の段差が控えめに読め、長文と選択状態も明快。


証拠: [measurements-4.json](measurements-4.json), [choices-measurements-4.json](choices-measurements-4.json), [evidence-4/radios-portable-sheet.jpg](evidence-4/radios-portable-sheet.jpg), [evidence-4/radios-gallery-sheet.jpg](evidence-4/radios-gallery-sheet.jpg)

## R270 warm-plan-choice — pass

プラン名・用途説明・価格を独立した列に分け、狭幅では価格が下へ移る。色替えのみだった元案から情報構造を改善し、比較用途に適する。


証拠: [measurements-4.json](measurements-4.json), [choices-measurements-4.json](choices-measurements-4.json), [evidence-4/radios-portable-sheet.jpg](evidence-4/radios-portable-sheet.jpg), [evidence-4/radios-gallery-sheet.jpg](evidence-4/radios-gallery-sheet.jpg), [data-parity-4.json](data-parity-4.json)

## R281 letterbox-finder — changes_required

投入口の折り返しと下端の薄い折り目で重いアーチを解消し、検索欄と一覧の区別は明快。ただし一覧の説明とbadgeの小文字が4.286:1に留まる。

- contrast: 有効項目の説明11px／badge10pxがrgb(101,107,97)、背景rgb(232,227,216)で4.286:1。通常・hover完了・解除後、portable/gallery双方で4.5:1未満。 改善案: 一覧の補助説明とbadgeの文字色を濃くし、通常／hoverの確定状態で4.5:1以上を確保する。

証拠: [combos-final-4.json](combos-final-4.json), [evidence-4/combos-portable-sheet.jpg](evidence-4/combos-portable-sheet.jpg), [evidence-4/combos-gallery-sheet.jpg](evidence-4/combos-gallery-sheet.jpg), [evidence-4/combos-portable-access-sheet.jpg](evidence-4/combos-portable-access-sheet.jpg), [evidence-4/combos-gallery-access-sheet.jpg](evidence-4/combos-gallery-access-sheet.jpg)

## R288 soft-contact-finder — pass

人物印・チーム名・連絡先の行構造が用途を示す。検索対象も連絡先に対応し、長いメールアドレスが折り返す。hover合成面上の最小比4.740:1も確認。


証拠: [combos-final-4.json](combos-final-4.json), [evidence-4/combos-portable-sheet.jpg](evidence-4/combos-portable-sheet.jpg), [evidence-4/combos-gallery-sheet.jpg](evidence-4/combos-gallery-sheet.jpg), [evidence-4/combos-portable-access-sheet.jpg](evidence-4/combos-portable-access-sheet.jpg), [evidence-4/combos-gallery-access-sheet.jpg](evidence-4/combos-gallery-access-sheet.jpg), [data-parity-4.json](data-parity-4.json)

## R290 warm-library-finder — pass

書名・著者・棚コードを分け、背の帯で図書一覧の用途を示す。連絡先パーツと構造差があり、検索・長文・選択も安定。


証拠: [combos-final-4.json](combos-final-4.json), [evidence-4/combos-portable-sheet.jpg](evidence-4/combos-portable-sheet.jpg), [evidence-4/combos-gallery-sheet.jpg](evidence-4/combos-gallery-sheet.jpg), [evidence-4/combos-portable-access-sheet.jpg](evidence-4/combos-portable-access-sheet.jpg), [evidence-4/combos-gallery-access-sheet.jpg](evidence-4/combos-gallery-access-sheet.jpg), [data-parity-4.json](data-parity-4.json)

## 範囲と記録

特定状態とターゲットの検査。無欠陥保証ではない。form/長文/追加設定は凍結initを実galleryのCSS環境に組み込んだ検査fixtureも使用。Reactは展示configの同一性を比較しReact全操作の別実行は含めない。choices-measurementsのcombo途中失敗はcombos-finalの成功記録で置換。R288の初期合成計算疑義はcolor(srgb)を正規化したcontrast-checkで棄却。

12枚のcontact sheetを全て視認。詳細な状態・フォーム値・色・矩形はJSON、検査コードとPNGも同フォルダに保存。R253は造形上の判断、R238/R245/R281は再現条件と測定を伴う指摘として区別した。
