# プルダウンとアコーディオン

## 配布・導入

各24スキンの外観は独立したCSSです。操作エンジンとReactの描画を共有し、スキンごとに手書きのイベント処理を複製しません。
表示コードとZIPは同じ元ファイルから生成されます。`examples/`には展示と同じ内容の使用例が含まれます。
「導入向け」では本体フォルダー内部に専用の`internal/`を含むため、本体を利用先のコンポーネント置き場へまとめて配置できます。
配布する`preview/`は独立デモです。ギャラリー全体を組み込む必要はありません。

## プルダウン：選択用のcombobox

Reactは`items`と`value`/`onValueChange`、または`defaultValue`を受け取ります。`items`は一意のvalueとlabelを持ち、description/icon/badge/group/disabledを付けられます。
`renderOption`では選択肢の装飾を差し替えられます。**選択肢の中へリンク・ボタン・入力欄を入れないでください。** コマンドや多段メニュー、複数選択は別種のUIです。
通常のDOMは`.sop-select`へinit()し、data-value/data-labelで選択肢を指定します。文字列をHTMLへ直接挿入する際は利用先で安全性を確認してください。

- 外部制御では、コールバックが要求した値を親が反映したときに確定します。更新を拒否した場合は元の値を保ちます。
- 選択肢の動的DOM変更後はrefresh()を呼びます。選択値の項目を削除した場合は、アプリ側で新しい値を明示的に設定してください。存在しない値はプレースホルダー表示になります。
- name付きのhidden inputでフォーム値を送信できます。フォームresetで初期値へ戻り、disabledでは送信しません。これはネイティブselectのrequired検証の完全代替ではありません。必須検証とエラー表示は利用先のフォームに接続してください。
- Tabはアクティブな候補を確定して次の項目へ移動します。Escapeは未確定の候補を取消します。文字入力は頭文字検索であり、入力欄による絞り込みではありません。
- 画面端で上下反転し、visualViewportやウィンドウのスクロール/resizeにも追従します。ポップアップが開いている間だけ位置を監視します。
- Popover APIがあるブラウザーではトップレイヤーへ表示し、ギャラリーの詳細モーダルやoverflowの影響を避けます。非対応環境ではfixed要素へフォールバックしますが、祖先のtransformやoverflowによっては制限されるため利用先で確認してください。
- destroy()でポップアップ、リスナー、Observer、予約RAFを解除します。ReactではEffectのcleanupで行います。

## アコーディオン：内容が主役の開閉領域

Reactは`items: {value,title,subtitle?,badge?,content,disabled?}[]`を受け取り、contentはReactNodeです。
`expanded`/`onExpandedChange`、または`defaultExpanded`で開閉を管理します。multipleで複数展開を許可し、collapsible=falseはユーザー操作による最後の1項目の閉鎖を防ぎます。
アプリからのsetExpandedは明示的な状態指定です。使い方に応じてアプリ側で初期状態・必須展開の整合性を確認してください。

通常のHTMLは`.sop-accordion-item[data-value]`ごとに見出しbuttonとpanelを用意し、contentへ本文を入れます。項目追加・削除後はrefresh()を呼びます。
内容は高さを固定せず、CSS gridで開閉します。文章の追記や画像の読み込みでも、固定のmax-heightで切り落としません。
閉じた本文はinertにし、キーボード操作の対象から除外します。フォーカス中の本文を閉じた場合は対応する見出しへ戻します。
見出しには項目の開閉以外のボタンを入れず、独立した操作は本文内へ配置してください。headingLevelは文書の見出し階層に合わせます。
入れ子では最も近いアコーディオンだけがイベントを受け取り、親の展開を誤って変えない構成です。

## 展示内容の扱い

光や紙の図形はCSSによる装飾です。パーツ本体には外部画像・Webフォント・APIは必須ではありません。
旅先、レンズ、温度、統計、料金プランなどは**デザインのためのサンプル**です。実在の商品仕様、料金や予約可能性、ライブデータではありません。
設定・タスクのチェック操作はページ内のデモです。保存先や送信先には接続しません。利用先では適切な状態管理に接続してください。

## 検証と注意

通常の`npm run verify`は既存の検証に加え`test:disclosures`を実行します。実行環境の制限がある場合は結果を分けて記録します。
動きを減らす設定・フォーカス表示・無効状態をスキン側で上書きしないでください。色だけに依存せず、選択マークとARIA状態を維持します。

参考仕様:
- https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
- https://www.w3.org/WAI/ARIA/apg/patterns/accordion/
