# Signal Button — 再現と組み込みの仕様
細いグリーンの走査線と、順番に立ち上がるピクセル。
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
.sop-action.sop-signal-button{border:1px solid #68794e;border-radius:3px;background:#202a1a;color:#def7bb;font:500 12px/1.5 Consolas,monospace;letter-spacing:.15em;box-shadow:inset 0 0 0 4px #111b10,0 5px 0 #10190e,0 12px 25px #0006;padding-left:43px;}
.sop-action.sop-signal-button .sop-action-art{background:repeating-linear-gradient(0deg,#d6faaa08 0 1px,transparent 1px 4px);}
.sop-action.sop-signal-button .sop-action-art i{width:4px;left:17px;background:#d3eeaa;bottom:25px;height:4px;box-shadow:0 0 7px #bee57e40;transition:height .3s;}
.sop-action.sop-signal-button .sop-action-art i:nth-child(2){left:23px;}.sop-action.sop-signal-button .sop-action-art i:nth-child(3){left:29px;}
.sop-action.sop-signal-button:hover .sop-action-art i:first-child{height:10px;}.sop-action.sop-signal-button:hover .sop-action-art i:nth-child(2){height:18px;transition-delay:.08s;}.sop-action.sop-signal-button:hover .sop-action-art i:nth-child(3){height:13px;transition-delay:.15s;}
```
