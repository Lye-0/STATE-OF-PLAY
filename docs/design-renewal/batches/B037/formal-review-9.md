# B037 round-9 最終独立検査

全10件pass。R511のRTL保存色HEX表示を修正し、正式8の最後の残件を解消。通常造形の合格基準は変更していない。

## R508 soft-feedback-rating — pass

元監査B/T。淡い藤色と小角丸の実用的な評価面を保持し、確定位置と評価範囲を区別。64pxのnative当たりと固定星を保ち、Bの明瞭さと操作安定として合格。汎用的な形をAの独創性として称賛する判定ではない。

## R510 warm-reader-rating — pass

元監査B/T。暖色の紙面、小角丸、14px見出しを保持。下端で確定位置を示し、色の塗りと区別する。native操作、未評価、10段階、readonly/disabledの実用性を満たす。

## R511 pigment-cabinet — pass

外四辺の箱を廃し、独立した数値道具面、左右14pxのスライドに載るSVトレー、実72×14px把手穴、実HEX付き保存色引出しへ再構成した。トレー前縁と左右材が接続し、穴は背景へ抜ける。R251の選択用キャビネットやR295の出力口と異なり、実色面と保存色の操作領域が構造を決める。通常造形はA合格。保存色の実HEXをLTR隔離し、RTLでも#接頭字が正しく見える。残件解消。

## R512 survey-color-console — pass

元監査T。色面とHSV軸の横二操作区画を保持し、狭幅では軸を省かず一列へ戻す。native軸と実SV面は同じHSVへ対応し、暗い多重枠を軽くした。元の情報構成を磨く調整として合格。

## R513 folded-swatch-color — pass

単なる下付け折面から、SV紙の左右36pxの舌が32pxの実切口へ入り、前の保持端が覆う自立見本面へ変更。左右の上・下に真の空隙が残り、狭幅でも同じ紙の支持関係が読める。R151の金具による保持、R403/R473の二面折紙とは接続と編集面の使い方が異なる。無変形のSVと固定入力を保ちA合格。

## R515 printer-proof-color — pass

元のRGB校正面と実見本の関係を保持。狭幅HEXを全幅行に分け、全7文字が実入力内幅へ収まる。前回のT造形合格を継承しUI残件を解消。

## R516 color-book-spread — pass

中央28px綴じと二つの用途の紙面という前回合格の造形を保持。支持面を編集行に限定し、768px長見出し・エラー行を綴じが横断しない。狭幅HEXも全幅で読める。R220の静的見開きとは色面と数値軸の同一値編集という用途が異なる。

## R517 optical-color-desk — pass

160px色相輪と別SV面というTの構成を保持。実ポインターの四方でH=0/90/180/270を確認。狭幅HEX全幅化で読字残件を解消。

## R518 textile-dye-color — pass

額縁を廃し228pxのSVそのものを染布とし、実黒の下端から30pxの房へ続く。房の8px隙間は全層背景へ抜け、軸・HEX・保存色は布外に分離。R333の縫合量、R345の伸びる燕尾布、R438の袖縫い代とは主形・機能とも異なる。色座標面を歪めず布の自由端を示しA合格。

## R519 open-palette-color — pass

細いL線の普通パネルを廃し、SVと48px保存色受けを持つ一枚の非対称板へ変更。半径18pxの手掛け穴は実背景へ抜ける。round8では暗黙の第二列がなく、狭幅RTLでもSVと保存色が板内に収まり、HEXは独立した全幅行。R320のL支持やR279の両側握り付き器と異なる大きい非対称主形としてA合格。

## 今回の確認範囲

- round9正本100hashと配布CSS10一致。round8から99ファイル不変。変更はpigment-cabinet/styles.cssの保存色::afterへdirection:ltr/unicode-bidi:isolateを追加した一箇所のみ。captures/reviewer-hashes-9.json。
- R511保存色の実疑似文字computed方向と隔離を320/390/768×LTR/RTL、通常/forced darkで独立確認・撮影。#A5BCE0等の#接頭字位置が正しい。captures/reviewer-hex-9。
- 全8色のnative HEX入力幅48条件はround9でも実font測定で全7glyphが収まる。色相輪四方クリックも再確認。
- その他の通常造形・native操作・hover/leave/reenter・長文・forced/reduced・controlled・form/cleanup結果は正式8と不変hashから継承。評価2件は正式4と同一20hash。
- React4形式成功は主担当round8ログを補助参照。今回の限定差分検査で独立React再実行はしない。

## 限界

- 独立ブラウザはChromium。Firefox/Safari未確認。
- round9はRTL保存色ラベル修正の限定再検査。変更のない9件の造形と操作は正式8／評価2件正式4から継承。
- Reactと恒久21試験は主担当結果を補助資料とし、独立実行とは区別。
