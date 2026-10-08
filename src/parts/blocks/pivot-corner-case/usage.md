# Pivot Corner Case

左上の円軸で小さな隅の保持板を回し、下の固定したL字の受けと本文面を支えるケース。本文の背板全体は回さず、隅の板の大きさも内容の高さで変わらない。

Type A / CSS only。

Reactではchildren、HTMLでは.sop-surface-contentに中身を入れます。サンプルの見出し・番号・グラフはサイトの展示専用です。部品はコンテナであり、ページ全体のCSSリセットを含みません。

幅は100%、高さは内容依存です。--sop-paddingで余白を変更できます。文字やフォームには背景に合うコントラストを確保してください。
AタイプはCSSのみ。React版でuseEffectやクライアント専用APIは使っていません。HTML版もmarkupとCSSだけで表示できます。統一API用のinit/destroyは任意です。
