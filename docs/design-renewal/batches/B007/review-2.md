# B007 round 2 — changes_requested

8 pass / 1 adjust / 1 redesign。通常操作は全10件通過。R111は紙を挟む接合の再設計、R113は送り孔の実際の抜きが残件。BのR109、TのR112/R114は各基準で合格。

## 個別判定

### R101 linen-tab-accordion — pass

上の棒へ折り返す独立した布タブに番号を置き、縫い線と燕尾の下端が本文列から分離する。番号は布の前に読め、R082の縫製帯と支持位置・輪郭が異なる。

最寄比較: R082, R055, R076。

### R102 ledger-gate-accordion — pass

片側の連続蝶番と上下の軸受、細い扉の回転、右の紙断面が一つの台帳へまとまる。R100の八角ハッチと留め金とは外形と開く場所が異なる。

最寄比較: R021, R042, R100。

### R103 curved-header-accordion — pass

湾曲した庇と左右の巻き口、本文を下ろす側面の巻きが接続する。本文は静止し、曲率を文字面の光筋でなく外形に置く。R034の縦の巻き断面とも異なる。

最寄比較: R034, R055, R093。

### R104 recess-stack-accordion — pass

左の実切欠きと右へ偏った厚い内壁・浅い底で負の空間が成立する。以前の均一な角丸カードから差が出ており、長文でも読む面を保持。R092の石碑の正面/側面とは凹みとして区別できる。

最寄比較: R023, R061, R092。

### R105 vellum-ruler-accordion — pass

目盛りの板と上の孔、紙下端を受ける直角の顎が接続する。本文が伸びると紙端と止めが下がり、定規の機能と開閉が結び付く。

最寄比較: R068, R028, R095。

### R109 warm-help-accordion — pass

Bの基準で合格。番号とバッジを省き、質問と補足、独立した開閉記号へ整理した。320px長文でも記号が密集せず、既存の暖色の読みやすさを保持。

最寄比較: R106, R108, R110。

### R111 interleaf-entry — redesign

native入力とaction領域は安定しているが、造形は二枚の斜めの下敷きと細い左帯が中心。紙の差込み/綴じ点の固有性が十分に読めず、一般的な積層カードの範囲に留まる。

最寄比較: R021, R035, R076, R116。

- **major / R111-interleaf-structure**: 普通の矩形入力の背後へ斜めの紙を二枚置く構成が支配的で、書く紙がどこへ差し込まれ何で綴じられるかを外形から判断しにくい。R035の積層面や既存の紙カード装飾へ近く、入力機能を担うAの固有形として弱い。文字や操作を安定させたことだけをA合格の理由にはできない。
- 根拠: captures/reviewer-fields-2/interleaf-entry-initial.png、-focused.png、reviewer-extra-2/interleaf-entry-password-rtl.png。source/styles.cssは二枚の矩形をskewY±1deg、focusで±2degとtranslateY±2pxへ変える。左の綴じは4pxの平帯。
- 改善: 具体案は、左端だけを断面がS字になる紙の折返しにする構成。上の間紙は左の共通折山から入力紙の左上28px程度へ回り込む短い唇、下の間紙は同じ折山から入力紙の下へ戻る受けとし、その間へ書く紙の端が挟まる空隙を見せる。全幅の斜め下敷きは撤去。focusでは上の唇だけを2〜3px開き、左の折山と下の受けは固定する。文字開始位置は唇の右へ取り、入力・caret・clear/revealは固定。R118の左右リボン、R076の輪、R091の蛇腹を反復しない。

### R112 enamel-trough-field — pass

Tとして曲率を保持する基準で合格。24px/4pxの非対称な溝を残し、下の二重線を取り除いた。通常の外周とフォーカス輪郭の役割が分かれ、入力座標も固定。

最寄比較: R061, R114, R125。

### R113 microfilm-field — adjust

暗いフィルム枠、固定した読取り窓、焦点時だけ進む上下の送り列は明快。文字面を動かさず入力に関係する形を持つが、実孔とする説明に対して孔が不透明な明色の四角で塗られている。

最寄比較: R084, R165, R113。

- **major / R113-perforation-surface**: 設計の「上下の実孔」「フィルムへ窓を切り出す」に対し、送り列は不透明な明色四角の模様で、裏面/空隙が見える孔になっていない。フィルム構成自体は判別できるため根本再設計は不要だが、素材と接続の説明を描画で成立させたい。
- 根拠: captures/reviewer-fields-2/microfilm-field-initial.png、-focused.png。art i1は全面#595443、i2/i3はrepeating-linear-gradientで#f0e5c9の6px四角をその上へ描く。背後の暗い展示面は抜けない。
- 改善: フィルムの帯をmask等で実際に抜き、孔から背後が見える負の空間として仕上げる。固定読取り窓の外で送り列だけが動く関係と文字領域を維持する。孔を単に濃色へ塗り替えるだけで済ませず、背景を変えても抜きとして一貫することを確認する。

### R114 writing-saddle — pass

Tとして両端の曲率を保持する基準で合格。16pxの支持面と中央の平面を分け、多重の内影を除去した。焦点/入力/clear/errorで文字領域を保ち、R112の非対称溝とも分かれる。

最寄比較: R112, R061, R104。

## 実施検査

- 最新固定round-2のみ検査。sourceHashes100件一致、native/source10件のCSSはimport以外一致。round-1画像を最終判定へ使わない。
- accordion6件をChromiumでキー/即時ARIA/inert/単一複数/disabled/急反転/見出し矩形固定/320px長い任意本文/input保持とfocus移動/本文button/RTL/reduced/forced操作。全件通過。
- fields4件をnative FormData・入力矩形/色固定・selection・compositionイベント・clear・undo・error・readonly・disabledで操作。320/390/768pxの長いラベル/説明に横溢れなし。RTL/reduced/forcedも通過。
- 追加で4件へpassword＋prefix @＋suffix KEY＋clear/revealを生成し再初期化。320px LTR/RTL双方でactionと文字/suffix矩形が非重複、reveal後のselection=[1,4]を保持、document幅320。reviewer-extra-2/checks.jsonへ実測保存。
- fields初期/入力/エラー/RTL/forcedとaccordion開/長文/forcedを実画像で確認。forcedでは本文・入力・clearとaccordionの開閉記号を読める。
- 730件baselineメタデータ、accordions/textboxesカテゴリ原画像、R165フィルムタブ、既合格の紙/布/金具/陶器系の構造と比較。R109はB、R112/R114は既存曲率を磨くTの基準で評価。
- Reactの主担当検証と独立native操作を区別。独立レビューではReact実行を再走していない。

## 制限

- Chromiumとmedia emulationでの検査。他ブラウザ/実機IME/実機touch未実施。compositionはイベント試験であり実IMEの代替ではない。
- 全730件を再操作していない。既存監査・カテゴリ/最寄画像比較。
- password追加試験のreveal表示は機能/配置確認用の簡易記号。正本実装は未変更。
