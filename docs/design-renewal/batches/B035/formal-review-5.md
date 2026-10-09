# B035 round 5 — pass

全10件pass。3件の再設計と、評価5件の更新状態・RTL数値順・暗色forcedの修正を独立確認。実装・snapshot編集なし。

## R481 medallion-seat-profile — pass

元監査T。90pxの正円と4pxの鋳造縁を保ち、下16pxを120×22pxの曲がる受けへ入れる。カメオの卵形と異なるメダルの主形が残り、実写真・選択・長名で写真と本人名は安定。

近似比較: 元R481, R471, R479。

## R482 blueprint-id-profile — pass

実写真版の下へ120pxの台面が4px入り、その下の二股の58px支持へつながる。三角の本当の空隙が輪郭を決め、単なる青い写真枠ではない。名前を下へ離した後は支持底と文字が衝突しない。R376のA脚とは、写真の幅を超す独立した台面と小さな支持全体を示す構成が異なる。

近似比較: R376, R317, 元R482。

## R483 ribbon-badge-profile — pass

元監査T。メダルの背を通る横返りと、その下の名前を載せる前帯を同素材へ揃えている。下のV字自由端は保ち、実写真を入れても帯と本人名の関係が崩れない。

近似比較: R283, 元R483。

## R484 slotted-card-profile — pass

100×104pxの写真が一枚の厚い紹介板から大きく張り出し、前の24pxの保持口が終端12pxを実際に覆う。名前はその先の平面にあり、上隅の在席点も残る。R478の下ポケットとは、側方の厚い口と横方向の読む配置が異なる。

近似比較: R478, R257, R111。

## R485 letterhead-profile — pass

大きい実本人名を上の一枚の紙へ組み、広い開端から写真版が張り出す。小さい二列の名簿ではなく、紙の自由端・裏返り・版の厚みが写真と名前の位置を決める。RTL/狭幅でも版と紙の接合を維持。

近似比較: R425, R473, 元R485。

## R491 seal-score-rating — pass

元監査Tの蝋の正円と星、上5px/下8pxの端面を保持。通常造形の合格を引継ぎ。共通の更新時preview、RTL数値比、暗色forcedの未選択星を独立再実行して修正を確認。

近似比較: 元R491, R494。

## R492 inspection-score-rating — pass

閉じた外盤を廃し、実評価票が全幅の後受けと前の読み取り材の間を通る。星は上へ、斜めの自由端は下へ露出し、前材が票を実際に覆う。通常の五連キーを囲う枠から主形が離れ、2〜10段階と狭幅の各行でも受けが連続する。R295の単一出力装置とは、複数の固定票を一つの開いたゲートへ通して実評価範囲を読む構造が異なる。

近似比較: R397, R275修正前, 元R492。

## R493 folded-score-rating — pass

元監査Tの吊る票と各行の8px綴じ材、30px返しを保持。全状態の4px縁予約により星が動かず、最大10段階の折返し行も前行に誤接続しない。共通UI修正を再検査し合格。

近似比較: R153, 元R493。

## R494 stone-pip-rating — pass

個々の楕円石と受けを全廃し、一体の石の列の下に尖頭アーチの実空隙を開けた。上の同じ石面へ星を置き、左右12pxの柱と隣の石の連続面で支持する。暗背景でも全層が抜け、狭幅の複数行で同じ断面を保つ。R479の石＋楕円受け、R394の石階段の反復ではない。

近似比較: R479, R491, R394。

## R495 ledger-mark-rating — pass

横の矩形セルと片側綴じを廃止。全ての紙葉が同じ下端の根元へ長く戻り、28×42pxの綴じへ入る扇形へ再設計した。84×50pxの自由端を56pxごとに露出させ、実星と実順位を同じ平面に固定する。2〜10枚、LTR/RTLと狭幅でも全ての根元が一致し、R391の縦の背に独立横札を並べる構成とは異なる。

近似比較: R391, R495原版, R401。

## 検証範囲

- 固定round5 source100 SHA256全一致、portable CSS10全一致（import文のみ除外）。captures/reviewer-hashes-5.json。83ファイル不変、うちavatars50ファイル全てround4と同一。
- 依頼文のsource-hashes-5.jsonという別名のファイルは作成せず、実在するreview-input-5.jsonのsourceHashes100件を照合に使用した。
- 独立actual portable ratings5の全native protocol成功、pageerrors=[]。Home/End/ArrowRight/Space、実radio確定、hover/legend解除、clear、controlled拒否/受入、readOnly native checked、disabled、required/clearable、FormData/reset、構造更新focus、destroy後不動作、forced/reduced。reviewer-ratings-5/checks.json。
- 5×最大数2/3/5/10×1000/320×LTRRTL＝80条件を実操作・撮影。通常hover100ms→legend→再hover→最終rank確定で星/native hit/fontのroot相対座標不変。10段階長文320/390/768×LTRRTLの30条件も再確認。
- 全5でvalue2→hover5→readOnly/disabledへ切替えた後preview0/filled2を確認。max5→2の更新直後もpreview0。固定export rating.jsでrender/paintより前にpreview=0を実行することを読了し、後のpointeroverによる偶然の解除と区別した。reviewer-rating-update-5/checks.json / reviewer-rating-states-5/checks.json。
- 全5のforced-colors active＋darkでCanvas黒/未選択stroke白を実測。選択星Highlightを保持。outputの文字Range順が2 / 10、direction隔離によりRTLで反転しない。reviewer-rating-dark-5/checks.jsonと画像。通常の明色forcedもnative protocolで撮影。
- 再設計3件×1000/320×LTRRTL×2/10段階＝24条件で背景を黒へ変え、ゲートの前後、尖頭アーチの真空隙、全葉の共通根元を撮影。reviewer-materials-5。背景変更は孔の検査目的であり、この画像の暗い見出しを通常UIの文字色不具合とは扱わない。
- avatars5はround4の実写真20条件/長名30条件/全native機能/通常hover/forced/reducedと造形判断を、不変source50hashに基づき継承。新たなavatar実行を行ったとは記録しない。
- shared-provenanceのrating.tsとtests/signature.browser.tsのafter2hashは現在の正本と一致。正本100hash外の共有修正として別途読解・固定export操作で確認。
- 主担当logs/react-ratings-5.logの5×4形式は全成功を確認。独立React再実行とは区別。主担当の追加強化assertの進行状況に依存せず、今回のdark/RTL/更新状態を独立再現した。

## 限界

- 独立React四形式再実行は行っていない。主担当の実形式ログを補助参照。
- avatars5の通常造形と実写真は不変hashでround4の評価を継承。
- 2〜10段階のうち追加の造形・normal-motion操作は2/3/5/10を抽出。全整数の全画面サイズの組合せを総当たりしたものではない。
