# Raster Reveal Toggle

二枚の細い格子を半周期ずらし、OFFでは閉じた暗い面、ONでは縞の間に明るい開口を出す。端の格子と銀の持ち手を残し、固定目盛りで状態を確認できる。

Type A / CSS + Events。二枚の細かな格子がずれ、斜線の窓から明瞭な面へ変わる。

基準サイズ: 104×64px。展示ページの倍率ではなく、実際の部品サイズです。フォームに接続する場合はchecked/onCheckedChangeをアプリの状態へ渡します。button型switchはフォーム値を自動送信しないため、必要ならhidden inputへ反映してください。

React: checked/onCheckedChangeによる外部制御、またはdefaultCheckedで内部制御します。aria-labelを実際の機能名に変更してください。
Vanilla: 対象buttonをinitへ渡し、取り外すときはdestroy()を呼びます。同じページへ何個でも独立配置できます。
無効状態、キーボード、縮小モーションを確認してください。軽量版はイベントのみで、Canvasや毎フレームの描画処理を含みません。
