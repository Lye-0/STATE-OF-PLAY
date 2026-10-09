# B013 round3 独立検査

**changes_required — 1件 pass（R458）/ 9件差戻し。**

全10件を凍結portableと実galleryで実操作。16比較画像と候補の近接画像を視認した。作者変更は行っていない。タグ7件はSEQUENCEではなく共有navigation.tsの既存mountBadgesを使用する。

## R430 warm-reading-trail — changes_required

親パスから明朝の章見出しへつなぐ配置は読書用途に合う。省略メニュー内の長い階層名が収まらない。

- **overflow**: 省略メニューで空白なし階層名 LongUnbrokenProjectIdentifier1234567890 を2回連結すると折り返されず、panel clientWidth238 / scrollWidth447。portable/gallery、LTR/RTL/forcedで末尾が欠ける。 改善案: メニューとリンクを縮小可能にしoverflow-wrap:anywhereなどで文字を面内へ折り返す。

証拠: [breadcrumbs-portable-base-1-sheet.jpg](evidence-3/breadcrumbs-portable-base-1-sheet.jpg), [breadcrumbs-portable-menus-1-sheet.jpg](evidence-3/breadcrumbs-portable-menus-1-sheet.jpg), [breadcrumbs-gallery-base-1-sheet.jpg](evidence-3/breadcrumbs-gallery-base-1-sheet.jpg), [breadcrumbs-gallery-menus-1-sheet.jpg](evidence-3/breadcrumbs-gallery-menus-1-sheet.jpg)

## R436 loop-label-tags — changes_required

ピルから穴付きの矩形札へ進んだが、輪が穴を通る前後関係はまだ弱い。共有nativeフォーム契約も修正が必要。

- **native_form**: init({name:"tags",selectable:true,removable:true,defaultValue:["ready"]})でdesignをSpace選択するとAPIは["ready","design"]だが、checkboxのnameは空、valueは全て"on"、FormDataは空。portable/gallery全14例一致。readOnlyではchecked inputをdisabledにするため送信対象から除外される。選択のたびに旧input.isConnected=falseとなる置換も確認。 改善案: nameとitem.valueをnative checkboxへ反映し、readOnlyは操作を止めつつ選択値を送信できる契約にする。安定キーでnative要素を保持する実装を推奨。削除→resetで既定readyが戻る既存成功も維持する。
- **design_judgment**: 通常・hover・選択の近接画像では輪の全周が札の手前に現れ、穴がどこで輪を受けるかが判然としない。穴付き札へ進んだものの、縁に楕円を添えた印象が残る。これは操作不具合ではなく A の物理接点の読み取りに関する判断。 改善案: 穴と輪の交差位置を揃え、輪の一部を紙の背面へ隠し、穴から手前へ出る接点を見せる。紙面・文字の余白と小型タグの比率を保つ。

証拠: [badges-portable-base-1-sheet.jpg](evidence-3/badges-portable-base-1-sheet.jpg), [badges-portable-native-1-sheet.jpg](evidence-3/badges-portable-native-1-sheet.jpg), [badges-gallery-base-1-sheet.jpg](evidence-3/badges-gallery-base-1-sheet.jpg), [badges-gallery-native-1-sheet.jpg](evidence-3/badges-gallery-native-1-sheet.jpg)

## R437 instrument-tags — changes_required

ラベルと凹んだ数値窓を別面へ分け、計器札としての意味が読み取れる。造形を維持して共有nativeフォームを修正したい。

- **native_form**: init({name:"tags",selectable:true,removable:true,defaultValue:["ready"]})でdesignをSpace選択するとAPIは["ready","design"]だが、checkboxのnameは空、valueは全て"on"、FormDataは空。portable/gallery全14例一致。readOnlyではchecked inputをdisabledにするため送信対象から除外される。選択のたびに旧input.isConnected=falseとなる置換も確認。 改善案: nameとitem.valueをnative checkboxへ反映し、readOnlyは操作を止めつつ選択値を送信できる契約にする。安定キーでnative要素を保持する実装を推奨。削除→resetで既定readyが戻る既存成功も維持する。

証拠: [badges-portable-base-1-sheet.jpg](evidence-3/badges-portable-base-1-sheet.jpg), [badges-portable-native-1-sheet.jpg](evidence-3/badges-portable-native-1-sheet.jpg), [badges-gallery-base-1-sheet.jpg](evidence-3/badges-gallery-base-1-sheet.jpg), [badges-gallery-native-1-sheet.jpg](evidence-3/badges-gallery-native-1-sheet.jpg)

## R439 bracket-tags — changes_required

コの字金具の幅を抑え、札との重なりと読み面の余白が釣り合った。共有nativeフォームの修正が必要。

