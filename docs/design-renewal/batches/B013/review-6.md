# B013 独立検査 round-6

**9件 PASS、R193のみ ADJUST。** R181とR193の通常造形は合格。R193のRTL接続だけが残る。正本変更なし。

## R180 coin-seat-segments — pass

上下の全幅の弧と厚い読む筒、外の楕円の座、側の支柱が同じ金属として接続する。普通の茶色い列から筒の断面を持つ三つの区画へ変わった。R138の横向きの本の背とは上下の独立した支持と選ぶ筒の配置で分かれ、A合格。 round-5から正本不変を確認し合格判定を引継ぐ。

## R181 book-jacket-segments — pass

紙の前・copyの後ろへ上下の折返しを出し、22pxの斜めの折面が紙の端を実際に覆う。左背から上下へ続くジャケットの口が見え、平らな裏紙の積層から分かれた。短文/長文、横/縦、3選択、wrapで読字と接点が成立しA合格。

## R182 ivory-notch-segments — pass

Tの上下の切欠きを保持し、青灰の未選択と明るい象牙色の選択へ分離した。本文色も各面に対応し、縦/wrapで区画ごとの切欠きが残る。元監査の選択の明瞭さを解消し合格。 round-5から正本不変を確認し合格判定を引継ぐ。

## R183 double-track-segments — pass

閉じた二重の軌道の戻りと内側の板の間に実空隙があり、選択区画だけ上下の橋が接続する。R154の一本の案内溝、R162の梯子、R172の直線レールとも異なる閉じた経路の輪郭がある。縦/wrapでも橋が板から軌道へ届きA合格。 round-5から正本不変を確認し合格判定を引継ぐ。

## R184 bracket-seat-segments — pass

下を包む厚いU字の座と丸底の読む板が連続して接触する。round-5では板の下が受けの内側へ届き、浮いた底の空隙がない。R171の二足、R177の上アーチ、R173の左右折脚とは下を受ける曲率で分かれる。A合格。 round-5から正本不変を確認し合格判定を引継ぐ。

## R185 satin-key-segments — pass

Tの左右の浅い巻込みを保持し、茶色い光沢と打刻票の説明を除いて淡紅の薄い帯へ整えた。元の端の曲率を残し、文字が折面へ傾いたり動いたりしない。元監査の素材/説明の精度として合格。 round-5から正本不変を確認し合格判定を引継ぐ。

## R191 locking-plate-check — pass

24pxの上下の曲がった留め板を確認面の外へ出し、実開口と枠への重なりを作った。中央のチェック/混在線を邪魔する縦線がなく、R194の対角のLとも支持する場所・開いた形が分かれる。R179の上下顎より折返した板の断面が明瞭。A合格。 round-5から正本不変を確認し合格判定を引継ぐ。

## R192 stitched-seal-check — pass

Tの二つの角糸を保ち、薄い封印の紙縁と細い縫い目へ整理した。太い金属枠の印象を除き、記号は無地の中央に一つだけ表示する。R157の全高の革の背、R178の継ぎ帯とは小さい封印を留める構造として分かれ、合格。 round-5から正本不変を確認し合格判定を引継ぐ。

## R193 folded-ticket-check — adjust

全高38pxの折面と別の読む紙、斜めの上下の折口を設け、LTRでは確認欄の左へ受けが接続する。小さい折角カードを脱し、一枚の票の端を返して確認面を支える構造が成立。通常造形はA合格。ただしRTLで確認欄だけが右へ移り折面から離れるため接合の調整が必要。

- **R193-rtl-fold-contact**: RTLでは読む文字を挟んで確認欄と支持する折面が離れ、受けが確認欄左の途中へ浮く。確認面を折返しへ接続する造形が向きによって成立しない。 根拠: captures/reviewer-checks-6/folded-ticket-check-rtl.png と-long.png。RTLで確認欄は右へ移るが、root::after left:0の38px折面、root::before inset-left:24px、aura left:-10pxはLTRのまま。 改善: RTLでは折面・読む紙のinset・左右padding・10px受け・反対側の破線を一組で鏡映し、確認欄がある右端へ支持を移す。上下の斜め切口も返した向きに揃え、長文/checked/mixedで接続と記号の余白を確認する。通常LTRの合格済み構造は維持する。

## R194 crossbar-check — pass

Tの交差する支持を外の二つの対角へ整理し、中央のチェック/混在線と分けた。3pxの支持と1pxの紙縁に役割の差があり、過密な複合記号を解消。R191の上下の留め板とは対角のLで分かれる。元監査Tの精度として合格。 round-5から正本不変を確認し合格判定を引継ぐ。

## 確認範囲

- 固定source100 SHA-256とreview-input-6.json一致。native配布CSS10と正本をimport除外で照合し一致。reviewer-extra-6/checks.json。
- round-5/6正本の変更はR181 CSSとR193 CSS/説明/Reactコメント。残る8件は全正本不変。
- native segments6を通常motionでradio/form/reset/キー/disabled/hover leave reenter/文字矩形/縦/長文320390768/RTL/forced/reduced再検査。results6/errors0。reviewer-segments-6。
- checkbox4件のnative/required/form/Space/label/reset/mixed/disabled/長文/RTL/forced/reducedを再実行しresults4/errors0。ただし自動のbox/copy非衝突ではR193支持の離隔を検出せず、実画像で追加指摘した。reviewer-checks-6。
- checkbox4件をnormal motionでoff/on/mixedの100ms途中・500ms後、hover leave reenterと急反転で再確認。字/枠の矩形安定、tick/dashはoff0/0・on1/0・mixed0/1。reviewer-normal-6。
- segments6の横/縦×3選択、320wrap/白背景を再撮影。R181折面の実際の露出、紙への重なり、長文読字を確認。reviewer-joints-6。
- 既存730/承認済み部品との近似は前回の比較を引継ぎ、変更2件を同じ基準で判断。R193は切離す半券や独立した金具ではなく、票の全高を返す構造として区別。

## 限界

- Chromium固定nativeの独立実行。React実props配布は今回独立再実行していない。
- forced/reducedはブラウザエミュレーション。他エンジン/実OSは未確認。
- 前回合格8件の造形と近似比較は正本不変を確認して引継ぎ。
