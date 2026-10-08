# B006 round 1 — changes_requested

8 adjust / 2 redesign。通常造形単独は7 pass / 1 adjust / 2 redesign。全10件でforced-colorsの＋/−が消えるため最終合格には未到達。通常造形合格の7件には追加の意匠変更を要求しない。

## 個別判定

### R091 gusset-file-accordion — adjust（通常造形 adjust）

開いた六つの交互の折り面は紙の厚みとして読めるが、閉状態で各面が離れた細線に縮退し、連続するマチとしての接合が失われる。

最寄比較: R004, R076, R093。

- **major / R091-forced-open-sign**: forced-colorsで＋/−の背景描画がCanvasへ置換され、開閉記号が両状態で消える。本文とARIAは保たれるが、視覚的な操作の手掛かりと状態表示を失う。既存probeは装飾を隠すことしか検査せず、この欠落を検出できない。
- 根拠: captures/reviewer-1/gusset-file-accordion-forced-short.pngと-forced.png。forced-checks.jsonで開/閉ともsign文字色rgb(0,0,0)に対し::before背景rgb(255,255,255)、幅12px/高さ1px。shared accordion-base.cssの線はbackground:currentColor。
- 改善: forced時の線をborder等のシステム色で描くか、適切に限定したforced-color-adjustとButtonTextで記号を保持する。開/閉の実画像で＋/−が区別できることを確認し、単なるcomputed color比較ではなく線の実描画も検査する。

- **major / R091-gusset-continuity**: 閉じると六つの折り面が分離した縦線となる。開閉中も隣接端が離れ、同じ一枚のマチが畳まれる関係にならない。通常の細い縞から脱するという設計意図に対し、閉じた状態では縞に戻る。
- 根拠: gusset-file-accordion-closed-detail.png/open-detail.png、extra-checks.json。closed各面のx=4,9,14,19,24,29px、幅1.75px。隣接面の間に3.25px空隙。各面のleftは固定、scaleX(.35→1)だけが変わる。
- 改善: 折り山を共有する連続面として幅と隣接位置を連動させる。閉じる時も端同士を接続させ、必要なら折り面を紙の下へ畳み込む。読む面/hitを固定したまま、背景に隙間が開く六本線への変化をなくす。

### R092 monument-panel-accordion — adjust（通常造形 pass）

上の磨いた切断面、右の側面、下の台座が一体の石の厚みを作る。R025の割れた外周やR079の凹んだ棚と異なる正面/側面の関係。 通常造形は合格、残件は共通forced記号。

最寄比較: R025, R079, R097。

- **major / R092-forced-open-sign**: forced-colorsで＋/−の背景描画がCanvasへ置換され、開閉記号が両状態で消える。本文とARIAは保たれるが、視覚的な操作の手掛かりと状態表示を失う。既存probeは装飾を隠すことしか検査せず、この欠落を検出できない。
- 根拠: captures/reviewer-1/monument-panel-accordion-forced-short.pngと-forced.png。forced-checks.jsonで開/閉ともsign文字色rgb(0,0,0)に対し::before背景rgb(255,255,255)、幅12px/高さ1px。shared accordion-base.cssの線はbackground:currentColor。
- 改善: forced時の線をborder等のシステム色で描くか、適切に限定したforced-color-adjustとButtonTextで記号を保持する。開/閉の実画像で＋/−が区別できることを確認し、単なるcomputed color比較ではなく線の実描画も検査する。

### R093 sail-pocket-accordion — adjust（通常造形 pass）

孔とロープ、斜めの帆布のマチ、縫い線と浅い袋底が接続する。六枚の紙蛇腹や通常の折り袋と、素材・支持方法を分けている。 通常造形は合格、残件は共通forced記号。

最寄比較: R078, R082, R091。

