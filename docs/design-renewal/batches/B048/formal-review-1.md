# B048 round 1 独立検査

**changes_requested — 1 pass / 2 adjust / 7 redesign。**

通常形の根本不足を操作成功と分離して判定。作者・共有源・固定snapshotは変更していない。

## R655 ledger-index-navigation — redesign

黒いブランド面・白い一覧・茶の現在帯の三段が主形で、鍵形の角飾りが実索引の構造を変えていない。

**問題:** 幅96pxの上の鍵形はブランドの外角だけ、下の鍵形も現在帯の末端だけ。実一覧は厚い右borderを持つ通常の矩形で、R660と同じ三段の箱構図。モバイルでは鍵形自体が省かれる。原監査の「罫線ヘッダーからの独立性不足」を材の色と厚みだけでは解消できていない。

**改善方向:** 角飾りと三段外形を撤去。例えば実current行の切口から36〜48px幅の索引舌を出し、実現在名の幅広い読む面へ接続する一枚の帳面へ。行先のnative文字/hitは固定し材だけを実currentへ追従させ、active無しに架空の舌を出さない。R420の栞追加へ縮退させず、実選択が全体の抜きと接合を決める構図を実像で再評価する。

根拠: captures/reviewer-pose-1/ledger-index-navigation-1-initial.png, captures/reviewer-pose-1/ledger-index-navigation-1-mobile.png, snapshot/round-1/source/ledger-index-navigation/styles.css

最寄比較: R651, R660, R425, R620。

## R656 letterhead-navigation — pass

大きいセリフ題字・二列の編集的索引・細い章罫を保ち、狭幅では実ブランドと操作を別段にして読む幅を確保した。Tの改善として成立。

最寄比較: R411, R656原版。

## R657 rail-dock-navigation — redesign

一列化でレールの接点は見えるが、縦柱から各横腕へ矩形棚を反復する既承認の構成を拡大している。

**問題:** 56pxの共通柱＋40px横差し＋12px小口の矩形棚が全行に同じ周期で並ぶ。R597 Search、R617 Command、R652 Navigationの柱/腕/読む棚と同じ主構造で、青色や柱厚は独立性にならない。開いたgroupもこの実分岐とは無関係な別矩形popup。

**改善方向:** 各行の棚と共通縦柱を廃止し、実groupだけに生じる一つの分岐床へ。例えば親の44px押面の先に幅48pxの二股の金属接合、子の共通床へ12pxの入りを持たせ、直リンクは共通平面にする。中央の真空隙と左右に分かれる厚い断面を主形にし、R653の紙折目を材替えしただけにしない。

根拠: captures/reviewer-pose-1/rail-dock-navigation-1-initial.png, captures/reviewer-pose-1/rail-dock-navigation-1-mobile.png, snapshot/round-1/source/rail-dock-navigation/styles.css

最寄比較: R597, R617, R652。

## R658 stitched-map-navigation — redesign

紫のカード列をXで結ぶ表現で、縫製の前後関係と布の固有外形が成立していない。

**問題:** liは矩形の不透明面と12px下border、糸は64px高の二本のlinear-gradientをz:-1に置くだけ。孔・折り伏せ・糸が前から裏へ入る接点がなく、36pxの空隙にXの中央だけ見える。ブランドと先頭、末尾と現在帯は40pxの空隙で接合もない。R538/378の紙片接合と比較しても構造が弱い。

**改善方向:** 交互カード＋Xを廃止し、一枚の布の実group開口へ構造を集約する案。native親を幅広い折り伏せ縫いの上辺へ置き、実子面が布の長い切れ目から現れる。開口端32pxの折り伏せと実孔だけに糸を通し、直リンクは同じ連続布に置く。孔を追加した同じカード列だけでは独立性の不足は残る。

根拠: captures/reviewer-pose-1/stitched-map-navigation-1-initial.png, captures/reviewer-pose-1/stitched-map-navigation-1-mobile.png, snapshot/round-1/source/stitched-map-navigation/styles.css

最寄比較: R538, R378, R598, R618。

## R659 open-bracket-navigation — adjust

