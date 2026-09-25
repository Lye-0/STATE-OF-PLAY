# Laminated Accordion / Liquid Glass

v4.15.0の動作部品から派生した、独立したガラススキンです。ギャラリーの背景・UIは配布本体に含みません。

## ガラスの配置
通常の同カテゴリと同じ入口・値・イベントを使います。半透明面の背後には、利用先の背景が必要です。これはCSSの背景ぼかしとハイライトによる表現で、Appleのネイティブ描画や物理的屈折の完全再現ではありません。
- 背景に応じて、ルートに `data-lg-appearance="light"` または `"dark"` を指定できます。
- 透過を抑える場合は `data-lg-material="solid"`。CSS変数 `--lgc-fill`、`--lgc-panel`、`--lgc-ink` でも調整できます。
- Reactではクラスにより素材が成立します。必要なdata属性は既存コンポーネントのHTML属性APIの範囲で渡すか、外部CSSでルートの変数を調整してください。
- `prefers-reduced-motion`、`prefers-reduced-transparency`、強制配色にフォールバックを用意しています。
- 専用GLASS LABや展示背景はアプリへ持ち込む必要はありません。

## 基礎コンポーネントの使い方
# Laminated Accordion

読みやすい見出しと控えめな展開。日常の情報整理に使える実用的なUI。

## 内容の差し替え
Reactではitemsのcontentへ文章・図・フォーム等のReactNodeを渡します。Vanillaでは各.sop-accordion-content内を置き換えます。data-valueは同一個体内で一意にしてください。

## 展開状態
単一展開が標準。multiple=trueで複数展開。Reactのexpanded/onExpandedChangeで外部制御できます。VanillaのsetExpanded([...])は外から状態を設定します。expandAll()/collapseAll()は操作要求で、controlled時はコールバックを受けて状態を反映してください。

## 入力とアクセシビリティ
見出しはnative button。Enter/Spaceで開閉、上下/Home/Endで見出し移動。閉じたパネルはinert/aria-hiddenで操作対象から外します。中のフォームは開閉ボタンとは独立して動作します。見出し深さheadingLevelを利用先に合わせます。スクリーンリーダー実機でも確認してください。

## 動きと後片付け
CSS gridで内容の実際の高さへ展開するため固定のmax-heightを使いません。動きを減らす設定では即時切替。常時RAFや外部通信は不要です。取り外す前にdestroy()します。

## コンテンツデザイン
panel-content.cssは内側の図版・数値カード・タグ・チェック項目などの任意のスタイルです。Example.tsx/markup.html内の展示文章・数値はサンプルであり、実データと差し替えて利用してください。
