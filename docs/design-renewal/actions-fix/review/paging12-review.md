# Page 12 未測定・全読字の診断

未測定はtrack-stop-pagesだけ。実current 12は白字で不透明::before rgb(65,106,122)の上にあり、祖先の繰返しrail gradientでhelperが測定をskipします。既知pseudo面の限定測定対象へ追加し、既存のcontent/display/visibility/opacity/opaque/no-gradient guardを適用するのが妥当です。

後続root --ink:#fffのallPagingTextはchecked158、21失敗。以下は実文字を一時透明にして背景を採取した結果で、helperの値と一致します。誤検出ではありません。

|部品|文字|実文字RGB|実背景RGB|比|
|---|---|---|---|---:|
|track-stop-pages|‹|[72.0, 109.0, 124.0]|[[213, 231, 236]]|4.387|
|track-stop-pages|/ 12 PAGES|[113.0, 139.0, 150.0]|[[237, 245, 246]]|3.255|
|ribbon-ticket-pages|/ 12 PAGES|[139.0, 107.0, 126.0]|[[248, 237, 242]]|4.084|
|stone-step-pages|/ 12 PAGES|[118.0, 135.0, 94.0]|[[240, 244, 229]]|3.479|
|ledger-page-tabs|/ 12 PAGES|[138.0, 113.0, 83.0]|[[251, 240, 218]]|4.067|
|perforated-pages|/ 12 PAGES|[146.0, 116.0, 94.0]|[[250, 241, 231]]|3.851|
|console-pages|/ 12 PAGES|[110.0, 135.0, 147.0]|[[237, 244, 246]]|3.400|
|stitched-index-pages|/ 12 PAGES|[146.0, 117.0, 135.0]|[[248, 237, 244]]|3.598|
|open-bracket-pages|/ 12 PAGES|[112.0, 142.0, 152.0]|[[237, 245, 246]]|3.159|
|coin-stack-pages|/ 12 PAGES|[148.0, 126.0, 89.0]|[[247, 236, 211]]|3.321|
|margin-line-pages|/ 12 PAGES|[157.0, 119.0, 107.0]|[[255, 242, 233]]|3.620|
|shuttle-key-pages|/ 12 PAGES|[115.0, 141.0, 153.0]|[[237, 245, 246]]|3.166|
|folded-tab-pages|/ 12 PAGES|[148.0, 118.0, 139.0]|[[247, 237, 244]]|3.518|
|slatted-pages|‹|[93.0, 107.0, 67.0]|[[211, 223, 189]]|4.126|
|slatted-pages|01|[93.0, 107.0, 67.0]|[[211, 223, 189]]|4.126|
|slatted-pages|08|[93.0, 107.0, 67.0]|[[211, 223, 189]]|4.126|
|slatted-pages|09|[93.0, 107.0, 67.0]|[[211, 223, 189]]|4.126|
|slatted-pages|10|[93.0, 107.0, 67.0]|[[211, 223, 189]]|4.126|
|slatted-pages|11|[93.0, 107.0, 67.0]|[[211, 223, 189]]|4.126|
|slatted-pages|/ 12 PAGES|[125.0, 137.0, 98.0]|[[241, 243, 228]]|3.320|
|bookplate-pages|/ 12 PAGES|[141.0, 117.0, 85.0]|[[250, 240, 218]]|3.856|

4.5契約を保持し、該当muted文字および未選択inkだけを同系濃色へ変更する方向を推奨。全背景／素材変更は不要。独立server/cacheで既存fixtureを読取表示、APIで20件を12へ切替え、作者・fixtureのファイルは未変更。証拠はcaptures/paging12/result.jsonとcaptures/paging12-paint/paint.json／個別画像。全viewport・他pageの合格をこの限定診断では主張しません。
