# Woven Mat Panel

編んだ敷物の左帯と下の房の上に、明るい紙面を少しずらして置く。縦材と横材の交差は紙の外側に見せ、読む面を模様で埋めない。

Type A / CSS only。編み込んだ二方向の端を引き、文字面を固定したまま交差を緩める。

Reactではchildren、HTMLでは.sop-surface-contentに中身を入れます。サンプルの見出し・番号・グラフはサイトの展示専用です。部品はコンテナであり、ページ全体のCSSリセットを含みません。

幅は100%、高さは内容依存です。--sop-paddingで余白を変更できます。文字やフォームには背景に合うコントラストを確保してください。
AタイプはCSSのみ。React版でuseEffectやクライアント専用APIは使っていません。HTML版もmarkupとCSSだけで表示できます。統一API用のinit/destroyは任意です。
