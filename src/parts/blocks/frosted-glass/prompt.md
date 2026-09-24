# Frosted Glass — 再現仕様

すりガラスそのものは半透明。背面の色や形をぼかして透かす。淡い色の光はガラス面の内側に収め、輪郭の外へ広げない。透け方は利用先の背面にも依存する。

## 基準値
```json
{
  "background": "contained soft radial light over a three-stop translucent linear gradient",
  "blur": "18px",
  "saturate": "1.3",
  "border": "1px #c6f0ff40",
  "radius": "18px",
  "innerBorder": "6px inset, 13px radius",
  "tilt": "maximum X ±3deg / Y ±4deg",
  "transition": "500ms cubic-bezier(.16,1,.3,1)"
}
```

## 部品の境界
外観とポインター反応を持つ汎用コンテナ。文章・画像・ボタン・トグルを自由に子要素へ配置する。展示用の見出しや番号、詳細画面、特定の見本文言は組み込まない。`.sop-surface-content` は内側のレイヤーで、`--sop-padding` で余白を調整できる。

## 動作
ルートは `.sop-frosted-glass`。マウスの位置を基準に反射を更新し、離れたら光と傾きが連続して既定位置へ戻る。タッチ時は静かな既定位置を維持して、縦スクロールを妨げない。prefers-reduced-motionで動きを止める。画面から外したとき、イベントとRAF/Observerを確実に解除する。子のボタンを押しても、コンテナが意図しない動作をしない。

## 再現確認
元のCSSを正本とし、輪郭・面・陰影・色の強さ・動きの順に照合する。中身を空にした場合、文章を増やした場合、狭い幅、同じ部品の複数配置でも崩れないこと。元コードから外観を変更せず、統合先に合わせて子要素と幅・余白のみを調整する。
