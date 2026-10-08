# B002 round 1 検査

**4件pass、2件adjust、4件redesign。overall: changes_requested。**

本文の安定、埋込みボタン操作、reduced motionは良好。一方、R032で狭幅長文の横スクロール、R033で割合角丸による見出しの背景外への逸脱を確認した。AとしてはR026/R028/R034の汎用カードとの差、R032と既存R030の回転下板の反復が重大。R025もR034との対角三角面の反復を調整する。

固定版正本100ファイルのSHA-256と、portable native CSS10件の一致を確認した。`contact-stage.jpg` は更新前の形が残るため採点せず、最新の個別photosと固定版を使用した。

## R022 suspension-sheet — pass

上の二つの吊り点、紙の下端の切欠き、下の空間が一つの支持構造として読める。本文面を水平に保ったまま背後の距離を動かせている。細い要素でも接続と輪郭が成立しており、一般的な枠付きカードとは区別できる。

- **minor / gallery-heading-font**: 素材に合わせた見出し書体がギャラリーの「idea.」へ揃っておらず、この語だけセリフ体のまま。独立native版の一貫した見出しと異なる。 根拠: photos/suspension-sheet-stage.png と captures/reviewer/suspension-sheet-base.png。 改善: 部品側または展示側でh3内の強調語のfont-family・font-weight等の継承を揃える。本文を書き換えず、同じ文字階層に同じ書体を適用する。

近似比較: R029 Canal Bridge Panel、R709 Suspended Pennants Ornament。

## R025 basalt-cutout — adjust

太い切断面と暗い本文の階層は改善したが、造形の主役が対角二隅の三角面になり、R034の折れ角を拡大した構図に近い。左の割れ端も輪郭ではなく帯の模様に留まる。

- **major / diagonal-corner-repetition**: R025/R034とも右上を斜めに切って三角面を置き、左下も斜めに落とす輪郭を共有している。違いが三角形の大きさと明暗に寄る。R025の左の「割れ端」は真っ直ぐな外周の内側に描いた帯で、独立した輪郭差として効いていない。石の名前を字義通り再現することではなく、二作品の形の独立性が問題。 根拠: captures/reviewer/basalt-cutout-base.pngとterminal-foil-base.png、最新photos/basalt-cutout-stage.png。sourceのroot clip-pathとi:nth-child(1..3)。 改善: R025は左外周の実際の非対称な欠けと、長さ・傾斜の異なる切断面を主構造にする。右上の折れ紙型三角だけに頼らず、読む面に侵入しない範囲で外周自体を分ける。暗い固定本文の読みやすさは維持する。
- **minor / gallery-heading-font**: 素材に合わせた見出し書体がギャラリーの「idea.」へ揃っておらず、この語だけセリフ体のまま。独立native版の一貫した見出しと異なる。 根拠: photos/basalt-cutout-stage.png と captures/reviewer/basalt-cutout-base.png。 改善: 部品側または展示側でh3内の強調語のfont-family・font-weight等の継承を揃える。本文を書き換えず、同じ文字階層に同じ書体を適用する。

近似比較: R034 Terminal Foil、R030 Offset Diecut、R012 Balance Stone Toggle。

## R026 archival-channel — redesign

本文は安定して読みやすいが、現状の外装は濃い枠に細い縦線と小札を足した内嵌めカードの範囲。Aとして挿入される紙と収納溝の関係が弱い。

- **major / channel-structure**: 左右ガイドは紙面に接続する保持部として見えず、外枠の装飾線に見える。hoverで札が3px出るだけでは、一般的な額縁付きカードとの差を担えない。B向けの整った枠をAの合格根拠にはできない。 根拠: captures/reviewer/archival-channel-base.png / -hover.png、photos/archival-channel-stage.png。外側padding9px 12px 14px、左右ガイド幅3px、札高さ7px。 改善: 枠の全周反復をやめ、紙を保持する溝の開口・紙との重なり・下の受けの関係が分かる構成へ再設計する。例えば片側に露出した差込み口と紙の端を跨ぐ保持部を置き、紙面とケースの異なる輪郭を作る。本文は固定する。

近似比較: R021 Bookcloth Case（B001 round-3）、R355 Archive Pocket Upload、R037 Compact Note Panel。

## R028 print-registration-board — redesign

紙面と細かな目盛りは端正。ただし印刷位置の主題が1pxのトンボと小さな色印に集中し、通常の白い矩形カードを超えるAの固有構造が不足する。

