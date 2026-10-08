# B010 round-3 独立検査

判定: **changes_requested — 6件 pass、R142/R153/R154 adjust、R151 redesign**。固定 `snapshot/round-3` を評価。正本実装の編集なし。

|番号|ID|判定|
|---|---|---|
|R141|angle-bracket-link|pass|
|R142|corner-flight-link|adjust|
|R143|rail-platform-link|pass|
|R144|notch-route-link|pass|
|R145|tailored-edge-link|pass|
|R151|binder-wing-tabs|redesign|
|R152|sawtooth-index-tabs|pass|
|R153|hangtag-tabs|adjust|
|R154|offset-rail-tabs|adjust|
|R155|gabled-tabs|pass|

## R141 angle-bracket-link

左下のL材に表面/内側断面/45度の接合を持たせ、右上に反対向きの短いアングルを置く。線だけの括弧から、厚みを持つ開いた支持へ変わった。背景の箱で閉じず、下の折面だけが動く。R048の左右C顎やR119の細い四隅とは断面と開く場所が異なりA合格。

近似比較: R048, R119, R141元監査

## R142 corner-flight-link

全幅の二つの三角面は小さい折角より固有の形を作るが、現物では読む紙の上端へ全面接触した屋根のような面になり、設計の「斜めの実空隙」「折翼で紙を引き上げる」という関係が成立していない。接続と負の空間を調整したい。

**R142-fold-gap / major**

二つの三角面が読む紙上辺へ接しているだけで、折翼と読む紙の間に斜めの空隙はない。空いているのは三角外周より上の背景で、設計の紙を引き上げる折翼の負の空間として読めない。長文では屋根付きの普通の紙カードへ近づく。

根拠: captures/reviewer-links-3/corner-flight-link-initial.png、-hover.png、-long.png。i3は高さ31pxで底辺がy31、読む紙i1はtop30pxのため、底辺全幅が紙へ1px重なる。

改善方向: 二面の折線と片端の接合を残し、折翼の下の戻しと固定された読む紙の間へ、背景へ抜ける斜めの空隙を作る。翼全体を浮かせて接点まで失わないこと。文字/矢印/hitは維持し、通常/hover/320長文で同じ接点と抜きが読める構造へ整理する。

近似比較: R131, R032, R052, R155

## R143 rail-platform-link

二本の独立したI断面が床の切断面へ入り、下の横材がそれを繋ぐ。R140の一体のアーチ開口/端板/鋲、R029の独立脚と水面とは断面と横材の役割が異なる。操作は全体で一つのリンクであり、つまみを作らない。A合格。

近似比較: R029, R140, R143元監査

## R144 notch-route-link

読む紙の右の円形切欠きが背景へ抜け、上下二本の細材が矢印の台を支える。固定された矢印台は読む面から一度分離して再接続する外形を作り、標準的な分割ボタンとは異なる。R136の孔/紐、R131の三角の先端とも異なりA合格。

近似比較: R136, R131, R144元監査

## R145 tailored-edge-link

Tとして斜めの裁ち端/内側の縫い目を保ち、短い返しと下の繊維の断面へ絞った。hoverで本文や矢印を動かさず、線の多重化を抑える。R118の縦帯とは方向/接続が異なる。元監査のTとして合格。

近似比較: R118, R145元監査

## R151 binder-wing-tabs

紙色のタブと本文は読みやすいが、綴じ具は平たい八角形のバッジと中央の帯という構成で、紙の保持機構が主形態を作るほどには読めない。縦配置で翼が欠ける問題もあり、Aとして支持部の再設計を求める。

**R151-binding-structure / major**

小さい八角形のバッジを本文の縁に二つ追加する構成が中心で、翼が折れて紙を通し、締結する関係が見えにくい。紙色の標準タブと本文面に付く装飾という印象が強く、Aの主形態を決める綴じとして不足。名前を蝶に似せることではなく、保持する相手と前後関係を造形で示したい。

根拠: captures/reviewer-tabs-3/binder-wing-tabs-initial.png、-selected.png、-vertical.png。本文左のi1/i2は40×22pxの単色八角形、中央12pxの帯と6×10pxの小矩形。

改善方向: 二つの保持位置は保ち、共通の背と紙の縁に実際の細い通し口/切欠きを設け、二つの折面を持つ綴じ具が口をまたいで前後から留める構成へ作り直す。中央の締結片と左右の翼を同じ一枚の板の断面としてつなぎ、紙側も保持位置で外形を変える。バッジを大きくする/影を足すだけにしない。R076の円環やR102の長い蝶番を反復せず、本文/見出し座標は固定する。

**R151-vertical-wing-clip / major**

縦配置で全幅だけを縮め、翼と中央の締結片の座標を揃えていないため、二つの翼を持つ綴じ具が片側だけに欠ける。

根拠: 固定source/styles.cssのvertical指定はwidth:28pxへ変更するが、clip-pathは横配置のx=40px/28pxを保持。::beforeはleft14+width12、::afterはleft17+width6のまま。-vertical.pngで右翼がほぼ消える。

改善方向: 再設計する保持部は縦横で同じ比率と実接点を保つ。固定幅を維持して予約幅を確保するか、polygon/締結片を同じ座標系で縮小し、左右の翼を残す。

