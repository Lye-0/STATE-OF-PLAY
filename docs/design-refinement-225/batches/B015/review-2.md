# B015 round 2 独立検査

5 pass / 5 changes_required。source100ファイルは全計測後・作者release前にも一致。

- R490 warm-author-profile: **changes_required** — 縦長肖像と明朝氏名・上下罫で著者一覧の用途は明快。氏名/イニシャルはhover往復で固定。ただしforced選択氏名が消失する。
  - forced_colors_visibility: forced-colorsで選択行はHighlight、氏名は白いtext backplate上で白文字となり消失。初期Sora/選択Rin、portable/gallery、React4形式で再現。 改善: 選択行と子の文字/背景/forced-color-adjustを一貫させ、氏名を明示的なHighlightText/Highlight面に保つ。
  - design_readability: root222pxでは外22px+stage20pxの二重余白で氏名列72px。長い日本語氏名は134px高、英語連続名は161px高へ細分化。操作不能/overflowではなくBの可読性改善案。 改善: 肖像を保持してstage内余白を整理し、氏名へ横幅を戻す。
- R491 seal-score-rating: **pass** — 丸い封印の厚みと濃い確定輪郭で一列の尺度を読める。角張ったR496との差も成立。
- R492 inspection-score-rating: **changes_required** — 連続する厚い台に検査札が差さる構造は成立。forced時だけ旧座標が残り星が枠と交差する。
  - forced_colors_geometry: root222pxでforced札幅22.80pxに対し星SVG14.55pxが札左端より2.59px外へ出て、星と縁が交差。通常は幅20.16pxで中央。旧left:calc(50% - 14px)が縮んだ星に残る。 改善: forcedも星の幅に対応した中央配置へ変更。
- R493 folded-score-rating: **pass** — 一本の桁から接続する折り札が五段階を連続させ、狭幅でも吊り構造を保持。
- R494 stone-pip-rating: **pass** — 半楕円の開口と二脚が石のアーチとして読め、三角旗状の誤読を解消。
- R496 notched-disc-rating: **pass** — 上下の位置決め切欠きと角面・青灰色で、金色の封印R491との同形を回避。
- R497 rail-signal-rating: **pass** — 細い柱と一本のレールが信号の五段階を結び、塗り/確定縁が実値と対応。
- R498 stitch-star-rating: **changes_required** — 横布と留め帯、上下の縫い目の構造は成立。ただし選択星と布のコントラスト不足。
  - nontext_contrast: 評価値を示す選択星#86608cと実面#c9aaceが2.490:1で3:1未満。portable/gallery両方でcomputedとスクリーンショットの実ピクセルを照合。 改善: 素材の面を保持し、選択星を濃くして少なくとも3:1を確保。
- R499 open-bracket-rating: **changes_required** — 小さいC形留具と前の星札の接点は明快。ただしforcedの星縮小と通常星の低コントラストが残る。
  - forced_colors_geometry: forcedだけ旧左22px insetが残る。root222pxで札幅10.80px、星SVG6.16px（通常19.83px）。gallery251pxでも星10.20pxとなり、値記号の形が読みにくい。 改善: 装飾を除いたforced面のinsetを再設定し、星の可読寸法を確保。
  - nontext_contrast: 評価値を示す選択星#9b5b2eと実面#d9b48dが2.765:1で3:1未満。portable/gallery両方でcomputedとスクリーンショットの実ピクセルを照合。 改善: 素材の面を保持し、選択星を濃くして少なくとも3:1を確保。
- R500 coin-value-rating: **changes_required** — 駒形の肩・下面の厚みが一列の評価札として成立。ただし選択星と駒面のコントラスト不足。
  - nontext_contrast: 評価値を示す選択星#996b25と実面#d5b36cが2.340:1で3:1未満。portable/gallery両方でcomputedとスクリーンショットの実ピクセルを照合。 改善: 素材の面を保持し、選択星を濃くして少なくとも3:1を確保。

通常・hover入口/解除/再進入、320px・長文・RTL、forced/reduced、native値/フォーム/keyboard/reset/controlled、React4配布形式を検査。全件実画像を視認。詳しい条件と証拠は review-2.json。通常テキスト最小4.806:1。ratingのpreviewは未確定値で、outputは確定値のままという契約を区別した。

R490の狭幅余白はデザイン可読性の指摘であり操作不能とは判定していない。Aの素材構造は全9件で成立し、今回の差戻しは再現する表示の残存問題。特定条件での検査であり無欠陥保証ではない。
