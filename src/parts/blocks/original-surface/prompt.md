# Original Surface — 再現仕様

基準となる元の背景カード。暗い均一な面とほぼ感じる程度の追従光を重視し、発光の強さを上げすぎない。展示用の番号、ON/OFF、見出し、詳細ボタンは部品に含めない。

## 基準値
```json
{
  "background": "#18191a",
  "border": "1px solid #2c2d2c",
  "radius": "10px",
  "hoverBackground": "#1a1b1c",
  "hoverBorder": "#484b44",
  "pointerLight": "400px radial gradient / accent alpha .045 / transparent 60%",
  "transition": "400ms background + border, 300ms pointer opacity"
}
```

## 部品の境界
外観とポインター反応を持つ汎用コンテナ。文章・画像・ボタン・トグルを自由に子要素へ配置する。展示用の見出しや番号、詳細画面、特定の見本文言は組み込まない。`.sop-surface-content` は内側のレイヤーで、`--sop-padding` で余白を調整できる。

## 動作
ルートは `.sop-original-surface`。マウスの位置を基準に反射を更新する。タッチ時は静かな既定位置を維持して、縦スクロールを妨げない。prefers-reduced-motionで動きを止める。画面から外したとき、イベントとRAF/Observerを確実に解除する。子のボタンを押しても、コンテナが意図しない動作をしない。

## 再現確認
元のCSSを正本とし、輪郭・面・陰影・色の強さ・動きの順に照合する。中身を空にした場合、文章を増やした場合、狭い幅、同じ部品の複数配置でも崩れないこと。元コードから外観を変更せず、統合先に合わせて子要素と幅・余白のみを調整する。

## 配置パスの保持

ソースコードの見出しに記載されたファイル名は、ZIPルートからの相対パスです。
`src/parts/blocks/original-surface/` と `src/shared/` を含む階層を維持し、ファイルを同じ階層に平坦化しないでください。
別のフォルダーへ組み込む場合は、この `src/` の下の構造をまとめて移します。
読み込み元と読み込み先の相対位置、CSSのパス、通常JS版の `.js` 拡張子を維持してください。
