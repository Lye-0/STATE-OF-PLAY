# B012 round2 独立検査

**changes_required — 7件 pass / 3件差戻し。**

全10件を凍結portableと実galleryで検査。作者は変更していない。10枚の比較画像と候補の個別画像を視認した。Aの造形・Bの用途差はいずれも今回の方向で成立。再現した残存問題は下記3件。

## R404 slatted-pages — pass

薄い羽根の縦端と上下一線へ再構成し、旧緑の厚い階段から別の選択機構になった。番号と選択面が安定し、狭幅でも列を維持。


証拠: [pagination-portable-base-sheet.jpg](evidence-2/pagination-portable-base-sheet.jpg), [pagination-gallery-base-sheet.jpg](evidence-2/pagination-gallery-base-sheet.jpg), [pagination-portable-222-sheet.jpg](evidence-2/pagination-portable-222-sheet.jpg), [pagination-gallery-222-sheet.jpg](evidence-2/pagination-gallery-222-sheet.jpg)

## R405 bookplate-pages — pass

太い額縁を除き、選択番号から下へ続くしおりの切込みに意味を集めた。数値に対する独自性が読み取れる。


証拠: [pagination-portable-base-sheet.jpg](evidence-2/pagination-portable-base-sheet.jpg), [pagination-gallery-base-sheet.jpg](evidence-2/pagination-gallery-base-sheet.jpg), [pagination-portable-222-sheet.jpg](evidence-2/pagination-portable-222-sheet.jpg), [pagination-gallery-222-sheet.jpg](evidence-2/pagination-gallery-222-sheet.jpg)

## R408 soft-reading-pages — pass

大きい前後操作を上段に置き、番号列を補助へ下げた。続けて読む用途が他 B と配置から区別できる。


証拠: [pagination-portable-base-sheet.jpg](evidence-2/pagination-portable-base-sheet.jpg), [pagination-gallery-base-sheet.jpg](evidence-2/pagination-gallery-base-sheet.jpg), [pagination-portable-222-sheet.jpg](evidence-2/pagination-portable-222-sheet.jpg), [pagination-gallery-222-sheet.jpg](evidence-2/pagination-gallery-222-sheet.jpg)

## R409 line-navigation-pages — pass

前後キーと番号列が一段の細いツールバーになり、狭い領域向けの用途差が成立。実root222pxではLTR/RTLの選択とフォーカスが収まる。


証拠: [pagination-portable-base-sheet.jpg](evidence-2/pagination-portable-base-sheet.jpg), [pagination-gallery-base-sheet.jpg](evidence-2/pagination-gallery-base-sheet.jpg), [pagination-portable-222-sheet.jpg](evidence-2/pagination-portable-222-sheet.jpg), [pagination-gallery-222-sheet.jpg](evidence-2/pagination-gallery-222-sheet.jpg)

## R410 warm-book-pages — pass

明朝のノンブルと大きい現在数値、下段の前後操作で読み物のページ末尾として独立した設計になった。


証拠: [pagination-portable-base-sheet.jpg](evidence-2/pagination-portable-base-sheet.jpg), [pagination-gallery-base-sheet.jpg](evidence-2/pagination-gallery-base-sheet.jpg), [pagination-portable-222-sheet.jpg](evidence-2/pagination-portable-222-sheet.jpg), [pagination-gallery-222-sheet.jpg](evidence-2/pagination-gallery-222-sheet.jpg)

## R414 stone-path-trail — changes_required

石の面を少しずつずらし、細い枝で到達面へ接続するため旧メニュー一覧より階層を読める。hover文字色だけ修正が必要。

- **contrast**: 親リンク Home のhover完了後、文字rgb(89,111,75)が実際の石の面rgb(223,231,209)上で4.338953:1。13px。portable/gallery一致。通常時6.389:1から低下する。 改善案: 石の面を背景としてhover文字も4.5:1以上に保つ。文字色を維持し下線でhoverを示す方法でもよい。

証拠: [breadcrumbs-portable-base-sheet.jpg](evidence-2/breadcrumbs-portable-base-sheet.jpg), [breadcrumbs-gallery-base-sheet.jpg](evidence-2/breadcrumbs-gallery-base-sheet.jpg), [breadcrumbs-portable-menus-sheet.jpg](evidence-2/breadcrumbs-portable-menus-sheet.jpg), [breadcrumbs-gallery-menus-sheet.jpg](evidence-2/breadcrumbs-gallery-menus-sheet.jpg)

