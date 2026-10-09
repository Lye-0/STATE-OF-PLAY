# Contoured Cork Panel

粒のあるコルクの外周と切断層で、静かな筆記面を囲む。本文は内側の凹んだ無地の面へ置き、素材の輪郭と読む領域を分ける。

Type A / CSS only。コルクの切断層と凹んだ筆記面を分ける。

Reactではchildren、HTMLでは.sop-surface-contentに中身を入れます。サンプルの見出し・番号・グラフはサイトの展示専用です。部品はコンテナであり、ページ全体のCSSリセットを含みません。

幅は100%、高さは内容依存です。--sop-paddingで余白を変更できます。文字やフォームには背景に合うコントラストを確保してください。
AタイプはCSSのみ。React版でuseEffectやクライアント専用APIは使っていません。HTML版もmarkupとCSSだけで表示できます。統一API用のinit/destroyは任意です。
