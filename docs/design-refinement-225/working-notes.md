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

## 130件push後・現在B014r5再検査
B013はd01a65ceaa946ed8985518e6d675788f17dc4a23でpush済み/record130済み。B011r7,B012r5依存補足もそのcommitに含む。
B014r4は5pass/5差戻し(R461hover3.389,R462muted3.190,R468長unitでinput0px,R470長unit狭列7行,R489forced名消失)。revise-b014.py実行済み、r5freeze→hover_inspector再検査中。5件capture更新、main-extra-5で数値幅・非重なりLTR/RTLとforced人物画像視認成功。著者固定。
後続変更：B015r2（石アーチ半楕円/布縫い目）画像更新視認済。B023r3（orbit逆戻り除去）motion-phasesで5件6位相視認済。preflight-textで未review B015–B023の補助文字を測定し14件低contrastを改善（revise-text-preflight.py一回実行済）。最新roundはB018r4/B019r3/B020r4/B021r3/B022r3。全事前検査失敗0見込、text-preflight-final.log参照。B018は未到達stepのnative disabledは保持しopacity1で説明名を読めるよう改善。14件gallery撮り直しcapture-text-fixes.log session45676で順次進行。
未commit tools: revise-b014.py,revise-b015.py,revise-text-preflight.py,preflight-text.ts,motion-phases.mjs,probe-b014.mjs。今後各batch stage extrasに適宜含める。新しい一回用scriptは再実行しない。残り95件の全独立reviewまで継続。

## 最新状態（B014 push後・この節を優先）
- B001〜B014の140件をpush済み。B014 eaa09a11c7124c195b152408207c9b7e7cf4fdae。B015 round2をAstra mediumが検査中。B015作者は固定中。
- B014 round5全10件pass。R461 hover6.103:1、R462補助文字5.236:1、R468/R470長単位と幅222/235、R489 forced選択氏名、React4形式20配置を確認。
- B015以降全85件の通常文字事前検査は716箇所、候補0。これはCSS単色の候補スキャンであり、全状態/ピクセル実測の代わりではない。
- 後続prepared：B016r3、B017r2、B018r4、B019r5、B020r5、B021r4、B022r4、B023r3。B019 optical照準、B020紙の差込重なり、B021縫い目経路、B022陶器持ち手をstrengthen-late-a.pyで追記し実ギャラリー撮影済み。one-shotを再実行しない。
- B023軌道loaderの折返しをなくし60度で保持、counterflow旧offset/mask解除、6位相画像で動作比較済み。全5件の最新gallery画像も更新済み。
- workbench-strong-a.logは構造追加後の40検査。report-progress-check.logは140件714画像4,859,948bytes、2.747秒、全ページ画像decode/検索/拡大/320px、HTTP0/error0。
- B015の指摘を直し、再review・全pass→10件commit/push/recordをB023まで続ける。Actions追跡不要。未来batchの作者を先にstageしない。

B015r2は5pass/5差戻し。revise-b015-review.py実行済み（再実行不可）→r3をAstra再検査中。R490forced氏名/二重余白、R492forced星左ずれ、R499forced星極小、R498/499/500星の塗り3:1不足を修正。5件実画像再確認。B016も501/503の星2.498/2.407を修正→r4、撮影済み（revise-b016-symbols.py実行済み）。Signature実Vite25検査をsignature-b015-3.logへ実行中。

B015は3d6bacacfd19efed47429705eb7eb545016c7351でpush/record済み150件。B016r4を独立検査中、作者固定。R504 max10/狭幅の陶面が末尾まで伸びないこと、colors forced軌道消失を追跡中。
B018は主担当が578縫い綴じ/紙面分離、584陶の工程駒/入力器へ構造改善。refine-wizard-materials.py実行済み。7工程長文で旧:has4工程CSS競合が画像で判明し、R584を通常3駒横並び、4以上/280px以下は横長駒の縦配置へ修正→最新round6。probe-wizard-materials.mjsは文字のbutton内収まりも確認し8状態成功、実画像も確認。以前round5の数値PASSは画像不整合があったため最終合格扱いしない。capture-wizard-materials.logは最新gallery撮影中。

B016r4は6pass/4差戻し。revise-b016-review.py実行済み（再実行不可）→r5で504陶面width/count対応、517/520/522 forced track勾配/枠とthumb境界を修正。r5をAstra再検査中。4件gallery再撮影済み。全未来作者/sharedをB016以外と共用部分含め無断で変更しない（現在shared変更なし）。

