# Terminal Foil

左に巻き断面を露出した金属箔が、マットな本文の平面へ広がる。右上の自由端は薄く巻き返し、ホバーではこの端だけが反る。石の切れ角や太い金属枠を使わない。

Type A / CSS only。

Reactではchildren、HTMLでは.sop-surface-contentに中身を入れます。サンプルの見出し・番号・グラフはサイトの展示専用です。部品はコンテナであり、ページ全体のCSSリセットを含みません。

幅は100%、高さは内容依存です。--sop-paddingで余白を変更できます。文字やフォームには背景に合うコントラストを確保してください。
AタイプはCSSのみ。React版でuseEffectやクライアント専用APIは使っていません。HTML版もmarkupとCSSだけで表示できます。統一API用のinit/destroyは任意です。
