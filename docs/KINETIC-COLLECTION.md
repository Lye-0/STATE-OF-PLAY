# KINETIC — v4.4.0

既存564パーツを維持したうえで、操作によって形・面・空間が変わるAタイプを24種類追加しました。全588種類・25カテゴリです。各カテゴリで `KINETIC` の新作を先に表示し、検索でも絞り込めます。従来の落ち着いたデザインは削除・置換していません。

## スクロールバー

| パーツ | ID | 反応の特徴 |
|---|---|---|
| Liquid Channel | `liquid-channel` | 透明な管の中を液体が満たし、つまみを包む二本のメニスカスが伸びて戻る。 |
| Burn Trail | `burn-trail` | 通過した目盛りだけが琥珀色に熱を持ち、青灰色の酸化膜へ静かに冷える。 |
| Magnetic Field | `magnetic-field-rail` | 七対の磁力線がつまみを避けて膨らみ、位置とポインターに応じて形を変える。 |
| Split Rail | `split-rail` | 二本の磨いたレールがつまみの周囲だけ滑らかに開く。通過した場所は一本の継ぎ目へ戻る。 |
| Spectral Wake | `spectral-wake` | 結晶のつまみが通った場所にだけ分光色が現れ、短い余韻のあと透明へ戻る。 |
| Paper Tear | `paper-tear` | 繊維のある二枚の紙がしおりの周囲でめくれ、読み進めた側に細い裂け目が残る。 |
| Mechanical Shutter | `mechanical-shutter` | 小さな金属ルーバーがつまみの前後で連続的に反転し、通過後に異なる角度で整列する。 |
| Wave Rail | `wave-rail` | 四本の張った線がつまみ付近で波打つ。速く動かすほど振幅が増え、止めると収束する。 |
| Depth Tunnel | `depth-tunnel` | つまみを焦点にした階段状の溝。奥へ続くフレームの幅がスクロールに合わせて変わる。 |
| Fiber Optic | `fiber-optic` | 七本の細い光路が束になり、動かした瞬間だけ光の粒が順番に走り抜ける。 |
| Mercury Rail | `mercury-rail` | 液体金属の首がつまみに吸い付き、速度に応じて伸びる。移動位置は遅延させない。 |
| Living Rail | `living-rail` | レールの両側に並んだ薄い葉脈がつまみの周囲で開閉し、動きを止めると静かに落ち着く。 |

## プルダウン

| パーツ | ID | 反応の特徴 |
|---|---|---|
| Liquid Lens | `liquid-lens-menu` | 押すとガラスの膜が縦に伸びる。候補の背後では、厚い透明レンズがたわみながら滑る。 |
| Spotlight | `spotlight-menu` | 暗い舞台に光源が移動し、照らされた行の背後に細い光の帯と大きな光だまりが生まれる。 |
| Elastic Highlight | `elastic-menu` | 太い柔らかな選択面が候補間で伸び、弾性を伴って新しい行の形へ戻る。 |
| Fold Out | `foldout-menu` | 折り畳まれた紙が一行ずつ前後にほどけて候補になる。選ぶ行の折り目が平らに開く。 |
| Iris | `iris-menu` | 光学フレームの内側が丸く開き、候補を露出する。選択時は虹彩状の境界が反応する。 |
| Layered Glass | `layered-glass-menu` | 重なったガラス層が奥からほどけ、移動中の候補は光の縁をまとって手前へ浮かぶ。 |
| Magnetic Selection | `magnetic-menu` | 精密な金属板の上を薄い選択面が強いばねで移動。吸着する瞬間に小さく行き過ぎて戻る。 |
| Curtain | `curtain-menu` | 縦の布目を持つ幕が中央から左右へ開き、候補が交互に現れる。選択行に光が横切る。 |
| Depth Stack | `depth-stack-menu` | 離れた薄い層が奥から順番に現れ、選ぶ行の背後に深い落ち影と縁の光が生まれる。 |
| Typographic Shift | `typographic-menu` | 大きな文字と広い余白が主役。選択時に字間と太い線が動き、文字の背後を斜めの光が通る。 |
| Aurora Drift | `aurora-field-menu` | 立体的に重なった光の帯がポインターを追う。候補は静止したまま、背景だけが形を変える。 |
| Portal | `portal-menu` | フィールドの内側が奥行きのある入口へ変形し、何層もの輪郭と候補が手前へ組み上がる。 |

