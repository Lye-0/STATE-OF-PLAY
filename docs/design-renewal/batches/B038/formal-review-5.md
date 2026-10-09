# B038 round-5 独立検査

changes_requested：7 pass、R533 adjust、R523/R534 redesign。native操作10点の成功とA造形の評価を区別した。

## R520 letterpress-ink-color — pass

Tとして元のRGB校正構成を保持。セリフ見出し、実RGBの三つの58px行、色見本と読むHEXの序列が明瞭。偽の活字や模擬目盛りを追加せず、実色値とnative軸を固定。R515もRGBだが、ここは大きい活字と横罫の密度が元の長所でありTの精度基準で合格。

近似比較：元R520、R515

## R521 stacked-swatch-color — pass

92pxの実保存色カードを24px重ね、各68pxの読む・選ぶ面を露出。偶数カードの16pxの差込みと実HEXが積層を決め、単なる外枠の重なり影ではない。hoverで前後関係や文字が動かず、狭幅でも全カードに十分な選択面を残す。R261の三層背景と異なり、全層が実保存色の選択対象。

近似比較：元R521、R261、R511

## R522 linear-lab-color — pass

Tの線形の軸配置を保持し、128pxのSVと64pxの実軸、同じ左基準線、HEXの全幅行を整理。科学値はLTR、長文・狭幅で実値と44px操作を隠さない。汎用枠を新規Aの理由とせず元の整列構成の精度として合格。

近似比較：元R522、R512

## R523 ribbon-swatch-color — redesign

保存色は大きく読みやすく、native操作・HEX・RTLは成立。しかしAとして必要な連続折帯の主形に届いていない。

近似比較：元R523、R403旧額縁案、R175、R222

**R523-bevel-grid-not-folded-strip / major**

各native色面の四辺にborderを付け、上下帯のある矩形の内部へ敷いた面取りタイルの集合になっている。折り方向が反転せず、隣面との折山・折谷や自由端も主外形を変えていない。元の「色札の形状差」の不足を大きい額縁状セルへ置き換えた範囲に留まる。

改善：各実保存色を一枚の連続帯の読む面へし、隣接面が共有する折山・折谷の端点を一致させる。各色の四辺枠と外の矩形背景を廃し、上・下端に前後方向が分かる自由な輪郭を作る。native文字・hitを変形せず、wrapまたは縦配置でも同じ連続関係を保持する。

根拠：captures/reviewer-materials-5/ribbon-swatch-color-1000-ltr.png、captures/reviewer-materials-5/ribbon-swatch-color-320-rtl.png、snapshot/round-5/source/ribbon-swatch-color/styles.css

## R524 stone-pigment-color — pass

Tとして120pxの実色相輪と156px SVを同じ台へ並べ、上8px・下14pxの密度を整理。狭幅は上下へ戻り、輪四方クリックでH=0/90/180/270と実API値が一致。R517の上下の輪・SVとは同じ語彙だが、元の隣接する二操作面を保持するT精度基準で合格。

近似比較：元R524、R517

## R525 archive-ink-color — pass

72×112pxの保存色自体を22px首と肩を持つ瓶の輪郭へ変更し、実HEXの収蔵ラベルを広い胴へ固定。架空の裏瓶を足さず、すべての瓶が実選択色に対応する。普通の色箱から輪郭・選択密度を変え、R511の引出しやR521の重なる紙とは異なる一群の容器として成立。狭幅でも胴の有効hitを保ち、選択とfocusを内側線で示す。

近似比較：元R525、R511、R521

## R531 editorial-spread-skeleton — pass

Tの左画像列と右の人物・本文という編集誌面を保持。セリフ見出しと14px本文、下の資料列が待機中／読込後で同じ領域へ対応する。狭幅の長文は縦に伸びるが本文約113pxと人物名約108pxを確保し、文字を縮小・切取りしない。元の情報構成の精度として合格。

近似比較：元R531、R220

## R532 blueprint-wire-skeleton — pass

Tの図面と右資料列、下の人物・本文という構成を保持。曖昧な細い装飾曲線を整理し、実内容面と待機の骨格が一致。狭幅で本文192pxを使い、14pxの実本文とnative追加入力を明瞭に読む。

近似比較：元R532、R482

## R533 folded-cover-skeleton — adjust

実人物情報を左フラップ、画像・本文・資料を右紙面へ置く新しい配置は、単なる斜め画像より明確。R220の見開きやR516の対等な二編集面とは異なる狭い表紙フラップと本文として通常構造は採用できる。ただし接合と狭幅読字に調整が必要。

近似比較：元R533、R220、R516、R473

**R533-fold-spine-six-pixel-gap / major**

人物フラップの折背と右紙面の間に6pxの実空隙が残り、説明の接続が成立しない。profileの終端border6pxにより、inset-inline-end:-20px/width20pxの擬似面は紙開始132pxの6px手前で終わる。狭幅の12px接続、RTLも同様。

