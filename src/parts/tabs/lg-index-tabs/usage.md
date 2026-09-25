# Index Tabs — Liquid Glass

角のやわらかなガラスの帯と確かな選択面。多い項目にも対応。

## 導入

配布される本体フォルダーを、導入先のコンポーネント配置へ移します。内部の依存関係は同梱されます。React版はExampleを参考にpropsを渡し、通常HTML版は実際の要素にinitを呼びます。取り外し時はdestroyを呼びます。

この見た目はAppleのネイティブLiquid Glassそのものではなく、Web標準による近似です。通常はCSSの実際のbackdrop-filterと縁の光で表現します。optics='refractive'は対応Chromium向けの任意のSVG背景変位です。OSやブラウザーにより同じ光学表現にはなりません。

## 背景・文字

このパーツは透明な面だけを持ち、展示用の風景・背景を必要としません。任意の背景の上へ配置します。clearは背景の影響が強いので文字の確認が必要です。説明が多い場面はregular、複雑な背景や高いコントラストが必要ならsolidへ切り替えます。appearance='auto'はOSの配色であり、背景の明るさを自動測定する機能ではありません。

## 既定値

material='regular'。Reactのappearanceはauto、同梱HTML例はdarkを明示しています。optics='standard'、paused=false。--lg-accentをRGB空白区切りで上書きできます。

## 設定

- `material` ('clear' | 'regular' | 'solid'): 透明・すりガラス・不透明。背後が複雑な場合はregular/solid。
- `appearance` ('auto' | 'dark' | 'light'): 文字・濃淡。autoはOSの配色であり背後の画像を解析しません。
- `optics` ('standard' | 'refractive'): 標準CSS / 対応Chromium向けの実験的な縁の屈折。標準が初期値。
- `paused` (boolean): 装飾の追従や動きを停止。操作自体は継続。
- `items` (readonly TabItem[]): value/label/content。2項目から多数まで実寸で計測。
- `value / defaultValue / onValueChange` (string / callback): 選択値をアプリへ接続。
- `activation / orientation` (automatic|manual / horizontal|vertical): キーボード確定方式 / 配置の方向

通常DOMでは返り値のupdateGlass({material,appearance,optics,paused})で質感を変更できます。既存の値や入力は再生成しません。CSSだけでも状態の静止表示は成立しますが、選択やドラッグには同梱の初期化処理が必要です。

SVG屈折を有効にした場合、サイズ変更時だけ変位マップを計算します。ページ内容の画像取得・外部送信はありません。厳しいCSPでdata:画像が禁止されている場合はstandardのまま利用してください。
