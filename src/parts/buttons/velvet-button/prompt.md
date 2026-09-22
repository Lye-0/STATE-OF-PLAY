# Velvet Button — 再現と組み込みの仕様
深いワイン色、縫い目の縁、真鍮の小さな矢印。
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
.sop-action.sop-velvet-button{background:radial-gradient(ellipse at 40% 0,#84506a,#452736 60%,#251a21);color:#f4debb;border:1px solid #b39a717d;border-radius:13px;font:italic 21px/1.3 Georgia,serif;box-shadow:inset 0 2px 3px #ffffff20,0 6px 0 #26151d,0 14px 26px #0008;}
.sop-action.sop-velvet-button .sop-action-art{inset:5px;border:1px dashed #dfb98e50;border-radius:9px;background:repeating-linear-gradient(110deg,#ffe3db04 0 1px,transparent 1px 3px);}
.sop-action.sop-velvet-button .sop-action-icon{color:#e5c098;width:25px;}
.sop-action.sop-velvet-button:hover{box-shadow:inset 0 2px 3px #ffffff40,0 6px 0 #26151d,0 16px 34px #0008;}
```
