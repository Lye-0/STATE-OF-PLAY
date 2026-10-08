# B012 独立検査 round-4

**8件 PASS、R174/R178は ADJUST。** 固定snapshotのみを検査。通常造形の根本再設計は求めず、接合と狭幅長文の精度を修正する。正本変更なし。

## R170 night-work-tabs — pass

元監査T/Bの基準で合格。暗い列と本文の青灰を同じ材質へ揃え、白い紙を別テーマから継いだ印象を解消。選択は浅い明度差と下辺で明瞭、本文・入力を読みやすく保持する。

## R171 ceramic-key-segments — pass

非対称の陶の上面から29pxの小口と二足へ連続し、24pxの実開口が白/暗色背景へ抜ける。普通のカプセルを三つ並べるだけでなく、各キーの厚い下断面が固有の輪郭を作る。R114の両端の鞍、R143のI桁、R177の薄いアーチと区別でき、A合格。

## R172 spool-window-segments — pass

Tの二輪と走行台を保持。輪の中心と縦の支柱、下のレールが重なり、車輪が浮いた小点でなく接点として読める。選択1/2/3・縦・wrapでも各窓の下辺へ付く。元精度基準で合格。

## R173 relay-bank-segments — pass

Tの札と折脚を保持。札の厚み、左右の折脚、下の横受けが一つの開いた支持を作り、元の針金から面へ改められた。R115のネジ付き締付台とは二脚で札を受ける構造が異なる。縦/wrapでも接続を保持し合格。

## R174 slate-divider-segments — adjust

三枚の独立した破断面と小口へ再設計した方向は、元の緑の角丸選択面から明確に分かれる。ただし石と座の斜めの接線に細い背景の隙間が残る。1/3は同じ輪郭で、三つの互いに違う輪郭という説明にも不一致がある。構造の再設計ではなく接合精度と説明の調整が必要。

- **R174-seat-contact (major)**: 石の切断面と下の座の境界が接触せず、実際の支持の間に隙間が残る。暗色では単なる輪郭線に見えるが、白背景で貫通が確認できる。 根拠: captures/reviewer-joints-4/slate-divider-segments-white.png、horizontal-1/2/3、vertical-3。白背景で全3石の下へ背景の細い斜め線が通る。source/styles.css: beforeの下端は左右で高さが異なり、afterの上辺も別の傾き。 改善: 座の上辺を石の下辺と同じ端点/傾きへ揃えるか、支持として確実に重ねて接触させる。固定pxの厚みを保持し、幅の異なるwrap/縦でも同じ接線になるよう基準を共有する。三枚の石と読む面は維持する。

- **R174-outline-description (minor)**: 3種類の輪郭という説明に対し実装は2種類。輪郭の違いを誇張した説明になっている。 根拠: source/slate-divider-segments/styles.cssにはnth-of-type(2)のみ別polygon。1/3は同じ輪郭。design.mdは「三つの互いに違う割れた輪郭」。 改善: 「三枚の独立した石と二種類の割れた輪郭」など実物へ説明を揃える。三つを無理に別形へすることは合格条件にしない。

## R175 stitched-channel-segments — pass

上下の27pxの折返しが二つの桁をまたぎ、中央の読む帯へ接続する。右の保持枠は開いた断面を持ち、選択された帯を締める支持として見える。R157の縫った背、R151の蝶形の綴じ具とは張る方向と支持位置が異なる。縦/wrapでも桁が各区画に残りA合格。

## R176 lever-stop-segments — pass

楕円断面の二枚の端板、帯の厚み、実軸と57pxの斜めレバー、先の受けを同じ木/金具で組む。軸とレバー根元、先端と受けが実際に接続し、下の予約域で文字を遮らない。R139の上に回す信号腕とは糸巻きの端板と下受けで分かれる。選択3位置・縦・wrapでも成立しA合格。

## R177 raised-bridge-segments — pass

