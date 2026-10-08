# B017 round-3 独立検査

判定: **changes_requested — 8 pass / 1 redesign / 1 adjust**。R239の造形と支持端点、R251のhover移動と狭幅可読性を要修正。正本・固定版の変更なし。

| 番号 | 判定 | 講評 |
|---|---|---|
| R233 | pass | 二重円を上下の厚い端板と細い巻き胴へ置換し、52pxのI形断面と糸の層が実輪郭を決める。一本の糸と端の糸口へ接続し、操作量を読む機能と形が結び付く。R098の冊子支持やR695の装飾軸とは巻胴そのものを動かす構造で異なりA合格。 |
| R234 | pass | Tの丸い石台と矩形インレイを保持。濃い操作面と明るい3pxの小口で背景に埋もれず、主軌道との中心も一致する。新たな装飾へ変えず元監査の明暗精度を改善し合格。 |
| R236 | pass | Tの折紙外形を保持し、左右の明暗が異なる折面と中心の返しへ分かれた。主軌道は折れの中心を通り、単色の多角形から厚みと面の方向が読める。元の形の精度として合格。 |
| R237 | pass | Tのホイールを一つの3pxリムと軸へ整理。重い矩形目盛りを独立した細い目盛りに変え、値の線が円の中心を通る。R172の車輪付き区画と異なり円自体が操作対象。元の輪郭を維持して合格。 |
| R239 | redesign | 凹んだ色面は改善したが、主形は二重の角丸ボタンと角丸の溝に留まる。Aの保持機構や指掛かりの独自の外形が弱く、端点では持ち手の半分が物理的な溝を越える。再設計が必要。 |
| R240 | pass | Tの方位盤を保持し、八辺の濃い小口と明るい中心、細い交差軸で輪郭を明快にした。単色の多角形より端面が読みやすく、軌道との中心も一致。元監査の精度として合格。 |
| R242 | pass | Tの二爪の意図を実際に開いたC形へ反映。上下の爪が補助線へ接し、中央の値軌道が開口を通るため浮いた矩形から改善した。文字・値を無地へ保ち、接合の精度として合格。 |
| R243 | pass | Tの三段の積層を保持し、三つの楕円上面と側面の段差で単なる水平縞から分けた。軌道を横切る厚みが外形と一致し、過剰な模様を増やさず合格。 |
| R245 | pass | 普通の角丸を、広い釉薬の頭・絞った8pxの脚・一つの反射へ再構成。頭と脚の非均一な外形が値を示すピンとして読め、矩形thumbやR200のレンズと区別できる。数字を動かさずA合格。 |
| R251 | adjust | 三つの前板を連続したキャビネットへ収め、側面・底・実際の持ち手が通常行の枠を越えた構造を作る。選択の底面だけが開く形は成立し通常造形合格。ただしhoverで本文とhitが2px動き、狭幅では本文が1文字幅になるためUI調整が必要。 |

## R239 — R239-generic-recessed-thumb

**major / design**

凹面の配色は読めるが、二重角丸の一般的なボタンを太い角丸トラックへ載せた主形から分かれない。上下左右が均等な枠なので、物理的に保持する肩や指を掛ける口の構造が形を決めていない。Aの独立性はまだ不足。

根拠: captures/reviewer-sliders-3/recessed-handle-range-initial.png、reviewer-motion-3/recessed-handle-range-1000-ltr-middle.png。thumbは56×44px、13px角丸＋5px四辺borderと内側の影。

改善方向: 凹みを主題にするなら、溝の上下の縁を実際に抱える肩と片側へ落ち込む深い指掛かり、段差を持つ側面などで非均一な外形を作る。通常ボタンのborderや影だけを増やす対応を避け、保持と移動方向が読み取れる形へする。

## R239 — R239-trough-endpoint

**major / consistency**

56pxの持ち手の半分が0/100で凹んだ溝の外へ出る。通常の値軌道の端点としては正しいが、持ち手が収まる物理的な長溝の端面としては支持が途切れる。

