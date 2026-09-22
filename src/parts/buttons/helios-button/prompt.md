# Helios Button — 再現と組み込みの仕様
重なった日輪と、琥珀色の縁。押すと光が沈み込む。
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
.sop-action.sop-helios-button{border-radius:60px;color:#2c1d09;background:linear-gradient(115deg,#f9dba0,#edb64e 75%,#bd752a);border-color:#ffe9b9;padding-left:66px;box-shadow:0 6px 0 #5a3c1e,0 16px 28px #0007,inset 0 1px #fff9;}
.sop-action.sop-helios-button .sop-action-art i:nth-child(1){width:38px;height:38px;left:12px;top:calc(50% - 19px);border:1px solid #8c5d31;border-radius:50%;box-shadow:0 0 0 4px #fcf0c577,0 0 0 8px #7f561220;background:repeating-conic-gradient(#8a5013 0 2deg,transparent 2deg 30deg);}
.sop-action.sop-helios-button .sop-action-art i:nth-child(2){width:18px;height:18px;left:22px;top:calc(50% - 9px);background:#5e3c13;border:4px solid #f9d79c;border-radius:50%;transition:transform .6s;}
.sop-action.sop-helios-button:hover .sop-action-art i:nth-child(2){transform:scale(.65);}
.sop-action.sop-helios-button:active{box-shadow:0 2px 0 #5a3c1e,0 6px 13px #0007;}
```
