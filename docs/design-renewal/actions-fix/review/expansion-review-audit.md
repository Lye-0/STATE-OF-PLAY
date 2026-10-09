# expansion-review.browser.ts 検査契約の読み取りレビュー

**セグメントの提案変更は妥当です。** `tape-splice-segments/styles.css`は`flex-wrap:wrap; flex:1 1 110px; min-width:min(100%,110px)`を明示しています。狭幅の3項目を2+1行へ置く意図なので、44–46行の「全項目同じy・同幅」は現行の読字優先設計と矛盾します。最終行の1項目が広くなることも正常です。

## 維持すべき代替検査

- 3つの実選択肢が存在し、選択項目・native input状態とAPI値が一致する。
- y座標許容差で行をまとめ、同じ行の項目は同幅。最終行の幅を上行と同一には要求しない。
- item同士の交差なし。itemと読む内容はroot／viewport内。装飾の出張りを文字や実hitと混同しない。
- 実TextNodeのRange各行が読むlabel／選択target内へ収まり、ellipsisで隠して通さない。labelのboxだけでは実glyphのはみ出しを保証できない。
- inputはborder込みitem全体を覆う。単に文字の範囲だけ覆えばよいという小さいhitへ緩めない。
- 各native選択を実際に切替え、root相対のitem/input/label矩形とfontを比較。全項目を比較して、選択行以外の移動も検出する。
- 320pxだけでなく390/768、LTR/RTLと長文を補助確認すると、wrap境界への回帰を検出できる。

## 後続の旧前提・検査の限界

1. **Tabs (48–54):** 「長いラベルがtarget内に収まる」は有効な要件。`scrollWidth<=clientWidth`だけではtargetとの位置関係やellipsisを保証しない。実文字Range対targetを確認し、横tablistのローカルscrollは許可して選択時に到達可能かを別検査にする。すべてをviewportへ一度に押し込む変更は不要。
2. **Uploads (56–62):** 全作品のiconと見出しを中央同軸にするのはレイアウト規約で、native操作要件ではない。現在の個別作品が中央構成なら維持できるが、失敗だけを理由に作者を中央揃えへ戻さない。承認済み非対称構成が見つかった場合のみ、その作品は実upload target内の完全読字・glyph/hit固定・重複なしへ代替する。ここで実不具合や例外対象を確定したわけではない。
3. **Loaders (64–69):** reduced-motion時に実材がstageに切断されない要件は維持。`.every()`は0要素でもtrueなので、6iが実在することのassertを併記すると強い。透視変換したDOM矩形には透明部分も含まれるため、境界失敗は画像とoverflow/clipを確認して判定する。無条件に全包含検査を除去しない。
4. **Numbers (71–89):** 範囲fractionと実native値検査は現行にも有効。入力のabsolute viewport矩形をclick前後でdeepEqualする箇所は、Playwrightが別位置の増加buttonを見せるためにページをscrollした場合も失敗し得る。root相対矩形にすると、実部品内部移動を検出したままページscrollを除外できる。寸法/font/caretの安定は維持する。
5. **Pagination:** 12状態・4幅の矢印位置をnav相対で比較し、連続Enter・終端focus・最小hitを検査するのは有効。省略記号による指下の移動を許すように緩めない。固定総数12のfixtureでこの前提は成立する。現在/非現在の文字コントラストには祖先背景だけの限界があるので、失敗時は既存の実paint照合を使う。今回の3pseudo対応はこのファイルにも適用される。
6. **Avatar hover / field clear / hint heading:** いずれも現行の読字・操作要件を直接検査しており、デザイン更新を理由に除去する根拠なし。avatarもviewport位置比較なので、意図しないページscrollと部品内移動を分ける余地はある。
7. **末尾のdescription/danger/reviewコントラスト:** 半透明祖先合成は行うが、pseudo/gradient/重なった別要素を描画背景として拾わない。実際に4.5未達なら色修正すべきで、設計更新を理由にthresholdを下げない。false positiveなら実背景の限定対応／描画測定で裏付ける。
8. **Ornament lifecycle:** viewport外pause、明示pause/resume、reduced、destroy復元は現在も必要。元の静止形や素材変更と独立した機能契約なので維持。
9. **Fixture/server:** 静的配布用なので既存createComponentServerへの統一は適切。現在のcreateServerはapp configとカタログpluginも読み込み、固定fixtureに不要な監視が残る。別の実watcher検査は維持する。生成HTMLの全`section`セレクタは内部にsectionを持つ部品にも作用するので、`body>section[data-part]`へ限定すると検査用レイアウトが作者DOMへ漏れない。

このレビューはコードとtape-spliceの現行CSS照合です。実行中fixtureを再生成する同suiteの並走はしていません。セグメント一行要求の不整合以外について、未再現の失敗を作者の実バグとも設計例外とも断定していません。作者・共有源・fixtureは未変更です。
