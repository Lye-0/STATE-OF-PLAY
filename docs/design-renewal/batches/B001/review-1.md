# B001 round 1 検査

**判定: changes_requested。4件pass、5件adjust、1件redesign。**

固定版 `snapshot/round-1/` を検査。`review-input-1.json` の正本100ファイルはSHA-256が全一致。実装ファイルは変更していない。

重大項目はR004/R014の逆ドラッグ、R006の接合未達、R011の開口の逆転、R010の終端状態の造形差、R021のAとしての構造と展示見出し。R021は本文安定を維持して外側を再設計する。名前の字義通りの再現や色の変更を合格条件にしていない。

## R004 concertina-latch-toggle — adjust

折り面の陰影と細い留め具は独立した造形になった。固定ラベルと接点の補助も有効。意匠を保ち、直接操作の向きを直す。

- **major / drag-direction**: 右へドラッグすると留め具が左へ動く。持ち手を押して引く操作と描画の向きが逆で、機構を直接操作する感覚が破綻する。 根拠: captures/reviewer/concertina-latch-toggle-drag-right.png、extra-checks.json: ポインター+40px、留め具transform -40px。 改善: この部品のドラッグ軸の符号を反転し、留め具が指に追従するようにする。クリックとキーボードのON/OFF意味は維持する。
- **minor / forced-colors-inactive-underline**: 非選択ONにも下線が現れる。通常表示のtransparent borderが強制色で可視化され、下線による選択の手掛かりが弱くなる。選択色とARIAは保たれており操作不能ではない。 根拠: captures/reviewer/forced.png。Chromium forced-colors:active、OFF時。 改善: 強制色では非選択側の線をborder-style:none等で確実に消す。文字位置と行高は固定する。

比較: R005 Curtain Track Toggle、R699 Paper Fan Fold Ornament。

## R005 curtain-track-toggle — pass

布の収束と明るい窓の開口がONに結び付き、レール・吊り点・左右の裾も読める。R004の一方向の蛇腹収縮とは異なる二枚の面の構成で、色違い量産には該当しない。

- **minor / forced-colors-inactive-underline**: 非選択ONにも下線が現れる。通常表示のtransparent borderが強制色で可視化され、下線による選択の手掛かりが弱くなる。選択色とARIAは保たれており操作不能ではない。 根拠: captures/reviewer/forced.png。Chromium forced-colors:active、OFF時。 改善: 強制色では非選択側の線をborder-style:none等で確実に消す。文字位置と行高は固定する。

比較: R004 Concertina Latch Toggle、R699 Paper Fan Fold Ornament。

## R006 screw-jack-toggle — adjust

八角形のナット、軸の刻み、銅の端子は材質と役割を分けられている。ただしONの到達点が設計記録と一致しない。

- **major / terminal-gap**: ONでもナットと銅端子の間に13pxの空きが残り、「ONで銅の端子へ届く」が成立しない。OFFとの差は移動量だけになり、完了時の接合が欠ける。 根拠: captures/reviewer/screw-jack-toggle-on.png。source/screw-jack-toggle/styles.css: ナットleft28+translate77+width42=右端147px、端子left160px。 改善: 移動終端か端子位置を合わせ、ナットと端子が接したONの輪郭を作る。接合部を太くするだけでなく軸・ナット・端子の接続を整える。
- **minor / forced-colors-inactive-underline**: 非選択ONにも下線が現れる。通常表示のtransparent borderが強制色で可視化され、下線による選択の手掛かりが弱くなる。選択色とARIAは保たれており操作不能ではない。 根拠: captures/reviewer/forced.png。Chromium forced-colors:active、OFF時。 改善: 強制色では非選択側の線をborder-style:none等で確実に消す。文字位置と行高は固定する。

比較: R237 Wheel Guide Range、R244 Caliper Jaw Range。

## R008 drawbridge-toggle — pass

支点から傾いた二枚の桁が水平に閉じ、中央の銅の継手へつながる。OFFの空隙とONの通路が明確で、固定目盛りを含めた操作の意味が伝わる。単なる矩形二枚から改善されている。

- **minor / forced-colors-inactive-underline**: 非選択ONにも下線が現れる。通常表示のtransparent borderが強制色で可視化され、下線による選択の手掛かりが弱くなる。選択色とARIAは保たれており操作不能ではない。 根拠: captures/reviewer/forced.png。Chromium forced-colors:active、OFF時。 改善: 強制色では非選択側の線をborder-style:none等で確実に消す。文字位置と行高は固定する。

比較: R029 Canal Bridge Panel、R232 Bridge Saddle Range。

## R009 capstan-toggle — pass

