# B051 round 4 独立検査

**pass — 全10件合格。**

R706の実菱形輪郭・閉体接合・全位相を確認し残件を解消。他9件は作者90ファイル不変で合格継承、native実像も回帰確認。

## R699 paper-fan-fold-ornament — pass

元の平行短冊面を廃し、六つの幅広い表裏の紙骨が同じ固定支点で開閉する主形になった。全開で紙面の違いと実pivot、閉じ側で折れの密度が読める。R719の細い放射線とは面の量と開角の連動が異なり、通常/reducedでも扇の姿を保つ。 固定2から作者10ファイル不変を照合し、通常合格を継承。固定3のnative全10再試験でも回帰なし。 固定3から作者10ファイル完全同一を照合し、通常合格を継承。固定4のnative/5位相再検査でも回帰なし。

最寄比較: R719 sunrise-ribs-ornament, R697 balanced-shards-ornament

## R701 offset-portals-ornament — pass

元の直角門の入れ子を保持し、3px正面と6px側面で奥行きを明確化。全体hover拡大を除き、同じ軸の左右視差へ整理。Tとして原型を磨いており、R711の対角曲辺/傾斜とは静止像から区別できる。 固定2から作者10ファイル不変を照合し、通常合格を継承。固定3のnative全10再試験でも回帰なし。 固定3から作者10ファイル完全同一を照合し、通常合格を継承。固定4のnative/5位相再検査でも回帰なし。

最寄比較: R711 nested-saddles-ornament, R696 telescopic-stroke-loader

## R702 expanding-brackets-loader — pass

六対の開いた括弧を保ち、中心まで長さのある3px弧と9px間隔で暗い密集を軽減した。上下が閉じず横の呼吸として読め、R694の円ゲートとは輪郭/方向が異なる。 固定2から作者10ファイル不変を照合し、通常合格を継承。固定3のnative全10再試験でも回帰なし。 固定3から作者10ファイル完全同一を照合し、通常合格を継承。固定4のnative/5位相再検査でも回帰なし。

最寄比較: R694 rotary-gate-loader, R708 segment-orbit-loader

## R703 linkage-crosses-ornament — pass

元の連結折線を5px腕・13px関節へ太くし、共通角度から各腕位置を計算して隣接関節を維持。全周期の屈伸で細いグラフから機構としての見通しが改善。Tの主形を崩していない。 固定2から作者10ファイル不変を照合し、通常合格を継承。固定3のnative全10再試験でも回帰なし。 固定3から作者10ファイル完全同一を照合し、通常合格を継承。固定4のnative/5位相再検査でも回帰なし。

最寄比較: R704 crossing-pins-loader, R698 lift-platform-loader

## R705 ribbon-lattice-ornament — pass

三本ずつの帯を維持し、交点ごとの下通りを透明にして前後を交互にした。単なる半透明格子から実重なりへ改善し、通常/forcedとも帯の端と織りの空隙が読める。 固定2から作者10ファイル不変を照合し、通常合格を継承。固定3のnative全10再試験でも回帰なし。 固定3から作者10ファイル完全同一を照合し、通常合格を継承。固定4のnative/5位相再検査でも回帰なし。

最寄比較: R498 woven-rating, R715 elliptic-weave-ornament

## R706 rolling-diamonds-loader — pass

正方形の直方体を廃し、長短対角110/44の実菱形断面と100pxの側面で一つの斜めの塊を作った。5位相で鋭角・鈍角と長い稜の見える向きが交代し、前版のカード束/通常cubeから実シルエットが変わる。三角塗りだけでなく六面の輪郭自体で厚みを読み、reduced/forcedも同じ菱形を保持。実8頂点は各3面が最大0.0024px差で一致し、接合と独立主形の双方を確認して合格。

最寄比較: R697 balanced-shards-ornament, R713 prismatic-slats-ornament, R261 three-layer paper choice, R696 telescopic-stroke-loader

## R707 stone-stack-mobile-ornament — pass

