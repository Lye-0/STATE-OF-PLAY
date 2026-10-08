# B030 round-3 独立検査

**4 pass / 2 adjust / 4 redesign。** 基本native操作は全10成功。R413/417/419/420は主形を再設計、R418の読字と孔、R422の支持接合を調整する必要がある。

## R413 folded-index-trail — redesign

再設計。実階層を交互の全面折紙へ並べる構成は、既承認R222と旧R314の重複指摘に近い。さらに隣り合う紙面の折端が18pxずれ、一枚紙の同じ辺として接続しない。ピンクの短冊の散在は整理されたが、独立したAの主形へは届かない。

**R413-concertina-repetition / major**

全面の読む面を18px交互にずらし、各階層を折面へ載せる構成はR222の三面折紙、独自性不足とした旧R314と同じ主機構に寄っている。階層数への適応だけでは別作品としての構造差が不足。

根拠: reviewer-trails-3/folded-index-trail-initial.png、reviewer-materials-3の1/3/8階層像。比較R222/旧R314/R403。

改善: 交互の全面折紙を廃し、一つの明確な折軸と実階層の展開関係へ変える。例えば一つの斜めの綴じ折線から片側へ開く紙葉群にして、祖先→現在の深さが一方向の折端に現れる構造を作る。単に縦の帯を追加せず、紙の表裏と支持端が外形を決めるようにする。

**R413-fold-endpoints / major**

幅Wで奇数面の下辺はx18〜W−18、次の偶数面の上辺はx36〜Wとなり、接合する辺の両端が18pxずれる。交互marginとclipのずれを二重に使い、一続きの同じ紙端になっていない。

根拠: source各li margin18px/clip18px、reviewer-trails-3/folded-index-trail-initial.png。

改善: 再設計では隣接する折辺の左右端点を同一座標へ揃える。全長が変わる長文/RTLでも接続辺を共通にし、一部の重なりだけで連続紙と扱わない。

近似比較: [222, '旧R314', 403, 181]

## R414 stone-path-trail — pass

合格、T保持。元の縦経路を維持し、34pxの対角の摩耗曲面と上下の小口へ読む床を揃えた。通し道6pxと16pxの渡りが石へ4px入り、長文/RTLでも同じ支持を保つ。元の平たい淡緑ツリーより材料の輪郭が明快。

近似比較: [174, 374, '元R414']

## R415 ledger-margin-trail — pass

合格、T保持。二本の帳簿罫を起点として、実階層の12px刻みの字下げへ罫を延長する。文字の8px手前まで届き、長文とRTLでも線が読む領域へ侵入しない。元の長所である字下げと台帳の関係を精密化した。

近似比較: [82, 401, '元R415']

## R416 perforated-path-trail — pass

合格。両側の切欠きを持つ券片の間に12pxの実空隙を開け、中央16pxの残し紙を上下4pxずつ裏へ入れて順を接続する。R252の全幅折面/送り孔とは、狭い紙の橋と独立した券間空隙の連なりが異なる。暗背景でも切欠きと紙間が実際に抜け、文字は切欠きから離れて読める。

近似比較: [252, 361, 285]

## R417 console-route-trail — redesign

再設計。通常の片丸の厚いケースへ小さい楕円口を置いた範囲に留まる。実階層は平らな汎用リストのままで、形を決めるほどの計器構造が弱い。接続口は共通側受けへも届かず、明るい面で塗った楕円が装飾のように浮く。

**R417-case-with-small-ports / major**

平たい経路リストを片丸ケースに入れ、小楕円を付けただけに見える。しかも側受け12pxに対し接続口はol基準x16pxから始まり4px離れる。Aの主役となる実支持と中空接続がない。

根拠: reviewer-trails-3/console-route-trail-initial.png、reviewer-materials-3/checks.json: li x30px、before left−14px、側border12px。

改善: 通常ケースを廃し、実経路が外へ展開する大きな接続構造へ変える。例えば一体の開いた段階式受けから各階層の読む端子面を段違いに引き出し、実際の中空口へ端子の根元が重なるようにする。小楕円を増やす案やR397のケース＋キーの縮小は避ける。

近似比較: [397, 372, 412]

## R418 stitched-route-trail — adjust

調整。幅広い外側の通し帯と、各布片の切込みの裏へ回る折返しは実際に接続し、R265の読む紙の中央を貫く帯とは支持位置が異なる。ただし孔端が本文の先頭へ5px入り、暗背景では文字/アイコンの背景を抜いてしまう。

**R418-hole-crosses-reading / major**

布の楕円孔は中心x8/横半径13で紙の21pxまで達するが、本文paddingは16px。先頭文字またはHomeアイコンの左5pxの背面が抜ける。暗背景で現在地と祖先の先頭が黒い孔に載り、読む材料と干渉する。

根拠: reviewer-materials-3/stitched-route-trail-ltr-dark.png とrtl-dark.png、checks.jsonのmask ellipse13×4 at8/50%とpadding16px。

改善: 本文の論理開始を孔端より内側に予約する（例28〜32px）。孔/裏返しと文字を分離し、320pxの長文で全文が読める幅を残す。LTR/RTL・白暗背景・Home有無・現在地で確認する。

近似比較: [265, 278, 398]

## R419 open-marker-trail — redesign

再設計。通常の横経路と別段の現在地の外へ96×24pxの台形二つを置いた構成で、マーカーが読む面や経路へ接触しない。余白と色の整理は端正だが、二つの装飾の追加だけではAの独立した主形が不足。

