# Orbit Button — 再現と組み込みの仕様
小さな軌道リングと、夜空のような深い青。
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
.sop-action.sop-orbit-button{border-radius:55px;color:#dfeaff;background:radial-gradient(ellipse at 30% 0,#394f79,#19243d 66%);border-color:#7486b184;box-shadow:0 10px 22px #0006,inset 0 1px #d7e7ff45;padding-left:54px;font-size:12px;}
.sop-action.sop-orbit-button .sop-action-art i:first-child{width:27px;height:27px;border:1px solid #bed4fa8e;left:15px;top:calc(50% - 14px);border-radius:50%;transition:transform .7s;}
.sop-action.sop-orbit-button .sop-action-art i:nth-child(2){width:32px;height:13px;border:1px solid #aac6ec70;left:12px;top:calc(50% - 7px);border-radius:50%;transform:rotate(-35deg);}
.sop-action.sop-orbit-button .sop-action-art i:nth-child(3){width:5px;height:5px;border-radius:50%;background:#dcefff;left:27px;top:calc(50% - 3px);box-shadow:0 0 8px #bedbff9c;}
.sop-action.sop-orbit-button:hover .sop-action-art i:first-child{transform:rotateX(55deg) rotate(90deg);}
```
