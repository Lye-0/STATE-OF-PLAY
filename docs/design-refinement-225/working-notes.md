# 作業中の記録

- 225件中120件（B001〜B012）を独立検査合格後にpush。UI最新 8e01891d3f7243df5d0beb27d34b6fc2f8996e93。CI配線修正も3c2847e962ba7b413acfa6c5f3523dc06fc567faでpush済み。
- B013 round3 を Astra medium が検査中。B014〜B023は作者実装・撮影済み、独立検査前。
- B011ではform resetの共有回帰修正（sequence/badges.ts）も同時にcommit。既存SEQUENCE17検査成功。B013 shared manifestも同ソースを保持。
- B013現在round3、B014 round3、B015 round1、B016 round3、B017 round2、B018 round2、B019 round2、B020 round3、B021 round2、B022 round2、B023 round2。
- B022/23はauthor.pyを使ったimplement-b022/23.pyで実装。one-shotのため再実行しない。
- B020 stitched-file-context の残存斜め飾り（items::before）を外しround3。B021 ceramic mobile menu背景/子項目の旧巨大接続を整理round2。
- B022 table各行の操作2個が折り返して行高を増やさないよう112px列、warm navのブランド折返し/open sheet見出し/narrow ribbon旧88px帯を補正round2。
- B023 counterflowは旧offset-pathとmaskを解除して二本の逆方向直線流路を表示round2。
- 抜けていたB019のcommand起動前画像は再撮影済み。
- capture-galleryはnavのexpanded/expanded-narrow、command/contextのlauncherに対応。320px撮影前にmouseを外して古いhover tooltipを残さない。
- report.pyは画像1000x1600以内、10件/page。拡大dialogは縦長画像をスクロールして読める。nav narrow展開も追加。前回110件558画像のoffline全ページ表示検査成功（高さ上限変更後は最終で再確認）。管理Chromiumのfile://はpolicy制限があるため、正確なHTMLをsetContent＋全HTTP遮断で検査する。
- verify-scope.pyは最終225件push後に実行。対象外authorディレクトリ変更なし、全review hash一致、未commit author/sharedなしを確認する。

## 実行中のテスト

- unit-b023.logは29/30成功。vite-url.testのCI実行一覧照合が追加pagination-stripのworkflow登録漏れで失敗。workflow補正後unit-vite-url-2.log単独成功。build-b023.logはビルド実行中(session48954)。
- signature-b023-2.log：23検査成功。実fixtureは6カテゴリ300種類（テスト見出しの96は古い固定文）。Optical Color Deskの回転hue指標2px overflowはリングoverflow:hiddenで解決。
- sequence-b023-2.log：17成功。sequence-gallery-b023.log：6成功。
- workbench-b023.log：40成功。
- pagination-strip-final.log：8成功。typecheck-b023-2.log：全成功。
- expansion-50-b023.logはreading-mode-segmentsで停止。マーカーを使わずしおりで選択を示す正しい設計をテストが未対応。tests/expansion-50.browser.tsでvisible markerなら位置、一方hidden markerなら一つの選択キー＋背景/pseudo opacityが変化したことを検証するよう対応。reading単独成功(expansion-reading-b023.log)。RUN idログも追加。このテストファイルはB012 commitに含めた。
- tools/resume-expansion.pyは成功済みPASS idを除外して残りを実行。expansion-50-b023-2.log（session47650）に出力。npm scriptの後続React/native/reviewも実行予定。途中停止があれば残り集合を更新して再開し、全730のPASSを集計する。

## 次の作業

B013最終講評が戻ったら修正・freeze・再検査を優先。全passで10件push。以後B023まで同じ進行を続ける。未来のauthorディレクトリを先にcommitしない。B012のpush完了recordは済み。検査済みpartだけを結果HTMLへ組み込み、最後に225件で再生成・全画像検証。Actionsは追跡しない。

## B013 round4再検査中
review-3は1pass/9差戻し。mountBadgesのみnative契約修正（name/value,readOnly,stable input/label）。badge-form回帰3pass。R430長文menu、R450長文label/count、R459hover、R436輪を札裏へ。B013r4＋B011r6/B012r4補足reviewをhover_inspectorへ依頼済み。今全source固定。B014はR489mutedコントラスト修正round4にfreeze済み。React avatars4形式pass。native730全カテゴリ2形式pass。expansion-reviewは旧upload縦軸条件で停止、新構造に合わせ横コピー中心＋SVG中心検査へ更新して再実行(session43809)。foundations正規mode実行中4470、その後pagination/typecheck連結。

## 最新検証・差分
B013r5/B011r7/B012r5は型注釈のみ更新（next:Element|null）。npm run typecheck全成功。担当レビューは全件pass、保存待ち。foundation26＋reset3＋badge3、pagination8成功。新badge testを既存test:foundationsへ追加、旧readonly disabled assertをaria-readonly＋値不変へ更新。tests/expansion-review.browser.tsは横並びupload、gradient current番号の実pixel計算、pending pause状態のpollへ合わせ全成功(expansion-review-b023-6.log)。これらtests/packageをB013 commitへ含める。
B023はsegment-orbit-loaderが終端逆回転せず60度位置で待機するよう修正しround3。motion-phases.mjsで時間差を保持した6段階を5件視認。現在main author差分225/225、範囲外author0。HTML途中120件613画像4.24MB、全ページdecode等成功3.239秒。
