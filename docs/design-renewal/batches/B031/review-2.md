# B031 round-2 独立検査

**2 pass / 5 adjust / 3 redesign。** R423/R435合格。R424/425/431は主形を再設計。R431/432/433/434/436/437は狭幅の読字幅も改善が必要。共有readOnly/Space/削除焦点の修正は実操作で確認。

## R423 looped-route-trail — pass

合格。64px幅の一続きの二重ループに実空隙があり、現在の読む端子へ60pxの渡りが12px入る。祖先の文字は76px内側に分離され、輪へ経路の割合など架空の意味を付けていない。R337の値を描く二軌道とは、全階層を受ける物理的な縦材として異なる。少数/長文/RTLでも現在の支持を維持する。

近似比較: [337, 318, 296]

## R424 recessed-route-trail — redesign

再設計。角丸パネルから斜角へ変わったが、現実像は四辺の面取り枠に標準的な経路リストを収めた形に留まる。40pxの切角や内壁の色差だけでは、旧R324/旧R403と同じ汎用的な深枠から独立しない。

**R424-generic-bevel-frame / major**

大きい切角はあるが、四辺を閉じた深い枠と内部リストという汎用的な構図に留まる。凹床の独立した支持関係や特徴的な大きい曲面はなく、Aの主形が不足する。

根拠: reviewer-trails-2/recessed-route-trail-initial.png、旧R324/旧R403の閉じた面取り枠と比較。

改善: 四辺の額を廃し、読む床の左右で深さの違う大きい壁を立て、上・下が開いた一つの彫った溝へ再設計する。壁の外へ露出した端面と床との実重なりで断面を作る。単に左右borderを太くするのではなく、内外の輪郭が異なる素材の厚みを示す。

近似比較: [384, '旧R324', '旧R403']

## R425 letterpress-trail — redesign

再設計。上の祖先は標準的な矩形チップ、下の現在は小折角付きの紙カードで、二つの材料は離れて置かれる。組版片から校正紙という説明を読んでも、材料をつなぐ大きい支持や押す/送る関係が実物にない。

**R425-disconnected-type-and-paper / major**

祖先の小箱群と現在の紙カードが離れたままで、色/字体/小折角以外に組版から校正紙への形の関係がない。個別部品の寄せ集めの印象を脱していない。

根拠: reviewer-trails-2/letterpress-trail-initial.png、元R425/近似R401/R295。

改善: 金属の組版群と現在紙の上端を、一つの幅広い実押さえまたは送り接点でつなぐ。押さえの端の支脚を組版台へ届かせ、紙はそこから大きい自由端として出すなど、二つの材料が一つの構造で成立するようにする。R401のL組版台やR295の小さい出力口をそのまま再利用せず、祖先/現在という実情報の二段に即した支持を作る。

近似比較: [401, 295, 220]

## R431 bookbinding-tags — redesign

再設計。14pxの丸い茶色の背と8pxの下辺、19pxの短い横線を添えた平たいタグで、製本記号の追加に留まる。糸が実際に紙葉と表紙を結ぶ構造がなく、旧R138/旧R360の薄い背・帯の不足に近い。さらに長文狭幅では読む幅が崩れる。

**R431-binding-as-small-decoration / major**

片丸の読む矩形に茶色い背と数本の短い線を置いた範囲で、糸が表紙/紙葉を結ぶ場所がない。元監査の「小さな装飾が散漫」という不足が主構造からは解消していない。

根拠: reviewer-badges-2/bookbinding-tags-initial.png。14px背/8px下辺/19px短線の正本CSS、旧R138/旧R360比較。

改善: 表紙と紙葉の間へ実空隙を設け、露出した綴じ部を糸が実孔を通って両面へ渡る構成にする。読み文字/件数/削除を空隙から離し、綴じそのものが外形を決める大きさにする。R360の四リングを縮小コピーせず、紙葉と表紙の厚みと糸の通りで固有化する。

**R431-narrow-reading-collapse / major**

viewport320px/部品222px/タグ186pxで、9桁件数・削除・アイコンと長い名称を同列に置くと、名称の最広行が13.02px、43行に分割され、1タグが922.27px高になる。横overflowが無くても、一文字程度ずつの縦並びで実用的に読めない。

