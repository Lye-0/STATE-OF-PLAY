# 225件の修正・検証記録

対象は前回の730件検査で指摘された再設計14件（すべてA）と調整211件。R番号を維持する。検査結果、差戻し理由、最終承認、作者ファイルのSHA-256は `batches/Bxxx/` に保存している。

## 個別検査

主担当が実装・展示画像・操作を確認し、Astra / mediumが独立に検査。色替えだけの差別化、文字や操作領域の移動、不自然なホバー、長文・狭幅・RTL・強制配色・動き軽減、native/React配布の不整合を差し戻した。指摘を修正して再検査し、承認された組だけをpushする。

- B001〜B023の全225件を独立承認・push済み。14件の再設計（すべてA）と211件の調整が一致し、23組の最終レビュー時の作者ハッシュが現在のコードと一致。対象外の作者ディレクトリ変更なし（`tools/verify-scope.py`）。
- B021最終：長い対象説明24条件/24画像で外枠超過0px。多項目ナビゲーションは主担当192条件、独立した配置・React確認も成功。
- B022主担当：長い表の状態名・見出しを56条件で検査。セル/外枠からのはみ出しなし。レイアウト120条件も成功。補助文字拡大後の56条件を再実行済み。最終差分R669/R684は主担当16配置条件、独立native56/React44チェック・32配置・dock4条件で成功。太い旧枠と縦160px余白の復活を解消。
- B023最終：通常/強制配色・狭幅・動き軽減20条件で形と要素の収まりを確認。独立検査はnative50/React32チェック、動きの位相・定常周期も確認。R708の残存交互配色を削除後、周期端のRGB差10超は通常/強制配色とも0画素。

## 回帰検証

Node.js 24.19.0 / ローカルChromiumで実行。全体変更時の広範な回帰と、その後の変更対象の再検証を組み合わせた。以下の全検査を毎回のCSS調整後に繰り返したわけではなく、最終作者ファイルは各組の独立検査とハッシュ照合で固定している。

- 全型チェック app / React / tools：成功（`typecheck-late-review.log`）。以後の部品変更はCSSのみ。
- Workbench実Vite HTTP：41検査成功（`workbench-late-6.log`）。検索・コマンド・コンテキストメニュー・ナビゲーション・表の実操作と、全50メニューの1000フォーカス移動先assertを含む。
- Signature実Vite HTTP：26検査成功（`signature-b017-5.log`）。native/React、入力値・フォーム・reset、20種ratingの両端pointer回帰を含む。
- Foundation：26＋reset3＋badge form3検査成功（`foundations-b013-2.log`）。タグの削除/resetで既定値が失われる問題を修正。
- Pagination：8検査成功（`pagination-b013.log`）。LTR/RTL・桁境界・狭幅・scale・Tab・外側スクロール保持。
- Sequence：17検査、gallery：6検査成功（`sequence-b023-2.log` / `sequence-gallery-b023.log`）。
- 装飾gallery：6検査成功（`ornaments-final.log`）。その後の最後5件の差分はB023独立検査で確認。
- 単体テスト：30ファイル中29成功。残るCI実行一覧テストは追加したpagination-stripのworkflow登録を補い、単独再実行成功（`unit-vite-url-2.log`）。
- 全730件のgallery/操作/320pxとnative JavaScriptの2配布形式：成功。React4配布形式はR489補助文字のコントラストだけ失敗し、修正後にavatarsの全4形式を再実行して成功。以後の作者更新は各組の独立検査で確認。
- expansion-review：全成功（`expansion-review-b023-6.log`）。横並びuploadにも対応する実際の整列検査、グラデーション実面のコントラスト、observer/pauseの確定を検証。
- 本番Vite build：最後のR669/R684修正を含む最終コードで成功、3分（`build-final-225.log`）。

## 提出ファイル

単体HTMLに画像を埋め込み、10件ずつ表示する。画像の外部参照を使わず、表示中のページだけを描画する。全225件の必須修正後画像675枚は破損がないことを確認済み。

最終HTMLは225件・1308画像・10,660,612バイト。全ページの画像decode・ページ送り・検索・拡大・320px表示を5,291msで検証成功。HTTP通信0、runtime error0（`report-check.json` / `report-final-check.log`）。この時間は全23ページを順に検証した実行時間であり、初回表示の所要時間ではない。実行環境のfile URL制約があるため、HTML本文をブラウザへ読み込んで検査した。

GitHub Actionsは依頼どおりpush後の結果を追跡しない。`npm run verify`全工程が最終コミット上で一括完走したという主張ではない。
