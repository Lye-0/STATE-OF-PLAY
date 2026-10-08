# round-3 対応

8件PASSは維持。R239 REDESIGN: 二重の角丸のつまみと溝を廃止。上/下の二つのずれた肩、斜めの側面、片側の低い28px指面を持つ64px引き手へ変更。上下の肩を溝縁へ接し、実溝をnative全幅へ、値の軌道だけnative中心の32px内側へ分ける。min/maxでもつまみを内側へ保ち、R232橋/R242開いたシャトルと肩/低い指面/溝の関係を分ける。

R251 ADJUST: normal hover2px移動をnone!importantで排除。root実幅222pxの狭幅でicon/badgeが残る問題をcontainer-type:inline-sizeで解消。幅指定のないflex itemの実formでもcontainer内容が0へ潰れないよう自然inline内容336px（padding込み380px）、max-width100%を持たせる。本文幅54px以上/実nativeinputと板全体の寸法一致/wholecomponentを基準に選択・hover・leave・reentry時の文字固定をmainで確認。4は自己検査、5を全10件独立再検査へ。