## 最優先更新：評価尺度の再オープン
B016r5で新たに全16ratingsのmax10先頭pointer不能を発見。B015review-3-addendumで旧合格を補足訂正（9ratings差戻し、warmのみpass）。B016r5はcolors3pass/ratings7差戻し。shared rating.cssのjustify-content:centerがgridを負方向へ寄せていた。作者16個へjustify-content:startを指定（revise-rating-start.py実行済み）し、B015r4・B016r6でAstraが再検査中。両者作者/shared固定。B01510件をreopenedとしてprogress.completed=140に戻した（過去push150件の履歴は保持）。
既存tests/signature.browser.tsへ20 expansion ratings×LTR/RTL×normal/forcedでfirst/last pointerを確認する回帰を追加。修正前seal x2/viewport44で失敗(rating-pointer-before.log)、修正後24検査全成功(rating-pointer-after.log、明示offline)。型チェック全成功(typecheck-rating-start.log)。全16gallery画像最新化済み(capture-rating-start.log)。
B015再合格時はbatch.py stage-followup B015を使用（作者は9件だけ変化）。全10review/hash/validation条件は従来通り、staged authorsはnonempty subsetに制限。review-3-addendumをround JSONと誤認しないよう正規表現で選別した。B015修復commitには新signatureテストを入れない（まだ未pushのB016修正を要求するため）。B016 commitでテストを追加する。B015修復push後record B015→150へ、reopenedフィールドを削除、次B016push→160へ。
B017は3colors強制配色のSV/色見本/軌道を修正。B2件range44px・文字12px/HEX11px、WarmのRGBをforcedでも維持。最新r4、gallery更新中。preflight-next-colors.mjs 4でforced表示を確認中。次独立reviewはB017r4。B018はr6（素材wizard2件の追加改善）。

B015r4・B016r6は各10/10独立合格。native256条件1792assertion、React16件×4形式384assertion成功。R504陶面末尾8画像の星背景3.393:1、768画像を再視認。B017r4の独立検査へ進行。

B015修復81c66452ee43ac0f378f28b6980696f1c8219b99、B016 19c77f9393c0871f459c1f8a299a1e61af95fdceを順次push/record済み160件。Signature追加回帰はB016へ同梱。B017r4を独立検査中。final-build.logへ現状本番build実行。途中HTML160件6,317,647bytesに更新（最終提出では225件を再生成）。

B017r4は3pass/7差戻し。revise-b017-review.py実行済み（再実行禁止）→r5freeze。539 open gridを背景まで抜ける構造、541左分類/右記録札、557時刻専用列へ再設計。528/530エラー14px濃赤と色見本flex-shrink0、548/550長文を明示折返し。probe-b017-followup.mjsで48状態検査＋新A通常/320読み込み前後を視認。7件gallery撮影完了。AstraはB018r6を検査中、その後B017r5を依頼。

B018r6は5pass/5差戻し。revise-b018-review.py実行済み（再実行禁止）→r7freeze。569meta折返し、581紙を挟む金具/持ち手、588/589/590のasync error14px/濃赤・未到達opacity1・7工程/320px以下の工程リスト・長field label修正。probe-b018-followup.mjsは40条件成功、mainでclip狭幅と長工程B画像を視認。gallery5件再撮影中。AstraはB017r5再検査中、その後B018r7→B019r5の順に依頼済み。

B018最終候補をround8へ。B3wizard CSS末尾の空行だけ削除（git diff --check）、規則変更なし。r7の40条件/画像証拠は同一規則として維持し、独立reviewへr8を指定した。

B017r5全10pass→5e0d530f760c53041548a53dc62fd2abf4be00d9でpush/record済み170件。B018r8再検査中。B019以降の凍結はr5/r5/r4/r4/r3。B018差戻し5件gallery再撮影も完了。

B018r8全10pass→e5afd2a095f1bd4ad62aec02f8209c2233d11117でpush/record済み180件。B019r5独立検査へ進行。B018エラー7.016〜7.330:1、未到達文字6.870〜8.266:1、native118/React72検査成功。

