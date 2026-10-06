import fs from 'node:fs';
const root='docs/similarity-audit-2026-10-06';
const inventory=JSON.parse(fs.readFileSync(root+'/inventory.json','utf8'));
const parts=new Map(inventory.parts.map(p=>[p.id,p]));
const groups=[];
function add(ids,keep,similar,different,reason,priority='高'){
 for(const id of ids)if(!parts.has(id))throw new Error('Unknown '+id);
 groups.push({id:'G'+String(groups.length+1).padStart(2,'0'),category:parts.get(ids[0]).category,ids,keep:[keep],remove:ids.filter(id=>id!==keep),similar,different,reason,priority});
}
add(['aurora-loader','velvet-loader','essential-loader'],'aurora-loader','三重の同心円、円周上の点、中央の脈動が同じ。','Auroraは青緑、Velvetは紫の外枠、Essentialは控えめな配色。','形と回転・脈動の仕組みが重複。背景や色は残す代表の設定で扱える。');
add(['mercury-loader','obsidian-loader','soft-loader'],'mercury-loader','12本の縦棒を時間差で伸縮させる同じローダー。','Mercuryは金属色、Obsidianは暗色、Softは白い外枠。','色と外枠を除くと同じ波形。同じ棒型を3件残す必要性が低い。');
add(['folio-loader','tide-loader','outline-loader'],'outline-loader','3枚の細い板がずれて揺れる振り子型。','Folioは紙の背景、Tideは青い面、Outlineは背景を省く。','同じ揺れを素材色で増やした系列。背景を要求しないOutlineを代表にする。');
add(['blueprint-loader','aperture-loader','inset-loader'],'inset-loader','破線の三重円と中心の点が回転する構成。','Blueprintは青い外枠、Apertureは灰色、Insetは青灰色。','名称から期待される製図・開口の違いが、現在の形と回転にはほぼ出ていない。');
add(['prism-loader','transit-loader','compact-loader'],'prism-loader','立体的な中空六角形を回す構成。','紫・茶・灰の配色と外枠、わずかな大きさが違う。','プリズムの代表1件へ集約し、色違いだけのTransit/Compactを外す。');
add(['copper-loader','relay-loader','slate-loader'],'copper-loader','8分割された円環の同じ回転。','銅色・緑・青灰色。','円環の分割数と回転方式が同じ。Copperの素材色が最も名前と対応する。');
add(['botanical-loader','contour-loader','mono-loader'],'mono-loader','2本の糸と球を左右へ振る構成。','球の色と糸の色が違う。','植物や等高線という独自表現になっておらず、Monoが素直な代表になる。');
add(['paper-card','accent-card'],'paper-card','見出し・本文・区切り線・右下ボタンを置く同じ角丸カード。','Paperは暖かい白、Accentは青白い面と青い境界。','情報構成・反応は同じで、Accentの独立した形の違いが弱い。');
add(['outline-card','status-card'],'outline-card','同じ3行チェックリストと下部の完了表示。','Statusは青緑の塗り面と上辺のアクセント、Outlineは薄い輪郭。','状態表示を色以外で作り分けていないため、輪郭版を代表にする。','中');
add(['minimal-scroll','frost-scroll'],'minimal-scroll','細い直線レールと角丸の明るいつまみ。','Frostは青い反射と軽い影、Minimalは単純な明色。','スクロール時も同じ移動。Frostの差は小さな光沢に留まる。','中');
add(['ink-scroll','accent-scroll','editorial-scroll'],'ink-scroll','白い背景の細い直線レールと単色のつまみ。','黒・青・茶のつまみと背景の色温度が違う。','形とスクロールの反応が同じ。配色を独立パーツ数に数えない方針なら集約できる。','中');
add(['quiet-button','soft-button','linen-button'],'quiet-button','短い文字と右側の小アイコンを置く、塗り面の小ボタン。','色、角丸、Linenの弱い影と字体が違う。','押下の構造と用途が重なる。Quietを基準に色・字体の設定として扱う。','中');
add(['text-arrow-link','subtle-link'],'text-arrow-link','文字の右に矢印を置き、ホバーで右へずらすリンク。','色、矢印の大きさ、初期の不透明度が違う。','同じ構成とホバー。Text Arrowの分かりやすい表示を残す。');
add(['atlas-tabs','folio-tabs'],'folio-tabs','紙色の3タブ、折れた選択片、紙の層を持つ本文。','ラベル、端の切り欠き、個別CSSの設定値に差がある。','実表示の共通paper/map演出が強く、地図と綴じ本の違いが弱い。紙という名前が明確なFolioを残す。','中');
add(['essential-tabs','pill-tabs'],'essential-tabs','角丸レール上を選択面が滑り、同じ構成の本文を切り替える。','本文面の色と角丸の程度が違う。','Pillという名前ほど選択部の輪郭が違わず、独立した用途も重なる。');
add(['origami-segments','atlas-segments'],'origami-segments','紙色の横並び3択と、角の折れた選択面。','初期の文字と、個別CSSで指定する切り欠きが違う。','実表示では同じ紙の折れと移動が中心。折り紙という表現を明示するOrigamiを残す。');
add(['detent-segments','studio-segments'],'studio-segments','暗いレールと分割された金属の選択面。','Detentは少数の太い縦面、Studioは細い縦面が多い。','同じ板の回転と移動。刻みの密度だけでは2件分の個性が弱い。','中');
add(['essential-segments','soft-segments','paper-segments'],'essential-segments','暗い角丸レールと緑の選択面が同じ3択。','初期ラベル、余白と角丸の微差。Paperも現行表示は紙色にならない。','見た目と切り替えが非常に近い。想定CSSではなく現行実表示を基準に集約する。');
add(['compact-segments','slate-segments','icon-segments'],'compact-segments','アイコン付きの暗い3択レール。','Iconは輪郭・点、ラベルと細かな余白が違う。','同じ配置と選択面の移動。アイコン対応をCompactのオプションとして残せる。');
add(['essential-check','consent-check','accent-check'],'essential-check','四角いチェックと2行の説明を同じ角丸の帯に配置。','文言、配色、選択済み状態が違う。','同じチェック操作と形。Consent/Accentの違いは接続先や配色で表せる。');
add(['essential-dialog','quiet-confirm'],'essential-dialog','閉じるボタン・見出し・説明・確認内容・下部操作の確認ダイアログ。','初期内容と面の色が違う。','確認対象を変えたデモに近く、Quiet専用のレイアウトが弱い。','中');
add(['paper-dialog','form-dialog'],'form-dialog','白い編集ダイアログに入力欄と下部の操作を配置。','項目数、余白、見出しの字体と初期ラベルが違う。','名前変更とプロフィール編集は本体に渡す内容の違い。Formが汎用的な代表。','中');
add(['essential-range','inset-range','slate-range'],'essential-range','値・一本の線・丸いつまみの単値スライダー。','青灰色の色調と輪郭の微差。','値の操作とレールの構造が同じ。Inset/Slateの固有機構がない。');
add(['soft-range','paper-range'],'soft-range','明るい外枠の中に同じ単値スライダー。','緑白と生成り、角丸と字体。','明色の基本形は1件にまとめ、紙色はテーマ設定として残せる。');
add(['outline-range','mono-range'],'outline-range','2つの丸いつまみで範囲を指定する細いレール。','初期値と配色が違う。','共通APIで範囲値を設定でき、形も操作もほぼ同じ。');
add(['essential-choice','slate-choice','mono-choice'],'essential-choice','3枚の選択カード、右端の丸い指標と選択枠。','青灰色・茶色の配色、角丸の微差。','同じレイアウトと選択操作。色違いの独立登録を減らす。');
add(['soft-choice','paper-choice'],'soft-choice','明るい外枠と3枚の選択カード。','生成りの色と字体、角丸。','構成も選択の見せ方も同じ。Softを明色の代表にする。');
add(['essential-finder','compact-finder','mono-finder'],'essential-finder','左の検索記号、入力、右の展開ボタンを持つ横長フィールド。','配色と小さな角丸・文字サイズ。','候補一覧も同じ構成。Compactは独立したコンパクトレイアウトの差が弱い。');
add(['soft-finder','paper-finder'],'soft-finder','明るい外枠と同じ検索・候補欄。','生成りの色と字体、角丸。','入力と候補表示が重なり、Paperの差はテーマ相当。');
add(['inset-finder','slate-finder'],'slate-finder','青いフィールドに検索と展開操作を置く。','Insetは角ばった枠、Slateは少し丸い塗り面。','展開後も構成は同じ。Insetの沈み込みが独立した特徴になりにくい。','中');
add(['essential-notice','inset-notice','compact-notice','slate-notice','mono-notice'],'essential-notice','同じ説明記号、2行の文章、下端の時間表示を持つ通知。','色、角丸、数pxの文字・余白の差。','表示・退出・操作の構造が同じで、5件分の選択肢としては過密。');
add(['soft-notice','paper-notice'],'soft-notice','明るい外枠に同じ通知と表示ボタン。','生成りと緑白、角丸と字体。','同じ通知をテーマ変更した系列としてまとめられる。');
add(['essential-popover','inset-popover','slate-popover','mono-popover'],'essential-popover','同じ小さなトリガーと説明パネル。','トリガー・面の配色と角丸。','説明表示の構造が重なる。透明なOutlineや密度を変えるCompactは別途残す。');
add(['soft-popover','paper-popover'],'soft-popover','明るい外枠と同じ説明パネル。','初期の文言、色温度と字体。','文言は変更でき、独立したレイアウトの差が弱い。');
add(['essential-progress','inset-progress','slate-progress','mono-progress'],'essential-progress','横棒と数値を持つ進捗表示。','色と外枠の角丸、細い輪郭。','進捗を更新したときの構造が同じ。円形のOutlineは別の表現なので残す。');
add(['soft-progress','paper-progress'],'soft-progress','明るい外枠の横棒・数値表示。','生成りの色と字体、角丸。','同じ進捗表示の明色版を1件に集約できる。');
add(['essential-dropzone','inset-dropzone','compact-dropzone','slate-dropzone'],'essential-dropzone','点線のドロップ領域、説明、右端の選択ボタン。','色、角丸、微細な余白。','ファイル選択後も同じ一覧。独自の投入機構や配置の違いがない。');
add(['soft-dropzone','paper-dropzone'],'soft-dropzone','明るい外枠と同じ点線の投入領域。','生成りの色、角丸、字体。','同じ投入・選択処理と配置で、テーマ差の域。');
add(['essential-calendar','outline-calendar','compact-calendar'],'essential-calendar','日付欄と右のカレンダーボタン。','角丸、境界と配色、初期の値。','単日カレンダーを開いた後も構成が近く、3件の差が弱い。期間・日時・時刻の代表は残す。','中');
add(['soft-pages','paper-pages'],'soft-pages','明るい外枠、番号列、現在ページの数値。','色温度・角丸・字体。','同じページ送りと同じ移動面。明色の代表にまとめる。');
add(['outline-pages','inset-pages','compact-pages'],'outline-pages','暗い横長の番号列と、その下の現在ページ表示。','枠内の塗り色、微細なサイズと字体。','番号配置とページ変更が同じ。塗り面を抑えたOutlineを残す。');
add(['essential-trail','outline-trail','inset-trail','compact-trail'],'essential-trail','Home・省略・階層・現在地を横一列に置くパンくず。','色、角丸、微細な枠と文字サイズ。','同じ経路と省略メニューを表示する。種類を分けるほどの配置差が弱い。');
add(['soft-trail','paper-trail'],'soft-trail','明るい外枠の同じ横並びパンくず。','色温度・角丸・字体。','明色テーマ違いとしてまとめられる。');
add(['essential-tags','inset-tags','slate-tags','mono-tags'],'essential-tags','小さな長方形チップを並べ、選択面を反転する。','配色と角丸。初期の表示専用・選択設定も違う。','表示専用・選択・削除は共通オプションで変更可能。独立パーツの差は小さい。');
add(['essential-stepper','inset-stepper','compact-stepper'],'essential-stepper','左に減算、中央に直接入力、右に加算。','色と数pxの字体・境界の差。','同じ数値編集の構造。独立した調整機構や配置差がない。');
add(['soft-stepper','paper-stepper'],'soft-stepper','明るい外枠の三分割数値入力。','初期の単位・刻み、色温度・角丸・字体。','小数や刻みは共通APIの設定で変更できる。明色版を代表1件にする。');
add(['classic-color','paper-color'],'classic-color','矩形の色面、HSV調整、色見本、HEX欄。','白い外枠と字体、スライダーの色。','色選択の操作と構成が同じ。Paperは明色テーマとして扱える。','中');
add(['shimmer-skeleton','paper-skeleton'],'shimmer-skeleton','画像・プロフィール・文章・操作を同じ場所で仮表示する。','紙色の背景と仮表示面の色。','同じ骨格と読み込み表示。文章・表・プロフィール専用の骨格は残す。','中');
add(['basic-timeline','dotted-timeline'],'basic-timeline','日付、縦線、点、開閉できる履歴を縦に配置。','線の点線化とステータス表示の微差。','履歴の配置と開閉は同じ。線種はBasicの設定として扱える。','中');
add(['essential-searchbar','filter-searchbar'],'essential-searchbar','検索欄と送信ボタン、その下に3つのフィルター。','Filterはフィルター上に区切り線を加える。','Essentialにもフィルターがあり、Filter固有の機能・構成差がほぼない。');
add(['soft-searchbar','paper-searchbar'],'soft-searchbar','明るい外枠、検索欄、送信、フィルター。','色温度・角丸・字体。','検索結果の構成も同じ。明色の代表に集約できる。');
add(['essential-command','simple-command'],'essential-command','コマンド記号・見出し・検索欄を同じ順で配置。','Simpleは枠の角を少し鋭くする。','開いたコマンド一覧も同じ構造。Simpleの独立した用途が弱い。');
add(['light-command','quiet-command'],'light-command','白い外枠と同じコマンド検索・一覧。','色温度と記号の薄い背景。','色と記号の扱いの微差に留まる。Lightを明色の代表にする。');
add(['essential-context','plain-context'],'essential-context','ファイル記号・2行の説明・右端のメニューボタン。','Plainは角を鋭くし、余白を少し変える。','展開するメニューも同じ配置。Plainの独立した表現が弱い。');
add(['paper-context','soft-context'],'paper-context','明るい面と同じファイル操作メニュー。','色温度・角丸・記号の背景。','展開時にも配置が重なる。Paperを明色の基本形にする。');
add(['paper-index-nav','spine-navigation'],'paper-index-nav','本のような紙色の縦ナビと左の綴じ目。','Spineは角が丸く、本文の字体と背の陰影が違う。','選択・展開時も紙の縦索引として重なる。Paper Indexの明確な綴じ目を残す。','中');
add(['zebra-table','paper-data-table'],'zebra-table','明るい表、検索、選択、ソート、交互の行背景。','白と生成り、見出しの字体と枠の微差。','同じ表構成・操作で、色を変えた表としてまとめられる。','中');
add(['folio-table','ribbon-ledger'],'folio-table','紙色の角丸表と左端の綴じ目、同じ行構成。','Ribbonの左端の濃い帯と見出しの字体、Folioの重なりの影。','表の見せ方が近く、リボンが操作機構になるわけでもない。Folioの紙層を代表にする。','中');
add(['hinge-fan','fan-spark'],'fan-spark','一点を軸に、金色の細い羽根を扇状に展開する装飾。','Hingeはゆっくり漂う。Fan Sparkはホバーで扇を大きく開く。','差はあるが、同じ扇の枠が重なる。Aの操作反応を重視してFan Sparkを残す。','中');