- **native_form**: init({name:"tags",selectable:true,removable:true,defaultValue:["ready"]})でdesignをSpace選択するとAPIは["ready","design"]だが、checkboxのnameは空、valueは全て"on"、FormDataは空。portable/gallery全14例一致。readOnlyではchecked inputをdisabledにするため送信対象から除外される。選択のたびに旧input.isConnected=falseとなる置換も確認。 改善案: nameとitem.valueをnative checkboxへ反映し、readOnlyは操作を止めつつ選択値を送信できる契約にする。安定キーでnative要素を保持する実装を推奨。削除→resetで既定readyが戻る既存成功も維持する。

証拠: [badges-portable-base-1-sheet.jpg](evidence-3/badges-portable-base-1-sheet.jpg), [badges-portable-native-1-sheet.jpg](evidence-3/badges-portable-native-1-sheet.jpg), [badges-gallery-base-1-sheet.jpg](evidence-3/badges-gallery-base-1-sheet.jpg), [badges-gallery-native-1-sheet.jpg](evidence-3/badges-gallery-native-1-sheet.jpg)

## R442 drafting-note-tags — changes_required

十字の主張が細い基準線へ抑えられ、切欠きと文字位置の関係が明快。共有nativeフォームの修正が必要。

- **native_form**: init({name:"tags",selectable:true,removable:true,defaultValue:["ready"]})でdesignをSpace選択するとAPIは["ready","design"]だが、checkboxのnameは空、valueは全て"on"、FormDataは空。portable/gallery全14例一致。readOnlyではchecked inputをdisabledにするため送信対象から除外される。選択のたびに旧input.isConnected=falseとなる置換も確認。 改善案: nameとitem.valueをnative checkboxへ反映し、readOnlyは操作を止めつつ選択値を送信できる契約にする。安定キーでnative要素を保持する実装を推奨。削除→resetで既定readyが戻る既存成功も維持する。

証拠: [badges-portable-base-1-sheet.jpg](evidence-3/badges-portable-base-1-sheet.jpg), [badges-portable-native-1-sheet.jpg](evidence-3/badges-portable-native-1-sheet.jpg), [badges-gallery-base-1-sheet.jpg](evidence-3/badges-gallery-base-1-sheet.jpg), [badges-gallery-native-1-sheet.jpg](evidence-3/badges-gallery-native-1-sheet.jpg)

## R443 ribbon-end-tags — changes_required

読み面を平らに保ち、背後へ折り返す短い末端が接続するため旧単なる矩形札と区別できる。共有nativeフォームの修正が必要。

- **native_form**: init({name:"tags",selectable:true,removable:true,defaultValue:["ready"]})でdesignをSpace選択するとAPIは["ready","design"]だが、checkboxのnameは空、valueは全て"on"、FormDataは空。portable/gallery全14例一致。readOnlyではchecked inputをdisabledにするため送信対象から除外される。選択のたびに旧input.isConnected=falseとなる置換も確認。 改善案: nameとitem.valueをnative checkboxへ反映し、readOnlyは操作を止めつつ選択値を送信できる契約にする。安定キーでnative要素を保持する実装を推奨。削除→resetで既定readyが戻る既存成功も維持する。

証拠: [badges-portable-base-2-sheet.jpg](evidence-3/badges-portable-base-2-sheet.jpg), [badges-portable-native-2-sheet.jpg](evidence-3/badges-portable-native-2-sheet.jpg), [badges-gallery-base-2-sheet.jpg](evidence-3/badges-gallery-base-2-sheet.jpg), [badges-gallery-native-2-sheet.jpg](evidence-3/badges-gallery-native-2-sheet.jpg)

## R445 letterpress-tags — changes_required

近接画像で紙肌と活字、下端の厚み、選択時の浅い押込みが読める。造形の方向は成立。共有nativeフォームの修正が必要。

- **native_form**: init({name:"tags",selectable:true,removable:true,defaultValue:["ready"]})でdesignをSpace選択するとAPIは["ready","design"]だが、checkboxのnameは空、valueは全て"on"、FormDataは空。portable/gallery全14例一致。readOnlyではchecked inputをdisabledにするため送信対象から除外される。選択のたびに旧input.isConnected=falseとなる置換も確認。 改善案: nameとitem.valueをnative checkboxへ反映し、readOnlyは操作を止めつつ選択値を送信できる契約にする。安定キーでnative要素を保持する実装を推奨。削除→resetで既定readyが戻る既存成功も維持する。

証拠: [badges-portable-base-2-sheet.jpg](evidence-3/badges-portable-base-2-sheet.jpg), [badges-portable-native-2-sheet.jpg](evidence-3/badges-portable-native-2-sheet.jpg), [badges-gallery-base-2-sheet.jpg](evidence-3/badges-gallery-base-2-sheet.jpg), [badges-gallery-native-2-sheet.jpg](evidence-3/badges-gallery-native-2-sheet.jpg)