巻胴の太さ、ロープの出口、銅の回転印に階層があり、回転中も一つの機構として読める。ON/OFFは下の位置マーカーと固定文字で判別できる。R010と回転角は同じだが、張られたロープと輪郭・状態位置表示が異なるため重複とはしない。

- **minor / forced-colors-inactive-underline**: 非選択ONにも下線が現れる。通常表示のtransparent borderが強制色で可視化され、下線による選択の手掛かりが弱くなる。選択色とARIAは保たれており操作不能ではない。 根拠: captures/reviewer/forced.png。Chromium forced-colors:active、OFF時。 改善: 強制色では非選択側の線をborder-style:none等で確実に消す。文字位置と行高は固定する。

比較: R010 Anemometer Toggle、R343 Spool Dial Progress、R694 Rotary Gate Loader。

## R010 anemometer-toggle — adjust

カップの体積感は旧版より改善し、小さな線画が散る問題は軽減した。一方、二状態を持つAトグルとして終端の造形差が弱い。

- **major / endpoint-meaning**: 三回対称のローターを105度回した二状態は、見かけ上ほぼ15度ずれた同じ姿で止まる。中心と上の印は不変で、ON/OFFの機構的な違いが文字下線に集中する。これは好みの配色ではなくAの機能に結び付いた造形の弱さとして指摘する。 根拠: captures/reviewer/anemometer-toggle-off.png / -on.png、extra-checks.json通常切替。source: 三本腕は120度間隔、切替は105度回転。 改善: ローターは残し、例えば固定子との係合・解除など、OFFとONで分かる固有の終端構造を一つ作る。カップを大きくする、回転角だけ増やす、常時回転させるだけの対応は避ける。
- **minor / forced-colors-inactive-underline**: 非選択ONにも下線が現れる。通常表示のtransparent borderが強制色で可視化され、下線による選択の手掛かりが弱くなる。選択色とARIAは保たれており操作不能ではない。 根拠: captures/reviewer/forced.png。Chromium forced-colors:active、OFF時。 改善: 強制色では非選択側の線をborder-style:none等で確実に消す。文字位置と行高は固定する。

比較: R009 Capstan Toggle、R712 Pinwheel Notches Loader、R718 Column Charge Loader。

## R011 raster-reveal-toggle — adjust

半周期ずらす格子の構想は独立しているが、結果が設計説明と逆で、旧指摘の灰色ベタ面も残る。

- **major / aperture-inverted**: OFFで明るい縞が見え、ONで暗い層が明るい部分を覆ってほぼ全面が暗くなる。「ONの明るい開口」になっていない。ONは単なる灰色の横長板に見え、格子機構の見せ場を失う。 根拠: captures/reviewer/raster-reveal-toggle-off.png / -on.png。sourceのx-bedは明暗4px、x-pieceは透明/暗4pxでON時4px移動。 改善: 二枚の格子の位相と背面の明るい層を組み直し、ONで明るい開口が出るようにする。端の格子や薄い面の重なりを残し、単色ベタへ消失させない。
- **minor / forced-colors-inactive-underline**: 非選択ONにも下線が現れる。通常表示のtransparent borderが強制色で可視化され、下線による選択の手掛かりが弱くなる。選択色とARIAは保たれており操作不能ではない。 根拠: captures/reviewer/forced.png。Chromium forced-colors:active、OFF時。 改善: 強制色では非選択側の線をborder-style:none等で確実に消す。文字位置と行高は固定する。

比較: R004 Concertina Latch Toggle、R699 Paper Fan Fold Ornament。

## R013 comb-contact-toggle — pass

交互の高さに置かれた銅と銀の歯が閉じる姿は、旧版の罫線より一つの接点として読める。薄い支持面を残しつつ歯の端部を主役にできている。R691の吊られた金属板とは用途に対応した形が異なる。

- **minor / forced-colors-inactive-underline**: 非選択ONにも下線が現れる。通常表示のtransparent borderが強制色で可視化され、下線による選択の手掛かりが弱くなる。選択色とARIAは保たれており操作不能ではない。 根拠: captures/reviewer/forced.png。Chromium forced-colors:active、OFF時。 改善: 強制色では非選択側の線をborder-style:none等で確実に消す。文字位置と行高は固定する。

比較: R691 Kinetic Comb Ornament、R008 Drawbridge Toggle。

## R014 compartment-toggle — adjust

戸が退いて明るい右室を出す終端は、固定された右ONと整合する。旧版の意味の曖昧さは改善。ドラッグの直接操作は逆向き。