// Expanded-state review: explicitly preserve the interaction differences in the notes.
const updates={
 G34:{different:'Softはクリックして設定項目を操作できる。Paperはホバー表示が初期設定。色温度・角丸・字体も違う。',reason:'説明パネルの形は重複するが、初期の起動方法と操作性には差がある。共通のinteractive設定で用途を維持する統合を前提に、Paperを候補とする。',priority:'中'},
 G53:{different:'Quietは一覧のアイコンを省く。Lightはアイコン付き。外枠の色温度・角丸も違う。',reason:'検索・グループ・候補行の構成は重なる。アイコン省略を独立したデザインとして残す方針なら保留。整理するなら情報の識別がしやすいLightを残す。',priority:'中'},
 G54:{different:'Plainはメニューのアイコンを省き、角丸を小さくする。Essentialはアイコン付き。',reason:'同じ操作一覧を簡略化した形。文字だけのメニューに独立した価値を置くなら保留。整理するなら項目の識別がしやすいEssentialを残す。',priority:'中'}
};
for(const g of groups)if(updates[g.id])Object.assign(g,updates[g.id]);
add(['essential-select','outline-select'],'essential-select','明るいメニューに、項目名・説明・右端チェック・上下の区切りを並べる。','Outlineは角を鋭くし、項目ごとの下線を強める。Essentialは角丸と弱い影。','展開後の情報構成と選択動作がほぼ同じ。輪郭の強さを別パーツとして残す価値より、基本形を集約する方針ならOutlineを外す。','中');
add(['soft-select','team-select'],'team-select','丸いイニシャル表示、項目名・説明・右端情報を持つ明るいメニュー。','Softは紫と大きい角丸。Teamは生成りと項目別のイニシャル色。','用途名は違うが、表示構造は同じ。イニシャルの識別が明確なTeamを残し、紫色は配色展開としてまとめる案。','中');
add(['slate-select','locale-select'],'slate-select','暗いメニューに、角型の短い記号、項目名・説明・右端情報を置く。','Slateは青灰と四角い記号。Localeは緑黒と横長の言語コード。','専用機能の差より項目データと配色の差が大きい。Localeのコード表示を設定として引き継ぐ前提でSlateへまとめる。','中');
// Paper is an informational tooltip; Soft includes controls. Keep both roles.
groups.splice(groups.findIndex(g=>g.id==='G34'),1);
groups.forEach((g,i)=>g.id='G'+String(i+1).padStart(2,'0'));
const removed=groups.flatMap(g=>g.remove);
if(new Set(removed).size!==removed.length)throw new Error('Duplicate removal recommendations');
fs.writeFileSync(root+'/findings.json',JSON.stringify({scope:817,excluded:70,groups,recommendedRemovalCount:removed.length},null,2));
console.log(JSON.stringify({groups:groups.length,partsCompared:new Set(groups.flatMap(g=>g.ids)).size,removalRecommendations:removed.length,categories:new Set(groups.map(g=>g.category)).size}));
