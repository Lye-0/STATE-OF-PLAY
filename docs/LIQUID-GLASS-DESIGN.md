# LIQUID GLASS — 設計書

この文書はv4.15.0で追加した最初の8作品の設計記録です。v4.16.0の全37カテゴリへの展開は [GLASS-COLLECTION.md](GLASS-COLLECTION.md) を参照してください。

対象: STATE OF PLAY v4.15.0 / 最初の4カテゴリ、8コンポーネント。

## 1. 目標と境界

既存作品を上書きせず、共通の素材設計を持つ追加シリーズを実装する。新作は既存のカテゴリとA/Bの並びに加える。`GLASS LAB` は詳細プレビューで素材を比較する機能とする。

目指すのは、透明な面の厚み、実際の背景の透け方、操作による局所的な形の変化が一体になる表現。全パーツに白い枠と強いぼかしを加えるだけのテーマにはしない。既存のA/B分類と、ガラスの透明度は独立させる。

AppleのLiquid Glassの考え方を参照するが、AppleのネイティブAPI・私有シェーダーの移植ではない。同一の画素、背景解析、物理的な光学精度は保証しない。標準版はCSSの実背景ぼかしと描画した反射の組み合わせ。縁の変位を加えるSVG版は任意の実験機能。

Appleの説明では、素材をコントロールの面に適用し、文字などは変形しない上層に置くこと、コンテンツと操作を分離することが重視されている。[1] これを本ライブラリでは「ガラスは操作面、本文は本文」と解釈する。

## 2. 初回の作品

| カテゴリ | A | B | 造形・動作の違い |
| --- | --- | --- | --- |
| トグル | Lens Toggle | Mist Toggle | Aは大きな透明レンズと押下時の膨張。Bは小さな乳白色のつまみと明確な状態 |
| ボタン | Pressure Button | Frost Button | Aはカプセル面が圧力でたわむ。Bは密度の高い画面向けの角丸と短い反応 |
| タブ | Flow Tabs | Index Tabs | Aはレンズ状の選択面が実測した位置へ滑る。Bは控えめな矩形マーカー |
| プルダウン | Bloom Select | Clarity Select | Aは開口に連続感を持つ候補面と追従レンズ。Bは通常の読みやすいメニュー |

Aの基準は、実寸の輪郭と触れた際の固有の反応。Aを大きいだけの部品にしない。Bでは輪郭とコントラストを優先するが、同じ素材の世界観を残す。両方でラベル・値・キー操作は変形させない。

既存817パーツを一律にガラス化する変更ではない。新規8パーツを追加し、全825パーツとする。

## 3. レイヤー構成

```text
利用先の実際の背景
  └─ ガラスの背面 (.lg-surface / 選択マーカー / popup)
       ├─ 実際の backdrop-filter: blur + saturate
       ├─ 表面色 (clear / regular / solid)
       ├─ 細い縁、内側の陰影
       └─ ポインター位置に反応するハイライト
  └─ 読みやすい文字・状態・クリック対象 (フィルターを適用しない)
```

backdrop-filterは、要素の背後にある描画を処理するCSS機能であり、部分的な透明度が必要になる。[2] 今回の標準版も、背景画像をパーツ内部へ複写するのではなく、本当に背後にあるものをぼかす。展示用の風景は別レイヤーであり、コンポーネントの配布依存にはしない。

親に別のfilter、opacity、mask等を設定した場合は、ブラウザーのbackdropの境界や合成結果が変わることがある。[2] 統合時はパーツ単体だけでなく、実際の親要素を含めて確認する。

## 4. 素材の3段階

| material | 基本値 | 利用の目安 |
| --- | --- | --- |
| `clear` | blur 3px / 暗色面のalpha .24 | 写真や色面を見せる、文字数の少ない操作面 |
| `regular` | blur 18px / alpha .62 | 通常の設定・メニュー・可読性を優先する画面 |
| `solid` | blurなし / alpha 1 | 複雑な背景、透明感を避けたい場面、互換性重視 |

色・部品ごとの上書きがあるため、値は完全な共通固定ではない。例えばプルダウンの候補一覧は22px/.69を使い、文字が多い領域の透明度を抑える。Aはclear、Bはregularを初期値にするが、どちらでも3段階を指定できる。

「読みにくいから透明度を上げる」のではなく、面のalphaを上げて背景の影響を減らす。ぼかしの強さと不透明度は別々に考える。色のコントラストが必要な場面ではsolidを使う。

## 5. 配色と背景

`appearance` は `light / dark / auto`。lightは暗い文字、darkは明るい文字、autoはOSの配色設定に従う。**背景の画素を解析して文字色を自動決定する機能ではない。**

明るい背景ならlight、暗い背景ならdarkを基本にする。背景が一様でない場合はregular/solidを選び、実際の文字と背景でコントラストを確認する。ガラス表現は暗い背景だけに限定しない。一様な背景では歪みやぼかしの差が小さく、縁と厚みが中心に見える。背景が動いていないのに架空の画像を面の中で流して、透過したように偽装しない。

GLASS LABでは、海と砂／明るい紙面／暗い面／格子を比較できる。背景を動かす設定は、透過が実際に背景へ反応しているかの確認用。設定値をコードへ自動書き戻しはしない。取得コードではprops/optionsを明示して利用する。

## 6. 主要な局所トークン

`.lg-root` 配下だけに定義し、`:root`、body、すべてのbuttonを変更しない。

