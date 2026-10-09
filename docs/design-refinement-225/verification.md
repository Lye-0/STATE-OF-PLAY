# 225件修正の検証記録

- Node.js 24.19.0 / Chromium（ローカル環境）。CI実行結果の追跡はしない。
- 全体型検査：成功（typecheck-b023-2.log）。
- ページ番号窓：8ケース成功。LTR/RTL・999/1000・狭幅・scale・Tab・外側スクロール保持（pagination-strip-final.log）。
- SIGNATURE：23検査成功。対象6カテゴリの300種類・320/390/768・native入力/フォーム/リセット/破棄（明示的offline source adapter、signature-b023-2.log）。
- SEQUENCE：17検査成功。nativeページ/タグ・削除/reset・制御状態・混在CSS（明示的offline fixture、sequence-b023-2.log）。
- SEQUENCE gallery：6検査成功。208配布・432ソース・詳細欄/320/390/768（sequence-gallery-b023.log）。
- WORKBENCH：40検査成功。検索/コマンド/メニュー/ナビゲーション/表の実操作・RTL・狭幅（workbench-b023.log）。
- unitは30テストファイル中29成功。残るCI実行一覧テストは、新規pagination-stripのworkflow登録を補って単独再実行成功（unit-vite-url-2.log）。
- 本番Viteビルド成功（build-b023.log、3分17秒）。
- 追加730件の実ギャラリー・操作・320px検査は全件成功（browser-730-checks.json、複数ログをIDで照合）。React4配布形式はR489の補助文字コントラストのみ失敗し、色調整後avatarsの全4形式再実行成功。native JavaScript全カテゴリ・2形式は成功（native-b023.log）。exportレビュー回帰検査は実行中。以後の差分は対象検査と独立検査で確認する。

最初の実行で見つかった問題：SEQUENCEの削除→reset時の既定選択消失、Optical Color Deskの回転要素による390px幅2px横はみ出し。いずれも上記再実行で成功。

- タグの新規回帰3検査は成功（badge-form-after.log）。値・name・FormData、要素/フォーカス保持、readonly/disabled/controlled、削除/reset/schema/default/cancel/destroyを確認。
- 既存upload回帰の「縦の同一軸」固定条件は、新しい横並びレイアウトにも対応。縦配置は既存の記号・文言の中心線条件を保ち、横配置はコピー2行ブロック中心・非重なり・記号内SVG中心を検査する（expansion-review.browser.ts）。

- 画像埋め込みHTML途中検証：120件/613画像/4,235,759bytes、3.239秒。全ページの画像decode、検索、拡大、320px、HTTP遮断・runtime error無し（report-check.json）。225件で最終再生成予定。
- ページ番号コントラストは単色CSSから計算できないグラデーションも実ピクセルで測定するよう回帰テストを拡張。件数20を減らさず全 current label を検査する。

- foundation26検査＋reset3＋badge form3、pagination8、全型チェック成功（foundations-b013-2.log、pagination-b013.log、typecheck-b013-5.log）。
- expansion-review全成功（expansion-review-b023-6.log）。旧upload縦軸条件/gradient計算除外/observer属性とanimation pause確定のタイミングを実挙動へ合わせた。通常・端ページ・再キー入力・危険操作文字・補助文字・オフスクリーン停止/軽減/破棄を検証。

- B014 round5独立検査10件pass、実ギャラリー/portable/React4形式を確認。B015以降の通常文字スキャン716箇所で低コントラスト候補0（全状態の保証ではない）。
- 途中HTML更新：140件714画像、4,859,948bytes、2.747秒。HTTP遮断で全画像・検索・拡大・320px成功。最終225件を再生成する。
- 後続Aの光学/経路/トレー構造変更後、Workbench Vite HTTP全40検査成功（workbench-strong-a.log）。320/390/768、全commands/contextmenus展開の画面内配置、Escape、native table操作、軽減/破棄を含む。
- B016の評価7件はroot222pxの強制配色でも星の選択差が可視。星寸法16.7〜21.5 ×24px（main-forced-preflight.json）。独立レビューは別途行う。

- B015r3の独立再検査全10pass。氏名列72→120px、forced星交差解消、R499星幅6.16→18.75px。3星の実面比4.519/4.208/4.063:1。実Signature Vite HTTP全25検査（React含む）成功、signature-b015-3.log。
- 構造を追加調整した7件の既存gallery検査は全成功（latest-materials-browser.log）：縫い綴じ/陶のwizard、optical command、index pocket、stitched map、ceramic table、segment orbit。
- B018r6は7工程・長い工程名・入力値保持・LTR/RTL・通常/forcedの8状態、56工程ボタンの文字内収まりを確認（main-material-check.json）。r5では数値チェックだけでは拾えない表示不整合があり、実画像で発見して修正した。
- 全16ratingsにmax10先頭pointer不能を追加発見し、B015合格を補足訂正して再オープン。作者ごとのjustify-content:startで修正。既存Signatureへ20種×左右×通常/forcedの両端pointer回帰を追加し、修正前失敗・修正後24検査成功を確認（明示offline adapter）。全型チェック成功。独立再検査はB015r4/B016r6。

- 現行全変更の本番Vite build成功、3m15s（final-build.log）。160件HTMLは914画像・6,317,647bytes、4.583秒で外部通信0・画像decode/ページ送り/検索/拡大/320px全成功（report-160-check.log）。

- B017r5構造/エラー/長文修正後、Signature Vite HTTP全26検査（React＋20ratings両端回帰含む）成功（signature-b017-5.log）。主担当のB017差戻し回帰は48条件成功（main-followup-5.json）。

- B018r7差戻しの40条件（長文/7工程/async error/RTL/forced）が主担当の実ブラウザ確認で成功、main-followup-7.json。独立再検査待ち。
