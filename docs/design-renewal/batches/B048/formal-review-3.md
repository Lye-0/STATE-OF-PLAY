# B048 round 3 独立再検査

**changes_requested — 3 pass / 3 adjust / 4 redesign。**

固定3を評価し、作者/共有源/snapshotは変更していない。実情報への連動と材の主形の成立を別々に評価した。

## R655 ledger-index-navigation — adjust

実current行へ現在面を結ぶ意味は成立したが、選択でnative押面/文字が移動し、実切口/モバイル同形も未成立。

**R655-selected-native-shifts:** active a→bで同じaの押面452.5×164.6→772×93.4px、本文左位置16px移動。bは逆に縮む。current行だけgrid列・margin・paddingが変わるため、選択が字面/押面の幾何を変更する。focusは保持されるが固定要件を満たさない。

改善: 全行に同一のnative読む幅/高さ/余白を確保し、材と実現在面だけを予約域へ配置する。選択a/b/子/none、長短文、全layoutで各行の相対矩形が変わらないことを検証。

根拠: captures/reviewer-current-3/checks.json

**R655-tongue-and-mobile:** 通常は二矩形を単色の四角棒で結ぶだけで、切口から紙舌を抜いた前後関係がない。frame背景が間を埋める。mobileは現在行の24px右borderだけとなり、主構造が消失。

改善: native固定を先に解決し、読む紙の真の切口、舌の入口/露出/実重なりを同じ連続材として描く。モバイルにも同じ実現在面の接合を残す。単色の連絡棒を厚くするだけにしない。

根拠: captures/reviewer-pose-3/ledger-index-navigation-3-initial.png, captures/reviewer-pose-3/ledger-index-navigation-3-mobile.png

最寄比較: R651, R660, R425, R620。

## R656 letterhead-navigation — pass

Tの題字/二列/章罫は固定1から作者10hash不変。今回共有更新後のnativeを再確認。通常合格を保持。

最寄比較: R411, R656原版。

## R657 rail-dock-navigation — adjust

各行棚の反復をやめ、実親子の一つの二股接合へ移した構成は前進。ただし読字背景と真空隙/モバイル接合が未完成。

**R657-exposed-dark-copy:** brand/footを透明にしたため、暗い展示地へ実題字#284d65と現在名#527589が直接描かれる。独立初期像で題字が暗く沈む。

改善: 実文字の読む面を不透明に保つか、許される背景範囲で十分な対比を保証する。機構の空隙を守るために文字の下地まで消さない。

根拠: captures/reviewer-pose-3/rail-dock-navigation-3-initial.png, captures/reviewer-open-groups-3/rail-dock-navigation-flyout-ltr.png

**R657-void-and-mobile-fork:** 二股polygonは実子の床へ入るが、間は不透明desktop背景で塞がる。mobileの開いた子面は左右24px線をbackgroundで塗った通常矩形となり、二股が消える。

改善: 実親/子の読む面だけを独立面にし、中間の空隙を全レイヤーで抜く。mobileにも同じ分岐した厚い接合を組み、単なる左右borderへ置換しない。

根拠: captures/reviewer-open-groups-3/rail-dock-navigation-flyout-ltr.png, captures/reviewer-inline-3/rail-dock-navigation-mobile-open.png

最寄比較: R597, R617, R652。

## R658 stitched-map-navigation — redesign

実groupへ縫いを集約した意味は正しいが、主形は依然として厚い矩形枠と黒点列で、縫製された開口になっていない。

**R658-painted-holes-frame:** 子paneは全面#dac5e9、内側に矩形の読む面。孔はradial-gradientの#32203fの点であり透明の抜きではない。6px縦線が同一面に走るだけで表裏を通らず、mobileでは点/糸も無く太いborder枠になる。

改善: この太い矩形枠を実折り伏せの開いた輪郭へ作り替える。折面/布端の厚み/孔の全層抜きと糸の前後通過を同一接点で成立させる。既存枠にmask孔を追加するだけでAの主形が完成したとは扱わない。

根拠: captures/reviewer-open-groups-3/stitched-map-navigation-flyout-ltr.png, captures/reviewer-inline-3/stitched-map-navigation-rtl320.png, snapshot/round-3/source/stitched-map-navigation/styles.css

最寄比較: R538, R378, R598, R618。

## R659 open-bracket-navigation — pass

実一覧を囲う左辺と上下短辺が連続する開括弧を復元。余白/17px読む面/長文幅を保ち、Tの原形保持の指摘を解消。

最寄比較: R659原版, R316。

## R660 book-jacket-navigation — redesign

実親の内部へ子を入れる動作は成立したが、通常形は大きい四辺の黄土色枠＋台形の上唇＋白い子カードに留まる。

**R660-inner-card-frame-remains:** 親LIの全面背景と24px/40pxpaddingが子の四辺を囲う。前唇は台形の色面を上に重ねるだけで、親面の内部を切って紙が通る読みより「額縁内の白いカード」が勝る。mobileも厚い上下左右border。

改善: 親の外側四辺の閉鎖を廃し、入口周辺だけの前後材と自由な子紙の端を主輪郭にする。実親の読む面と子紙の通過位置を離さず、切口/前唇/紙の小口が見える一体の差込みにする。R625の横長の口の単純コピーも避ける。

根拠: captures/reviewer-open-groups-3/book-jacket-navigation-flyout-ltr.png, captures/reviewer-inline-3/book-jacket-navigation-rtl320.png

最寄比較: R651旧案, R413, R516, R625, R653。

## R661 caption-rail-navigation — adjust

実選択行へ現在名を移す意味は成立。ただし選択時のnative幾何変化と、下層に塞がれた貫通窓が残る。

