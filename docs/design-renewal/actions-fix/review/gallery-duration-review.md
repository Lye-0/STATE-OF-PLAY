# Expansion50 gallery 長時間化の読取レビュー

**カテゴリごとのfresh page/contextを推奨します。** 全部品の同じ操作・画像・狭幅assertを残し、カテゴリ間の蓄積検査は別の明示した試験として維持するのが適切です。作者変更・実行中fixture変更はしていません。

## コードから確定できること

- `scripts/vite-catalog.ts:75–77`はカテゴリ内の全作者CSSをside-effect importする仮想カテゴリmoduleを生成します。
- `src/catalog/browser.ts`のcategories Promise MapとブラウザESM cacheは訪問済みカテゴリを保持します。CSSをカテゴリ離脱時に除去する経路はありません。devではVite style、productionではCSS資源が長寿命文書に残ります。
- `src/app/gallery.ts:89`はカテゴリ変更時にcleanup/controller.destroy/surface.destroyを呼び、rendered配列を空にします。その後gridを置換するため、全730の表示DOMをそのまま保持する設計ではありません。実リークの有無は別の測定が必要です。
- `tests/expansion-50.browser.ts`は一つのpageで全仕様を巡回し、毎部品で1500px→320pxへ変え、card/stage/state/narrowを撮影します。style/layout/paintを繰り返す処理が、訪問済みカテゴリすべてのCSSが残る文書で動きます。後半悪化と整合する有力な原因候補です。
- 保存ログではarchive→inspection→folded→stoneまで通過が進行しています。今回の読取だけでCPU時間の主因をCSS selector処理、JS heap、animation screenshot処理のどれかへ断定はしません。

## 実装方針（試験のみ）

1. specsをカテゴリ別にまとめる。カテゴリごとに新context/pageを作り、URLの`?category=...`から直接開始する。アプリがこの復元経路を実装済みなので不要な初期togglesロードを避けられる。viewport1500×1000/reducedMotion/timeoutを毎回同一にする。
2. そのカテゴリ内の全dについて既存assertと全画像をそのまま実行する。既存ID/category filters・captureOnlyの意味は維持する。単なるcapture-only化、操作skip、narrow省略、timeout緩和で速くしない。
3. errors/resultsは全カテゴリを横断して保持し、pageerrorにはcategory/idも付ける。各contextはfinallyでcloseする。close前までの非同期errorも取りこぼさない。成功件数をexpected specs件数と一致させ、ID重複・欠落も検出する。
4. サーバーとbrowser本体は共有してよい。Vite変換cacheは再利用し、文書のCSSOM/ESM/DOMだけをリセットする。fresh pageは『必ずOS rendererプロセスが新しくなる』保証ではないが、文書資源の蓄積を解消する。新contextならstorage/owned pageも明示的に閉じられる。
5. 結果をカテゴリごとに保存し、操作／画像の時間も記録する。失敗時に成功済み件数を失わず、画像数・対象集合を最終reportで確認する。

## 残すべきカテゴリ横断検査

`tests/lazy-loading.browser.ts:94–100`にはdevelopment/productionで全37カテゴリをforward/reverse訪問し、style-orderとruntime errorsを確認する試験があります。これは残してください。category cache、all pagination、保持コントロール、stale importも同ファイルに残っています。

ただし現在のstyle signatureは各カテゴリの先頭stageのrootと最大3childrenの限られたcomputed propertiesです。**全730を同一文書で操作・撮影する従来runと完全同等ではありません。** したがって『全操作・全画像はカテゴリ隔離』『カテゴリ横断はlazy suite』と試験範囲を明記し、今回の長寿命runは別の持続性証拠として保存するのが正確です。必要なら軽量な全作者チェックを補完し、初回と全カテゴリ読み込み後のroot/text/style署名・基本native操作を比較する。画像4枚×730や幅反転730回を蓄積ストレス側へ重複させる必要はありません。

## 原因の実測を固める最小比較

主担当のfresh同3table測定では、viewport・reduced・対象順・写真数・操作をそろえ、goto/categoryロードを別時間に分ける。各条件でstyleSheet数/総CSS rule数、DOM nodes、JS heap（利用可能なCDP metrics）、running animationsを記録し、操作とscreenshotの時間を分ける。遅い既存runは読むだけにして介入しない。新文書が速ければ蓄積との因果を支持しますが、cache warmupや同時プロセス負荷の差も残るので、単一サンプルを本番ユーザーの恒常的速度と扱わない。

これは試験分割の提案です。実アプリのCSS解放・モジュールcache除去は別のリスクを伴い、Actions安定化のために作者／gallery本体へ急いで導入する必要はありません。
