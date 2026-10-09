# B015 round 3 追加検査

R490のみpass継続。R491/492/493/494/496/497/498/499/500はchanges_requiredへ訂正。

max10の先頭1が中央寄せによってスクロール開始端の外へ隠れ、Homeで値1となっても選択が見えずポインターで届かない。9件×LTR/RTL×portable/gallery=36条件で再現。作者source100hashは同一。一時DOMのjustify-content:startだけで36条件すべて先頭が完全可視になった。作者ファイルは変更していない。

前回はキーボード値と末尾可視を確認したが先頭pointer到達性の確認が不足した。旧review-3の履歴を残し、本補足で総括判定を訂正する。実画像と数値はreview-3-addendum.json、start-summary-3.json、evidence-3/start-*-sheet.jpg。