- **major / registration-structure**: 主面は完全な矩形で、二つのトンボは暗い背景上で沈む。下の小さな目盛りと色印を加えても、紙と版の見当関係を表す構造ではなく周辺の線飾りに留まる。 根拠: captures/reviewer/print-registration-board-base.png / -hover.png、photos/print-registration-board-stage.png。トンボ17px、線1px、hover移動2px。 改善: 紙と位置基準が別の物として読める構造を作る。例えば欄外の登録穴とピン、段違いの版端、位置合わせの受けなどから一つの機構を選び、本文の外で整合する形にまとめる。トンボの太線化や色印の大型化だけで終えない。
- **minor / gallery-heading-font**: 素材に合わせた見出し書体がギャラリーの「idea.」へ揃っておらず、この語だけセリフ体のまま。独立native版の一貫した見出しと異なる。 根拠: photos/print-registration-board-stage.png と captures/reviewer/print-registration-board-base.png。 改善: 部品側または展示側でh3内の強調語のfont-family・font-weight等の継承を揃える。本文を書き換えず、同じ文字階層に同じ書体を適用する。

近似比較: R032 Pivot Corner Case、R039 Thin Frame Sheet、R030 Offset Diecut。

## R029 canal-bridge-panel — pass

固定した本文の天板、下の二つの支持脚、中央の開口と低い水面が別々に読める。空いた下端が輪郭の違いを作り、一般的な箱から離れている。B001 R008と橋の主題を共有するが、開閉する桁ではなく荷重を支える容器の構造なので意匠の横展開とはしない。


近似比較: R008 Drawbridge Toggle（B001）、R022 Suspension Sheet、R232 Bridge Saddle Range。

## R031 woven-mat-panel — pass

広い左の織り帯と下の房を露出し、固定紙面を上へずらした関係が明確。旧版の細い縁飾りから、別の敷物が本文を受ける形へ改善した。B001 R021の独立表紙とは接続・面・素材の役割が異なる。


近似比較: R021 Bookcloth Case（B001 round-3）、R096 Loom Border Accordion、R218 Gallery Mat Dialog。

## R032 pivot-corner-case — redesign

固定本文と動く受けを分離した点は良いが、長文での横スクロールが再現する。また既存R030の「固定本文の背後で一枚の板が回る」構成と近く、円軸二つだけでは独立性が足りない。

- **major / long-content-overflow**: 左上付近を中心に背板全体を-5度回すため、高さが増すほど右への張り出しが増え、48pxの横スクロールが発生する。短文320pxでは再現しないが、コンテンツ量に依存する容器として破綻する。 根拠: captures/reviewer/pivot-corner-case-long.png、checks.json。画面320px、長い日本語見出し・本文を入れてhoverするとdocument.scrollWidth=368px。 改善: 内容の高さに比例して張り出さない機構へ変える。例えば固定寸法の隅の保持アームだけを回し、描画範囲をコンポーネント内の確保した余白に収める。ページ全体のoverflow-x:hiddenで隠さない。
- **major / rotating-underlay-duplication**: R030と同じく、水平な矩形本文の周りへ色付きの回転下板を露出する構成。R032の差は小さな円二個、欠ける角、色と回転量に寄り、別のA作品として支持機構を主役にできていない。 根拠: captures/reviewer/pivot-corner-case-base.png / -hover.png、evidence/baseline/offset-diecut-stage.png。既存R030のCSSも固定本文の背面板をrotate(-4deg)→rotate(3deg)。 改善: 一枚の回転下板から離れ、軸が保持する独立した隅の部材など、回転がどこへ作用するか読める構造へ再設計する。軸と保持面の接続を造形の中心に据え、R030の下板回転を別色で繰り返さない。
- **minor / gallery-heading-font**: 素材に合わせた見出し書体がギャラリーの「idea.」へ揃っておらず、この語だけセリフ体のまま。独立native版の一貫した見出しと異なる。 根拠: photos/pivot-corner-case-stage.png と captures/reviewer/pivot-corner-case-base.png。 改善: 部品側または展示側でh3内の強調語のfont-family・font-weight等の継承を揃える。本文を書き換えず、同じ文字階層に同じ書体を適用する。

近似比較: R030 Offset Diecut、R022 Suspension Sheet、R028 Print Registration Board。

## R033 contoured-cork-panel — adjust

通常サイズでは非対称な曲率と薄い端が一体の柔らかな面を作り、旧版の厚いプラスチック状の縁より整理された。通常造形をやり直す必要はないが、長文時の面と本文の関係を直す必要がある。

- **major / percentage-radius-text-background**: 縦の角丸が面の高さに比例して拡大し、左上の背景境界が見出し左端より内側へ入り込む。画像では見出し冒頭の文字が暗い外側背景にかかる。テキストにoverflowがなくても、読む面を維持できていない。 根拠: captures/reviewer/cork-long-top.png、extra-checks.json。320px、本文を約1150字とした高さ2199.375pxの面。左上radius31% 13%、見出しはx79/y32。 改善: 角丸の縦半径を固定値または上限付きclampにして、内容の高さに関係なく本文のpadding内へ侵入させない。通常時の非対称曲線を保ち、長文だけ文字を小さくする対応は避ける。

