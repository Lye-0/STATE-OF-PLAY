# Compartment Toggle

銀の戸を右へ滑らせて、ONで左の明るい小室を開く。開いた室と収納された戸を分け、右ドラッグへ直接追従する。固定したOFF／ON表示で状態を明示する。

Type A / CSS + Events。二つの小室を仕切る板が横へ滑り、選んだ室だけを開ける。

基準サイズ: 104×64px。展示ページの倍率ではなく、実際の部品サイズです。フォームに接続する場合はchecked/onCheckedChangeをアプリの状態へ渡します。button型switchはフォーム値を自動送信しないため、必要ならhidden inputへ反映してください。

React: checked/onCheckedChangeによる外部制御、またはdefaultCheckedで内部制御します。aria-labelを実際の機能名に変更してください。
Vanilla: 対象buttonをinitへ渡し、取り外すときはdestroy()を呼びます。同じページへ何個でも独立配置できます。
無効状態、キーボード、縮小モーションを確認してください。軽量版はイベントのみで、Canvasや毎フレームの描画処理を含みません。