B019r5は全10差戻し。revise-b019-review.py実行済み（再実行禁止）→r6freeze。A検索3/command3構造再設計、599/601/615選択文字、615hover16pxずれ、B3長エラー/610見出しを修正。main28条件hover相対座標/幅/RTL成功(probe-b019-6b.log)、Workbench40成功。r6撮影後、radar計数盤align-self:start、caption入力二重focus除去、drawer footer文字#32291dをさらに追記。次freeze未実行、B019現在r6 hashとは3CSSが違う。B020独立検査で共有contextのpreventScroll焦点隠れが全40条件確定。tests/workbench.browser.tsへ全context×左右×forcedの回帰を追加、修正前hinge-context item11 bottom730.94 >689で失敗(context-focus-before.log)。shared作者releaseを待ち、修正後B019〜B022の配布snapshot依存を更新する予定。

共有context焦点をpanel内だけ露出する処理へ修正。全50skin×RTL/forced 1000 destination assertions、Workbench41群（offline）とtypecheck成功。独立context-focus-reviewはnative80条件800確認、React20条件120確認、scale.75/短viewport/外側scroll保持までpass。共有単独maintenanceをpush後、B019r7/B020r6/B021r5/B022r5へ依存snapshot更新。B020 r5は2pass8差戻し、revise-b020-review.py実行済み（再実行禁止）。作者100hash固定reviewは次r6で行う。

B020r6主担当80条件でB628/629/630の長いdialog見出し横溢れを追加発見。flex:1/min-width:0/wrapを指定→r7（current hash一致確認）。probe-b020-followup.mjsの一時診断版はassertを復元しr7を再実行中、r6bのPASS表記はoverflow診断が残るので最終合格証拠ではない。B021はstrengthen-navigation-pages.py実行済み（再実行禁止）。656現在地余白欄/本文、659独立支持面、660見開き表紙/本文へ構造化し3件画像更新。660題字の単語折返しを避けfont24に調整、次freeze6。

共有fix25e9b806 push成功。B020r7 main80条件全pass（probe-b020-7.log）、新A5画像確認。B0213A主担当改善＋B668のdock長文/全Bのmobile長brand対応→latest r7。B0223A表主担当強化（strengthen-table-materials.py実行済み再実行禁止）、folded scroll幅補正/リボン通し口余白、B669/670mobile長文対応→latest r8。probe-late-layouts.mjsでB021r7/B022r8実行中。Workbench41実Vite回帰workbench-late-6.log進行中。B019r7独立レビューは連番未選択opacityが早期指摘、作者は固定継続し最終release後修正。

後続主担当検査完了：B021r8 192条件・B022r9 120条件pass（long brand/desc/group、4layout、RTL/forced、320/1100、table選択/解除/scroll枠）。実Vite Workbench41群成功。B020r7は80条件pass。全作者とshared固定、次はB019r7最終講評→B020r7独立検査、その間B019修正。B0218/B0229/B0233へ順次独立検査。

B019r7は8pass2差戻し。R592 async再試行52×93.39px/縦3行→grid全幅/justify-start、R615未選択連番opacity0→1固定・分類札3.356:1→#60513bへ修正。release後適用しr8freeze、再撮影/主担当確認後Astraへ。B020r7は独立レビュー進行中。

B019r8主担当4条件はpass。error画面の旧件数盤が残る意味の曖昧さを解消するため、再試行表示時のみ計数盤を隠すauthor規則を追加→r9を最新候補へ。AstraへB020r7の後B019r9を依頼済み。型チェック全3系統成功(typecheck-late-review.log)。

B020r7全10独立pass。native350/React140、context焦点40/対象長文40/command低height40、作者100+shared1 hash一致。10件合格時pushルールに従いB019より先にB020をcommit/pushし、AstraはB019r9の最終再検査へ。

B020はa1ff34818aa83b32cc4b311c029305de0e7ebe76でpush/record済み190件。B019r9をAstra再検査中。未pushはB019/B021/B022/B023、合計35件。

B019r9は9pass/R592のみforced失敗時の旧件数で差戻し。件数非表示1規則をmedia外へ移しr10freeze、Astra優先再検査中。B021は未開始時に643/664の弱さを主担当で再発見、strengthen-last-context-navigation.py実行済み（再実行禁止）でリボン折返し/陶の支柱と受けへ再設計。r9main画像確認後643の背景文字干渉をblurで抑えr10freeze。B021独立はr10を指定、nav192条件はr9（r10でnav作者不変）。

B019r10全10pass。実async失敗→成功16条件で通常/forcedの計数盤非表示→復帰、再試行1行、他99作者/shared不変。AstraはB021r10へ進行。