根拠: reviewer-reading-2/checks.json と各id-ltr.png/rtl.png、reviewer-badges-2/*-long-rtl-320.png。

改善: 狭いコンテナでは名称を全幅の上段、実件数と削除を下段へ分ける。名前のnative label幅だけでなくアイコンを除いた実テキスト行の幅も測り、選択/未選択・件数無し・大きい件数・削除無しでも形とhitを固定する。広幅の合格済み材料の形は維持する。

近似比較: ['旧R138', '旧R360', 157]

## R432 rail-marker-tags — adjust

通常造形は合格、T保持。元の左右の短いレール端を残し、数値の線を減らし、選択を同じ読む床へ揃えた。ただし件数/削除と同列のままでは狭幅長文がほぼ一文字に折り返す。

**R432-narrow-reading-collapse / major**

viewport320px/部品222px/タグ186pxで、9桁件数・削除・アイコンと長い名称を同列に置くと、名称の最広行が18.80px、27行に分割され、1タグが589.52px高になる。横overflowが無くても、一文字程度ずつの縦並びで実用的に読めない。

根拠: reviewer-reading-2/checks.json と各id-ltr.png/rtl.png、reviewer-badges-2/*-long-rtl-320.png。

改善: 狭いコンテナでは名称を全幅の上段、実件数と削除を下段へ分ける。名前のnative label幅だけでなくアイコンを除いた実テキスト行の幅も測り、選択/未選択・件数無し・大きい件数・削除無しでも形とhitを固定する。広幅の合格済み材料の形は維持する。

近似比較: [277, 392, '元R432']

## R433 foldback-tags — adjust

通常造形は合格、T保持。元の折返しを18pxの一つの終端へ限定し、選択時もその厚みと読む札の寸法を保つ。狭幅長文の名称を確保する配置調整が必要。

**R433-narrow-reading-collapse / major**

viewport320px/部品222px/タグ186pxで、9桁件数・削除・アイコンと長い名称を同列に置くと、名称の最広行が15.17px、29行に分割され、1タグが631.11px高になる。横overflowが無くても、一文字程度ずつの縦並びで実用的に読めない。

根拠: reviewer-reading-2/checks.json と各id-ltr.png/rtl.png、reviewer-badges-2/*-long-rtl-320.png。

改善: 狭いコンテナでは名称を全幅の上段、実件数と削除を下段へ分ける。名前のnative label幅だけでなくアイコンを除いた実テキスト行の幅も測り、選択/未選択・件数無し・大きい件数・削除無しでも形とhitを固定する。広幅の合格済み材料の形は維持する。

近似比較: [353, 403, '元R433']

## R434 stone-chip-tags — adjust

通常造形は合格。14pxの欠けた始端、左右非対称の破断、16pxの側断面と10px下材が連続し、磨いた読む中央から切断面を分離した。元の一般的な丸角チップから外形が変わった。ただし長文狭幅の読字幅が不足する。

**R434-narrow-reading-collapse / major**

viewport320px/部品222px/タグ186pxで、9桁件数・削除・アイコンと長い名称を同列に置くと、名称の最広行が13.02px、43行に分割され、1タグが926.27px高になる。横overflowが無くても、一文字程度ずつの縦並びで実用的に読めない。

根拠: reviewer-reading-2/checks.json と各id-ltr.png/rtl.png、reviewer-badges-2/*-long-rtl-320.png。

改善: 狭いコンテナでは名称を全幅の上段、実件数と削除を下段へ分ける。名前のnative label幅だけでなくアイコンを除いた実テキスト行の幅も測り、選択/未選択・件数無し・大きい件数・削除無しでも形とhitを固定する。広幅の合格済み材料の形は維持する。

近似比較: [174, 359]

## R435 receipt-tags — pass

合格。実名称を上段、実件数を下段へ置いた縦の受領紙と8pxの真の切取り端が主形になった。架空の総額等を追加せず、件数無しでも紙の名前だけで成立。9桁件数/削除を含む狭幅でも名称の幅を確保し、他6件の一文字縦並びへ陥らない。

近似比較: [305, 252, 361]

## R436 loop-label-tags — adjust

通常造形は合格、T保持。元の丸い始端と実孔を保ち、孔端21pxから本文36pxを離して、二重線とアイコンの衝突を整理した。ただし件数/削除を同列で保持した狭幅では名称が一文字幅になる。

**R436-narrow-reading-collapse / major**

viewport320px/部品222px/タグ186pxで、9桁件数・削除・アイコンと長い名称を同列に置くと、名称の最広行が13.02px、43行に分割され、1タグが918.27px高になる。横overflowが無くても、一文字程度ずつの縦並びで実用的に読めない。

根拠: reviewer-reading-2/checks.json と各id-ltr.png/rtl.png、reviewer-badges-2/*-long-rtl-320.png。

改善: 狭いコンテナでは名称を全幅の上段、実件数と削除を下段へ分ける。名前のnative label幅だけでなくアイコンを除いた実テキスト行の幅も測り、選択/未選択・件数無し・大きい件数・削除無しでも形とhitを固定する。広幅の合格済み材料の形は維持する。

近似比較: [313, 318, '元R436']

## R437 instrument-tags — adjust

通常造形は合格、T保持。実件数の独立面を2pxの隔壁で分け、全札の4px上面/7px下材へ統一した。名前と件数が同じ成形材の平面で読める。狭幅長文の名称の予約幅は別途不足する。

**R437-narrow-reading-collapse / major**

viewport320px/部品222px/タグ186pxで、9桁件数・削除・アイコンと長い名称を同列に置くと、名称の最広行が16.62px、27行に分割され、1タグが596.52px高になる。横overflowが無くても、一文字程度ずつの縦並びで実用的に読めない。

根拠: reviewer-reading-2/checks.json と各id-ltr.png/rtl.png、reviewer-badges-2/*-long-rtl-320.png。

改善: 狭いコンテナでは名称を全幅の上段、実件数と削除を下段へ分ける。名前のnative label幅だけでなくアイコンを除いた実テキスト行の幅も測り、選択/未選択・件数無し・大きい件数・削除無しでも形とhitを固定する。広幅の合格済み材料の形は維持する。

近似比較: [397, '元R437']

## 実施検査

固定正本100 SHA-256とreview-input-2全一致、native配布CSS10もimport除去後全一致。reviewer-extra-2/checks.json。

shared-provenance.jsonのnavigation.ts/恒久回帰testのhashを照合し一致。固定10exportのnavigation.jsは同一hash。共有runtimeは部品100hashの外としてreviewer-extra-2/shared-runtime.jsonへ別記録。

3固定native trailの任意階層/empty/one/collapse/Enter/Escape復帰/実第二リンククリック/外側pointer・focus/disabled/復帰/長文320390768×LTRRTL/forced/reduced/open destroyを独立実操作、全成功。reviewer-trails-2。

3trail×1000LTR/320RTL×1/3/8階層の18実像、6条件normal hover/leave/reenter×2で350ms待ち、全体相対glyph/hit/font固定と少数形を確認。reviewer-materials-2。

7固定native badgeの実Space選択/checked/API整合/同じnative keyの焦点保持/disabled項目/readOnly native disabled/全disabledと復帰/実削除/controlled拒否/emptyone/native form reset/長文320390768×LTRRTL/forced/reduced/cleanupを独立再実行し基本全成功。reviewer-badges-2。

追加で全7の実削除後focusを値で確認。c削除→後続d、d削除→disabledのbを飛ばして前aへ。readOnly実pointerでinput/removeを操作しても通知なし、次sync後も件数4/APIとchecked一致を確認。reviewer-badge-extra-2/checks.json。

7タグ×LTRRTL狭幅の14条件でnormal hover/leave/reenter×2を350ms待ち、ラベル/件数/削除/アイコンの全体相対矩形とfontが固定。暗背景も追加撮影。reviewer-badge-extra-2。

7タグ×320390768×LTRRTLの42状態で、9桁件数＋削除＋長いラベルのTEXT_NODE Rangeを測定。R431432433434436437の最広行13〜19px/27〜43行、R435は最広80.92px/6行と確認。basic overflow成功と真の読字幅を区別した。reviewer-reading-2。

元監査R/T理由と固定元像、既承認近似を比較。T432433436437の通常素材は保持評価。新規Rの標準箱/小飾りや、タグの色替えだけをA合格理由にしていない。

## 限界

独立操作はChromiumの固定portable native。主担当のReact4形式/実Vite基盤26の成功は補助情報であり、独立再実行とは扱わない。

forced/reducedはエミュレーション。暗背景変更は実孔と材料の確認用であり、通常テーマの文字色を変更していない。

全730の全面再監査ではなく、元監査と近似候補を重点比較。全任意propsの組合せ保証ではない。
