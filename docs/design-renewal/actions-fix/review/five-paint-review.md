# 後続5件の実paint診断

**全5件が祖先backgroundColor測定の誤検出。作者の文字色修正は不要です。**

実native dropdown展開／segment3番目選択／context展開で、文字の実背面を採取し画像も確認しました。

|対象|最小実比|
|---|---:|
|railcar-select|5.058:1|
|hex-bolster-select|5.218:1|
|relay-bank-segments|6.072:1|
|circuit-rail-segments|6.466:1|
|inspection-card-context|6.453:1|

railcar/hexの説明は実紙の擬似面、relay/circuitの未選択文字は実キー面の上にあります。inspectionの削除はlinear-gradientの不透明な右側読字区画（#eef6fa）に載り、透明な左側との平均ではありません。いずれも背景を正しく読めば閾値4.5を満たします。

証拠: captures/five/readings.json、paint.json、sheet.jpg、個別通常/文字非表示画像。検査用DOMだけを一時変更し、作者・元fixtureファイルは変更していません。

## 新helperの独立コード・実行確認

`tests/painted-text-contrast.ts`を実ブラウザで5件に実行し、全17テキストの比率が独立したtext-node非表示画像測定と1e-10以内で一致しました。新helperが返した失敗回避ではなく、実背景を正しく測った結果です。ログはcaptures/five-helper.log。

thresholdは呼出し側4.5のまま、対象の存在・可視性を確認し、隠した文字styleをfinallyで復元する実装です。今回の5件限定の代替として合格。元のDOM背景測定を他の全作品で無条件に除去していません。

汎用化する場合の限界: parentのcolorを透明にするため、そのcurrentColorを使う背景・擬似面まで透明になる作品には適用できません。今回の5件は独立測定と一致し、その影響はありません。初回helperはfg alphaのみを合成し祖先opacityを計算していませんでした。この点は下記の最終guardと対象限定で更新されています。filterの最終合成は引き続き一般保証しません。形・媒体・動きが変わる作品へ拡張する際には別途検証が必要です。

## 最終guard・情報テキスト対象の確認（追補）

最終helperを独立fixtureで再実行しました。初回17件のうち、railcar-selectとhex-bolster-selectの`SELECT / 01`各1件は、実際に`aria-hidden="true"`のSPANで`opacity:0.65`でした。両者以外の15情報テキストは、targetからhtmlまで全祖先のcomputed opacityが1です。これを実ブラウザの要素列で確認しました。

最終helperは従来lightSelectedContrastと同じaria-hidden装飾の除外を行い、残る情報テキストに祖先opacity≠1があればthrowします。opacityを無視して測定を通す実装ではありません。最終15件は全件4.5:1以上で、初回独立値と一致しました。guard失敗の原因は上記2装飾の固定opacityであり、今回観察した情報テキストに未完了transitionはありません。

初回17件測定は歴史記録として残しますが、装飾2件の10.790:1はopacityを含まない参考値で、最終の合格根拠から除外します。**最終の判定対象は15情報テキストです。** 5部品の情報読字合格と作者修正不要の結論は変わりません。

証拠: captures/five-helper-final.log（OPACITY要素診断、HELPER最終15値）。最終コードを読み、実行しました。変更したのはこのレビュー文書とGit管理外の実行証拠だけです。
