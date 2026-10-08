# Drawbridge Toggle

二枚の橋桁が支点から下り、ONで中央の銅の継手を閉じる跳ね橋。空いた水路と接続した通路の違いを、固定の状態目盛りと併せて示す。

Type A / CSS + Events。二つの金属面が中央で接続し、開いた溝に橋を渡す。

基準サイズ: 104×64px。展示ページの倍率ではなく、実際の部品サイズです。フォームに接続する場合はchecked/onCheckedChangeをアプリの状態へ渡します。button型switchはフォーム値を自動送信しないため、必要ならhidden inputへ反映してください。

React: checked/onCheckedChangeによる外部制御、またはdefaultCheckedで内部制御します。aria-labelを実際の機能名に変更してください。
Vanilla: 対象buttonをinitへ渡し、取り外すときはdestroy()を呼びます。同じページへ何個でも独立配置できます。
無効状態、キーボード、縮小モーションを確認してください。軽量版はイベントのみで、Canvasや毎フレームの描画処理を含みません。
