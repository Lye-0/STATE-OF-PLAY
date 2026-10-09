# B036 round 2 — changes requested

7 pass / 1 adjust / 2 redesign。操作試験の成功と造形の合否を分けて判定。

## R496 notched-disc-rating — pass

元監査T。円盤と星の主形を保ち、上5px/下7pxと切欠きの輪郭へ整理。確定の縁でも星とnative押面は変わらない。R491の蝋の円盤との近似はあるが、新規再設計の独創性を合格根拠にせず、原版Tの曲率と読みの保持として合格。


近似比較: 元R496, R491。

## R497 rail-signal-rating — pass

元監査T。星面の下12pxへ入る10px支柱が、下の14pxレールへ5px入る。上下の接合と、折返し各行でレールが完結することを確認。実信号面・支柱・足元の関係を保持し、過去の小さな飾りレールへ戻らない。


近似比較: 元R497, R302, R422。

## R498 stitch-star-rating — pass

34px縦帯と40pxの連続横帯が大きく交差し、上下には本当の空隙が残る。星は交点の同じ平面で読み、縦帯の端と横帯の読む面が異なる役割を持つ。R503の一枚の連続帯、R265の穴を通る縦帯とは接続と主形が異なる。布の細かい模様を追加したことを独創性の根拠にはせず、大きい交差と開きとして合格。


近似比較: R503, R265, R278。

## R499 open-bracket-rating — adjust

曲がったC材と、紙を前から保持する独立した二爪の構成は、R439の太い直角Cが直接紙を覆う構成と区別できる。ただし二爪がCの縦材から4px離れて浮き、実支持が成立しない。前爪を紙とCの両方へ実際に重ねる必要がある。

- **R499-claws-floating-4px (major)**: 上下の前爪とC縦材の間に4pxの空隙がある。前爪は紙へ重なるが金具に接続せず浮き、説明の保持機構にならない。
  - 根拠: snapshot/round-2/source/open-bracket-rating/styles.css: unit::before縦材0〜10px、unit::after左14px/幅20px。RTLも右14px。captures/reviewer-materials-2/open-bracket-rating-320-rtl-2-dark.png、reviewer-ratings-2/open-bracket-rating-initial.png。
  - 改善: 爪を縦材内まで延長して2px程度実重なりを作り、紙へ入る12pxは維持する。例として左8px/幅26pxなら縦材へ2px、紙開始22pxへ12px重なる。RTLも同じ論理関係で確認。星とnative押面は動かさない。

近似比較: R439, R083修正前, 元R499。

## R500 coin-value-rating — pass

元監査T。五角形のコインと星を保ち、上7px/下9pxの同素材の鋳造面へ揃えた。確定の内縁は幾何を変えず、2〜10段階でも五角形の主形を保つ。


近似比較: 元R500, R180, R400。

## R501 flag-score-rating — pass

8pxの支柱と28pxの足へ、始点4pxが重なる一枚の旗が接続する。右の13px二股の自由端が写真カードや星キーとは異なる外形を作る。RTLでは材と星をそれぞれ正しく処理し、読む星とnative順序は安定。


近似比較: R440, R393, 元R501。

## R502 blueprint-score-rating — redesign

連続した上面、左右12pxの脚、下へ抜ける開口は直前R494と同じ支持の単位。尖頭開口を交互の斜めの開口へ変え青くしても、星を上壁へ並べる主形を反復している。Aとして別構造への再設計が必要。

- **R502-repeats-R494-wall-apertures (major)**: 直前に合格した石の列を、色と開口の頂点だけ変えた構造。斜めの線や左右反転は新しい折板の主形になっていない。
  - 根拠: reviewer-ratings-2/blueprint-score-rating-initial.pngとB035 reviewer-ratings-5/stone-pip-rating-initial.png。共に上の星面＋左右12px脚＋下の抜きの連続列。
  - 改善: 壁・脚・下開口の構図を全廃する。例えば一枚の板が各読む面の間で前後へ折れ、側面から連続した蛇腹の厚みと折れ軸を見せる等、支持単位そのものを変える。大きい実折面が星の読む位置を決め、単なる斜め切欠きの追加にしない。R222の紙三面を小さく反復するだけの案も避ける。

