# Archival Channel

紙の下端を、開口が見える丸い金属の収納溝へ差し込む。溝の前の唇と左右の留めが紙をまたぎ、上の幅広い索引片だけが外へ出る。本文は紙面に固定する。

Type A / CSS only。

Reactではchildren、HTMLでは.sop-surface-contentに中身を入れます。サンプルの見出し・番号・グラフはサイトの展示専用です。部品はコンテナであり、ページ全体のCSSリセットを含みません。

幅は100%、高さは内容依存です。--sop-paddingで余白を変更できます。文字やフォームには背景に合うコントラストを確保してください。
AタイプはCSSのみ。React版でuseEffectやクライアント専用APIは使っていません。HTML版もmarkupとCSSだけで表示できます。統一API用のinit/destroyは任意です。
