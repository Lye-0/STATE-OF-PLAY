# B016 round 4 独立検査

6 pass / 4 changes_required。差戻しはR504/517/520/522。全100作者sourceの検査終了時hash一致を確認。

- R501 flag-score-rating: **pass** — 旗端と支柱の接点が五段階を支え、狭幅も一列。星を濃くした結果、実面との比率4.366:1。
- R502 blueprint-score-rating: **pass** — 三方の折れた翼が星の接合面を支える。星を覆う過大な装飾にならず、旗/活字札と構造を区別できる。
- R503 ribbon-score-rating: **pass** — 連続する帯の端と厚みで一つの尺度を読む。任意maxでも帯は星と続き、選択星は4.361:1。
- R504 ceramic-score-rating: **changes_required** — 反った陶面と裾の構造は独自だが、五段階の端の星が縁に重なり、十段階では面が途中で終わる。
  - 320px viewportのroot222px/実gallery251pxで五段階末尾の星が陶面の濃い縁へ重なる。LTR/RTL・選択5でピクセル確認。星#62815cは通常面#dbe7ceに3.393:1だが、縁#A0BA8Bでは2.055:1へ落ちる。 改善: 陶面の縁・曲線と五段階の実操作列を同じ有効幅へ揃え、星全体を平らな高コントラスト面に載せる。
  - max10で末尾選択・横スクロールすると陶面が8個目付近で終わり、末尾9/10の星が盤面外に浮く。実値10は正常。LTR/RTL・gallery/portable・Reactで再現。背景pseudoが可視scale幅に留まり、全項目のscroll幅を覆っていない。 改善: 任意maxの全操作列と同期する幅の面・裾を作り、横スクロールしても全星を支える構造にする。
- R505 letterpress-score-rating: **pass** — 活字札の縁・下面と確定枠の関係は一貫。狭幅でも五段階を分断せず、星の比率3.163:1。
- R508 soft-feedback-rating: **pass** — 柔らかい輪郭のキーでフィードバックを扱うB。星・選択枠・値を読みやすく整理し、過剰な造形を加えない。
- R510 warm-reader-rating: **pass** — 本文に馴染む暖色のB。角の小さい一列のキーと確定下面で値を示し、R508より静かな用途差が成立。
- R517 optical-color-desk: **changes_required** — 色相輪内のSV面が一つの光学盤として成立。390/320pxでも盤面はroot内へ収まり、輪とSV・軸・HEXが同期。ただしforced軌道が消える。
  - forced-colorsで3本のrange軌道が白地へ消え、黒いつまみだけが表示される。range幅76〜123px中、各10pxのthumb以外は全列が白。appearance:none、背景image:none、border0で、操作範囲・端点を視覚的に読めない。Home/End・値変更自体は正常。portable/galleryとReactで再現。 改善: forcedでも軌道の輪郭/端点をCanvasText等で示すかnative表示へ戻す。色の勾配を残す場合もCanvasとの境界を確保する。
- R520 letterpress-ink-color: **changes_required** — 試し刷りの重ね罫と色面、明朝RGB行で印刷用の情報構成を区別。SV・RGB・HEXは同期。ただしforced軌道が消える。
  - forced-colorsで3本のrange軌道が白地へ消え、黒いつまみだけが表示される。range幅76〜123px中、各10pxのthumb以外は全列が白。appearance:none、背景image:none、border0で、操作範囲・端点を視覚的に読めない。Home/End・値変更自体は正常。portable/galleryとReactで再現。 改善: forcedでも軌道の輪郭/端点をCanvasText等で示すかnative表示へ戻す。色の勾配を残す場合もCanvasとの境界を確保する。
- R522 linear-lab-color: **changes_required** — 横長の色面と三つの測定レーン、枠付き実数値を軸方向へ整理。R517の円盤やR520の印刷面と区別。ただしforced軌道が消える。
  - forced-colorsで3本のrange軌道が白地へ消え、黒いつまみだけが表示される。range幅76〜123px中、各10pxのthumb以外は全列が白。appearance:none、背景image:none、border0で、操作範囲・端点を視覚的に読めない。Home/End・値変更自体は正常。portable/galleryとReactで再現。 改善: forcedでも軌道の輪郭/端点をCanvasText等で示すかnative表示へ戻す。色の勾配を残す場合もCanvasとの境界を確保する。

全10件を実gallery/portableとReact4配布で確認。通常/hover往復、320/長文/RTL/forced/reduced、nativeフォーム・値・keyboard/reset/controlledを実操作し、画像を視認した。R517輪の390px/320px overflowは解消。R504 controlledの初回計測はReact反映待機の不足と特定し、fresh4配布の追試で値2を保持することを確認。

証拠・範囲はreview-4.jsonとevidence-4、各measurements JSON。差戻しは再現する表示不整合であり、今回の全A造形を汎用の面だけと判定したものではない。明記した条件の検査であり無欠陥保証ではない。