- **major / drag-direction**: 戸を右へ引くと戸が左へ移動する。クリック時は意味が通るが、指への逆追従が小室の開閉機構と矛盾する。 根拠: captures/reviewer/compartment-toggle-drag-right.png、extra-checks.json: ポインター+40px、戸transform -40px。 改善: 戸の実移動に合わせてドラッグ方向を反転する。開いた右室と固定ONの意味は保ち、左ドラッグで開き、右ドラッグで閉じる。
- **minor / forced-colors-inactive-underline**: 非選択ONにも下線が現れる。通常表示のtransparent borderが強制色で可視化され、下線による選択の手掛かりが弱くなる。選択色とARIAは保たれており操作不能ではない。 根拠: captures/reviewer/forced.png。Chromium forced-colors:active、OFF時。 改善: 強制色では非選択側の線をborder-style:none等で確実に消す。文字位置と行高は固定する。

比較: R002 Periscope Toggle、R018 Vertical Sleeve Toggle。

## R021 bookcloth-case — redesign

読む面の位置・明度を固定した改善は正しい。ただし現版の特徴は左の太い色帯と下端数pxに縮まり、Aとしての独立した構造が不足する。

- **major / cover-structure**: 実体は一般的な明るい矩形カードに背の色帯と細い紙束を足した構成。ホバー変化は4px高の下端の約0.5pxの歪みで、「表紙の外縁が開く」と視認できる構造ではない。R026/R035や他カテゴリの製本線付き面との差が細部に留まる。 根拠: captures/reviewer/bookcloth-case-off.png / -hover.png、source/bookcloth-case/styles.css。14pxの左border、4px高のafterをskewX(-7deg)。 改善: 固定本文面を残し、その外に表紙・綴じの関節・紙束の関係が読める非対称の輪郭を作る。外縁が開くなら、本文を遮らない外側の表紙面が実際に動く構成へ再設計する。装飾線の追加や背の色変更だけで済ませない。
- **major / gallery-heading-contrast**: 展示の見出し「idea.」だけが淡黄緑で、明るい本文紙面上で極端に薄い。本文面を明るくした変更に、展示内の強調文字色が追従していない。独立版の単色見出しとの差もある。 根拠: 提供された固定画像 captures/photos/bookcloth-case-stage.png / bookcloth-case-narrow.png。独立版captures/reviewer/bookcloth-case-off.pngとの比較。 改善: この紙面上の強調文字に十分暗いインク色を適用し、展示・詳細・配布の推奨本文を揃える。本文面を暗くして逃げない。

比較: R026 Archival Channel、R035 Terraced Paper Panel、R255 Folio Spine Choice、R475 Bookplate Profile。

## 実施した検査

- UI-DIRECTION.md、design-renewal/README.md、B001/design.md、review-input-1.jsonを読了。正本コピー100ファイルのSHA-256を照合し全一致。
- 固定版portable native JSをVite+Chromiumで独立起動。全9トグルを通常モーションでクリック、Space、Enter操作。即時aria-checked更新、固定ラベル・hit areaの座標一致、ページエラー0を確認（captures/reviewer/checks.json）。
- 全9トグルの切替100ms後に逆切替し、中間transformを実測。連続した補間を確認（extra-checks.json）。全10件でhover→leave→途中reenterを実行。R021はhover画像と疑似要素構造を照合。
- 320pxで全10件の操作後を撮影、document scrollWidth=clientWidth=320。R021へ長い日本語見出し・長い英数字本文を投入して横overflow=0。
- reduced-motionで全9トグルを操作しtransition-duration=0sを確認。forced-colorsを実描画し選択ラベル・外枠を確認。
- R004/R014を右40pxドラッグし持ち手/戸の左40px逆追従を再現・撮影。
- 提供されたstage/narrow画像と独立OFF/ON画像、全10件のCSS・markup・配布controllerを照合。
- baseline.jsonの730件から構造・機構の近似候補を検索。toggles/blocks/loaders/slidersカテゴリ画像、およびR255/R343/R475/R691/R699の個別画像でカテゴリ内外を比較。色違いだけの直接重複は断定しないがR021の構造差不足を記録。

## 限界

- 全730件の操作再現や全画像の等倍率精査はしていない。比較は全件メタデータ検索と近似候補の画像精査。
- React/StrictMode/複数配置/全配布形式はメインの既存検証記録を参照し、本検査では固定native JSのUI操作を独立確認。
- ブラウザはheadless Chromium。実機タッチ、OS実装の高コントラスト、スクリーンリーダー読み上げは未実施。
- R021展示見出しの薄さは提供された固定画像に基づく。作業中のギャラリーは検査対象にしていない。

再検査では重要項目の解消と回帰のみ確認し、合格済みの独自性を新しい好みによって覆さない。強制色の下線は9件共通の軽微な指摘で、通常表示で合格した造形の再設計を求めるものではない。
