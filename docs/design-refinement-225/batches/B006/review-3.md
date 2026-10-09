# B006 round3 独立検査

8件 pass、R181/R183の2件 changes_required。

- R181 book-jacket-segments: **changes_required** — 開いたブックジャケットの独自性と等幅は保持。RTL長文の左端が紙面から背へ乗り、読み面の確保が必要。

- R183 double-track-segments: **changes_required** — 二重軌道と上下の留め具は明快。ただし長文の字形が明るい面を越え暗い軌道側に出る。

- R184 bracket-seat-segments: **pass** — U字の座が面を支える構造を保持。長文のlabel箱は面境界に近いが、実字形は内側にあり読める。

- R185 satin-key-segments: **pass** — サテンの一面と上端反射線へ整理され、文字を動かさず選択面を示す。等幅と長文を確認。

- R189 reading-mode-segments: **pass** — 罫線と小さなしおりが読書モードの用途に合う。非選択文字は通常5.133:1、hover4.522:1を確保。

- R194 crossbar-check: **pass** — 上下の横桟と左右の留め具に支えられた確認板が明快。混在ダッシュとチェックを見分けられる。

- R195 ceramic-stamp-check: **pass** — 八角の焼き締め縁と凹んだ釉薬面を視認。状態変更でも枠と文字の位置を保つ。

- R198 ladder-seat-check: **pass** — 連続した桁と横木が座を支え、チェック面を横切らない。ネイティブの混在解除とresetが一致。

- R200 inset-lens-check: **pass** — 四角い計器の中の円形レンズに独自性があり、チェックと混在線が背景から読める。

- R203 switchyard-check: **pass** — 枕木とレールの下端で分岐レバーが連動し、文字とクリック位置を保つ。

R181はRTL長文の字形が紙面の左側へ約3.9px、R183は長文が明るい面の右側へportable4.34px/gallery詳細1.92px出る。いずれも実gallery詳細と凍結portableで再現。読み面と内容領域を合わせる修正を要する。詳細はreview-3.json、face-probe-3.json、rtl-face-probe-3.json。

全10件の通常/hover往復/320/長文/forced/reduced、segmentsの等幅・7項目・縦・RTL・native form/keys/reset、checkboxのchecked/mixed/Space/disabled/FormData/reset・RTL・forcedを実操作した。主要/追加contact sheets計12枚を全視認。native checkboxの説明文字比率は4.724〜5.187:1、タイトル7.632以上。

R184の字形越境、R189のコントラスト疑義は実測で棄却。作者ファイルは検査担当で変更していない。検査対象状態を限定した判定であり、無欠陥保証ではない。

終了時には主担当が確定2件の修正を開始していたため、integrity-3.jsonには該当2 stylesの差分を記録。指摘のgallery実測は修正前、portableは不変のround3に対するもの。