近似比較: R076, R102, R151元監査

## R152 sawtooth-index-tabs

Tの鋸歯を40pxの小口へ集中し、歯の深さ/紙の境界/選択した上縁を揃えた。未選択の紙と本文へ繋がる選択紙を区別でき、文字の基線や太さは固定。元監査のTとして、全周の装飾へ広げず形の精度を上げて合格。

近似比較: R152元監査, R165

## R153 hangtag-tabs

横配置では杆から孔へ紐が届き、孔も白/暗色背景へ実際に抜ける。三つの吊り札と選択色は明快で、R136の一枚の札とは構造差がある。ただし縦配置では杆と紐の接続が消えるため修正が必要。

**R153-vertical-cord-connection / major**

縦配置は上に一本の杆だけを残して紐を各札のtop:-16pxへ描くため、最初の紐も杆に届かず、2・3枚目は宙から始まる。横配置で成立した吊るす機構が縦で破綻している。

根拠: captures/reviewer-tabs-extra-3/hangtag-tabs-horizontal.png、-vertical.png、checks.json。縦配置の杆下端y347.281、最初の紐上端y350.281で3px空隙。2/3枚目の紐も前札下端から3px空いて始まる。

改善方向: 縦配置用に連続する側方の支柱/杆を設け、各札の孔まで接続する短い支持と紐へ変えるか、各札上に杆を分岐させ全ての紐の始点を支持する。各札の孔と紐の終端は現状の透過を保ち、上下キー/見出し/押し面は固定する。

近似比較: R136, R076, R709

## R154 offset-rail-tabs

外側の左溝/下の斜めの端/内側の紙をずらす形は通常の丸角タブから差が出た。一方、選択した保持片が固定レールをまたがず、縦配置では接続がさらに離れる。主要な保持機構の接点を修正する必要がある。

**R154-retainer-rail-gap / major**

保持片はタブ上端に置かれているだけで、固定レールをまたがない。縦では固定レールが列の上にしかなく、2・3番の保持片が近くの紙の縁として浮き、レールへ収まる選択状態を説明できない。

根拠: captures/reviewer-tabs-extra-3/offset-rail-tabs-horizontal.png、-vertical.png、checks.json。横はレールy624.171〜629.171に対し保持片top632.171で3px空隙。縦第2選択はレール下端607.171と保持片top682.171で75px離れる。

改善方向: 横では保持片の上端をレールより上へ通し、前後の折面が実際にレールをまたぐ寸法へ合わせる。縦では連続した側方レールと、それへ届く選択中だけの保持片へorientation対応する。外側溝/下の斜め接合と本文の固定位置を保ち、全選択位置で接合が見えることを確認する。

近似比較: R115, R154元監査, R256

## R155 gabled-tabs

Tの切妻を保ち、4pxの屋根の稜線を斜面へ揃え、選択した入口を本文の紙へ直接つなぐ。下に不要な水平線を重ねず、見出しの基線と本文は固定。短文/長文/縦/RTLでも状態が読め、元監査のTとして合格。

近似比較: R155元監査, R134

## 実施した検査

- 固定source100ファイルのSHA-256をreview-input-3.jsonと照合し全一致。全10native配布CSSと正本CSSがimport除外で一致。captures/reviewer-extra-3/checks.json。
- リンク5件のnative Enter/href遷移、非キャンセルclick、hover/leave/reenter時の文字/矢印/hit矩形と色の固定、320長文/RTL/forced/reducedを固定native版で実操作。5件全成功、pageerrorsなし。captures/reviewer-links-3。
- タブ5件を固定native実本文で操作。ARIA/ID対応/hidden、方向キー/End、manual activation、disabled skip、全disabled、hidden panelのfocus移動、input値/選択保持、vertical、320/390/768px長文本文と見出し、RTL、forced/reducedを確認し全成功。captures/reviewer-tabs-3/checks.json。
- 追加で全5タブのhover/leave/reenter/別行選択の前後で文字矩形/フォント/hit寸法を比較し不変。forcedを400ms待ち、各選択labelが白で非選択が黒、選択面とのコントラストを実画像/computedで確認。初回切替直後の過渡画像を最終状態と混同していない。captures/reviewer-tabs-extra-3。
- R153/R154を縦横で独立撮影し、レール/杆と紐/保持片の位置を実測。R153の孔は白背景でも実透過。R142の翼/紙の接点とR151の縦配置polygonは画像とCSSを照合。
- 全730baseline.jsonで支持/綴じ/レールの近似候補を検索し、tabs-stage.jpgおよび既合格R029/R140/R076/R102/R115などの過去記録・実物と比較。A7件と元監査T3件を分けて判定。

## 限界

- 独立ブラウザはChromium。forced/reducedはPlaywrightのメディアエミュレーション。
- Reactの実items/props4配布形式は主担当の完了報告とログを参照し独立再実行していない。独立操作は固定native版。
- 全730件の全状態を再操作したものではなく、元監査/近似画像/既合格記録を比較。contact-stage.jpgの旧R142ではなく固定round-3の独立画像を評価。
