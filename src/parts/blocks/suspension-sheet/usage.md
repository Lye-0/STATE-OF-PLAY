# Suspension Sheet

二本の吊り線が上端の小さな留め具へ接続し、切り落とした紙の下端に空間を残す。読む面は固定し、ホバーでは背後の距離だけが変わる。

Type A / CSS only。四隅の吊り点と下がった面を分け、浮遊する紙の距離を動かす。

Reactではchildren、HTMLでは.sop-surface-contentに中身を入れます。サンプルの見出し・番号・グラフはサイトの展示専用です。部品はコンテナであり、ページ全体のCSSリセットを含みません。

幅は100%、高さは内容依存です。--sop-paddingで余白を変更できます。文字やフォームには背景に合うコントラストを確保してください。
AタイプはCSSのみ。React版でuseEffectやクライアント専用APIは使っていません。HTML版もmarkupとCSSだけで表示できます。統一API用のinit/destroyは任意です。
