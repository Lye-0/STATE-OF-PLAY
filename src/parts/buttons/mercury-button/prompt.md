# Mercury Button — 再現と組み込みの仕様
冷たい金属の稜線と、面を横切る柔らかな反射。
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
.sop-action.sop-mercury-button{border-radius:6px;border:1px solid #bcc5c9;background:linear-gradient(170deg,#edf0ed,#89979f 9%,#c7d0d1 43%,#88989e 49%,#dce1db);color:#172127;box-shadow:0 5px 0 #293a41,0 12px 25px #0008,inset 0 0 0 4px #ffffff2b;font:600 12px/1.5 Consolas,monospace;letter-spacing:.17em;}
.sop-action.sop-mercury-button .sop-action-art{inset:4px;border:1px solid #26343b4f;background:repeating-linear-gradient(0deg,#fff2 0 1px,transparent 1px 3px);}
.sop-action.sop-mercury-button .sop-action-art i:first-child{inset:-100%;background:linear-gradient(115deg,transparent 43%,#ffffffba 49%,transparent 57%);transform:translateX(-35%);transition:transform .85s;}
.sop-action.sop-mercury-button:hover .sop-action-art i:first-child{transform:translateX(35%);}
.sop-action.sop-mercury-button .sop-action-icon{border-left:1px solid #3949536b;padding-left:15px;width:36px;height:24px;}
```
