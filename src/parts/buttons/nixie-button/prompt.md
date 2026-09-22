# Nixie Button — 再現と組み込みの仕様
橙の文字、ガラスの奥の配線、側面の冷却フィン。
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
.sop-action.sop-nixie-button{border-radius:8px;color:#ffbd79;background:linear-gradient(#1c1916,#302016 48%,#1a1613);border:3px solid #4b3d31;box-shadow:0 4px 0 #0c0b09,0 13px 24px #0008,inset 0 1px 0 #d2954950;font:500 14px/1.5 Consolas,monospace;letter-spacing:.18em;text-shadow:0 0 12px #ff850b9e;}
.sop-action.sop-nixie-button .sop-action-art{inset:5px;border:1px solid #c086432f;background:repeating-linear-gradient(90deg,#e9a25808 0 1px,transparent 1px 5px);}
.sop-action.sop-nixie-button .sop-action-art i:first-child{left:0;right:0;bottom:0;height:1px;background:#feac5c;box-shadow:0 -2px 18px #ff8000;transition:height .3s;}
.sop-action.sop-nixie-button:hover .sop-action-art i:first-child{height:4px;}
.sop-action.sop-nixie-button .sop-action-icon{filter:drop-shadow(0 0 4px #ff8410);}
```