根拠: captures/reviewer-motion-3/recessed-handle-range-1000-ltr-left.png とright.png、320-rtl-left/right.png。物理溝.ff-railがthumb半幅28px内側で終わり、0/100時はthumbの中心だけが溝端に一致。

改善方向: 実thumbの移動外周まで延びる物理的な溝と、native中心位置を示す値の軌道を分離する。値軌道は半幅insetを維持し、支持溝だけがthumbの全幅を両端で受ける形にする。LTR/RTL両端で確認する。

## R251 — R251-hover-translates-content

**major / ui**

hover開始・解除・再進入で前板全体が2px動き、本文とnative hit領域も移動する。選択時の底だけを動かす意図と文字/操作面の固定要件に反する。

根拠: captures/reviewer-motion-3/radio-checks.json。1000px LTRのcopy x=686→688、幅169/高さ42.59/font不変。共通 .ff-choice:hover:not(:has(input:disabled)) のtransform:translateX(2px)が固有transform:noneより高詳細度。

改善方向: 有効行のhover状態にも勝つ固有指定でtransform:noneを保証する。測定はcopyの位置を行内基準でなくコンポーネント全体基準で取り、非hover→hover→leave→reenterを確認する。

## R251 — R251-narrow-copy-width

**major / ui**

境界内に収まっていても、固定のicon/badge/radio/余白が本文幅を使い切り短いLocalまで縦一列になる。候補の比較に不必要に長いスクロールが必要で、狭幅の可読性が成立していない。

根拠: captures/reviewer-motion-3/drawer-320-rtl-2.png、drawer-320-ltr-0.png。320px固定fixture内のroot幅222pxでLocal/Cloudが1文字ずつ折返す。@container(max-width:300px)のicon/badge非表示規則があるがサイズcontainerがない。

改善方向: 明示的な幅を持つrootをinline-size containerにし既存の狭幅規則を発動させるか、確実に同じ条件でicon/badgeと余白を整理する。本文にまとまった横幅を残し、320px画面の実fixtureと直接320px利用の双方で短文/長文/LTR/RTLを目視確認する。

## 確認範囲

- 固定source100 SHA-256とreview-input-3.json全一致。配布CSS10をimport除外で正本と照合し一致。captures/reviewer-extra-3/checks.json。
- 9slidersをnative form/reset/keys/Home/End/実pointer0/50/100/range2thumb/disabled/readonly/minmaxstep/long320390768/RTL/forced/reducedで独立再実行、全9成功/errors0。reviewer-sliders-3。旧R232用helperの固定19px端点を汎用thumb半幅へ修正して実行（実装問題ではない）。
- 9slidersをnormal motionの実continuous dragで1000/320×LTR/RTL×左/中央/右の108状態撮影。各終値を0/50/100（RTL逆）へassert、hover leave reenterの見出しgeometryも固定。reviewer-motion-3。共通scriptはその後のradio文字固定assertで失敗したためslider分のJSON完了記録はないが108画像と実行assertは完了。
- R251 actual native form/reset/label/ArrowDown/arbitrary items/disabled/長文320390768/RTL/hit box/forced/reducedを再実行しAPI機能成功。reviewer-radios-3。
- R251選択1/2/3、1000/320、LTR/RTLの通常/80ms途中/settledとhover leave reenterを追加実操作。文字が2px動くことを測定し記録。radio-checks.jsonのbefore/after実測値とtextFixed:falseを根拠とした。reducedでpseudo transition0s/animations0を確認。
- 元730監査の10件の判定/理由、before-sheet、近似R098/104/112/172/200/616/676/695画像と既承認の構造を比較。A再設計4件とT保持6件を区別し評価。

## 限界

- 独立実行はChromium固定native。React4形式と現行ギャラリーdetailは今回独立起動せず、親担当の成功報告とは区別した。
- forced/reducedはブラウザエミュレーション。他ブラウザ/実OSは未検査。
- 730件全体の再監査ではなく元監査と近似画像・既承認構造の比較。
