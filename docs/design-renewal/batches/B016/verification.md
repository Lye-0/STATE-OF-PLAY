# B016 検証

最終round-6独立10件合格。R220二頁の綴じ面はround4で紙に隠れ、round5で長いkickerに重なると判定。描画層と開始側43%の頁内への折返しを修正し、独立で1000/768/421/390/320px×LTR/RTLの実像・bbox非交差、close実click、通常hover離脱/再入時の字体/矩形固定を確認。R222は下ポケット/R197、二柱/R219の反復を二度指摘され、両案を廃止。20pxずれた三面を二つの全幅20px斜め返しへつなぐ実flowの紙面に再設計、独立round5で長文/RTL/320接点を確認しA合格。R224は一点接触の楕円を上下二根を6px重ねるU持ち手へ変更。R232はforcedのcustom marginによる浮きをvendor thumb all:revert/margin0で解消。未検査案を最終結果へ混ぜない。各実講評3/4/5/6と対応3/4/5を保存。100hashとCSS10配布一致。

native9 dialogs最終6で実modal/ARIA/Tab/ShiftTab/Escape/復帰/ポリシー/disabled/実フォーム/値+選択保持/連続開閉/開いたままdestroy/長文+650px表局所スクロール/320390768/長kicker/RTL/forced/reducedが成功。配布React9×4形式最終6でcontrolled/uncontrolled/rejected/任意の子状態/実フォーム/保持/ID/狭幅/RTL/表/StrictMode open cleanup成功。スライダー最終4（CSSは6と同一）native実0/50/100pointer/範囲/step/上下限/readonly/disabled/FormData/reset/文字固定/RTL/forced/reduced成功、配布React1×4形式の同等の実native API検証成功。ギャラリー10件最終6、型チェック3構成最終6、730配布契約4件最終6成功。20popup+20sliderのnative2レイアウト最終6成功。

共有runtime/importは変更なし。B001 production build成功を参照。検証はChromiumとメディアエミュレーションで、他ブラウザ/実機touchは未確認。原監査/730比較一覧/既承認類似を比較し、全730の再操作はしていない。表示名3件を最終構造へ合わせ、安定IDとAPIを維持。元の原版9nativeダイアログを実際に開いてbefore画像を取得し、単体画像埋込みHTMLのafter実ダイアログ/320と比較する。

単体HTML160件/553画像/4,513,358bytesの読み込みをChromium setContentで確認。初期389ms、全画像decode666ms、外部通信0、エラー0、390px溢れなし。環境のfile navigation制限により直接file://で開く確認はしていない。
