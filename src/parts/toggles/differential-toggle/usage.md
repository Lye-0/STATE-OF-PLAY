# Differential Toggle

二枚の偏心円盤が逆方向へ噛み合い、薄い窓の色を切り替える。


Type B / CSS + Events。二枚の偏心円盤が逆方向へ噛み合い、薄い窓の色を切り替える。

基準サイズ: 104×64px。展示ページの倍率ではなく、実際の部品サイズです。フォームに接続する場合はchecked/onCheckedChangeをアプリの状態へ渡します。button型switchはフォーム値を自動送信しないため、必要ならhidden inputへ反映してください。

React: checked/onCheckedChangeによる外部制御、またはdefaultCheckedで内部制御します。aria-labelを実際の機能名に変更してください。
Vanilla: 対象buttonをinitへ渡し、取り外すときはdestroy()を呼びます。同じページへ何個でも独立配置できます。
無効状態、キーボード、縮小モーションを確認してください。軽量版はイベントのみで、Canvasや毎フレームの描画処理を含みません。
