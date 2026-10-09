# B052 round 2 独立検査

**pass — 全7件合格。**

R717は接合を保ち、実折山/谷とzigzagの外形を露出して縞矩形の残件を解消。他6件は作者60ファイル同一で承認継承。

## R712 pinwheel-notches-loader — pass

切欠き羽根を20pxの実面・4px小口へ強め、中央の抜けと共通軸の回転を保持。元の細い羽根を失わず、通常/forcedで実切欠きが読めるT改善。 固定1から作者10ファイル完全同一を照合し、通常合格を継承。固定2のnative/全周期再確認でも回帰なし。

最寄比較: R694 rotary-gate-loader, R708 segment-orbit-loader

## R714 sliding-windows-loader — pass

同寸の縦窓が斜めへ重なる主形を保持し、8px左端/6px下端/3px辺の密度を整えた。R701は同心で縮む直角門、こちらは同寸の斜め積層と水平slideであり、原版の差を明確化している。 固定1から作者10ファイル完全同一を照合し、通常合格を継承。固定2のnative/全周期再確認でも回帰なし。

最寄比較: R701 offset-portals-ornament, R696 telescopic-stroke-loader

## R716 paired-crescents-loader — pass

元の斜めへ重なる六つの弧を64px/3px輪郭/16×12px段差へ整理し、暗い薄線が追いにくい問題を改善。欠け側をborder-style:noneで保持し、forcedも元の弧列として読める。 固定1から作者10ファイル完全同一を照合し、通常合格を継承。固定2のnative/全周期再確認でも回帰なし。

最寄比較: R708 segment-orbit-loader, R715 elliptic-weave-ornament

## R717 hinged-cells-ornament — pass

実端点を共有する六板の接合を保ちながら、俯角・斜め軸で折山/谷と上下面のzigzagを露出した。全5位相で矩形の幅変化ではなく、一つの連続屏風が折れて開く姿が読める。R713の独立した菱形プリズム片の反復とは、端を共有する連続面と蝶番の屈伸で区別できる。reduced/forcedも同じ外形を保持し、残っていた主形の不足を解消。

最寄比較: R713 prismatic-slats-ornament, R699 paper-fan-fold-ornament 原版/改修版, R697 balanced-shards-ornament

## R719 sunrise-ribs-ornament — pass

六つの細い実稜線と水平線が同じ支点へ集まり、共通開角で動く。R699の幅広い紙面で埋める扇と異なり、線間の大きい空と水平線の関係を保持。最低位相でも支点と端が明瞭なT改善。 固定1から作者10ファイル完全同一を照合し、通常合格を継承。固定2のnative/全周期再確認でも回帰なし。

最寄比較: R699 paper-fan-fold-ornament, R712 pinwheel-notches-loader

## R720 folding-checkpoints-loader — pass

元の経路上の六門を60px高さ/3px輪郭/8px蝶番へ磨き、固定原点から順に倒れる立体を明確にした。全周期で基準経路・蝶番が接続し、forcedでも基床と開いた門が残る。 固定1から作者10ファイル完全同一を照合し、通常合格を継承。固定2のnative/全周期再確認でも回帰なし。

最寄比較: R698 lift-platform-loader, R701 offset-portals-ornament

## R725 soft-corner-trace-ornament — pass

B/Tの控えめな角線という目的を保ち、20px角・2px線・54/50px間隔で二段配置を読みやすくした。最低opacity.78でも存在を保つ。汎用的で静かなB装飾として承認し、Aの独立性を満たす理由には転用しない。 固定1から作者10ファイル完全同一を照合し、通常合格を継承。固定2のnative/全周期再確認でも回帰なし。

最寄比較: R721 quiet-breath-line-ornament, R724 fine-ring-sequence-loader

## 実施検査

- 固定2 author70hash/manifest一致、CSS7配布一致。1→2はR717 styles.cssだけ変更、他69ファイル不変。他6件60ファイル完全同一。reviewer-hashes-2.json。
- actual portable native全7 running/pause停止再開、0/650/1300ms境界、320390768LTRRTL、reduced animation0、dark/light forced、destroy/pageerrors=[]を独立再実行し成功。reviewer-mechanisms-2/checks.json。
- 全7の実duration0/25/50/75/100%を撮影し、hover/leave/reenterの文字/字体/位置は全7不変。reviewer-phases-2/checks.json。
- R717は通常5位相/reduced/forcedで実zigzag外形と前後の折山・谷を確認。原版の縞矩形、既存R713プリズム片、R699紙扇との主構造差を比較して承認。
- R717のcomputed寸法/transformから隣接上下端を再測定。全5位相で最大0.0006487px差と、構図変更後も同じ端点を共有することを確認。reviewer-phases-2/hinge-vertices.json。
- 作者/shared/tests/snapshotは編集せず、検査helper・証拠・報告のみ保存。

## 限界

- React全形式/既存native2layouts互換/型/契約/gallery/full suiteは主担当検証。独立は固定portable native全7・hash/CSS照合・実像と接合測定。
- pauseは公開APIを操作。gallery専用pauseボタン自体のclick連携は今回独立再検査していない。
