# 装飾 / ORNAMENTS — v4.13.0

用途や操作の意味を持たないアクセントとして、20種類（Aタイプ12、Bタイプ8）を収録しています。ヒーロー、区切り、余白などに配置し、重要な状態や通知をこの装飾だけで伝えないでください。

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

## 組み込み

各パーツの `markup.html`・`styles.css` と React / Vanilla のソースを同じフォルダーで配布します。詳細画面のコード・コピー・パーツZIP・AI用プロンプトは同じ正本から生成されます。TSX / JSX / TS / JS と「導入向け / 元の構成」を選べます。

Reactは各 `react/<Component>.tsx` の `paused` を、Vanillaは `vanilla/init.ts` の `init(element, { paused })` と返り値の `setPaused()` を使います。Vanillaは `data-paused` へ状態を反映します。要素を取り外すときは `destroy()` を呼んでください。装飾の図形は `aria-hidden` とし、`prefers-reduced-motion` ではアニメーションを止めます。

## このリポジトリへの統合

受領差分はv4.12.0を基点としていました。v4.12.5のカテゴリ別遅延読み込み、サイト修正、削除済みの重複Paper Loaderを維持し、新カテゴリ・20パーツのみを選択的に統合しました。受領した20個のVanilla初期化ファイルには未展開の二重波括弧があり、実行できるTypeScriptへ修正しています。既存787パーツの本体は変更していません。

## 統合後の確認

- `npm run typecheck`：アプリ・React・ツールの型チェック成功。
- `npm test`：240件成功。全パーツの配布ソースとZIPの照合を含みます。
- `npm run test:ornaments`：20種類の表示、A/B内訳、停止状態、動きを減らす設定、詳細欄、320px幅を確認。
- `npm run build`：本番ビルド成功。
- `npm run test:lazy-loading`：開発・本番HTTPの両方で全37カテゴリ、詳細・配布、キャッシュ、再試行を確認。
