# Canal Bridge Panel

二つの橋脚が読み取る天板を支え、下に水路の空間を残す橋のパネル。本文は天板に固定し、水面の細い反射だけが広がる。

Type A / CSS only。二つの橋脚と中央の浮いた床を分け、下の流路を見せる。

Reactではchildren、HTMLでは.sop-surface-contentに中身を入れます。サンプルの見出し・番号・グラフはサイトの展示専用です。部品はコンテナであり、ページ全体のCSSリセットを含みません。

幅は100%、高さは内容依存です。--sop-paddingで余白を変更できます。文字やフォームには背景に合うコントラストを確保してください。
AタイプはCSSのみ。React版でuseEffectやクライアント専用APIは使っていません。HTML版もmarkupとCSSだけで表示できます。統一API用のinit/destroyは任意です。