**R661-selected-native-shifts:** 同じaの押面高さ108.4→93.4px、本文左余白24pxが消える。選択行だけmargin/padding/現在面を流し込み、後続行も移動。

改善: 全行の読む矩形/高さを固定予約し、実現在面/残し材だけをその予約域へ描く。focus保持のみで固定要件の合格としない。

根拠: captures/reviewer-current-3/checks.json

**R661-window-filled:** current LI全面の#e6d2bfが24px空隙を埋め、残し材も背後へ隠れて、実像は大きい色カード内の下帯になる。frameも不透明。mobileでは窓が無く24px下borderのみ。

改善: LI/frameを含む全層で開口を設け、前の索引面と後ろの現在面、非対称の残し材だけが見えるようにする。native文字の下地は独立して保持。mobileでも実窓/二つの接点を同じ関係で残す。

根拠: captures/reviewer-pose-3/caption-rail-navigation-3-initial.png, captures/reviewer-pose-3/caption-rail-navigation-3-mobile.png, snapshot/round-3/source/caption-rail-navigation/styles.css

最寄比較: R661原版, R314, R531, R412。

## R662 blueprint-dock-navigation — pass

太い上治具の肩が紙へ重なり、下の送りとも実接触。モバイルの分離した三面も接続し、固定1の空中支持を解消。

最寄比較: R284, R164, R662原版。

## R663 ribbon-top-navigation — redesign

外周帯を外したが、二矩形と連絡棒/小帯の組合せであり、説明する実切口とリボンの通過がない。

**R663-no-real-slit:** 現在面afterは幅16pxの単色長方形。mask/切抜きはなく、ブランド端の矩形が別矩形の背後へ入るだけ。幅広い帯の表側/折返し/裏面が一つの主形を作らず、mobileでは通常の太い下罫付きheaderへ戻る。

改善: 実長い切口を全層で抜き、帯が前から裏へ折れて出る連続した大きい交差輪郭を作る。読む無地面と独立した一覧を保持し、二カード＋小棒の図式を脱する。モバイルでも同じ交差/返端を省略しない。

根拠: captures/reviewer-pose-3/ribbon-top-navigation-3-initial.png, captures/reviewer-pose-3/ribbon-top-navigation-3-mobile.png, snapshot/round-3/source/ribbon-top-navigation/styles.css

最寄比較: R403, R653旧案, R283, R603。

## R664 ceramic-dock-navigation — redesign

丸い全外枠は撤去したが、実groupは二つの角張る支持片と一隅丸い子矩形の寄せ集めで、一体の陶流路として未完成。

**R664-exposed-dark-copy:** 透明brand/foot上の暗い題字/現在名が暗い展示地へ露出し読みにくい。

改善: 実読む面を確保し、材の空隙と文字の下地を分ける。

根拠: captures/reviewer-pose-3/ceramic-dock-navigation-3-initial.png

**R664-disjoint-channel:** beforeの高い頬は64px下で幅48→24へ細くなるが、子床はx48から始まるため24px離れたまま。afterの低いL片も独立して見える。読む子は普通の矩形に一隅40px丸角、空隙もdesktop背景に塞がる。RTLではphysical padding-left:48pxが残り、320px子幅LTR134→RTL86px、左右の材と本文配分も不整合。

改善: 親床から低い子床へ実接合する一つの彫った内外面として輪郭を再構成する。支持片を別々に足さず、連続した頬/底/開口を作り、外周カード枠やR604の口→首→皿へ戻さない。logical padding/clip鏡映を一度に統一してLTR/RTLの接点を一致させる。

根拠: captures/reviewer-open-groups-3/ceramic-dock-navigation-flyout-ltr.png, captures/reviewer-inline-3/ceramic-dock-navigation-rtl320.png, captures/reviewer-inline-3/checks.json

最寄比較: R604旧案, R504旧案, R664原版, R215。

## 実施検査

- 固定3の作者100 SHA-256一致/配布CSS10一致。656作者10は固定1と同一。captures/reviewer-hashes-3.json。
- 全10の初期/モバイル、実group open LTR/RTLを固定native exportで独立撮影。captures/reviewer-pose-3、reviewer-open-groups-3。
- 全10通常hover→leave→reenterの本文相対矩形/font不変、sidebar長文320/390/768×LTRRTL=60条件、dark/light forced実像。reviewer-nav-extra-3。
- 655/661 currentPresentation inline実a/b/child/missingを操作。foot一つ、子は実親LIへ、unknownでhidden、footer overrideでframeへ復帰、focus保持。選択幾何の不具合は別途明記。reviewer-current-3/checks.json。
- 657/658/660/664 実nativeinline親子、長い親/子/説明320/390/768×LTRRTL=24条件。rootはみ出し無し、実子名幅86px以上。reviewer-inline-3/checks.json。
- reviewer-navigation-3: 5件actual native href/controlled/update焦点/子current/disabled/mobile details/Tabtrap/Escape/empty/4layouts長文/44hit/reduced/dead cleanup成功。pageerrors=[]
- reviewer-navigation-B-3: 5件actual native href/controlled/update焦点/子current/disabled/mobile details/Tabtrap/Escape/empty/4layouts長文/44hit/reduced/dead cleanup成功。pageerrors=[]

- 655/661 実選択済みのdark/light forcedを追加確認。reviewer-current-forced-3。

## 範囲と限界

- React4配布形式/恒久HTTPスイートは独立再実行していない。作者側結果とnative実操作を区別する。
- current3の一部y座標はfocus時viewport scrollを含むため、指摘数値は幅/高さ/左余白に限定。後続行変位はDOMフローと実像で確認。
- 提案採用・指定寸法・実階層APIの追加だけをA造形の合格根拠としない。