改善：実borderを含む原点を使い、折背の終端を紙の端へ確実に重ねる。広幅・狭幅・RTLで接点を再測定する。

根拠：captures/reviewer-skeletons-5/folded-cover-skeleton-loaded.png、captures/reviewer-skeletons-5/folded-cover-skeleton-loaded-ltr-320.png、captures/reviewer-geometry-5/checks.json

**R533-narrow-profile-reading / major**

320px展示の本体222pxで、人物フラップ88pxの内側の実名幅は61px、役割は12px。長い人物名は4文字程度で折れ、本文も108pxの細い列に押し込まれる。実情報のあるフラップを狭幅でも固定列で残すため、読み込み後の人物情報が過度に縦長になる。

改善：狭幅では人物フラップを全幅の上面へ移し、横向きの折背で本文紙へ接続する等、同じ素材関係で読み幅を確保する。本文や名前をさらに小さくせず、役割も読みやすい寸法で保つ。

根拠：captures/reviewer-skeletons-5/folded-cover-skeleton-loaded-ltr-320.png、captures/reviewer-skeletons-5/folded-cover-skeleton-loaded-rtl-320.png、captures/reviewer-geometry-5/checks.json

## R534 stone-mosaic-skeleton — redesign

外の丸いカードを廃した点と実内容の四領域への対応は確認。ただし独立した角丸矩形とborder小口の集合で、Aとして必要な石の関係を作る主形に達していない。

近似比較：元R534、R174、R374旧42石キー、R494旧個別石

**R534-rounded-cards-not-stone-assembly / major**

画像・三資料・人物・本文の各面は、異なる一隅を丸めた矩形に上下borderを付けただけで、20pxの間隙がカードを離している。石同士の切断輪郭、支え、組み合う関係がなく、待機中も実内容後も通常のカード分割に近い。色・角位置の違いでA独自性を満たすことはできない。

改善：各情報面を維持しながら、互いに対応する大きな切断輪郭と実接合を主構造にする。例えば画像を載せる上石と人物・本文・資料を載せる下石の二つに整理し、大きい蟻継ぎ状の切口と舌を全層で対応させる。単なる輪郭線や表面模様にせず、長文でも接合端点が一致し、文字は広い平面で読む。

根拠：captures/reviewer-skeletons-5/stone-mosaic-skeleton-initial.png、captures/reviewer-skeletons-5/stone-mosaic-skeleton-loaded.png、snapshot/round-5/source/stone-mosaic-skeleton/styles.css

## 実施した確認

- 固定正本100 SHA-256／配布CSS10一致。共有skeleton.tsと恒久tests/signature.browser.tsのprovenance after hash一致。captures/reviewer-hashes-5.json。
- 独立Chromium実portable native色6件：HEX確定／不正値／Escape／draft caret、palette focus/Space、実native axis keyboardとSV drag、controlled拒否／受入、readonly/disabled、実FormData/reset、destroy後不作動。reviewer-colors-5/checks.jsonは6成功・errors0。
- 色6×320/390/768×LTR/RTL=36長文条件、native44px、forced dark/reduced。実font測定HEX全7文字は36条件で入力内幅へ収まる。reviewer-hex-5/checks.json。R524実色相輪の4方向pointer値も一致。
- 色6×1000/320×LTR/RTL=24条件で通常hover/leave/reenter、白黒更新、native color input、root基準のglyph/input/palette矩形とfont固定。背景を変えた実像も保存。reviewer-materials-5。
- 非同期controlled HEX受入・外部値によるエラー解除・palette縮小時焦点維持を色6件で追加独立確認。reviewer-color-state-5。
- 独立実nativeスケルトン4：待機／実内容、同一input DOM・値・caret、loading時rootへfocus退避とinert、再表示時復帰、外部へ移ったfocusを奪わない、ARIA busy、escaped label、rows2/8、paused、破棄後reset/update/pause不作動。reviewer-skeletons-5/checks.jsonは4成功・errors0。
- スケルトン4×320/390/768×LTR/RTL×待機／読込=48条件の長文実像、forced dark/reduced、本文14px。別スクリプトで24条件の名前・本文幅／fold接点、normal hover/leaveの文字固定、destroy二度のtabindex清掃を確認。reviewer-geometry-5。
- 元730 baseline理由・元実画像と既承認近似を比較。R523/R534は機能成功をA造形の代替にせず再設計判定。
- 主担当actual React色6＋skeleton4のTSX/JSX original/portable四形式成功、実Vite Signature22成功を補助資料としてログ確認。独立React実行とは区別。

## 限界

- 独立ブラウザはChromium。Firefox/Safariは未確認。
- React4配布形式と恒久22試験は主担当のログ参照で、今回独立再実行していない。
- 大きさと内容が任意の全アプリ埋込みを網羅するものではない。実長文・native input・指定viewport条件で評価。