- **major / R093-forced-open-sign**: forced-colorsで＋/−の背景描画がCanvasへ置換され、開閉記号が両状態で消える。本文とARIAは保たれるが、視覚的な操作の手掛かりと状態表示を失う。既存probeは装飾を隠すことしか検査せず、この欠落を検出できない。
- 根拠: captures/reviewer-1/sail-pocket-accordion-forced-short.pngと-forced.png。forced-checks.jsonで開/閉ともsign文字色rgb(0,0,0)に対し::before背景rgb(255,255,255)、幅12px/高さ1px。shared accordion-base.cssの線はbackground:currentColor。
- 改善: forced時の線をborder等のシステム色で描くか、適切に限定したforced-color-adjustとButtonTextで記号を保持する。開/閉の実画像で＋/−が区別できることを確認し、単なるcomputed color比較ではなく線の実描画も検査する。

### R094 gallery-slip-accordion — adjust（通常造形 pass）

透明な上の押さえが紙をまたぎ、下の広い受け溝へ札が差し込まれる。R026の下端チャンネル、R028の登録ピンとの近さはあるが、透ける押さえの緩みと下の受けの役割を一体化し、外形にも差がある。 通常造形は合格、残件は共通forced記号。

最寄比較: R026, R028, R086。

- **major / R094-forced-open-sign**: forced-colorsで＋/−の背景描画がCanvasへ置換され、開閉記号が両状態で消える。本文とARIAは保たれるが、視覚的な操作の手掛かりと状態表示を失う。既存probeは装飾を隠すことしか検査せず、この欠落を検出できない。
- 根拠: captures/reviewer-1/gallery-slip-accordion-forced-short.pngと-forced.png。forced-checks.jsonで開/閉ともsign文字色rgb(0,0,0)に対し::before背景rgb(255,255,255)、幅12px/高さ1px。shared accordion-base.cssの線はbackground:currentColor。
- 改善: forced時の線をborder等のシステム色で描くか、適切に限定したforced-color-adjustとButtonTextで記号を保持する。開/閉の実画像で＋/−が区別できることを確認し、単なるcomputed color比較ではなく線の実描画も検査する。

### R095 metal-slot-accordion — adjust（通常造形 pass）

金属ヘッドの下の暗い口から紙が展開し、両側のガイドに収まる。見出しと本文を別素材として読め、紙の保持と開閉の関係が明確。 通常造形は合格、残件は共通forced記号。

最寄比較: R026, R094, R100。

- **major / R095-forced-open-sign**: forced-colorsで＋/−の背景描画がCanvasへ置換され、開閉記号が両状態で消える。本文とARIAは保たれるが、視覚的な操作の手掛かりと状態表示を失う。既存probeは装飾を隠すことしか検査せず、この欠落を検出できない。
- 根拠: captures/reviewer-1/metal-slot-accordion-forced-short.pngと-forced.png。forced-checks.jsonで開/閉ともsign文字色rgb(0,0,0)に対し::before背景rgb(255,255,255)、幅12px/高さ1px。shared accordion-base.cssの線はbackground:currentColor。
- 改善: forced時の線をborder等のシステム色で描くか、適切に限定したforced-color-adjustとButtonTextで記号を保持する。開/閉の実画像で＋/−が区別できることを確認し、単なるcomputed color比較ではなく線の実描画も検査する。

### R096 loom-border-accordion — redesign（通常造形 redesign）

織りの交差は以前より見えるが、織り帯の上へ淡色平板を置く構成がR031に近い。±1pxの糸の移動以外に開閉との固有の関係が弱い。

最寄比較: R031, R082, R091。

- **major / R096-forced-open-sign**: forced-colorsで＋/−の背景描画がCanvasへ置換され、開閉記号が両状態で消える。本文とARIAは保たれるが、視覚的な操作の手掛かりと状態表示を失う。既存probeは装飾を隠すことしか検査せず、この欠落を検出できない。
- 根拠: captures/reviewer-1/loom-border-accordion-forced-short.pngと-forced.png。forced-checks.jsonで開/閉ともsign文字色rgb(0,0,0)に対し::before背景rgb(255,255,255)、幅12px/高さ1px。shared accordion-base.cssの線はbackground:currentColor。
- 改善: forced時の線をborder等のシステム色で描くか、適切に限定したforced-color-adjustとButtonTextで記号を保持する。開/閉の実画像で＋/−が区別できることを確認し、単なるcomputed color比較ではなく線の実描画も検査する。

