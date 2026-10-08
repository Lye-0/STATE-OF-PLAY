# Contoured Cork Panel

左右で異なる丸みと薄い切断端を持つコルクの面。小さな孔は端部だけに残し、本文は落ち着いた無地の領域へ置く。

Type A / CSS only。コルクの島を等高線のようにずらし、明るい内容台を浮かせる。

Reactではchildren、HTMLでは.sop-surface-contentに中身を入れます。サンプルの見出し・番号・グラフはサイトの展示専用です。部品はコンテナであり、ページ全体のCSSリセットを含みません。

幅は100%、高さは内容依存です。--sop-paddingで余白を変更できます。文字やフォームには背景に合うコントラストを確保してください。
AタイプはCSSのみ。React版でuseEffectやクライアント専用APIは使っていません。HTML版もmarkupとCSSだけで表示できます。統一API用のinit/destroyは任意です。