元の大小の積石を保持し、22px厚/20px段と4px小口で上下を重ねた。中心線の実ピクセルは全5位相で68–189pxまで連続しており、前版の等間隔に浮く石から支持のある積層へ改善。微小な揺りも重量感を崩さない。 固定2から作者10ファイル不変を照合し、通常合格を継承。固定3のnative全10再試験でも回帰なし。 固定3から作者10ファイル完全同一を照合し、通常合格を継承。固定4のnative/5位相再検査でも回帰なし。

最寄比較: R693 tilting-shelves-ornament, R174 stone planes

## R708 segment-orbit-loader — pass

元の六弧の花軌道を保持し、3px輪郭と交互の明度で暗部の存在感を改善。±8度の位相差でも中心と外形が保たれ、forcedでも閉じた六輪にならず弧として読める。 固定2から作者10ファイル不変を照合し、通常合格を継承。固定3のnative全10再試験でも回帰なし。 固定3から作者10ファイル完全同一を照合し、通常合格を継承。固定4のnative/5位相再検査でも回帰なし。

最寄比較: R694 rotary-gate-loader, R715 elliptic-weave-ornament

## R710 counterflow-lines-loader — pass

描画SVG maskとoffset-pathのdを二経路とも一致させ、浮く光点を解消。101位相×6光点で同じdを確認し、実中心と描画経路位置の比較は最大0.132px。2px線の内側に収まるサブピクセル差で、旧14.7pxの乖離はない。通常/4914ms/reduced/forcedで二閉路の向きと実流れが一致し、T保持調整として合格。 固定3から作者10ファイル完全同一を照合し、通常合格を継承。固定4のnative/5位相再検査でも回帰なし。

最寄比較: R715 elliptic-weave-ornament, R337 figure-eight progress

## R711 nested-saddles-ornament — pass

対角二隅の曲辺・反対二隅の直辺、側断面と44度の静止傾斜が入れ子全体を特徴づける。R701の直角門の単なる色替えではなく、reduced/forcedでも対角曲率を保持。Tの保持調整として承認。 固定2から作者10ファイル不変を照合し、通常合格を継承。固定3のnative全10再試験でも回帰なし。 固定3から作者10ファイル完全同一を照合し、通常合格を継承。固定4のnative/5位相再検査でも回帰なし。

最寄比較: R701 offset-portals-ornament, R702 expanding-brackets-loader

## 実施検査

- 固定4 author100hash/manifest一致、CSS10配布一致。3→4はR706 meta/prompt/styles/usageの4ファイルだけ変更、他96不変。合格済み他9件90ファイル同一。reviewer-hashes-4.json。
- actual portable native全10 running/pause停止再開、0/650/1300ms境界、320390768LTRRTL、reduced animation0、dark/light forced、destroy/pageerrors=[]を独立再実行し成功。reviewer-mechanisms-4/checks.json。
- 各実durationの0/25/50/75/100%を再撮影。hover/leave/reenterの実文字/字体/位置は全10不変。reviewer-phases-4/checks.json。
- R706のcomputed face transform/寸法から、端面clip4点と各側面4点を独立に変換。8頂点へ各3面が集まり、最大ずれ0.0023888px。提案寸法ではなく実DOM寸法とmatrixで接合確認。reviewer-phases-4/solid-vertices.json。
- R706の通常5位相/reduced/forced像で、非正方形の端面と側面の見え方・実輪郭変化を評価。前版の通常cube/平行額縁とは別の一体形となり、主形の残件を解消。
- R710は作者10ファイル不変、固定3の606点同経路/最大0.132px検証を継承。固定4の通常/forced/reduced実像も再確認。
- 作者/shared/tests/snapshotは無編集、検査helper・証拠・報告のみ保存。

## 限界

- React全形式/既存互換native2layouts・React4forms/型/契約/galleryは主担当検証。独立は固定portable native全10、hash/CSS照合、実像とR706頂点測定。
- pauseは公開APIを操作。gallery専用pauseボタンのclick連携は今回独立再検査していない。
