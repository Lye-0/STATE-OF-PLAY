# Paper Field

明るい画面に自然になじむ、白い入力欄。読みやすさを第一に。

## 入力を組み込む
本物の `input` を使う入力パーツです。ラベル・placeholder・説明は、利用先の項目に合わせて差し替えます。Reactの本体に展示文言は固定していません。
Reactは `value` + `onValueChange`（または通常の `onChange`）で外部制御し、`defaultValue` で内部制御できます。外部制御の値は入力イベントの中でそのまま同期更新してください。空文字の初期値は `''` です。通常のonInput/onBlur/onCompositionEnd等とinputRefも受け取れます。
Vanillaは `.sop-field-control` にname/type/required/readonly/disabled等の標準属性を設定し、`init(root, {onValueChange})` で初期化します。`controller.setValue()` は外部更新で、ユーザー入力のコールバックは発火しません。直接input.valueやコンテンツを変えた場合は `controller.refresh()` します。最後に `destroy()` します。

## 状態と入力体験
- 入力・コピー・貼り付け・選択・矢印キー・Undo/Redoは標準の入力欄に任せます。キーストロークを装飾のために置き換えません。
- 日本語IME中の文字列を切り詰めたり、変換候補をEnterで強制確定/送信しません。クリア・表示切替は変換中無効です。ReactのonValueChangeは変換途中にも発火するため、非同期検証や検索の確定はonCompositionEnd/isComposingも考慮してください。
- `error` はエラー文とaria-invalid/native customValidityへ接続します。空文字で解除します。`validateOnBlur` は任意で、標準のtype/required/patternに基づく検証をフォーカス終了時に表示します。`success` は利用先が検証完了後に指定する表示状態で、自動の安全判定ではありません。
- `disabled` は入力もフォーム送信も無効。`readOnly` は編集不可ですが値の選択・コピーと通常のフォーム送信は保持します。外部フォームのname/form/requiredに対応します。
- `maxLength` とカウンターは標準入力と同じUTF-16コード単位です。絵文字1つが複数になる場合があります。手書きで文字列を切断せず、ネイティブの上限を利用します。
- 複数行は `autoGrow` で高さを調整。CSS変数 `--sop-field-max-height`（px、標準280px）を超えると内部スクロール。`autoGrow={false}` で手動リサイズ。単行と複数行の変更はinput要素が交換されるため、値を保持する場合は外部制御してください。
- `prefix` / `suffix` は装飾用。入力値には含めず、重要な単位はdescriptionにも書いてください。
- パスワードの表示切替は隠蔽/表示のみ。認証・保存・暗号化機能ではありません。ログやストレージへ値を自動記録しません。実データでの展示は避けてください。

本体はCSS+イベント処理だけで、Canvas・常時RAF・外部送信・追加ライブラリは不要です。動きを減らす設定とforced-colorsを尊重します。フォーカスしてもDOMを作り直さず、カーソル位置を保ちます。
