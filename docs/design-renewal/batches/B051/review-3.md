# B051 round 3 独立検査

**changes_requested — 1 redesign / 9 pass。**

R710の経路乖離は解消。R706は閉じた立体への改善を確認したが、通常の直方体を脱する主形が必要。

## R699 paper-fan-fold-ornament — pass

元の平行短冊面を廃し、六つの幅広い表裏の紙骨が同じ固定支点で開閉する主形になった。全開で紙面の違いと実pivot、閉じ側で折れの密度が読める。R719の細い放射線とは面の量と開角の連動が異なり、通常/reducedでも扇の姿を保つ。 固定2から作者10ファイル不変を照合し、通常合格を継承。固定3のnative全10再試験でも回帰なし。

最寄比較: R719 sunrise-ribs-ornament, R697 balanced-shards-ornament

## R701 offset-portals-ornament — pass

元の直角門の入れ子を保持し、3px正面と6px側面で奥行きを明確化。全体hover拡大を除き、同じ軸の左右視差へ整理。Tとして原型を磨いており、R711の対角曲辺/傾斜とは静止像から区別できる。 固定2から作者10ファイル不変を照合し、通常合格を継承。固定3のnative全10再試験でも回帰なし。

最寄比較: R711 nested-saddles-ornament, R696 telescopic-stroke-loader

## R702 expanding-brackets-loader — pass

六対の開いた括弧を保ち、中心まで長さのある3px弧と9px間隔で暗い密集を軽減した。上下が閉じず横の呼吸として読め、R694の円ゲートとは輪郭/方向が異なる。 固定2から作者10ファイル不変を照合し、通常合格を継承。固定3のnative全10再試験でも回帰なし。

最寄比較: R694 rotary-gate-loader, R708 segment-orbit-loader

## R703 linkage-crosses-ornament — pass

元の連結折線を5px腕・13px関節へ太くし、共通角度から各腕位置を計算して隣接関節を維持。全周期の屈伸で細いグラフから機構としての見通しが改善。Tの主形を崩していない。 固定2から作者10ファイル不変を照合し、通常合格を継承。固定3のnative全10再試験でも回帰なし。

最寄比較: R704 crossing-pins-loader, R698 lift-platform-loader

## R705 ribbon-lattice-ornament — pass

三本ずつの帯を維持し、交点ごとの下通りを透明にして前後を交互にした。単なる半透明格子から実重なりへ改善し、通常/forcedとも帯の端と織りの空隙が読める。 固定2から作者10ファイル不変を照合し、通常合格を継承。固定3のnative全10再試験でも回帰なし。

最寄比較: R498 woven-rating, R715 elliptic-weave-ornament

## R706 rolling-diamonds-loader — redesign

平行な額縁束を廃し、前後二端面と四側面が閉じた一つの実立体になった。接合・背面除去・全位相での閉体は改善。ただし72×72の正方形断面/100px奥行きの直方体を回す像であり、中間位相では一般的な回転cubeの範囲に留まる。色と正面三角塗り以外に固有の輪郭がなく、Aの主形として再設計を継続。

最寄比較: R697 balanced-shards-ornament, R713 prismatic-slats-ornament, R261 three-layer paper choice, R696 telescopic-stroke-loader

- **R706-ordinary-rectangular-prism**: 前後/側面の接合は正しいが、0/25/50/75/100%で通常の六面直方体が回転する主形。正方形端面と直角四側面のままでは、前回の構造案を実装しても独立したA造形には十分でない。名前がrollに見えるかだけを問題にしていない。
  改善方向: 六面を実接合する方式は保持し、実端面を正方形ではない菱形断面へ変更する。例として長対角100〜120px/短対角40〜50pxの鋭角・鈍角をもつ端面と、その同じ頂点を奥へ結ぶ四側面で一体の細長い斜め体を作る。面の三角グラデーションではなく、実シルエットと面の幅の変化で一般的なcubeから離す。端面/側面の接点は固定し、全周期・reduced・forcedで閉体と固有の輪郭を確認。機能追加や小飾りは不要。
  証拠: captures/reviewer-phases-3/rolling-diamonds-loader-0.png, captures/reviewer-phases-3/rolling-diamonds-loader-0.5.png, captures/reviewer-mechanisms-3/rolling-diamonds-loader-forced-dark.png

