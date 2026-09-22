# Capsule Button — 再現と組み込みの仕様
黒いカプセルと発光する接点。丸いキーが一段沈む。
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
.sop-action.sop-capsule-button{border:1px solid #657b74;border-radius:45px;background:linear-gradient(#394b46,#1b2a25 45%,#172720);padding:17px 21px 17px 32px;box-shadow:inset 0 1px #a7d2bb60,0 5px 0 #0b1611,0 12px 24px #0008;letter-spacing:.12em;font-size:12px;}
.sop-action.sop-capsule-button .sop-action-icon{border-radius:50%;color:#123527;background:linear-gradient(#b3f2d8,#68b89b);width:32px;height:32px;padding:8px;box-shadow:inset 0 1px #ecfff7,0 2px 8px #0008;}
.sop-action.sop-capsule-button .sop-action-art i:first-child{top:10px;bottom:10px;left:11px;width:6px;background:repeating-linear-gradient(0deg,#9cb3a13f 0 1px,transparent 1px 4px);}
.sop-action.sop-capsule-button:hover .sop-action-icon{transform:translateX(3px);box-shadow:0 0 18px #82e5b83e;}
```
