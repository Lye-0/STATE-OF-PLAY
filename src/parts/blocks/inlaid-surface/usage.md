# Inlaid Surface

細い縦象嵌と留め継ぎで縁を構成。本文面を動かさず木口の反射だけを変える。


Type A / CSS only。細い縦象嵌と留め継ぎで縁を構成。本文面を動かさず木口の反射だけを変える。

Reactではchildren、HTMLでは.sop-surface-contentに中身を入れます。サンプルの見出し・番号・グラフはサイトの展示専用です。部品はコンテナであり、ページ全体のCSSリセットを含みません。

幅は100%、高さは内容依存です。--sop-paddingで余白を変更できます。文字やフォームには背景に合うコントラストを確保してください。
AタイプはCSSのみ。React版でuseEffectやクライアント専用APIは使っていません。HTML版もmarkupとCSSだけで表示できます。統一API用のinit/destroyは任意です。