## R416 perforated-path-trail — pass

続き紙のミシン目を保ち、現在位置を一段進めた接続で親と到達先を分けた。素材と経路表示の関係が成立。


証拠: [breadcrumbs-portable-base-sheet.jpg](evidence-2/breadcrumbs-portable-base-sheet.jpg), [breadcrumbs-gallery-base-sheet.jpg](evidence-2/breadcrumbs-gallery-base-sheet.jpg), [breadcrumbs-portable-menus-sheet.jpg](evidence-2/breadcrumbs-portable-menus-sheet.jpg), [breadcrumbs-gallery-menus-sheet.jpg](evidence-2/breadcrumbs-gallery-menus-sheet.jpg)

## R418 stitched-route-trail — pass

縫い線が親リンクの脇を通り、下の到達面の綴じ目へ入る。単なる横罫一覧から経路の終点を示す構造へ改善。


証拠: [breadcrumbs-portable-base-sheet.jpg](evidence-2/breadcrumbs-portable-base-sheet.jpg), [breadcrumbs-gallery-base-sheet.jpg](evidence-2/breadcrumbs-gallery-base-sheet.jpg), [breadcrumbs-portable-menus-sheet.jpg](evidence-2/breadcrumbs-portable-menus-sheet.jpg), [breadcrumbs-gallery-menus-sheet.jpg](evidence-2/breadcrumbs-gallery-menus-sheet.jpg)

## R423 looped-route-trail — changes_required

各段の小さな輪と連続線が階層をたどる道筋として読め、文字へ近づく大きな横棒は解消。展開メニューのhover文字色を修正したい。

- **contrast**: 展開メニューの Objects にhoverすると13px文字rgb(136,95,123)と面rgb(250,230,243)で4.453118:1。portable/gallery一致。 改善案: 実際のメニュー面に対して4.5:1以上へhover文字色を調整する。

証拠: [breadcrumbs-portable-base-sheet.jpg](evidence-2/breadcrumbs-portable-base-sheet.jpg), [breadcrumbs-gallery-base-sheet.jpg](evidence-2/breadcrumbs-gallery-base-sheet.jpg), [breadcrumbs-portable-menus-sheet.jpg](evidence-2/breadcrumbs-portable-menus-sheet.jpg), [breadcrumbs-gallery-menus-sheet.jpg](evidence-2/breadcrumbs-gallery-menus-sheet.jpg)

## R428 soft-location-trail — changes_required

小さな親パスと次行の現在見出しを分け、詳細ページに添える用途が独立した。長い階層名のメニュー内収まりは未完成。

- **overflow**: 省略メニューを320pxで開き、空白なしの階層名 LongUnbrokenProjectIdentifier1234567890 を2回連結すると折り返されず、panel clientWidth238 / scrollWidth447。文字末尾が面の右へportable205.48px/gallery206.32pxはみ出し、画像では末尾が欠ける。 改善案: メニュー内リンクにoverflow-wrap:anywhereと縮小可能な幅を設定し、名前全体を読めるようにする。LTR/RTL/forcedでも確認する。

証拠: [breadcrumbs-portable-base-sheet.jpg](evidence-2/breadcrumbs-portable-base-sheet.jpg), [breadcrumbs-gallery-base-sheet.jpg](evidence-2/breadcrumbs-gallery-base-sheet.jpg), [breadcrumbs-portable-menus-sheet.jpg](evidence-2/breadcrumbs-portable-menus-sheet.jpg), [breadcrumbs-gallery-menus-sheet.jpg](evidence-2/breadcrumbs-gallery-menus-sheet.jpg)

## 検査条件

- 全件: 通常、hover入口/解除/再進入、320px、長文、RTL、forced/reduced。
- ページ送り: 実root222px、1000中999、更新2、LTR/RTL、scale .75、Tab、外側scroll保持。Enterで3、前クリックで2へ更新。disabled全操作無効、readonlyは2維持。
- パンくず: 省略メニュー、親リンクhover、長い階層名、Enterリンク移動、Escapeで閉じて省略ボタンへfocus復帰。disabled時リンクとボタン無効。
- 初期R409候補は親幅222pxが実root174pxになった条件。実root222pxの全表示試験は通過。既存フォーカスを優先する動作と選択表示を混同しないようblur後の更新も測定。
- コントラストは疑似要素の実背景面を含めた。特定条件の検査であり、無欠陥保証ではない。
