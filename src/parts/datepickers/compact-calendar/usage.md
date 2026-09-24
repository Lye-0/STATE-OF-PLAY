# Compact Calendar

日付値はYYYY-MM-DD、日時はYYYY-MM-DDTHH:mm、時刻はHH:mmです。日付をUTCへ変換しません。isDateDisabledで休日等を指定できます。

## 組み込み

Reactは同梱のCompactCalendarを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。

## 独自日時UI（v4.10.10）

日付・期間・日時・時刻の表示入力はこのパーツのテキスト欄と選択パネルで扱い、ブラウザー標準の日時ピッカーを開きません。日付欄や時刻欄から独自パネルを開けます。期間では開始日・終了日を区別し、時刻のみでも時・分を選択できます。直接入力、値の形式、フォーム、上下限、無効日、reset、readonly、キーボード操作を保ってください。