- **major / R096-woven-support-duplication**: R031の織りマットが紙の左/下から見える構成を、左帯だけへ縮めた印象が強い。織り模様の拡大や僅かな糸の位置差は改善でも、Aの別案を担う新しい接続/機構ではない。
- 根拠: loom-border-accordion-closed-detail.png/open-detail.png。B002/captures/reviewer-round2/woven-mat-panel-base.png。約30pxの織り領域とその右の淡色平板、開時の外糸translateX(-1px/+1px)。
- 改善: 織りの模様を敷く構成から、糸が固定見出しと展開本文を接続する機構へ変える。例えば独立した織り止めの間に渡る糸が、開閉で張る/畳まれる関係を作る。平板の背後の織り縁を色・幅だけ変える改善ではなく、固定点と可動点を明確にする。

### R097 topographic-step-accordion — redesign（通常造形 redesign）

段差は見えるようになったが、ずらした色面を積む構造がR035を反復する。中段の2px移動だけでは地形を用いた別の開閉構造に届かない。

最寄比較: R035, R033, R092。

- **major / R097-forced-open-sign**: forced-colorsで＋/−の背景描画がCanvasへ置換され、開閉記号が両状態で消える。本文とARIAは保たれるが、視覚的な操作の手掛かりと状態表示を失う。既存probeは装飾を隠すことしか検査せず、この欠落を検出できない。
- 根拠: captures/reviewer-1/topographic-step-accordion-forced-short.pngと-forced.png。forced-checks.jsonで開/閉ともsign文字色rgb(0,0,0)に対し::before背景rgb(255,255,255)、幅12px/高さ1px。shared accordion-base.cssの線はbackground:currentColor。
- 改善: forced時の線をborder等のシステム色で描くか、適切に限定したforced-color-adjustとButtonTextで記号を保持する。開/閉の実画像で＋/−が区別できることを確認し、単なるcomputed color比較ではなく線の実描画も検査する。

- **major / R097-stacked-plane-duplication**: R035と同じ、左へずらした複数の平面と切った角で段丘を示す構成。青灰への色変更・左右の斜辺・2px移動では、独立したAの機能/形としての差が足りない。
- 根拠: topographic-step-accordion-closed-detail.png/open-detail.pngとB002/captures/reviewer-round2/terraced-paper-panel-base.png。固有art1〜4はinsetをずらした平面、開時の差は中段translateX(2px)。
- 改善: 均一な平面の積層から離れ、一体の地形の切断面/溝/張り出し等で本文の展開場所を作る。例えば固定した上の稜と下の支持の間に、開く量に対応する断面を露出する。色の層を一段追加する方法や大きい本文移動は避ける。

### R098 spool-notes-accordion — adjust（通常造形 pass）

上下の巻き枠・縦の糸・紙へ接続する留めが一つの支持系として見える。R063の軸方向の巻き筒とは、円の配置と紙への接続が異なる。 通常造形は合格、残件は共通forced記号。

最寄比較: R063, R076, R172。

- **major / R098-forced-open-sign**: forced-colorsで＋/−の背景描画がCanvasへ置換され、開閉記号が両状態で消える。本文とARIAは保たれるが、視覚的な操作の手掛かりと状態表示を失う。既存probeは装飾を隠すことしか検査せず、この欠落を検出できない。
- 根拠: captures/reviewer-1/spool-notes-accordion-forced-short.pngと-forced.png。forced-checks.jsonで開/閉ともsign文字色rgb(0,0,0)に対し::before背景rgb(255,255,255)、幅12px/高さ1px。shared accordion-base.cssの線はbackground:currentColor。
- 改善: forced時の線をborder等のシステム色で描くか、適切に限定したforced-color-adjustとButtonTextで記号を保持する。開/閉の実画像で＋/−が区別できることを確認し、単なるcomputed color比較ではなく線の実描画も検査する。

### R099 cradle-fold-accordion — adjust（通常造形 pass）