| トークン | 役割 |
| --- | --- |
| `--lg-ink`, `--lg-muted` | 主文と補助文 |
| `--lg-base`, `--lg-opacity` | 背面のRGBとalpha |
| `--lg-accent` | ON状態などのアクセント。例 `100 185 235` |
| `--lg-blur` | 標準CSSぼかし |
| `--lg-edge-alpha`, `--lg-highlight` | 縁と反射の強さ |
| `--lg-light-x`, `--lg-light-y` | ポインターの反射位置 |
| `--lg-shadow`, `--lg-outline` | 奥行きとキーボードフォーカス |

制御側が使う `--lg-choice-*` や `--lg-refraction` は内部用。利用者が固定する必要はない。

## 7. モーションの担当範囲

- トグル: 値は即座に反映。位置はドラッグに直結し、つまみの形と反射だけが短く変形する。
- ボタン: 文字は動かさず、絶対配置した背面が沈み・たわむ。非同期処理は利用先で実装し、loadingは外から指定する。
- タブ: 2択・3択・7択を固定比率で扱わず、実際の項目位置と寸法を測る。パネルは再生成しない。選択の確定を光の演出より優先する。
- プルダウン: 実際のlistboxと値を使う。開口は300ms、候補間のレンズ移動は340ms程度。候補文字は動かさず、ホバー／キーボードの候補と確定済みのチェックを分ける。

ホバーできない端末では、押下・フォーカス・選択による反応が残る。装飾だけのための連続JavaScriptループやsetIntervalは使わない。pointer/resize/state変化を1フレームにまとめて反映する。

## 8. 屈折: 標準と実験の区別

### standard (既定)

CSSの背景ぼかし、彩度、描画した縁と反射。Safari/Firefoxを含む互換性の入口として使う。未対応なら不透明な面へフォールバックする。ただしSafari/Firefoxの実機動作を今回検証済みとする意味ではない。

### refractive (任意)

Chromium系の検出とCSS構文のサポート判定後に、SVG feDisplacementMapを背景フィルターへ追加する。角丸矩形の縁を距離関数から計算し、中心付近は動かさない。Canvasは変位マップ生成専用で、ページの撮影・取得・外部送信はしない。

CSS.supportsは画素出力の保証ではない。OS・GPU・ブラウザーによって結果が異なるため、既定では無効。strictなCSPでdata:画像が禁止される場合もstandardを使う。サイズ変更時にだけマップを再計算し、上限384pxでコストを制限する。不要になったSVG、Observer、イベントはdestroyで解除する。

これは物理レンダリングの完全な屈折・色分散でも、Appleのレンダラーそのものでもない。

## 9. アクセシビリティと代替表示

- ネイティブbutton、role=switch、既存のtab/tabpanel、combobox/listboxの契約を維持する。
- disabled/loadingと、ホバーの見た目を混同しない。
- `prefers-reduced-motion` は移動・変形を止めるが、確定値・選択表示・キー操作は維持。
- `prefers-reduced-transparency` とコントラスト優先時は不透明へ。[3] OS・ブラウザーで設定伝達されない場合に備え、明示的なmaterial='solid'も設ける。
- forced-colors時はCanvas/ButtonText/Highlight等へ戻し、フィルターを無効化する。
- キャレット、選択文字、本文はフィルター対象にしない。テキストを絵やCanvasに焼き込まない。

## 10. ソースと配布

```text
src/shared/liquid-glass/
  core.ts             # 視覚効果・設定・任意の屈折
  material.css        # 局所トークン、フォールバック
  toggle / button / tabs / select.ts  # 既存の振る舞いへのアダプター
  toggle / button / tabs / select.css # カテゴリ固有の造形
  *-view.tsx          # React向けの描画
  use-glass.ts        # Reactライフサイクル
src/parts/{category}/lg-*/
  meta.json / markup.html / styles.css / usage.md / prompt.md
  react/ / vanilla/
src/app/liquid-glass-preview.*        # 展示だけの背景・操作
```

共有するのは「素材」と「後片付け」であり、全カテゴリの操作を同じDOMへ詰め込まない。元ソースからコード表示・相対パス変換・ZIPを生成し、既存の4形式・2配置を維持する。

React版は同じ視覚コントローラーをeffectから作り、cleanupで破棄する。SSR中にwindow/Canvasへアクセスしない。装飾のSVGや背景はコントローラー、選択値と文字はReact/既存の部品コントローラーという担当を分ける。

## 11. 合否

静止、押下、選択、メニュー展開、背景切替、短い／長いラベル、320px、複数配置、取り外し、配布後の別フォルダー配置を確認する。透明感の強さだけでなく、本文を邪魔しないことを判断する。

型チェック・テストの件数と、Appleらしい外観の完成度は別の評価とする。実際に実行できた内容は `LIQUID-GLASS-VERIFICATION.md` に記録する。未実行のReact/Vite/Windows実機等を成功扱いしない。

## 参考資料

閲覧日: 2026-09-25。仕様変更時は公式資料を再確認する。

1. Apple, Get to know the new design system, WWDC25: https://developer.apple.com/videos/play/wwdc2025/356/ — 操作レイヤー、同心形状、コンテンツとの分離。
2. MDN, backdrop-filter: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter — 背景サンプリング、構文、backdrop rootの注意。
3. MDN, prefers-reduced-transparency: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency — 透明度を減らすユーザー設定。
4. Apple, Materials: https://developer.apple.com/design/human-interface-guidelines/materials — 素材の用途。ネイティブの指針であり、そのままWebの互換性保証ではない。
