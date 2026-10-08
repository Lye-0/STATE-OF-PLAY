# B019 round-4 独立検査

判定: **changes_requested — 9 pass / R265 adjust**。通常造形の残件は解消。R265の広幅RTL長文で布が本文を覆うため、論理方向の余白調整が必要。正本・固定版の編集なし。

| 番号 | 判定 | 講評 |
|---|---|---|
| R262 | pass | 四辺枠を撤去し、上は左へ/下は右へ開く独立した三面のレールに板の端が3px入る構造へ変わった。左右のフレームがなく、開口から露出する板と保持縁の関係が外形を決める。狭幅・RTL・選択でも支持と本文固定が成立しA合格。 |
| R263 | pass | 番号タブと角切りファイルを廃止。上へ出る便箋を、左右から下がる48pxのV字口と折り合わせの断面が受ける封筒へ変更した。R259のファイルやR197の非対称下ポケットと比べ、左右の折り面と中央の開口が主構造を決める。番号は前蓋、本文は開口の上に収まりA合格。 |
| R264 | pass | 端の30px楕円と内側の凹縁、下12pxの曲面を同じ全幅の皿へ連続させた。R215の直線的な読む床と前壁、R180の積層円盤とは、上下の楕円で読む凹面を囲む単一の内皿で異なる。狭幅長文でも材の厚みを保ちA合格。 |
| R265 | adjust | 後ろの連続布と紙の開口から前へ出る区間を分け、番号と留めが可視になった。上下の紙が布を覆う関係が成立し通常造形は合格。ただし広幅RTLでは布側の本文余白が鏡映せず、長文の左端を布が覆う。UI調整が残る。 |
| R271 | pass | 左右の箱枠と各16px受け口が資料票の下端を実際に受ける。R257の側箱、R251の前板/取手の引出しとは、横向きの狭い挿入口が候補の区画を作る構造で異なる。検索口と候補の材も揃いA合格。 |
| R272 | pass | Tの探査軸を維持し、途切れた信号線・検出点・activeの短い戻り信号へ整理。R077の吊り支持と異なり、物理的な棒/フレームを増やさず検索中の検出を示す。元監査の調整として合格。 |
| R273 | pass | 小さいピンク端を全高の斜め口と後ろの折返し、外側の背へ変えた。本文面の端から背面へ戻る面が実外形を決め、R193の前から紙を押さえる返しとは重なり方向が異なる。入力と展開面の材も連続しA合格。 |
| R274 | pass | 共通の二つの縦ガイドに、両端の切口と下9pxの断面を持つ石板を渡す。R262の独立した四辺枠とは、候補全体を通る垂直支持と個別板の凹部で異なる。読む面は前に保たれ、スクロールしても板とガイドの関係が明瞭でA合格。 |
| R275 | pass | 単一矩形の中央帯を廃し、異なる役割の名前票/説明票が実空隙22pxを挟んで独立し、二本の38px綴じ腕が両端へ8pxずつ重なる。R220の一冊の見開きと異なり、二票の対応関係が造形を決める。狭幅でも二票を上下へ保ち左綴じが接続、本文固定と可読性が成立しA合格。 |
| R276 | pass | 64pxの実穴のある頭から、18px重なる読む軸と二つの歯へ連続する鍵の外形が候補全体を決める。小さい鍵アイコンを加えた標準行から分かれ、狭幅は48px頭へ縮めて本文を確保。選択印と入力の固定も成立しA合格。 |

## R265 — R265-rtl-reservation

LTR用の布幅予約が広幅RTLでは右に残る。本文は左まで流れる一方、布の前面区間と番号が左にあるため文字が欠ける。狭幅のpadding-inline指定では起きない。

根拠: captures/reviewer-radios-4/index-ribbon-choice-rtl.png。長い日本語/LongUnbrokenLatinLabelWithoutWhitespaceの左側が布に覆われる。base .ff-choice padding:28px 72px 28px 18pxは物理right72px、布はinset-inline-endでRTL左へ移る。

改善方向: 基本余白もpadding-block:28pxとpadding-inline:18px 72pxのような論理方向へ揃え、布のあるinline-end側へ常に本文の予約幅を取る。広幅/狭幅、LTR/RTL、短文/長文で文字と布の非交差を再確認する。

## 今回の確認範囲

- 固定source100 SHA-256とreview-input-4.json全一致。配布CSS10もimport除外で正本と一致。reviewer-extra-4/checks.json。
- round2→4で変更した部品はR262/R263/R265/R275の4件のみ。他6件のsource hash不変を確認し造形の合格を継承。
- 4radios real form/reset/label/native ArrowDown/disabled/任意items/long320390768/RTL/input hit/forced/reducedを再実行しAPI検証成功。R265の文字被覆は実画像で別に検出。reviewer-radios-4。
- 4radios×3選択×1000/320×LTR/RTLの48状態をnormal80ms途中/settled/hover leave reenterで再検査。相対本文矩形/fontは全固定、reduced実選択後pseudo transition0s。reviewer-motion-4。
- 6comboboxesのfilter/IME/ARIA/keys/multiple/disabled/readOnly/required/forms/reset/loading-empty-error/long320390768/local scroll/active露出/RTL/hover fixed/forced/reduced/cleanupを再実行し全6成功。reviewer-combos-4。
- 6comboboxesのnormal実click確定→再展開を再撮影。R275の広幅二票の空隙/腕の接合と狭幅左綴じを実画像/CSSで照合。reviewer-committed-4。
- R262/R263/R275の新造形を前回指摘と既承認近似へ照合。R265のLTR番号/通し口の改善を確認後、wide RTL長文の余白不整合を実画像で発見。

## 限界

- 独立実行はChromium固定native。React4形式と現行gallery detailは今回は独立実行せず、親担当の成功報告と区別。
- forced/reducedはブラウザエミュレーション。他エンジン/実OSは未検査。
- 全730の再監査ではなく元監査と対象before・既承認近似の比較。