台を二つの折り足と固定の接地線で受ける関係が明快。展開時は足の幅が変わり、読む面を動かさない。中央V字R052と支持位置/外形が異なる。 通常造形は合格、残件は共通forced記号。

最寄比較: R029, R052, R051。

- **major / R099-forced-open-sign**: forced-colorsで＋/−の背景描画がCanvasへ置換され、開閉記号が両状態で消える。本文とARIAは保たれるが、視覚的な操作の手掛かりと状態表示を失う。既存probeは装飾を隠すことしか検査せず、この欠落を検出できない。
- 根拠: captures/reviewer-1/cradle-fold-accordion-forced-short.pngと-forced.png。forced-checks.jsonで開/閉ともsign文字色rgb(0,0,0)に対し::before背景rgb(255,255,255)、幅12px/高さ1px。shared accordion-base.cssの線はbackground:currentColor。
- 改善: forced時の線をborder等のシステム色で描くか、適切に限定したforced-color-adjustとButtonTextで記号を保持する。開/閉の実画像で＋/−が区別できることを確認し、単なるcomputed color比較ではなく線の実描画も検査する。

### R100 hatch-divider-accordion — adjust（通常造形 pass）

八角の枠と内側ガスケット、右二つの蝶番、左の軸付き回転留めが役割を分ける。R042/R048の左右対称金具とは異なる開閉の構成。 通常造形は合格、残件は共通forced記号。

最寄比較: R042, R048, R053。

- **major / R100-forced-open-sign**: forced-colorsで＋/−の背景描画がCanvasへ置換され、開閉記号が両状態で消える。本文とARIAは保たれるが、視覚的な操作の手掛かりと状態表示を失う。既存probeは装飾を隠すことしか検査せず、この欠落を検出できない。
- 根拠: captures/reviewer-1/hatch-divider-accordion-forced-short.pngと-forced.png。forced-checks.jsonで開/閉ともsign文字色rgb(0,0,0)に対し::before背景rgb(255,255,255)、幅12px/高さ1px。shared accordion-base.cssの線はbackground:currentColor。
- 改善: forced時の線をborder等のシステム色で描くか、適切に限定したforced-color-adjustとButtonTextで記号を保持する。開/閉の実画像で＋/−が区別できることを確認し、単なるcomputed color比較ではなく線の実描画も検査する。

## 実施検査

- review-input-1のsourceHashes100件一致。10件のsource/native CSSはimportを除き一致。独立検査は固定portable nativeで実施。
- Chromium /usr/bin/chromium/Viteで10件を操作。Space/Enter、ArrowDown/Home/End、即時aria-expanded/aria-hidden/inert、単一開閉を確認。
- 開閉110ms/80msで急反転し最終状態を確認。見出し相対矩形は開閉で不変。閉/開のart矩形・transform/background/clipをextra-checks.jsonへ記録。hover/leave/reenterも操作。
- 320pxに長い日本語＋空白なし英字本文とinput/buttonを注入。任意本文の高さ制限なし、document横溢れなし。閉じる時のfocus移動、再展開後の入力値保持、本文buttonが親をtoggleしないことを確認。
- disabledの抑止、multiple=trueでexpandAll、RTL、reducedでtransient animationなしを全10件確認。
- forced本文画像は読めるが、開閉記号が消失。新規forcedページで標準短文/開閉を全10件撮影し、線背景がCanvasへ置換されることを追加計測。既存probeのforced成功は視覚合格を意味しない。
- 730件baselineメタデータとaccordions原画像、既合格B002 R026/R028/R031/R035の実画像を比較。R091はR004の蛇腹、R098はR063の巻き筒、R100はB003金具群とも構造を比較。
- 主担当のreact-real-content.logは4形式×10件の実items controlled/uncontrolled/input/IDs/cleanup成功を確認。独立検査ではReact実行を再走していない。

## 制限

- 全730件を再操作していない。既存監査/カテゴリ画像/近似候補の比較。
- Chromiumとforced/reduced emulationでの検査。他ブラウザ/実機touch未実施。
- Reactの成功記録は主担当の検証証拠として確認し、独立した再実行として扱っていない。正本実装は未変更。
