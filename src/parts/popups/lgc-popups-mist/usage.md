# Mist Dialog / Liquid Glass

v4.15.0の動作部品から派生した、独立したガラススキンです。ギャラリーの背景・UIは配布本体に含みません。

## ガラスの配置
通常の同カテゴリと同じ入口・値・イベントを使います。半透明面の背後には、利用先の背景が必要です。これはCSSの背景ぼかしとハイライトによる表現で、Appleのネイティブ描画や物理的屈折の完全再現ではありません。
- 背景に応じて、ルートに `data-lg-appearance="light"` または `"dark"` を指定できます。
- 透過を抑える場合は `data-lg-material="solid"`。CSS変数 `--lgc-fill`、`--lgc-panel`、`--lgc-ink` でも調整できます。
- Reactではクラスにより素材が成立します。必要なdata属性は既存コンポーネントのHTML属性APIの範囲で渡すか、外部CSSでルートの変数を調整してください。
- `prefers-reduced-motion`、`prefers-reduced-transparency`、強制配色にフォールバックを用意しています。
- 専用GLASS LABや展示背景はアプリへ持ち込む必要はありません。

## 基礎コンポーネントの使い方
# Mist Dialog
白い背景で、名前の変更などに使えるシンプルな入力。

本物のdialogをshowModal()で開き、ブラウザーのトップレイヤーへ表示します。ページ遷移・別ウィンドウ・ブラウザーのwindow.openではありません。開くボタンは常に利用者が操作します。自動広告やページ入場直後の自動表示はありません。

Reactはtitle/description/kicker/triggerLabel、children本文、footerを変更可能。open/defaultOpen/onOpenChangeで外部制御/内部制御します。既定フッターはconfirmLabel/cancelLabelを変更できます。自動通信はありません。onClose(reason)を操作へ接続する場合は、reason === 'confirm' 等を明示的に判定し、閉じただけで破壊的な処理を行わないでください。

Vanillaはinit(root, options)、setOpen/getOpen/setDisabled/updateOptions/destroy。data-popup-closeに理由を付けて閉じるボタンにします。本文はsop-popup-bodyへ配置。dialog.title要素はdata-popup-titleで関連付けし、必要ならdata-popup-initial-focusを最初の操作対象へ設定できます。サンプルの入力/検索/設定はデザイン例で、送信・永続化・検索サービスは実装していません。

Escape、明示的な閉じるボタン、背景クリックに対応。closeOnEscape/closeOnBackdropで個別に制御できます。背面スクロールとフォーカスを止め、閉じ終わったら元のボタンへ戻します。内側から外へドラッグして離した場合は閉じません。詳細モーダル内から開いても、その詳細モーダルは閉じません。閉じる動きの180msが終わるまでトップレイヤーを維持し、途中で再度開くと古いタイマーを破棄します。

非表示でも本文DOMを保持するので入力値が残ります。機密情報を消去する用途ではonClose等で明示的にクリアしてください。表示時だけ生成する場合は外側でアンマウントしても構いません。長い本文ではウィンドウ内をスクロールできます。JavaScriptを無効にしたときはdialogの閉じた状態になります。開閉にはJavaScriptが必要です。
