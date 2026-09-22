# Copper Button — 再現と組み込みの仕様
磨いた銅と四隅のリベット。厚みのある押下感。
意図はタイプA（表現重視。素材、層、輪郭と動きの対応を優先。）です。ギャラリーのカードではなく、このパーツ単体を実装してください。

## 正本の構造と外観
markup.htmlおよびReact実装の.sop-action内の順序を保ちます。固有スキンはstyles.css、基本の操作寸法とフォーカスは共有CSSが正本です。デザイン名だけから一般的な単色ボタンへ作り直さないでください。ラベルと移動先/処理は利用先に合わせて変更できますが、寸法・境界・陰影・アイコン周辺の構造は保持します。

## 状態と意味
実体はbuttonで、初期typeはbutton。Enter/Spaceの標準clickを使い、keydownでもう一度発火させない。loadingは表示・再操作防止のみで、保存や送信の成功を勝手に演出しない。disabled、submit/reset、フォームとの接続を維持する。
通常、hover、focus-visible、active、loading、disabledをそれぞれ確認します。文字やフォーカス位置を装飾のアニメーションで動かさず、縮小モーションでは装飾だけを止め、操作を残します。forced-colorsでは意味のある輪郭とラベルを保持します。

## 配布と開発
状態・処理・文言は外側のアプリが所有します。展示用カウンター、疑似的な処理時間、遷移先の見本は本体へ持ち込みません。Reactはネイティブ属性とrefを渡せる構造を維持し、補助処理を同梱します。配置は導入先のディレクトリ構造へ適応させ、変更したimportとCSS参照を同時更新します。長い日本語のラベル、同じページの複数配置、キーボード、フォーム、取り外しを確認してください。

## 固有スキンの数値（参照CSS）
```css
.sop-action.sop-copper-button{color:#382319;background:linear-gradient(165deg,#e7b494,#b16a45 14%,#d39875 50%,#e8b697 72%,#9f613f);border-color:#edc7a5;border-radius:5px;padding-inline:35px;box-shadow:0 5px 0 #5e3928,0 12px 25px #0008;font:600 12px/1.5 Consolas,monospace;letter-spacing:.1em;}
.sop-action.sop-copper-button .sop-action-art{inset:3px;border:1px solid #5f382954;background:repeating-linear-gradient(0deg,transparent 0 2px,#ffe4c613 2px 3px);}
.sop-action.sop-copper-button .sop-action-art i{width:4px;height:4px;border-radius:50%;background:#593624;box-shadow:0 1px #ffe3ba;}
.sop-action.sop-copper-button .sop-action-art i:nth-child(1){top:6px;left:6px;}.sop-action.sop-copper-button .sop-action-art i:nth-child(2){top:6px;right:6px;}.sop-action.sop-copper-button .sop-action-art i:nth-child(3){bottom:6px;left:6px;}.sop-action.sop-copper-button .sop-action-art i:nth-child(4){bottom:6px;right:6px;}
.sop-action.sop-copper-button .sop-action-icon{border-left:1px solid #5e38215a;padding-left:12px;width:28px;}
```