B019は6a6caf8b6c0b1e67326dc5f4e39f92cc960a0cf1でpush/record済み200件。B021r10独立検査中。B022r9/B023r3待機。B021陶器追加後のmain192条件r9成功、r10の差分はcontext背景のみ。提出HTMLを200件で中間生成・重さ検査、最終225件で必ず再生成/再確認する。

中間HTML200件/1163画像/9,315,879bytes、全ページdecode・検索・拡大・320pxを4,481msで成功（report-200-check.log）。外部HTTP0/runtime0。file URL制約のためembedded HTML contentでの検証でありfile URL試験とは主張しない。最終225で再生成・再検査必須。

B021r10独立レビュー途中の指摘（作者固定、未修正）：R648 long description smallがpanel端37.23px切れ。R649/650説明9px、B3ESC8pxかつopacity合成2.433/2.264/2.359:1。R659選択補足14px #806957/#e8dcc3が3.792:1。A構造はリボン折返し・見開き・独立支持・陶支柱いずれも成立の早期講評。最終releaseを待ちまとめて修正。

B021r10は4pass/6差戻し。r11でBcontext3件の補助文字・ESC・長文、659補足contrast、660標準ブランド末尾改行、668dock6項目可読幅を修正。freeze済み、作者停止、AstraはB022r9→B021r11予定。main6件gallery再撮影完了、6項目長文layout検証中。

main B021r11は6項目long/nav4layout/RTL/forced/1100・320の192条件成功。gallery6件再撮影済み、標準Fieldwork通常・320画像で1行確認。装飾既存回帰6検査成功 ornaments-final.log。既push200件の独立review hash再照合成功。B022途中指摘はR670連番の隣接、696forcedで旧矩形へ戻る幾何、最終release待ち。

B022r9最終作者hash101一致後release。全10差戻し:nav2dock可読幅/670隣項目gap0、表7status越境とsort記号contrast、B3長heading、673/683選択進捗contrast、696forced旧形。revise-b022-final.pyを一度実行済み（再実行禁止）、r10freeze/作者固定、主担当撮影/長文表56条件/全layout120条件実行中。AstraはB021r11→B023r3→B022r10。finalbuildも開始。

B022r10main56長文表+120layout成功。ただし実画像のB補助文字9–10pxは小さいと主担当で判断。独立開始前にB表3件aux12px、Bnavbadge12pxを追加しr11freeze、Astraへr10を検査しない旨連絡済み。r11再撮影/56表検査中。r10で開始したfinalbuildは途中で作者差分が入ったためSIGTERM中止、最終作者確定後に必ず再実行。

B023は独立未開始を確認し、696と同じ新幾何media限定を主担当発見。preserve-loader-geometry.mjs実行済み（再実行禁止）、新幾何共通/forced rails・foot・hinge横梁system色/slimforcedopacity .6–1とstatus12pxへ。r4freeze、作者固定。main幾何比較は最初float約.00002px差でdeepEqual失敗し、サイズ0.1px/外枠由来位置1.1px未満を条件へ。r4再検証中。通常はslim文字以外不変、slim最新gallery再撮影済み。

B023r4幾何20条件成功したが実画像でR728配布版通常/forced右側切れを発見。ct-loader-body幅180/gridcenter明示、r5freeze。20条件へ全iのroot左右収まりassert追加し成功、forced320画像で全6片と枠が中央に収まる確認。gallery最新撮影済み。Astraへr5指定済み。

B021r11は7pass/3差戻し（前回6指摘解消、新たにB3閉じたtargetDescription長語切れ）。release後fix-context-description.pyを1回実行しr12freeze、作者固定。3CSSのsmall12px/wrapanywhereのみ。main3再撮影/24条件Range検証中。AstraはB023r5→B021r12限定確認→B022r11予定。

B021r12 main-targets-12.json24条件すべてpass、3件最新gallery画像取得済み。B023r5 main20条件pass＋forced5画像全確認、slim全6片の中央配置確認。両方Astraへ通知済み。

B023r5は4pass/R708だけ差戻し。60度回転で位置は周期一致するが旧even border-colorが残り1890px色の飛び。release後に旧even規則1個削除、r6freeze/作者固定。他4件不変。main steady周期画像比較とgallery再撮影中。AstraはB021r12→B023r6限定→B022r11予定。本番buildはr5時点3m5s成功、R708変更後に最終再ビルド必要。

R708r6 main定常周期画像比較は通常/forcedともRGB差10超0画素、main-pixel-seams-6.json。最新gallery撮影済み。全225対象のnormal/hover/narrow必須675画像をPillow.verifyで破損無し確認。