近似比較: R023 Coved Ceramic Panel、R027 Seamless Saddle、R012 Balance Stone Toggle。

## R034 terminal-foil — redesign

本文のマットな平面と小さな反射は読みやすい。ただし8pxの周辺処理と折れ角以外は通常の文書カードで、Aとして薄い金属の独立した構造が不足する。

- **major / foil-structure**: 左と下のグラデーションが二重枠に見え、右上の三角は一般的な折れ紙アイコンと同型。hoverも欄外1pxの反射移動のみで、主たる形は汎用矩形のまま。R025と同じ対角切りの組合せも独立性を弱める。 根拠: captures/reviewer/terminal-foil-base.png / -hover.png、photos/terminal-foil-stage.png。左折返しと下巻き端は8px、上反射は高さ1px、右上三角は18px。 改善: 薄い面が巻かれる・折り戻される関係を、本文の外で識別できる立体輪郭として再設計する。例えば一辺に露出した巻き断面とそれにつながる薄い返し面を作り、読む平面との厚み差を一つの素材にまとめる。太い金属枠やグラデーション追加だけでは解消しない。
- **minor / gallery-heading-font**: 素材に合わせた見出し書体がギャラリーの「idea.」へ揃っておらず、この語だけセリフ体のまま。独立native版の一貫した見出しと異なる。 根拠: photos/terminal-foil-stage.png と captures/reviewer/terminal-foil-base.png。 改善: 部品側または展示側でh3内の強調語のfont-family・font-weight等の継承を揃える。本文を書き換えず、同じ文字階層に同じ書体を適用する。

近似比較: R025 Basalt Cutout、R122 Folded Margin Entry、R030 Offset Diecut。

## R035 terraced-paper-panel — pass

長さの異なる三枚が左下へ段階的に現れ、外側に非対称な段を作っている。単なる数pxの紙束を超え、R021の製本面・R032の回転下板とは異なる平行移動の構造が成立。本文の安定と狭幅も維持する。


近似比較: R021 Bookcloth Case（B001 round-3）、R030 Offset Diecut、R032 Pivot Corner Case。

## 実施した検査

- UI-DIRECTION.md、design-renewal/README.mdの固定基準を継続適用。B002/design.md、review-input-1.json、全10件の固定CSS・markup・native controllerを参照。
- 正本コピー100ファイルのSHA-256全一致。portable native JSの全10件のstyles.cssは固定正本とbyte一致。
- Vite+Chromiumで固定native画面を起動し、全10件を通常モーションでhover→120ms→leave→100ms→reenter。中間transform/background-positionを採取し、初期・hover・狭幅画像を保存。
- 全10件の本文見出しの部品内相対座標・幅・高さがhover再進入前後で一致。初回のviewport座標差はスクロールの影響だったため、extra-checks.jsonで相対座標を再測定。
- 320pxで短文全件はscrollWidth=320。全10件に長い日本語見出し・本文・英数字を投入。R032のみscrollWidth=368。R033は追加の長文高さで見出しが背景面から外れることを撮影確認。
- 全10件へ確認用のbuttonを内容として挿入しfocus-visibleのsolid outline、中心座標のhit test、Enterによる操作を確認。装飾による操作の妨害なし。
- 全10件のreduced-motion時の装飾transition-durationはすべて0s。forced-colorsを実描画し本文・枠・装飾の退避を確認。ページエラー0。
- B001合格10件の固定記録・画像、とくにR008/R021を比較。baseline.jsonの全730件から近似主題・構造を検索し、blocks一覧とR096/R122/R218/R355/R709等の個別画像、R030の回転構造を比較。
- ギャラリーの最新個別photosとnative版を照合。contact-stage.jpgは一部に更新前の形が残るため、判定の正本にしない。

追加証拠は`captures/reviewer/`。検査スクリプトは`tools/review-b002.mjs`と`tools/review-b002-extra.mjs`。実装は編集していない。

## 限界

- 全730件の画像等倍率精査・全操作の再実行ではなく、全件メタデータ検索と近似候補の画像・実装比較。
- 全配布形式・React StrictMode・複数配置の実行はメインの検証範囲。本検査は固定portable native JSとCSS一致を独立確認。
- 実機タッチ、OS実高コントラスト、スクリーンリーダー読み上げは未検証。
- B002のcontact-stage.jpgは固定版より古い部分がある。最新個別photosと固定snapshotに基づき判断。

再検査は上記の重大指摘の解消と回帰を確認する。合格したR022/R029/R031/R035に対して、別の好みを追加して造形をやり直すことは求めない。