Tの上の曲率を保持し、一つの滑る選択面から三つの実際のアーチ窓へ揃えた。窓ごとの上の稜と4pxの下受けが対応し、番号/文字/押し面を固定。R134の大きい門とは三窓の選択面として違いがあり、元監査Tの精度で合格。

## R178 tape-splice-segments — adjust

Tの斜めの継ぎ片と上下の織端は保持され、短文では落ち着いた帯として読める。ただし長文で固定角度の縫い目が実際の8px切口から離れて帯外へ出る。320pxで70px三列を維持し、本文が一文字単位へ細くなる問題も調整が必要。

- **R178-long-seam (major)**: 実輪郭の斜め切口は水平差8pxで一定だが、縫い目はskewX(-6deg)で高さに比例して傾く。高さ448pxの縫い目の端は約23.5pxずれ、帯の外へ出て接合の線として読めない。 根拠: captures/reviewer-segments-4/tape-splice-segments-long.png、reviewer-joints-4/tape-splice-measured.json。320pxでitem70×460px、after inset6px12px、transform matrix(1,0,-0.105104,1,0,0)。 改善: 縫い目の上下の端座標を8pxの切口と同じ基準へ揃える。例えば伸縮可能なSVGの左右経路や一定水平差の線を使い、本文が伸びても帯の内側に一定の余白を保つ。Tの斜め主形態は維持する。

- **R178-narrow-label (major)**: 320pxで3列を詰めたまま保つため、長文見出しが読みづらい極端に縦長の列になる。document overflowとhit内の矩形だけの検証では見落とす。 根拠: 同画像/JSON。各hit幅70pxに対しlabel幅27.796875px、長い日本語が一文字ごとの列になり高さ460px。forced画像でも同じ。 改善: 狭幅では区画を折返し、見出しへ数文字以上の実幅を確保する。flex-basis/min-widthの見直しで2+1または1列へし、斜め切口・織端・文字位置の安定は保持する。

## R179 circuit-rail-segments — pass

Tの上下の顎を20px幅/9px厚に整え、選択区画の上下支持を実際にまたぐ。R048の左右クランプやR154の一本の案内溝とは支持方向・対象が異なる。3選択・縦・wrapで顎が対象区画に付いて残り、文字を侵さず合格。

## 確認範囲

- 100 source SHA-256と固定review-input-4.json一致、native配布CSS10件と正本CSSをimport除外で照合して全一致。reviewer-extra-4/checks.json。
- 独立ブラウザでnative segments9のform payload/reset/one checked/Home/End/方向キー/disabled skip/hover leave reenter/選択時の文字矩形安定、320/390/768長文、RTL、縦、forced、reducedを再実行。results9/errors0。reviewer-segments-4/checks.json。
- R170タブを実本文でARIA/keyboard/manual/disabled/hidden focus/input保持/縦/長文320390768/RTL/forced/reduced操作。results1/errors0。reviewer-tabs-4。
- 9セグメントを横/縦それぞれ全3選択で実操作し54画像とgeometryを保存。さらに320px wrapと白背景を撮影。reviewer-joints-4。
- 通常/長文/forced/縦の全9画像を比較。R174は白背景で座との隙間、R178は長文で縫い目の帯外流出を確認。追加スクリプトでR178の幅/高さ/変換を実測。
- 元730監査の170〜179の判定/理由とsegments-stage全20を比較。既承認110件の関連支持構造も過去の固定レビューと比較し、各nearestComparisonsへ記録。Tを新規Aの大胆さ不足だけで落とさない。

## 限界

- 独立実行はChromiumの固定native配布。React実props×4形式は主担当の検証であり今回は独立再実行していない。
- forced/reducedはブラウザエミュレーション。実OSの高コントラストや他エンジンは未確認。
- 元730件全体を再監査したものではなく、監査判定/カテゴリ一覧/既承認の関連構造から近似を比較。
