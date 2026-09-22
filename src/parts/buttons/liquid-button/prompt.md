# Liquid Button — 再現と組み込みの仕様
厚いガラスの縁と、奥を泳ぐ水色の光。
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
.sop-action.sop-liquid-button{border-radius:50px;background:linear-gradient(140deg,#99eff336,#152e3d,#57b2cb37);border-color:#b1e9f689;box-shadow:inset 0 2px 3px #d6ffffb0,inset 0 -2px 3px #92ccfaa3,0 9px 22px #0007;color:#d6fbff;}
.sop-action.sop-liquid-button .sop-action-art{inset:4px;border:1px solid #b3e8f135;}
.sop-action.sop-liquid-button .sop-action-art i:first-child{width:120px;height:100px;left:10%;top:-20px;border-radius:50%;background:conic-gradient(#8dd3ee05,#93f8ea85,#cec4f840,#78bef909);filter:blur(9px);transition:transform .8s;}
.sop-action.sop-liquid-button:hover .sop-action-art i:first-child{transform:translateX(75%) scale(1.3);}
.sop-action.sop-liquid-button .sop-action-icon{border-radius:50%;box-shadow:inset 1px 1px 2px #cefcffb0,0 2px 6px #0006;width:30px;height:30px;padding:6px;}
```