## R450 warm-category-tags — changes_required

本文に添える索引語という B の用途差はあるが、件数可読性と長いラベルの収まり、共有nativeフォームが未完成。

- **native_form**: init({name:"tags",selectable:true,removable:true,defaultValue:["ready"]})でdesignをSpace選択するとAPIは["ready","design"]だが、checkboxのnameは空、valueは全て"on"、FormDataは空。portable/gallery全14例一致。readOnlyではchecked inputをdisabledにするため送信対象から除外される。選択のたびに旧input.isConnected=falseとなる置換も確認。 改善案: nameとitem.valueをnative checkboxへ反映し、readOnlyは操作を止めつつ選択値を送信できる契約にする。安定キーでnative要素を保持する実装を推奨。削除→resetで既定readyが戻る既存成功も維持する。
- **contrast**: 件数8/4は11pxのrgb(117,98,70)にopacity .7がかかり、実背景合成で通常3.047:1、選択面では2.755:1。portable/gallery一致。 改善案: 件数は有効な情報として4.5:1以上へ。opacityを外し必要なら専用色で穏やかな強弱を保つ。
- **overflow**: LongUnbrokenProjectIdentifier1234567890がタグ内で折り返されない。portable root222pxでは文字が左右約53/37px、RTLは37/53pxはみ出す。gallery235pxでも左右約46/31px。削除付きでも横溢れが残りforced画像でもタグ末尾が欠ける。 改善案: タグ/ラベルをmin-width:0,max-width:100%で制限し、長い語を折り返し、件数と削除を面内に残す。

証拠: [badges-portable-base-2-sheet.jpg](evidence-3/badges-portable-base-2-sheet.jpg), [badges-portable-native-2-sheet.jpg](evidence-3/badges-portable-native-2-sheet.jpg), [badges-gallery-base-2-sheet.jpg](evidence-3/badges-gallery-base-2-sheet.jpg), [badges-gallery-native-2-sheet.jpg](evidence-3/badges-gallery-native-2-sheet.jpg)

## R458 stitched-count-number — pass

短い布帯の中央に数値、左右へキーを保ち、320pxでも極端に細長い腰にならない。実入力/キー/フォーム/resetも通過。


証拠: [numbers-portable-base-1-sheet.jpg](evidence-3/numbers-portable-base-1-sheet.jpg), [numbers-portable-native-1-sheet.jpg](evidence-3/numbers-portable-native-1-sheet.jpg), [numbers-gallery-base-1-sheet.jpg](evidence-3/numbers-gallery-base-1-sheet.jpg), [numbers-gallery-native-1-sheet.jpg](evidence-3/numbers-gallery-native-1-sheet.jpg)

## R459 open-jaw-number — changes_required

上下の顎と左右キーは320pxでも連続し、数量操作の形を保つ。galleryに限るhover背景衝突が残る。

- **gallery_hover_contrast**: actual galleryで＋hover完了後、24px白記号に対し背景がcolor(srgb .832353 .866863 .880196)へ変わり比率1.378:1。解除でrgb(99,133,147)へ戻り3.957:1。portableはhoverでも3.957:1。後続number CSS内の広域 .sop-foundation .ff-stepper > button:hover:not(:disabled) がbackground color-mixを適用している。 改善案: この部品のhover面を十分な優先度で固定/調整するか、共通hoverが個別の素材面を上書きしないよう範囲を修正する。galleryとportable双方の往復で確認。

証拠: [numbers-portable-base-1-sheet.jpg](evidence-3/numbers-portable-base-1-sheet.jpg), [numbers-portable-native-1-sheet.jpg](evidence-3/numbers-portable-native-1-sheet.jpg), [numbers-gallery-base-1-sheet.jpg](evidence-3/numbers-gallery-base-1-sheet.jpg), [numbers-gallery-native-1-sheet.jpg](evidence-3/numbers-gallery-native-1-sheet.jpg)

## 検査条件

通常/hover往復、320px、長文、RTL、forced/reducedを全件確認。タグはnative選択・削除・FormData・readonly/disabled・表示モード・resetを検査。数量は3→4→5、12.5入力→13、無効文字のnative検証、Escape、Home/End、reset3とbounds変更後4を確認。パンくずはリンクとEscape復帰を検査。フォームfixtureはEnter送信でページ遷移しないようsubmitの既定動作のみ抑止。

R459の通常記号は24pxで3.957:1を満たすが、gallery hover1.378:1は不足。配布全形態での再現とは断定していない。R436の物理接点は造形判断として分離した。共有navigation変更後はB011/B012の依存ハッシュ更新と対象外関数不変・実操作の再確認が必要。

特定条件の検査であり、全状態の無欠陥保証ではない。
