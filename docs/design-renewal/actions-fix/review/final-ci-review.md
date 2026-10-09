# 最終Actions修正コードレビュー

**Blocking findings: なし。** 現在のstaged＋workingを合わせた内容を読み取り確認しました。追加のブラウザ／fixture生成／型検査は実行していません。作者・共有源・検査ファイル・実行中fixtureは変更していません。

## 最新のカテゴリ別分割

`tests/expansion-50.browser.ts`はカテゴリが変わると旧pageをcloseし、`browser.newPage()`で独立browser contextに属する新pageを作成します。Playwrightのこの便宜APIはpageごとにcontextを所有するため、旧page.closeでそのcontextも閉じます。同カテゴリ内の全カードは同じpageで検査し、次カテゴリへCSSOM/ESM文書状態を持ち越しません。

直接URLのcategoryパラメータは既存galleryの復元処理を利用しています。viewport/reducedMotion/default timeout/pageerror listenerを再設定し、全カテゴリのerror配列は共有。各作品の操作分岐、通常・state・狭幅画像、320pxの境界assertは変更されていません。非captureOnly実行は結果件数とID一意数がspecs件数と一致する追加assertもあります。例外は握りつぶさずfinallyでbrowser/serverを閉じます。

従来の単一文書全巡回とは蓄積条件が変わりますが、READMEとコードでその境界を明示し、既存lazy-loadingの全カテゴリforward/reverse・cache・runtime error試験は削除されていません。従来730件の長寿命操作と完全同等という主張をせず、部品別網羅とカテゴリ横断試験を分離する対応は妥当です。

## PID付きgallery cache

`tests/gallery-server.ts`のcacheDirはROOT/.test-output/suite/vite-cache/PID。OSに依存しないpath.joinを使い、同checkoutで並行するgallery shardのoptimizer書換え競合を避けます。独立process間でPIDが異なるため今回の2shardを隔離します。app config/catalog pluginは保持、固定interaction中だけwatch/HMRを止めています。作者更新を確かめる実watcher試験は別サーバーのままです。

## その他の最終差分

- WorkflowのOS行列・suite・失敗終了は維持。concurrencyは旧同ref/runのキャンセルのみ。
- React事前最適化と静的fixtureサーバーは検査対象コードの置換やassert免除を行いません。
- Continuumは全Bラベルの色継承を残し、固定寸法だけ元8件へ限定。
- セグメント一行強制の代わりに行内同幅・非重複・実inputの全target包含・label包含・全選択時のtarget位置保持を検査。承認されたwrap設計を無条件失敗にしません。
- コントラストは最後に集計してもassertで失敗し、4.5閾値を下げていません。擬似面の既知4ページャーは不透明・可視・非勾配をguardし、5件の実paint helperは独立測定と一致済み。aria-hidden装飾除外と情報文字の祖先opacity=1 guardを保持。
- 実paint helperの濃色成功／淡色失敗／style復元回帰が追加されています。対象限定の判断は先行レビュー記録と整合。
- Glassは現仕様の透明A/より濃いBと、solid fallback・blur・展示/実通知一致を維持。有限の実animation終了を待つ変更は固定sleepより状態に即しています。
- `git diff --check HEAD`で指定workflow/config/testsに空白エラーなし。

このレビューは現在のコードにblocking問題が見つからなかったという結果です。実行中full gallery2shards／React／lazyの最終成功やWindows実行結果を代替しません。主担当の最終Node22 typecheck成功を前提情報として受領しています。最終コミットには確認したworking側のカテゴリ分割・PID cacheを含める必要があります。

## Gallery cold-cache追補

最新`gallery-server.ts`の`optimizeDeps:{entries:[],noDiscovery:true}`追加を読み取り確認しました。app configを無効化しておらず、Viteの設定mergeにより`vite.config.ts`の明示React5依存includeを保持したまま、広いHTML/source走査と後発依存発見を止めます。作者CSS・実gallery moduleの配信や検査assertを省略する変更ではありません。PID別cold cacheで巨大な自動scanが起きたという主担当の診断への対策として妥当で、blocking問題はありません。

追加実行はしていません。両shardの起動成功・120件以上PASS・最終typecheck成功は主担当からの報告で、全件完了とは区別します。
