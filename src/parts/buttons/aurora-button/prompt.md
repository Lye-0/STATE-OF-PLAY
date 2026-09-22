# Aurora Button — 再現と組み込みの仕様
夜の面を泳ぐ緑と紫の光。文字は静止したまま。
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
.sop-action.sop-aurora-button{border-radius:9px;background:#17242c;border-color:#849cba70;box-shadow:inset 0 1px #dae8f46b,0 12px 22px #0007;color:#ecf7f8;}
.sop-action.sop-aurora-button .sop-action-art i:first-child{inset:-80%;background:conic-gradient(from 80deg,transparent,#9cf4d661,transparent 42%,#bd9bf362,transparent 70%);filter:blur(12px);transition:transform 1s;}
.sop-action.sop-aurora-button .sop-action-art i:nth-child(2){height:2px;bottom:0;left:18%;right:18%;background:linear-gradient(90deg,transparent,#a6efc1,#b7b5f7,transparent);}
.sop-action.sop-aurora-button:hover .sop-action-art i:first-child{transform:rotate(45deg);}
```
