# Stamp Button — 再現と組み込みの仕様
厚い朱色の印面と内側の二重枠。印を押す手触り。
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
.sop-action.sop-stamp-button{color:#ffe0c5;background:linear-gradient(145deg,#b5593f,#813f30);border:1px solid #e0a27d;border-radius:13px 3px 13px 3px;box-shadow:0 5px 0 #49271f,0 14px 22px #0006;font:600 12px/1.5 Georgia,serif;letter-spacing:.15em;}
.sop-action.sop-stamp-button .sop-action-art{inset:5px;border:1px solid #f4bc9377;border-radius:8px 0 8px 0;box-shadow:inset 0 0 0 3px #f6a47812;}
.sop-action.sop-stamp-button .sop-action-art i:first-child{inset:10px;background:radial-gradient(#ffd6ae55 .5px,transparent 1px);background-size:7px 7px;opacity:.25;}
.sop-action.sop-stamp-button .sop-action-icon{border-radius:50%;border:1px solid #f3c39d80;padding:3px;}
```
