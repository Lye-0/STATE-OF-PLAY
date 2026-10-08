# Comb Contact Toggle

三つの銅の歯と銀の歯が、交互の高さを保って噛み合う接点。閉じた箱を省き、接合する端部と固定した状態目盛りを読みやすく分ける。

Type A / CSS + Events。造形を保ち、部品本体に固定位置のON/OFF目盛りを追加。

基準サイズ: 104×64px。展示ページの倍率ではなく、実際の部品サイズです。フォームに接続する場合はchecked/onCheckedChangeをアプリの状態へ渡します。button型switchはフォーム値を自動送信しないため、必要ならhidden inputへ反映してください。

React: checked/onCheckedChangeによる外部制御、またはdefaultCheckedで内部制御します。aria-labelを実際の機能名に変更してください。
Vanilla: 対象buttonをinitへ渡し、取り外すときはdestroy()を呼びます。同じページへ何個でも独立配置できます。
無効状態、キーボード、縮小モーションを確認してください。軽量版はイベントのみで、Canvasや毎フレームの描画処理を含みません。
