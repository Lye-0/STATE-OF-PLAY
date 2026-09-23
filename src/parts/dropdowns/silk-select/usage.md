# Silk Select

柔らかな灰紫の面。候補を移る一枚の背景に、折れた布の明暗が走る。開くと面がほどける。

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

## 文字中心の面と任意の補助表示（v4.3.0）
AタイプはautoIcon=falseで、labelから装飾アイコンを自動生成しません。itemsにiconを指定した場合は20pxの小さなアイコンとして表示します。`showHeading` / `showHints` をtrueまたはfalseで指定して、メニューの見出し・操作ヒントを変更できます。候補名だけでも使えます。通常HTML版では対応する装飾要素を任意で配置してください。

`select-motion.ts` はA用の背景面だけを処理します。Bタイプはこの処理を開始しません。hover・キーボードの移動候補と、確定済みの選択マークは別々に表示されます。動的な候補変更後はVanillaの`refresh()`を呼びます。Reactではitems変更に合わせて更新します。表示と操作の定期ループはありません。