余白と読む幅は改善したが、Tとして保持すべき一覧の開括弧が全体左罫へ置換されている。

**問題:** 原版0は一覧の上・左・下に連続する開括弧を持つ。固定1はルート左の一本線となり上下の短辺が消え、ブランドから現在地まで範囲も変わる。説明の「元の片側の開いた括弧を保持」と一致しない。

**改善方向:** 元の実一覧を対象とする片側の開括弧を戻す。3pxの左辺と短い上/下辺を同一輪郭として連続させ、ブランドやfooter全体の四辺枠にはしない。現在の長名幅・44px操作・余白は維持し、展開面も同じ開方向を整理する。

根拠: captures/reviewer-pose-1/open-bracket-navigation-1-initial.png, captures/reviewer-pose-1/open-bracket-navigation-1-mobile.png, snapshot/round-1/source/open-bracket-navigation/styles.css

最寄比較: R659原版, R316。

## R660 book-jacket-navigation — redesign

右の外壁と上下横面に主形を依存し、書籍のジャケットという既存外枠構図の反復に留まる。

**問題:** 初期は上の横板/右48px斜角側面/下横板が通常の白い一覧を囲む。flyoutも同じ右側面付き矩形。実階層・現在行と材の接合は無関係で、R651旧案やR413/516の紙返しを大きい周囲へ置き直した形。

**改善方向:** 上/右/下のジャケット外枠を全廃。例えば実group親の大きい読む面の内部へ幅広い斜め切口を設け、実子の読む紙が24px前唇の裏へ8px入る一体の差込み構造へ。階層0は一枚、開いた実groupだけに内外関係を作る。R653の外へ続く折面やR625の横長口の再利用にならない全体構図が必要。

根拠: captures/reviewer-pose-1/book-jacket-navigation-1-initial.png, captures/reviewer-pose-1/book-jacket-navigation-1-mobile.png, snapshot/round-1/source/book-jacket-navigation/styles.css

最寄比較: R651旧案, R413, R516, R625, R653。

## R661 caption-rail-navigation — redesign

幅広い現在名の帯と余白だけではAの独自形にならず、L字支持という説明も実像と合っていない。

**問題:** 左80pxのpseudoはbrandの高さだけの孤立矩形で、下の現在帯まで通る軸ではない。中央は普通の縦リスト、下は22pxの現在名と48px四角マークを置く矩形。モバイルでは左材も消えて通常の一覧/下帯になる。

**改善方向:** 実現在名を読む大きな貫通窓を索引面の途中へ組み込む案。前の行先面の全幅開口から後ろの現在名面を見せ、左上48×24/右下72×24など非対称の残し材で24px空隙を渡す。実行先は窓の外に固定し架空情報を増やさない。二枚カードに小橋を足しただけなら再設計継続。

根拠: captures/reviewer-pose-1/caption-rail-navigation-1-initial.png, captures/reviewer-pose-1/caption-rail-navigation-1-mobile.png, snapshot/round-1/source/caption-rail-navigation/styles.css

最寄比較: R661原版, R314, R531, R412。

## R662 blueprint-dock-navigation — adjust

上の二治具・索引・下の現在面という構成は読めるが、上の支持が索引へ接触せず、モバイルでは三面全てが分離する。

**問題:** desktop::before/afterはtop:-40,width80,height80,border20、inline offset:-40。読む紙の外側へ縦脚が20px離れ、横腕も紙上端より20px上で終わる。狭幅はoffset24/border12で12px離れる。mobile header/nav/footerは32px空隙を持つだけで上治具も下の40px送りもない。

**改善方向:** 上治具を実紙へ8px以上重ねる内向きの保持肩を含む一体輪郭へ直し、紙の前後で接合が見えるようにする。下の送りも両端接触を確認。mobileにも同じ実支持を寸法適応して残すか、三面を接続する同一機構を実装する。文字の上へ材を延ばすだけにしない。

根拠: captures/reviewer-pose-1/blueprint-dock-navigation-1-initial.png, captures/reviewer-pose-1/blueprint-dock-navigation-1-mobile.png, snapshot/round-1/source/blueprint-dock-navigation/styles.css

