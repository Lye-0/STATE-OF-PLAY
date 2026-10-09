# B042 実装方針

## ledger-procedure-wizard

実章の一枚の前面が、下の56pxの連続曲面を回り、現在の入力紙の背面へ入る巻帳。上側だけに一つの大きい巻き返しを持ち、入力紙はその曲面へ16px重なって自由端へ伸びる。実戻る・次へは同じ紙の自由端に置き、下の独立した丸いキャップは廃する。曲面の両端12pxの小口と明るい上の8pxの面を露出し、nativeの実章→入力→操作の一枚の紙の順序を読む。

## index-flap-wizard

索引の札と本文を同じ紙へ整える。実章の札の色は本文の背に一段だけ差を付け、選択札は本文の明るい紙色へ連続する。44pxの実番号・14pxの章名と28pxの本文見出しを揃え、上の索引と下の操作の罫線を役割ごとに整理する。入力紙にも同じ紙色と1pxの縁を使い、小さな重い箱の寄せ集めを避ける。

## control-sequence-wizard

実labelを24pxの後方立面、native入力を56px以上の平らな床として組む開いた制御湾。28pxの折れた側支持から二本の短い腕が床の上下へ6pxずつ入る。反対側は完全に開き、textareaは同じ支持の間隔だけを自然高で延ばす。章は後方の実操作列で、現在の実章の保持位置が現在名の立面へつながる。外周の面取りケース・計器風の飾りは廃し、実label／値を収納する断面を主形にする。

## stitched-journey-wizard

一枚の布から開く88pxの本当の穴の中に、実章の44pxの番号を縫い留める。番号の平らな島と穴の両端を14pxの布橋で接し、橋の二本の縫い目が実際の接合を示す。三つの穴を持つ同じ布は入力の内側の一枚の布面と裾へ続き、別々の線と紫の小タブを廃する。多手順と狭幅では穴を縦へ並べ、nativeの章名には十分な読む幅を確保する。

## open-plan-wizard

大きい実章番号と余白の編集を揃える。64pxの実順位、16pxの章名、34pxの現在章の見出しを同じ読む基準へ置き、現在だけの3pxの罫が全体の1pxの区切りから明瞭に区別される。入力は14pxの平らな字面と48pxのnative面で保ち、色の強さを実番号と次への操作へ絞る。独立した架空数字や装飾コピーは追加しない。

## bookend-stage-wizard

入力紙を左右の二つの大きい支持壁と一つの共通の足で保持する手順台。支持壁は全高を通じて内側へ曲がり、40pxの本当の側面で読む紙と接する。実戻る・次へは24pxの共通台の前面へ載り、小しおりと通常フォームの組合せを廃する。実章名は上の開いた紙面で14px、入力は支える紙の内側で読み、狭幅は支持壁22pxへ縮める。

## clipped-page-wizard

切口のある実手順票と入力紙の比率を整える。票は108pxの高さと24×10pxの本当の切口だけを持ち、44pxの実番号と14pxの実名を余白へ収める。30pxの現在章の見出しと24pxの本文余白へ広げ、札だけが重い展示を廃する。切口は材だけへ描き、nativeボタン本体のhitとfocus輪郭を切り取らない。

## blueprint-stage-wizard

現在の実章を載せる後方立面と、実フォームの薄い紙を、二本の非対称な斜め支持で組む。二面の32pxの本当の空隙へ18度と22度の幅20pxの支持を差し込み、両端がそれぞれの実面へ重なる。作業紙は片側に開き、実戻る・次へは同じ紙の自由端に置く。現在の行の自然高を共有し、長い章名・fields・errorでも二本の支持が章面と書く面へ接する。狭幅は二つの支持を現在章と入力紙の間の上側へ収め、nativeの順序と字面は変形しない。

## ribbon-stage-wizard

実章と実操作を一つの大きい帯の表裏へ載せる。上の章の帯は64pxの本当の側面を回って下の操作面へ続き、下の84×64pxの斜めの自由端が戻る方向を示す。現在の入力紙は帯の内側へ挟まれ、帯と紙の間は24pxの本当の背景で抜く。短い飾り帯と重複した進捗線を廃し、材の接続と14pxの実章名で手順を読む。

## ceramic-stage-wizard

上下の二つの大きい肩と、内側へ絞る胴を一つの陶器の外形として作る。全高に沿う本当の輪郭が上・中央・下で変わり、小さな丸番号と角丸箱を廃する。実手順は上の縁、入力紙は胴の平底、操作は下の縁へ載り、字面は72pxの余白の中の平面で読む。狭幅では余白を32pxへ整え、native入力と48pxの操作を輪郭で切らない。

## 実字面の確認

布の橋は番号の両側だけに限定し、文字の背景へ横切る線を載せない。4章以上の狭幅も文字の実読む幅80pxを確保する。


## 独立検査2への対応

巻帳・制御湾・二面製図は実機能面の接続から再設計。布番号は長い章名でもblock-start34pxを保つ。支持壁は本文＋実errorのgrid二行を収納し、紙へ4px／共通台へ4px重ねる。帯の入力紙とerrorを連続面へまとめ、上と下の二つの受けで帰還帯へ保持する。多手順の陶器の名称の幅を92pxへ広げる。


Final forced round9: 60 dark/light next/complete/disabled actual rendered glyphs independently inspected. Explicit system colors on selected index b and next-label, with forced-color-adjust:none limited to these glyphs, suppress unreadable Chromium backplates. Parent native controls retain automatic forced-color adjustment. Round7 was a no-change freeze after a source-edit precondition failed; round8 explicit colors alone still failed. Both retain superseded evidence. Native10 all9 PASS; regular appearance and full protocols unchanged from reviewed round6.