**R419-floating-markers / major**

台形二つは上/下の余白に独立して置かれるだけで、読む面を保持せず、経路と現在の関係も形に反映しない。元の小さな端線を大きな飾りへ替えた範囲で、端正なB以上の固有性が弱い。

根拠: reviewer-trails-3/open-marker-trail-initial.png、reviewer-materials-3/open-marker-trail-1000-1.png。

改善: 二つを実際の保持構造にする。祖先の読む面の上端と現在紙の下端をまたぐ大きい開いた折角とし、紙が差し込まれる口/裏面/張り出した自由端を実描画する。四辺枠や小さい隅留めの反復ではなく、異なる二段の読域を受ける非対称な主形へまとめる。

近似比較: [399, 218, 164]

## R420 bookmark-route-trail — redesign

再設計。大きい角丸カードは軽くなったが、標準的な縦リストの横へ全高の栞を置いた構成に留まる。栞と現在の紙には4pxの空隙があり、祖先から現在へ下げるという構造が読めない。

**R420-bookmark-beside-list / major**

34px幅の栞の隣に48pxからリストを置き、現在紙だけ38pxまで張り出すため、栞端34と紙端38の4px空隙が残る。実際に挟む/通る/吊る部分がなく、栞の絵を添えた標準リストに留まる。

根拠: reviewer-trails-3/bookmark-route-trail-initial.png、source ol padding48/栞34/current margin−10。

改善: 栞と読む終端を一体の材料関係にする。現在紙を保持する大きい折頭または実差込みとし、祖先経路から現在地へ渡る部分を主形として露出する。実スリット案の場合はR280/R300の二孔と割尾をそのまま繰り返さず、階層と現在を保持する接続位置/大きさ/外形で差を作る。

近似比較: [280, 300, 257]

## R421 caption-route-trail — pass

合格、T保持。斜線の経路と大きい展示名の読みやすさを維持し、9pxの板小口と裏へ4px入る42pxの片側支持で一枚の浮いた板にした。長文で読む板が伸びても支えは下端に接続し、RTLでも同じ関係を維持する。

近似比較: [223, 94, '元R421']

## R422 station-label-trail — adjust

調整、T保持。紺の縦経路、明るい現在面、実リンクとメニューの明色化は改善した。通常/forcedとも読める。ただし26pxの停車床と10pxの共通柱の間に8pxの空隙が残り、説明する柱への接合が成立しない。

**R422-platform-column-gap / major**

共通柱はolの0〜10px。liはborder10+padding32で42pxから始まり、床beforeは−24pxなので18px開始。柱外端10pxから8px離れ、停車床が浮く。

根拠: reviewer-trails-3/station-label-trail-initial.png、reviewer-materials-3/checks.json: li x42、before left−24,width26。

改善: Tの紺/縦経路/現在面を保持し、床の開始と幅を調整して柱へ2〜4px重ねる。床の読む側の終点を保ち、文字とアイコンの予約領域へ伸ばさない。RTLも同じ実重なりで確認する。

近似比較: [412, 256, '元R422']

## 実施検査

固定正本100 SHA-256とreview-input-3は全一致、native配布CSS10もimport除去後一致。reviewer-extra-3/checks.json。

全10固定nativeで7階層/empty/one/3階層、collapse、Enter展開、実第二リンククリック遷移、Escapeフォーカス復帰、外側focus/pointer閉鎖、disabled項目/全disabled/復帰、長文320390768×LTRRTL、forced/reduced、open destroyを独立実操作し全10基本PASS。reviewer-trails-3/checks.json。

今回追加のnative disabled moreを全10でisDisabled確認し、実マウスクリックで開かないこと、setDisabled(false)でnative disabledが解除されることを確認。共有navigation正本と固定10exportを読み、native disabled出力を照合。10exportのnavigation.jsは同一hash、正本100hash外としてreviewer-extra-3/shared-runtime.jsonへ別保存。

全10×1000LTR/320RTL×1/3/8階層の60実像を撮影し、少数の主形とメニュー省略後の連続性を検査。reviewer-materials-3。

全10×広狭/方向の20条件でnormal motion hover/leave/reenter×2、350msずつ待って全体相対のglyph/hit矩形とfontを比較。全て固定。reviewer-materials-3/checks.json。

実切欠き/孔を持つR416/R418を暗背景×LTRRTLで追加撮影。R416の紙間と両側切欠きは透過し残し紙が接続。R418は孔が読む先頭へ達する問題を発見。reviewer-materials-3/*-dark.png。

全10の通常/長文/RTL/expanded/forced実画像を照合。R422のround3明色化で通常リンク・メニューの視認を確認。基本overflow適合を支持の接合や孔と読字の非干渉の代わりにはしていない。

元730監査のR/T理由と固定元実像、既承認近似を比較。T414/415/421/422は元の長所と精度を基準に扱い、新規Rと同じ再設計を要求していない。Aは標準リストに色/大きい飾りを加えただけでは合格としない。

## 限界

独立操作はChromiumの固定portable native。React4配布形式と恒久基盤回帰は主担当結果を補助参照し、独立再実行とは扱わない。

forced/reducedはChromiumエミュレーション。他OS/ブラウザの全環境の保証ではない。

全730件の全面再監査ではなく元監査と近似を重点比較。本文コントラストの全組合せを数値保証したものではなく、実画像・実色・背景との関係で視認を検査した。
