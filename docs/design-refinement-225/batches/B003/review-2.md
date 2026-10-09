# B003 round 2 独立検査

4件 pass、入力6件 changes_required。

R112/114/119/121/124/125 のエラー説明が実 gallery で3.154:1、凍結 portable の暗背景で3.014:1。11pxの説明としてコントラストが不足する。枠色と説明文字色を分け、ホスト面に合う表示が必要。白背景の配布まで同じ不具合と断定しない。

- R096 pass: 上下の軽い木桟と経糸、杼が明快。本文面を広く保ち、hoverで文字移動なし。長い見出し、320px、End/Enter開閉が成立。
- R104 pass: 淡い磁器の縁と読む面、切断端が整理され、旧来の多重ベベル感が解消。長文・狭幅・キーボード開閉でも崩れない。
- R112 changes_required: 青灰の外周と凹んだ明るい溝が区別でき、文字と操作は固定。ただしエラー説明の可読性が不足。
- R114 changes_required: 折り上げた両端で書く面を支える造形が独自で明快。狭幅のpasswordと長いtextareaも操作と装飾が重ならない。ただしエラー説明が暗い。
- R119 changes_required: L字定規と切欠き紙面に再構成され、用途と独創性が両立。長いtextareaでも尺度が連続する。ただしエラー説明の可読性が不足。
- R121 changes_required: 薄い木端と赤褐色の蝋面、小さな下端の丸みが一体として読める。白い入力文字は明快。ただし面の外のエラー説明が暗い。
- R124 changes_required: 傾斜トレー・紙面・下押さえ板の役割が明瞭。入力とclear/reveal位置を保ち、textareaでも板が文字を覆わない。ただしエラー説明が暗い。
- R125 changes_required: 右端だけを巻く磁器板と広い平面がR112の溝とは異なる構造として成立。狭幅でも巻き縁が操作を覆わない。ただしエラー説明が暗い。
- R138 pass: 青灰の丸背・薄いバンド・紙断面が接続した構造。hover往復では紙層だけが動き、文字・矢印は静止。長い文言も読める。
- R151 pass: 1500→320pxで末尾タブの左右切れ0pxをportable/gallery・LTR/RTLで確認。manualは選択値/本文を保ちフォーカスタブ優先。Enterで確定可能。造形への悪影響なし。

全10件×portable/actual galleryの20経路。通常、hover入口40ms/定常/退出60ms/再進入60ms/復帰、320px、長いラベル、reduced motion、forced colorsを撮影・実測。全件本文のhover位置差0px。アコーディオンEnd/Enter開閉。

6件×両CSS環境。password/textareaは凍結initを使いcloneしたDOMへ対応ネイティブmarkupを挿入する独立ハーネス。表示後selection2..7保持、Enter clear、readonlyで両ボタンdisabled、textarea112→280→112px、invalid、forced、fx pointer-events:none。controlとclearは6px、clearとrevealは2px離れ重なりなし。Reactラッパー自身は未実行。

通常markupの凍結portableは公開API setError。actual galleryは既存の可視設定「エラー例」を選択。各6件の実背景・文字色・画像で確定。

portable/actual gallery×LTR/RTL×automatic/manualの8経路。manual検査では凍結initで同じDOMをmanual設定に再初期化。1500→320→1500px、縮小750ms後測定、manual Enter確定。

通常4枚、fields4枚、tabs1枚、error1枚のcontact sheetをすべて視認。特定ブラウザ・指定状態の検査であり無欠陥保証ではない。

検査開始時/終了時ともmanifest作者ハッシュ一致、shared selection-indicatorを含む。作者ファイル変更なし。
