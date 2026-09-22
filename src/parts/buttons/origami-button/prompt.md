# Origami Button — 再現と組み込みの仕様
一枚の厚い紙を折り返した、柔らかな立体ボタン。
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
.sop-action.sop-origami-button{border-radius:1px;color:#543221;background:#edbd94;border-color:#fce0bd;box-shadow:5px 6px 0 #a96b4680,0 10px 20px #0004;padding-right:45px;font-weight:600;}
.sop-action.sop-origami-button::after{content:"";position:absolute;right:0;top:0;width:24px;height:24px;background:linear-gradient(45deg,#c88d67 49%,#ffdcb7 50%);box-shadow:-2px 2px 3px #8040202b;transition:width .4s,height .4s;}
.sop-action.sop-origami-button:hover::after{width:30px;height:30px;}
.sop-action.sop-origami-button .sop-action-art{background:linear-gradient(165deg,#fff1d754,transparent 48%,#b9784720 49%,transparent);}
.sop-action.sop-origami-button:active{box-shadow:2px 2px 0 #a96b4680;}
```
