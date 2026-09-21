# Machined Panel — 再現仕様

削り出した金属板。3px周期の微細な筋、内側の刻線、4つの小さなねじ、下端の段差を保つ。クロームの鏡面ではなく、落ち着いたダークアルミニウムの反射。

## 基準値
```json
{
  "radius": "12px",
  "innerRim": "8px inset / 6px radius",
  "grain": "horizontal 1px at 3px interval",
  "hardware": "4 screws / 7px diameter / 17px inset",
  "shadow": "inset highlights + 3px lower lip + 18px diffuse shadow",
  "pointerLight": "450px ellipse / alpha .094"
}
```

## 部品の境界
外観とポインター反応を持つ汎用コンテナ。文章・画像・ボタン・トグルを自由に子要素へ配置する。展示用の見出しや番号、詳細画面、特定の見本文言は組み込まない。`.sop-surface-content` は内側のレイヤーで、`--sop-padding` で余白を調整できる。

## 動作
ルートは `.sop-machined-panel`。マウスの位置を基準に反射を更新する。タッチ時は静かな既定位置を維持して、縦スクロールを妨げない。prefers-reduced-motionで動きを止める。画面から外したとき、イベントとRAF/Observerを確実に解除する。子のボタンを押しても、コンテナが意図しない動作をしない。

## 再現確認
元のCSSを正本とし、輪郭・面・陰影・色の強さ・動きの順に照合する。中身を空にした場合、文章を増やした場合、狭い幅、同じ部品の複数配置でも崩れないこと。元コードから外観を変更せず、統合先に合わせて子要素と幅・余白のみを調整する。

## 配置パスの保持

ソースコードの見出しに記載されたファイル名は、ZIPルートからの相対パスです。
`src/parts/blocks/machined-panel/` と `src/shared/` を含む階層を維持し、ファイルを同じ階層に平坦化しないでください。
別のフォルダーへ組み込む場合は、この `src/` の下の構造をまとめて移します。
読み込み元と読み込み先の相対位置、CSSのパス、通常JS版の `.js` 拡張子を維持してください。
