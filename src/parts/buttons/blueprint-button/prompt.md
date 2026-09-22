# Blueprint Button — 再現と組み込みの仕様
青い製図面と照準のような四隅。線が反応する。
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
.sop-action.sop-blueprint-button{color:#c9e5f4;background:#142e46;border:1px solid #4c7e9b;border-radius:0;font:500 12px/1.5 Consolas,monospace;letter-spacing:.14em;box-shadow:0 7px 19px #0006;}
.sop-action.sop-blueprint-button .sop-action-art{background:linear-gradient(#75bddb10 1px,transparent 1px),linear-gradient(90deg,#75bddb10 1px,transparent 1px);background-size:10px 10px;}
.sop-action.sop-blueprint-button::before,.sop-action.sop-blueprint-button::after{content:"";position:absolute;width:11px;height:11px;border-color:#a4e5fc;border-style:solid;transition:width .3s,height .3s;}
.sop-action.sop-blueprint-button::before{left:-3px;top:-3px;border-width:1px 0 0 1px;}.sop-action.sop-blueprint-button::after{right:-3px;bottom:-3px;border-width:0 1px 1px 0;}
.sop-action.sop-blueprint-button:hover::before,.sop-action.sop-blueprint-button:hover::after{width:22px;height:22px;}
.sop-action.sop-blueprint-button .sop-action-icon{outline:1px solid #6396af5c;outline-offset:5px;}
```