## R707 stone-stack-mobile-ornament — pass

元の大小の積石を保持し、22px厚/20px段と4px小口で上下を重ねた。中心線の実ピクセルは全5位相で68–189pxまで連続しており、前版の等間隔に浮く石から支持のある積層へ改善。微小な揺りも重量感を崩さない。 固定2から作者10ファイル不変を照合し、通常合格を継承。固定3のnative全10再試験でも回帰なし。

最寄比較: R693 tilting-shelves-ornament, R174 stone planes

## R708 segment-orbit-loader — pass

元の六弧の花軌道を保持し、3px輪郭と交互の明度で暗部の存在感を改善。±8度の位相差でも中心と外形が保たれ、forcedでも閉じた六輪にならず弧として読める。 固定2から作者10ファイル不変を照合し、通常合格を継承。固定3のnative全10再試験でも回帰なし。

最寄比較: R694 rotary-gate-loader, R715 elliptic-weave-ornament

## R710 counterflow-lines-loader — pass

描画SVG maskとoffset-pathのdを二経路とも一致させ、浮く光点を解消。101位相×6光点で同じdを確認し、実中心と描画経路位置の比較は最大0.132px。2px線の内側に収まるサブピクセル差で、旧14.7pxの乖離はない。通常/4914ms/reduced/forcedで二閉路の向きと実流れが一致し、T保持調整として合格。

最寄比較: R715 elliptic-weave-ornament, R337 figure-eight progress

## R711 nested-saddles-ornament — pass

対角二隅の曲辺・反対二隅の直辺、側断面と44度の静止傾斜が入れ子全体を特徴づける。R701の直角門の単なる色替えではなく、reduced/forcedでも対角曲率を保持。Tの保持調整として承認。 固定2から作者10ファイル不変を照合し、通常合格を継承。固定3のnative全10再試験でも回帰なし。

最寄比較: R701 offset-portals-ornament, R702 expanding-brackets-loader

## 実施検査

- 固定3 author100hash/manifest一致、source/portable CSS10一致。2→3は92ファイル不変、合格済み他8件の80ファイルは完全同一。reviewer-hashes-3.json。
- actual native全10のrunning/pause再開、0/650/1300ms境界、320390768LTRRTL、reduced animation0、dark/light forced、destroy/pageerrors=[]を再実行し全成功。reviewer-mechanisms-3。
- 全10の実duration0/25/50/75/100%を再撮影。実glyph/字体/位置はhover/leave/reenterで全10不変。reviewer-phases-3。
- R706は通常5位相/reduced/forcedで6面の接合と背面cullを確認し、接合の改善と主形の独立性の不足を分けて評価。
- R710は2つの描画SVG dと各offset-path dを直接照合し、101位相×6点=606点の実中心と経路位置を比較。最大0.13144px。初期0.1px閾値はSVG/CSSの曲線長サンプリング差で未達だったが、2px実strokeの半幅1pxより十分小さい0.25pxで再確認。実4914ms画像とforced像も保存。reviewer-phases-3/counterflow-actual.json。
- 作者/shared/snapshot無編集。前回の提案を採用した事実だけでは合格にせず、R706は実像に基づき継続指摘。

## 限界

- React全形式/互換20件/型/契約/galleryは主担当検証。独立は固定portable native全10、hash/CSS照合、実像と追加幾何測定。
- pauseは公開APIを操作。gallery専用pauseボタンのclick連携は今回独立再検査していない。
- R706の次案は既存6面の接合方式を活かす候補であり、採用だけで合格を保証しない。
