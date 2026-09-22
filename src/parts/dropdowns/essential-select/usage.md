# Essential Select

落ち着いた配色と読みやすい選択肢。日常の設定画面に自然になじむ。

## 選択肢の差し替え
Reactではitems配列へvalue/label/description/icon/badgeを渡します。Vanillaではmarkup.html内のdata-valueと表示内容を編集し、init(root)します。動的にDOMの選択肢を変更した後はcontroller.refresh()を呼びます。

## 状態と操作
Enter/Spaceで開く・確定、上下/Home/Endで移動、文字入力で前方一致検索。Escapeは未確定の移動を取り消します。Tabは現在の候補を確定して通常のフォーカス移動を行います。選択肢内へ他のボタンや入力欄を入れないでください。

## フォーム
nameを指定するとhidden inputで値を送信できます。requiredのネイティブ検証は提供しないため利用側で未選択を検証してください。resetは初期値へ戻る要求を通知します。disabled時は操作と送信を無効化します。

## ポップアップ
Popover API対応環境ではtop layerへ表示し、overflow:hiddenの展示カードやモーダル内でも欠けにくくします。非対応環境はfixed表示へフォールバックしますが、祖先のtransform/overflowで制約される場合があります。クリッピングがない配置か、Popover対応環境を使ってください。画面端では上下を反転します。

## 内容と安全性
選択肢の文字はReact/DOMテキストとして描画します。アプリのHTMLを信頼せず挿入しないでください。renderOptionは非対話の装飾用です。複数配置では識別子を分離します。取り外し時はdestroy()で監視・イベント・開いたポップアップを解除します。
