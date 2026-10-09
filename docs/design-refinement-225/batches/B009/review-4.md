# B009 round 4 独立再検査

全10件 pass。変更3件をportable/実galleryで再検査し、4枚のcontact sheetとR316近接画像を視認。残り7件と共有ソースはround3からhash不変。作者ファイルは変更していない。

- R292 signal-capsule-notice: **pass** — 作者/共有hashがround3から不変であることを確認し、同roundの画像・操作検査を継承。丸い信号端子の厚みと横へ接続する薄い読取り面が分かれ、以前の二重枠カプセルより固有の構造を持つ。狭幅長文でも端子と本文が重ならない。
- R293 folded-message-notice: **pass** — 作者/共有hashがround3から不変であることを確認し、同roundの画像・操作検査を継承。細い左右の折り目を残し本文の無地面を確保。320pxと長文RTLでも文字が折り目の濃い面へ出ない。
- R297 console-line-notice: **pass** — 作者/共有hashがround3から不変であることを確認し、同roundの画像・操作検査を継承。展示にもff-notice-copyの凹んだ明るい面が現れ、実発火との欠落差を解消。説明文字も実背景上5.491:1以上。下の操作行が情報表示と分かれる。
- R301 open-bracket-notice: **pass** — 作者/共有hashがround3から不変であることを確認し、同roundの画像・操作検査を継承。離れた四隅から長短の連続した左右支柱へ変更され、開いた括弧で読み面を支える構造が成立。本文面は連続し、周縁の空隙と文字は分かれる。
- R310 warm-confirm-notice: **pass** — 作者/共有hashがround3から不変であることを確認し、同roundの画像・操作検査を継承。結果見出しと説明を揃え、追加操作を点線下の行へ分離。色替えに留まらず、結果を読んでから次の操作へ進むBの用途を示す。
- R316 margin-bracket-hint: **pass** — 裏板と折れた紙端で注釈紙の前後が分かれ、クリップが紙端をまたぎ、仕様は折れた接点のある独立した付箋として読める。R330とは構造上の差が成立。320px長文/RTLでも本文は読み面内に収まり、短いviewportでは紙面内をscrollして末尾操作へ到達。クリップはpanel側に残り、forced colorsでは装飾が消える。
- R324 recessed-spec-hint: **pass** — 作者/共有hashがround3から不変であることを確認し、同roundの画像・操作検査を継承。仕様面の間にも不透明なケースの下地があり、背後の文字が混ざる問題を解消。本文の読み面と段差を持つ仕様欄が一体のケースに収まる。
- R329 neutral-detail-hint: **pass** — 320pxの連続識別子は折り返し、本文innerのscrollWidth/clientWidthが198/198px、左右の切れ0px（LTR/RTL、portable/gallery）。比較表と操作構造を保持。
- R330 warm-reading-hint: **pass** — 320pxの連続識別子は折り返し、本文innerのscrollWidth/clientWidthが190/190px、左右の切れ0px（LTR/RTL、portable/gallery）。本文中心の読み順と書体を保持。
- R332 orbital-mark-progress: **pass** — 作者/共有hashがround3から不変であることを確認し、同roundの画像・操作検査を継承。傾いた軌道面と正面の数値が分かれ、弧の終点で進捗を表現。0/25/100で表示と実値を確認し、割合不明では数値が…、native value属性なし、終点非表示となる。

[個別判定と証拠](review-4.json)、[hash照合](hash-summary-4.json)、[可読性測定](contrast-summary-4.json)。

変更3件を再検査、7件は作者・共有hash不変とround3の検査結果を継承。特定状態の確認で無欠陥保証ではない。長文/API probeは凍結initを実gallery CSS環境へ組み込んだfixtureを含む。
