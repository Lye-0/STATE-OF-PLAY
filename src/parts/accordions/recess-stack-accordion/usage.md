# Recess Stack Accordion

削った左の切欠きと厚い右の内壁を持つ、非対称の陶器の凹み。本文は同じ受け皿の浅い底へ展開し、右の釉薬の面が本文の高さに沿って露出する。丸い枠を重ねず、外壁と内底の二つの材質で深さを分ける。

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
