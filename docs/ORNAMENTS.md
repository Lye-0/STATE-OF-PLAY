# 装飾 / ORNAMENTS — v4.14.0

用途や操作の意味を持たないアクセントとして、30種類（Aタイプ22、Bタイプ8）を収録しています。ヒーロー、区切り、余白などに配置し、重要な状態や通知をこの装飾だけで伝えないでください。v4.14.0の新作10種類はホバー時の変化を重視しています。

## 一覧

| ID | 名前 | タイプ | 表現 |
|---|---|:---:|---|
| `asterism-burst` | Asterism Burst | A | 散った光を、ひとつに結ぶ。 |
| `orbit-knot` | Orbit Knot | A | 小さな軌道を、交差させる。 |
| `ribbon-comet` | Ribbon Comet | A | 余白を横切る、光の尾。 |
| `prism-spokes` | Prism Spokes | A | 色の気配が、放射する。 |
| `signal-pins` | Signal Pins | A | 細い印が、リズムを刻む。 |
| `hinge-fan` | Hinge Fan | A | 開く気配だけを残す。 |
| `halo-axis` | Halo Axis | A | 中心へ戻る、薄い輪郭。 |
| `tide-sweep` | Tide Sweep | A | 静かな波を、面に流す。 |
| `fold-mark` | Fold Mark | A | 折れ線の緊張だけを置く。 |
| `lattice-star` | Lattice Star | A | 格子の先で、光が交わる。 |
| `echo-beam` | Echo Beam | A | 残響のような細い帯。 |
| `kinetic-cross` | Kinetic Cross | A | 交点が、静かに回る。 |
| `quiet-divider` | Quiet Divider | B | 区切りを、ほのかに示す。 |
| `corner-bracket` | Corner Bracket | B | 角に置くだけの、軽い印。 |
| `notation-dots` | Notation Dots | B | 小さな点で、余白を整える。 |
| `index-ticks` | Index Ticks | B | 細い目盛りで、流れを作る。 |
| `slim-orbit` | Slim Orbit | B | ひと筆の軌道を残す。 |
| `soft-spark` | Soft Spark | B | 控えめな閃き。 |
| `rule-knot` | Rule Knot | B | 交差点に、節をつくる。 |
| `grid-nick` | Grid Nick | B | 小さな格子の気配。 |
| `magnetic-rift` | Magnetic Rift | A | 反発と吸引の境目。 |
| `liquid-lens` | Liquid Lens Ornament | A | 液体の焦点が揺れる。 |
| `signal-orbit` | Signal Orbit | A | 軌道の上を合図が走る。 |
| `ribbon-fold` | Ribbon Fold | A | 帯が折れ、ほどける。 |
| `prism-well` | Prism Well | A | 色を吸い込む浅い井戸。 |
| `fan-spark` | Fan Spark | A | 羽根が光を散らす。 |
| `echo-glyph` | Echo Glyph | A | 記号の残響だけが漂う。 |
| `tide-knot` | Tide Knot | A | 波が結び目になって往復する。 |
| `stitch-comet` | Stitch Comet | A | 縫い目の上を光が跳ぶ。 |
| `hinge-star` | Hinge Star | A | 星の骨格が開閉する。 |

## 組み込み

各パーツの `markup.html`・`styles.css` と React / Vanilla のソースを同じフォルダーで配布します。詳細画面のコード・コピー・パーツZIP・AI用プロンプトは同じ正本から生成されます。TSX / JSX / TS / JS と「導入向け / 元の構成」を選べます。

Reactは各 `react/<Component>.tsx` の `paused` を、Vanillaは `vanilla/init.ts` の `init(element, { paused })` と返り値の `setPaused()` を使います。Vanillaは `data-paused` へ状態を反映します。要素を取り外すときは `destroy()` を呼んでください。装飾の図形は `aria-hidden` とし、`prefers-reduced-motion` ではアニメーションを止めます。

## v4.13.0導入時の統合

受領差分はv4.12.0を基点としていました。v4.12.5のカテゴリ別遅延読み込み、サイト修正、削除済みの重複Paper Loaderを維持し、新カテゴリ・20パーツのみを選択的に統合しました。受領した20個のVanilla初期化ファイルには未展開の二重波括弧があり、実行できるTypeScriptへ修正しています。既存787パーツの本体は変更していません。

## v4.13.0導入時の確認

- `npm run typecheck`：アプリ・React・ツールの型チェック成功。
- `npm test`：240件成功。全パーツの配布ソースとZIPの照合を含みます。
- `npm run test:ornaments`：20種類の表示、A/B内訳、停止状態、動きを減らす設定、詳細欄、320px幅を確認。
- `npm run build`：本番ビルド成功。
- `npm run test:lazy-loading`：開発・本番HTTPの両方で全37カテゴリ、詳細・配布、キャッシュ、再試行を確認。

## v4.14.0の追加と統合

v4.13.0を基点とする差分から、Magnetic Rift、Liquid Lens、Signal Orbit、Ribbon Fold、Prism Well、Fan Spark、Echo Glyph、Tide Knot、Stitch Comet、Hinge Starの10種類だけを追加しました。既存の装飾20種類とv4.13.4までのサイト修正は維持し、受領した登録一覧に含まれていた削除済みPaper Loaderは戻していません。全体は817パーツ、37カテゴリです。

受領した新作10種類のVanilla初期化コードにはテンプレートの二重波括弧が残っていたため、実行可能なTypeScriptへ修正しました。各パーツのAI用プロンプトには同梱ファイル、`paused` / `data-paused`、動きを減らす設定、複数配置と幅320pxの確認条件を追記しました。ステージ自体のホバー遷移も、停止中と動きを減らす設定では止めます。

新作の`liquid-lens`は既存のプルダウン「Liquid Lens」と表示名が重複するため、装飾の表示名を「Liquid Lens Ornament」としました。IDとReactのコンポーネント名は維持しています。

## v4.14.0の確認

- `npm run typecheck`：アプリ・React・ツールのstrict型チェック成功。
- `npm test`：全241件成功。新旧30装飾の4形式・両配置、配布プロンプトと通常DOM版の停止APIを含みます。
- `npm run test:ornaments`：30種類の表示、10種類のホバー変化と停止、縮小モーション、詳細画面、320px幅を実Chromeで確認。
- `npm run build`：実Viteの本番ビルド成功。
- `npm run test:lazy-loading`：開発・本番HTTPの両方で全37カテゴリ、ソースと個別ZIP、キャッシュと再試行を確認。