近似比較: R494 round5, R379, 元R502。

## R503 ribbon-score-rating — pass

元監査T。一つの連続した帯へ星を直接置き、細い接続線と小さい丸い箱を整理。上7px/下10pxの返りと先頭/末尾の巻端を保持する。選択で帯や星を伸縮させない。


近似比較: 元R503, R283, R498。

## R504 ceramic-score-rating — redesign

丸上の閉じたキーに小さい楕円凹みを置いた反復で、厚い縁と緑色以外に陶の自立構造を決める大きい曲面や接地関係がない。R480のアーチ面やR494旧版の楕円受けとの距離が小さく、普通の角丸星セルからAの独立した主形へ進めていない。

- **R504-rounded-key-with-small-well (major)**: 通常の丸上キーと小さい楕円を反復し、陶の立つシェルは名称と色に依存している。大きい曲率・厚み・支え方が情報の全体構成を変えていない。
  - 根拠: reviewer-ratings-2/ceramic-score-rating-initial.png、reviewer-materials-2/ceramic-score-rating-1000-ltr-2-dark.png。form角丸45%/30%、下のafter楕円12px。
  - 改善: 個別のアーチキーと小さい楕円を廃止。例えば評価列全体を一枚の非対称の陶の自立面へまとめ、片側の厚い巻込みと反対へ大きく反る裾が連続する断面を作る。星は同じ平らな読む面に固定し、大きい曲面と接地を実際の主形にする。単に全体を角丸トレーで囲う代替は不足。

近似比較: R480, R494 round4, R215, 元R504。

## R505 letterpress-score-rating — pass

元監査T。四角い活版面と星を保持し、上7px/下10px/左右4pxと6pxの断面を同素材へ整理。大きい新規造形を要求するRとは分け、原版の版の密度と固定した読む面を磨いたものとして合格。


近似比較: 元R505, R401, R495 round4。

## 検証範囲

- 固定source100 SHA256全一致、portable CSS10全一致（import文のみ除外）。captures/reviewer-hashes-2.json。
- 独立actual portable native全10標準protocol成功、pageerrors=[]。Home/End/ArrowRight/Space、実radio確定、hover5→legendでpreview0/値不変、clear、controlled拒否/受入、readOnly native checked、disabled、required/clearable、FormData/reset、構造更新focus保持、destroy後reset不動作、forced/reduced。reviewer-ratings-2/checks.json。
- 全10×2/3/5/10段階×1000/320×LTRRTL＝160条件の追加操作・撮影。hover100ms→legend→再hover→最終rank確定で星/native hit/fontをroot相対座標で比較し不変。10段階長文320/390/768×LTRRTLの60条件も確認。reviewer-rating-states-2。
- 全10でvalue2→hover5→readOnly/disabledへ切替えpreview0/filled2を確認。max5→2でpreview範囲の回帰も確認。reviewer-rating-update-2/checks.json。
- 全10の暗いforced-colorsでCanvas黒・未選択SVG stroke白、選択Highlightを確認。各文字Rangeのx順からRTL出力2 / 10を確認。reviewer-rating-dark-2/checks.jsonと画像。
- R498/499/501/502/504×1000/320×LTRRTL×2/10段階の40条件を背景黒で撮影し、全層の実空隙・爪の接点・斜め自由端を確認。reviewer-materials-2。背景変更は素材検査のみであり暗い見出し色を通常UI不具合と誤認しない。
- 原版native rating写真、元監査と過去承認の近似を比較。T5件は元主形の保持/精度の基準で、R5件は構造独立性と実支持で判断した。
- B035 round5の固定seal-score-rating配布rating.jsとB036 round2のnotched-disc-rating配布rating.jsはbyte一致。共有runtime変更なしを固定export同士で照合。
- 実装・snapshotは編集していない。検査helperと証拠のみ追加。

## 限界

- React4形式の独立再実行はしていない。主担当の実行結果は補助資料であり、今回の操作確認は固定portable native。
- 追加最大数検査は2/3/5/10を抽出し、全整数・全画面幅の総当たりではない。
- 次版の修正は今回の判定に含めない。