最寄比較: R284, R164, R662原版。

## R663 ribbon-top-navigation — redesign

上下の広帯と斜角端が通常一覧の周囲を囲う構成で、連続したリボンの通過や返りが見えない。

**問題:** 初期は上の帯に左右三角、下帯に台形端、中央は通常の矩形一覧。mobile/flyoutでは側borderと下borderに縮退する。R403や旧R653の上下折面の額縁と近く、帯が実ブランドと現在地を結ぶという説明が外周色面に留まる。

**改善方向:** 上下で一覧を囲う方式を撤去。例えばブランドを読む一本の広帯と実現在名の返端を上部の一つの大きな非対称交差接合へ集約し、片方を他方の実長い切口へ通す。native字は平らな無地、一覧は帯の輪の外の共通面。飾りの小さい結び目を足すだけでは不可。

根拠: captures/reviewer-pose-1/ribbon-top-navigation-1-initial.png, captures/reviewer-pose-1/ribbon-top-navigation-1-mobile.png, snapshot/round-1/source/ribbon-top-navigation/styles.css

最寄比較: R403, R653旧案, R283, R603。

## R664 ceramic-dock-navigation — redesign

巨大な非対称角丸の箱と低い丸角の現在帯で、原版の丸角ヘッダーからAの主構造へ踏み込めていない。

**問題:** 初期/展開/flyoutとも一枚の四角い内面の外周を丸くし24pxの左/下厚みを付けたもの。実選択・分類と曲面の位置は無関係。R604の再設計前やR504旧案と同じ「丸い器で囲う」範囲で、下の丸い帯追加は独自の接合にならない。

**改善方向:** 外周器を撤去し、実groupの親の低い陶床から子の読む床へ分岐する一つの深い流路を彫る案。左の高い頬/中央の深い開口/右の低い堰を実親子の接点だけに置き、外周四辺は開く。各行の丸い小器やR604の口→首→皿の複製を避け、実階層の増減と共に成立する連続した内外面を検証する。

根拠: captures/reviewer-pose-1/ceramic-dock-navigation-1-initial.png, captures/reviewer-pose-1/ceramic-dock-navigation-1-mobile.png, snapshot/round-1/source/ceramic-dock-navigation/styles.css

最寄比較: R604旧案, R504旧案, R664原版, R215。

## 実施検査

- 固定1の作者100 SHA-256一致、配布CSS10一致（import行除外）。captures/reviewer-hashes-1.json。
- 原版0と固定1の全10初期/モバイルを同一native fixtureで独立撮影。通常motionでhover→leave→reenter、相対文字矩形/font不変を全10確認。
- sidebar実幅222pxを含む320/390/768×LTR/RTL×10=60条件。root scrollWidth==clientWidth、実名幅126〜190px（320）。captures/reviewer-nav-extra-1/checks.json。
- 全10の実group flyout/実mobile detailsを操作・撮影。通常/long/RTL、dark/light forcedの実glyph画像を確認。
- 原監査baseline.json/UI-DIRECTION.md、各原版、近似既承認の主構造と比較。形の材料名や指定寸法への一致は合格根拠としない。
- reviewer-navigation-1: 5件、実href/modified click/current子/disabled/controlled open/compatible update焦点/mobile details/Tabtrap/Escape/empty/全4layout長文/44hit/reduced/dead cleanup PASS。pageerrors=[]
- reviewer-navigation-B-1: 5件、実href/modified click/current子/disabled/controlled open/compatible update焦点/mobile details/Tabtrap/Escape/empty/全4layout長文/44hit/reduced/dead cleanup PASS。pageerrors=[]

- 全10配布共有NavigationはB047最終8とbyte同一。captures/reviewer-runtime-1.json。

## 範囲と限界

- React全4形式および恒久HTTPスイートは本独立検査では再実行しない。作者側結果と独立native実操作を区別する。
- 730件全ての全状態を今回再操作していない。元監査/比較一覧と近似既承認記録に基づく構造比較。
- 本文が非常に長いスクリーンショットの縮小表示だけで読字幅を判断せず、実TextNodeRange/要素幅測定を併用。
