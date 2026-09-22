# Tessera Button — 再現と組み込みの仕様
曇りガラスの面が、フォーカスに応じて別々に光る。
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
.sop-action.sop-tessera-button{background:#282639d9;border-color:#acacc28c;border-radius:3px 20px 3px 20px;box-shadow:0 10px 30px #0005,inset 0 0 14px #9ba3ff23;}
.sop-action.sop-tessera-button .sop-action-art i{inset:0;transition:transform .6s,opacity .6s;}
.sop-action.sop-tessera-button .sop-action-art i:nth-child(1){background:linear-gradient(145deg,#ceb1f080,#839aee30);clip-path:polygon(0 0,60% 0,22% 100%,0 100%);}
.sop-action.sop-tessera-button .sop-action-art i:nth-child(2){background:linear-gradient(135deg,#8cdfc92f,#d4b9df60);clip-path:polygon(55% 0,100% 15%,100% 100%,20% 100%);}
.sop-action.sop-tessera-button .sop-action-art i:nth-child(3){background:#e3e1fa30;clip-path:polygon(60% 0,62% 0,24% 100%,22% 100%);}
.sop-action.sop-tessera-button:hover .sop-action-art i:nth-child(2){transform:translateX(10px);opacity:.65;}
```
