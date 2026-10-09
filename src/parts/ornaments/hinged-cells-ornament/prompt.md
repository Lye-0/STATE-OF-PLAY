# Hinged Cells Ornament

六枚を一組にした開閉パネル。隣り合う面が交互に回り、壁面と開口を切り替える。

- Aタイプ。大胆な素材・形・状態変化を維持。
- 操作の値は直ちに確定。装飾だけを連続的に動かし、文字とクリック領域を安定させる。
- 色違いの既存品に置き換えない。正本CSSの構成、展開面、hover・focus・選択・無効状態を保つ。
- 標準API、キーボード、長い文言、狭幅、reduced motion、forced colors、複数配置と解除を保つ。

## 操作契約
意味を持たない装飾としてaria-hiddenを保ち、入力を受け取らない。pauseとreduced motionで静止する。

<!-- design-renewal -->
独立に回る六つの小箱を廃し、六枚の板が実際の端を共有して折れる一つの屏風へ再構成する。共通の蝶番角から各板のx/zと回転を計算し、隣の端を同じ三次元位置へ接続する。平らな明暗の表裏・厚い小口と蛇腹の奥行きが主形となり、hoverの別回転は使わない。

native状態通知、pause、reduced motion、forced colors、React/JS配布を保持します。動くのは装飾領域だけです。
<!-- /design-renewal -->
