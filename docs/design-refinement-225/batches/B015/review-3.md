# B015 round 3 独立再検査

全10件 pass。変更5件を実gallery/portableとReact4配布形式で再検査し、未変更5件は作者50ファイルと配布共有runtimeの完全一致を確認してround2の証拠を継承した。終了時の現行source100hashも一致。

- R490 warm-author-profile: **pass** — 著者用の縦長肖像・明朝氏名・上下罫を保持。二重余白整理でroot222pxの氏名列72→120px、長名も読みやすくなった。forced選択Sora/Rin/長名はHighlight上の可視文字として復帰。hoverで氏名・イニシャルは移動しない。
- R491 seal-score-rating: **pass** — 丸い封印の厚みと濃い確定輪郭で一列の尺度を読める。角張ったR496との差も成立。 round2の独立判定を、作者10ファイル・配布共有runtime同一を確認して継承。
- R492 inspection-score-rating: **pass** — 連続する台と検査札を保持。forced星はroot222pxで札左端の外2.59px→内4.11pxへ中央配置され、枠との交差を解消。通常の造形・五段階・10段階操作は維持。
- R493 folded-score-rating: **pass** — 一本の桁から接続する折り札が五段階を連続させ、狭幅でも吊り構造を保持。 round2の独立判定を、作者10ファイル・配布共有runtime同一を確認して継承。
- R494 stone-pip-rating: **pass** — 半楕円の開口と二脚が石のアーチとして読め、三角旗状の誤読を解消。 round2の独立判定を、作者10ファイル・配布共有runtime同一を確認して継承。
- R496 notched-disc-rating: **pass** — 上下の位置決め切欠きと角面・青灰色で、金色の封印R491との同形を回避。 round2の独立判定を、作者10ファイル・配布共有runtime同一を確認して継承。
- R497 rail-signal-rating: **pass** — 細い柱と一本のレールが信号の五段階を結び、塗り/確定縁が実値と対応。 round2の独立判定を、作者10ファイル・配布共有runtime同一を確認して継承。
- R498 stitch-star-rating: **pass** — 縫い目を持つ横布と五つの留め帯を保持し、選択星を濃くした。星#583b68と実布面#c9aaceは4.519:1。値/preview/解除は一致。
- R499 open-bracket-rating: **pass** — C形留具と札の通常造形を保持。forced星幅はroot222で6.16→18.75px、gallery251で10.20→22.81pxへ改善。通常選択星#714526と札#d9b48dは4.208:1。
- R500 coin-value-rating: **pass** — 五つの駒の肩・下面の厚みを保持。選択星#654b22と面#d5b36cは4.063:1へ改善。五段階と10段階の値/preview/RTLを維持。

変更5件の画像をすべて視認。hover入口/解除/再進入、320px・長文・RTL、forced/reduced、native入力・keyboard・フォーム・reset・controlled、React配布を確認。preview値と確定値の違いを区別し、通常テキストの最小contrastは4.806:1。

測定と視認範囲はreview-3.json、hash-verification-3.json、runtime-summary-3.json、contrast-stars-3.jsonおよびevidence-3に保存。無欠陥保証ではなく、明記した状態の検査結果。
