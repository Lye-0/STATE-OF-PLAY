# B019 round-2 独立検査

判定: **changes_requested — 6 pass / 3 redesign / 1 adjust**。R262/R263/R275の造形、R265の布と番号の重なりを要修正。正本・固定版の編集なし。

| 番号 | 判定 | 講評 |
|---|---|---|
| R262 | redesign | 元の短線から厚みは増したが、実像の主役は二重の四辺フレーム。下の5px切欠きだけでは独立した上下の溝と板の保持関係を作れておらず、Aとして再設計が必要。 |
| R263 | redesign | 右の色帯は撤去したが、上の番号タブ＋後ろのファイル＋前紙という主構造が直前R259と同じ。右上24pxの斜め角と選択点の左右差だけでは独立した封筒の口に見えず、再設計が必要。 |
| R264 | pass | 端の30px楕円と内側の凹縁、下12pxの曲面を同じ全幅の皿へ連続させた。R215の直線的な読む床と前壁、R180の積層円盤とは、上下の楕円で読む凹面を囲む単一の内皿で異なる。狭幅長文でも材の厚みを保ちA合格。 |
| R265 | adjust | 46pxの布と割尾で普通の縦線から進んだが、親の連続帯が全行の前を覆い、布上の番号と選択時の留めまで隠す。紙の孔と布の前後関係も読めない。機構の方向は保持し描画層の調整が必要。 |
| R271 | pass | 左右の箱枠と各16px受け口が資料票の下端を実際に受ける。R257の側箱、R251の前板/取手の引出しとは、横向きの狭い挿入口が候補の区画を作る構造で異なる。検索口と候補の材も揃いA合格。 |
| R272 | pass | Tの探査軸を維持し、途切れた信号線・検出点・activeの短い戻り信号へ整理。R077の吊り支持と異なり、物理的な棒/フレームを増やさず検索中の検出を示す。元監査の調整として合格。 |
| R273 | pass | 小さいピンク端を全高の斜め口と後ろの折返し、外側の背へ変えた。本文面の端から背面へ戻る面が実外形を決め、R193の前から紙を押さえる返しとは重なり方向が異なる。入力と展開面の材も連続しA合格。 |
| R274 | pass | 共通の二つの縦ガイドに、両端の切口と下9pxの断面を持つ石板を渡す。R262の独立した四辺枠とは、候補全体を通る垂直支持と個別板の凹部で異なる。読む面は前に保たれ、スクロールしても板とガイドの関係が明瞭でA合格。 |
| R275 | redesign | 名前と説明を別列へ分ける実用性はあるが、外形は一つの矩形で、中央の三色帯と上下線だけが見開きを表す。R220の二頁配置を候補行へ反復した印象が強く、Aの候補比較に固有の構造へ再設計が必要。 |
| R276 | pass | 64pxの実穴のある頭から、18px重なる読む軸と二つの歯へ連続する鍵の外形が候補全体を決める。小さい鍵アイコンを加えた標準行から分かれ、狭幅は48px頭へ縮めて本文を確保。選択印と入力の固定も成立しA合格。 |

## R262 — R262-four-sided-frame

**major / design**

太い二重枠と色の面取りが造形の中心で、普通のフレーム付き選択カードを越える独立した支持構造が弱い。上下溝という説明と比べ、どこから板を入れ、どの縁が保持するかが実外形に現れていない。

根拠: captures/reviewer-radios-2/channelled-choice-initial.png。beforeは上下4px/左右9pxborder、afterは上下10px帯/左右8pxborder。主形は矩形の四辺で、切欠きは下5pxだけ。

改善方向: 四辺を均等に囲む枠をやめ、上下の独立したチャンネルの断面、片側の開いた挿入口、反対側の止めと板の端の関係を外形で作る。単なるborderの太さや色追加でなく、溝の向きと保持を見分けられる形へする。丸いnative選択点は保持。design.mdの角形選択点という旧説明も実装へ揃える。

## R263 — R263-folder-repetition

**major / duplication**