## 持ち出し

詳細画面で TSX / JSX / TS / JS と「導入向け / 元の構成」を選びます。表示中のファイルとZIPは同じ元実装から生成します。使用例と部品本体は分離しています。パーツZIPに含まれる `internal/` も配置してください。ギャラリーのファイルは必要ありません。

サイト全体の全体ZIPでは元のリポジトリ構造をそのまま保ちます。ソースはES Modulesです。開発は `npm run dev`、配信用は `npm run build`。パーツZIPの `preview/` は分離した独立デモです。

## スクロールバーの接続

通常HTMLでは本体内の `.sop-scroll-content` を自分の内容へ置き換え、`init(root, options)` を実行します。`orientation`、`onProgressChange`、`scrollTo(0...1)`、`refresh()`、`destroy()` は既存のスクロール領域と同じ使い方です。Reactでは `children`、`orientation`、`onProgressChange`、`viewportLabel`、`scrollbarLabel` を渡せます。高さは利用先で設定します。

実際の値・ホイール・タッチ・キーボードはnative overflowが正本です。透明な操作領域と比例するthumbを維持し、Canvasは装飾のみです。レールは本文の上に重ねません。水や残光の遅れが、本文の移動を遅くすることはありません。

- `liquid-channel` は先頭側から現在位置まで満たされる液面です。
- `burn-trail` と `spectral-wake` は最近の移動による残像も含みます。履歴を保存する読了判定ではありません。
- `split-rail` / `magnetic-field-rail` などは比例thumbの実寸と位置から局所変形を描きます。長い本文でも固定長のダミーthumbにしません。
- 横方向およびRTLでは、実際のthumb座標へ追従します。

## プルダウンの接続

Reactは `items`、`value/defaultValue`、`onValueChange`、`name`、`disabled` などを渡します。通常HTMLは `data-value` / `data-label` の候補要素とhidden inputを配置し、`init(root, options)` で初期化します。DOMで候補を追加した場合は `refresh()` を呼びます。ラベル、説明、項目数は固定しません。

新しいビューは `autoIcon=false` / `showHeading=false` / `showHints=false` が標準です。必要な場合のみ任意のアイコン・ヘッダー・キーヒントを有効にします。操作できる別ボタンをlistboxの候補内へ入れないでください。Fold Out / Typographic Shiftを明るいページへ置く場合、外側のラベル色は `--sop-label-color` で調整できます。

候補の確定は即時です。開閉演出の完了を待つ必要はありません。ホバー中の背景と選択済みのチェックは別の状態です。閉じるときはARIA・視覚・操作上の開状態を同じフレームで閉じ、元の候補一覧を退出演出のために再表示しません。短い余韻はトリガーの反応だけに残します。再度開いた場合は古い反応を中断します。ダミーの複製リストや重複IDは追加しません。

候補パネルの外枠はオーバーフローをクリップし、開閉時の演出が右端・下端にスクロールバーを作らないようにします。候補数が表示領域を超える場合は`[data-results]`の内側だけを縦にスクロールさせ、横方向のスクロールは作りません。

## 動作とライフサイクル

共通の `scroll-area` / `select-controller` は元のままです。新しい演出層 `kinetic-scroll` / `kinetic-select` が値から見た目を描きます。従来スキンへグローバルにCSSを上書きしません。

スクロール時と余韻の収束中のみRAFを使い、通常は停止後に終了します。ドラッグ継続中や新しいポインター移動では更新します。オフスクリーン・非表示文書・破棄時に停止し、Observer、イベント、タイマー、Web Animationsを解除します。Reactでは専用hook/viewがmount/unmountを担当し、描画先のCanvas以外のReact子要素を置換しません。

`prefers-reduced-motion: reduce` は形状の最終状態へ直接移動します。強制配色では装飾を省き、native scrollbarと選択フォーカスを残します。

## 差分適用

v4.3.0への差分ZIPを利用する場合は、独自変更を退避してから中の `STATE-OF-PLAY/` の内容を同名フォルダーへ重ねます。既存パーツの削除は不要です。`.git`・ロックファイル・独自の設定を削除しないでください。依存の追加やバージョン変更はありません。
