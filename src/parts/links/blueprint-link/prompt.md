# Blueprint Link — 再現と組み込みの仕様
精密な目盛りと、角の照準。工具のようなリンク。
意図はタイプA（表現重視。素材、層、輪郭と動きの対応を優先。）です。ギャラリーのカードではなく、このパーツ単体を実装してください。

## 正本の構造と外観
markup.htmlおよびReact実装の.sop-link内の順序を保ちます。固有スキンはstyles.css、基本の操作寸法とフォーカスは共有CSSが正本です。デザイン名だけから一般的な青い下線リンクへ作り直さないでください。ラベルと移動先/処理は利用先に合わせて変更できますが、寸法・境界・陰影・アイコン周辺の構造は保持します。

## 状態と意味
実体はhrefを持つa。通常のページ移動、ページ内移動、新しいタブ、中クリック、リンク先コピーを壊さない。クリックをJavaScriptで常にpreventDefaultしない。アプリのルーター規約を確認し、aの入れ子を作らない。見本の#destinationは実在する移動先へ置換する。
通常、hover、focus-visible、activeをそれぞれ確認します。文字やフォーカス位置を装飾のアニメーションで動かさず、縮小モーションでは装飾だけを止め、操作を残します。forced-colorsでは意味のある輪郭とラベルを保持します。

## 配布と開発
状態・処理・文言は外側のアプリが所有します。展示用カウンター、疑似的な処理時間、遷移先の見本は本体へ持ち込みません。Reactはネイティブ属性とrefを渡せる構造を維持し、補助処理を同梱します。配置は導入先のディレクトリ構造へ適応させ、変更したimportとCSS参照を同時更新します。長い日本語のラベル、同じページの複数配置、キーボード、フォーム、取り外しを確認してください。

## 固有スキンの数値（参照CSS）
```css
.sop-link.sop-blueprint-link{color:#afd9ee;gap:30px;font:12px/1.6 Consolas,monospace;letter-spacing:.09em;padding:16px 12px;}
.sop-link.sop-blueprint-link .sop-link-art{border-block:1px solid #6a9fb149;background:repeating-linear-gradient(90deg,#9bdef361 0 1px,transparent 1px 10px) left bottom/100% 4px no-repeat;}
.sop-link.sop-blueprint-link .sop-link-icon{outline:1px solid #8dc6e37d;outline-offset:3px;padding:7px;}
.sop-link.sop-blueprint-link:hover .sop-link-icon{transform:rotate(45deg);}
.sop-link.sop-blueprint-link::before{content:"+";position:absolute;font:11px monospace;left:-2px;top:-3px;color:#afd9ee;}
```