24pxの斜め切断は右上の角だけで、封筒の口として本文をまたぐ前後面になっていない。番号タブを含む主構造はR259のフォルダーの反復で、色・曲率・選択点の位置だけではAを分けられない。

根拠: captures/reviewer-neighbours.jpg上段：R259 acceptedとR263。両方が上の番号タブ/後ろの一枚/前の本文面を同じ配置で持つ。

改善方向: R259の番号付きフォルダー外形を主役に残さず、封筒であれば便箋の端を実際に覆う開口・折り返しの交点・露出する紙の方向で輪郭を作り直す。上タブ＋角切りの修正だけで終えず、既存の下ポケットもそのまま流用しない。

## R265 — R265-ribbon-covers-index

**major / ui**

親の帯が各行のstacking contextの前へ描かれ、行内badge z-index:2も覆われる。番号を布上へ固定する説明に反し番号が読めない。孔は帯の脇の小さな欠けとしてしか現れず、布が二つの孔を通る前後関係も不明瞭。

根拠: captures/reviewer-layers-2/ribbon-before.png、ribbon-diagnostic-opacity.png。一時DOMだけで親ff-choices::afterのopacityを.3へすると隠れていた01/02/03と選択の上下留めが現れる。

改善方向: 紙・布の裏側区間・穴から表へ出る区間・番号を明示的に重ね分ける。少なくとも二つの通し口で紙の縁が布を覆い、間の布と番号は見える構造にする。番号だけを最高zへ出して、全面の帯が紙を覆う問題を残さない。

## R275 — R275-flat-book-repeat

**major / design**

名前/説明の二列化は有用だが、中央帯が上下の一直線の外周へ接するだけで頁の折面/別々の小口の関係がない。R220で改善前に指摘した単なる二列の仕切りへ近く、同じ見開きの縮小反復をAの独立性の理由にできない。

根拠: captures/reviewer-neighbours.jpg下段、reviewer-combos-2/ledger-gutter-finder-expanded.png。候補before一枚のlinear-gradientに22pxの3色帯、border-block3pxと下影5pxを描く。

改善方向: 情報分割を維持しつつ、候補を比較する操作に固有の頁の構造へ再設計する。一例は名前を索引側の短い頁端、説明をそこへ綴じた独立の読む頁として異なる長さの小口と実接合を作る。R220の上下の谷形をコピーして各行に足すだけの修正は避ける。狭幅では順序を保つ一頁配置を維持する。

## 確認範囲

- 固定source100 SHA-256とreview-input-2.json全一致。配布CSS10もimport除外で正本と一致。reviewer-extra-2/checks.json。
- 4radios actual form/reset/label/ArrowDown/disabled/任意items/長文320390768/RTL/input hit/forced/reducedを独立再実行し全4成功。reviewer-radios-2。
- 4radios×3選択×1000/320×LTR/RTLの48状態でnormal80ms途中/settled/hover leave reenterを撮影。コンポーネント相対のcopy位置/幅/fontは全固定。reduced実選択後のpseudo transition0sも確認。reviewer-motion-2。
- 6comboboxesのfilter/IME/aria-activedescendant/native keys/disabledskip/multiple/readOnly/required/form/reset/loading/empty/error/long320390768/local scroll/active項目露出/RTL/通常hover leave reenter/forced committed mark/reduced/cleanupを再実行し全6成功/errors0。reviewer-combos-2。
- 6comboboxesは別途normalのFolio実click確定→再展開を行い、選択済み候補と形を撮影。reviewer-committed-2。
- R265親帯の一時DOM opacityで描画順の原因を切り分け、番号が下層へ隠れていることを確認。正本・固定版の変更なし。reviewer-layers-2。
- 元730監査10件の理由とbefore画像、既承認R259/R220の実画像を比較。R264/R271/R273/R274/R276も最寄の材/支持/操作関係を比較。

## 限界

- 独立実行はChromium固定native。React4形式と現行gallery detailは今回は独立実行せず、親担当の成功報告と区別。
- forced/reducedはブラウザエミュレーション。他エンジン/実OSは未検査。
- 全730の再監査ではなく元監査と対象before・既承認近似の比較。
