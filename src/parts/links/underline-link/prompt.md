# Underline Link — 再現と組み込みの仕様
ホバーで文字の下に線が伸びる、静かなテキスト。
意図はタイプB（実用重視。寸法・可読性・低い演出量を維持。）です。ギャラリーのカードではなく、このパーツ単体を実装してください。

## 正本の構造と外観
markup.htmlおよびReact実装の.sop-link内の順序を保ちます。固有スキンはstyles.css、基本の操作寸法とフォーカスは共有CSSが正本です。デザイン名だけから一般的な青い下線リンクへ作り直さないでください。ラベルと移動先/処理は利用先に合わせて変更できますが、寸法・境界・陰影・アイコン周辺の構造は保持します。

## 状態と意味
実体はhrefを持つa。通常のページ移動、ページ内移動、新しいタブ、中クリック、リンク先コピーを壊さない。クリックをJavaScriptで常にpreventDefaultしない。アプリのルーター規約を確認し、aの入れ子を作らない。見本の#destinationは実在する移動先へ置換する。
通常、hover、focus-visible、activeをそれぞれ確認します。文字やフォーカス位置を装飾のアニメーションで動かさず、縮小モーションでは装飾だけを止め、操作を残します。forced-colorsでは意味のある輪郭とラベルを保持します。

## 配布と開発
状態・処理・文言は外側のアプリが所有します。展示用カウンター、疑似的な処理時間、遷移先の見本は本体へ持ち込みません。Reactはネイティブ属性とrefを渡せる構造を維持し、補助処理を同梱します。配置は導入先のディレクトリ構造へ適応させ、変更したimportとCSS参照を同時更新します。長い日本語のラベル、同じページの複数配置、キーボード、フォーム、取り外しを確認してください。

## 固有スキンの数値（参照CSS）
```css
.sop-link.sop-underline-link{color:#d3dfce;font-size:14px;gap:12px;}
.sop-link.sop-underline-link .sop-link-label{background:linear-gradient(currentColor,currentColor) left bottom/25% 1px no-repeat;padding-bottom:5px;transition:background-size .3s;}
.sop-link.sop-underline-link:hover .sop-link-label,.sop-link.sop-underline-link:focus-visible .sop-link-label{background-size:100% 1px;}
.sop-link.sop-underline-link .sop-link-icon{width:18px;height:18px;}
```
