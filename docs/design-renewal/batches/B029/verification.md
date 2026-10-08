# B029 検証記録

8ページ送り/2パンくず、全A。独立4は5合格/3調整/2再設計。R399の支持端と読む面の空隙/RTL曲げ材の外向き、R404の板と胴縁の空隙、R412の物理paddingによるRTL線路への文字侵入を実像で発見した。紙始端26/支持端34で8px、板始端6/胴縁10で4pxを接触させ、曲材は物理辺を全体一度鏡映、文字の余白はlogicalに統一した。R401の『細線と現在数字の拡大』はA不足と判定し、28側受け/14下底の開いた組版台/込め物の読む床/実現在の活字面の14・8・12の肩/側/受けへ再設計。R403の閉じた額縁を廃止し、24ずれた中央紙/反対方向の上下返し/開いた側端のZ折へ再設計。

独立6は8合格/399・403調整。R399は総数1で48高差が支持高さを消すため、差をmin(48px,25%)へ制限。支持の厚さをSVG伸縮で薄めず、12pxの実辺と全体鏡映で保持。R403の中央背景は上下44の返しの外側を塞いでいたため、読む面のy44〜H−44だけに限定。7の独立RTL再検査で高詳細度のshorthandが範囲を戻すことを発見し、8で同じ高詳細度にsize/center/no-repeatを揃えた。

本物の省略メニューの第二リンクをtrusted clickすると、focusoutのmicrotaskで内部の移動先が着く前のbodyを見て閉じ、clickとURL遷移が失われる不具合を主担当が再現。captures/focus-before.jsonに関連先・焦点・開閉・クリックの順序を保存した。共有navigationではrelatedTargetが内部Nodeなら保持/外部Nodeなら閉鎖/nullなら0timer後に再判定し、syncとdestroyでtimerを清掃する。恒久回帰は今回変更したEssential navigation経路を明示してnativeクリック/URL/内部保持/外側焦点/Escape復元を検証。既存Auroraの別wayfinding経路の基本試験は保持。実Vite/Chromium隔離コピーの全26基盤項目成功。共有源と試験hashをshared-provenance.jsonへ保存。

最終7の全8nativeはkeyboard/現在ARIA/焦点復元/動的総数1/境界/クランプ/全visible6234・12456×320390768×LTRRTLの単行/Range/読む面/readonly+href/URLと通知/modified click/disabled/forced/reduced/cleanup成功。全8×React4実形式最終7もcontrolled受理/拒否/独立default/imperative/全visible大番号/narrow/long/RTL/読み取り専用リンク/refs/StrictMode成功。最終8はR403のRTL CSS1ファイルだけ変更し残り99hash不変、該当native/React4を再確認して成功。

全2パンくずnative最終6は実hierarchy/任意items/emptyone/折畳み/real第二link/Escape焦点/外側pointer・focus/disabled項目/disabled全体/長文320390768×LTRRTL/hit/glyph固定/forced/reduced/opencleanup成功。全2×React4実形式最終8も成功。正本のmarkup/initializer/React実装は不変。実gallery全10最終7成功。型最終7/730配布契約4/native20trail×2layoutsの実imports4成功、pagination20×2の実importsは前組5成功、共有pagination挙動は今回不変。

Chromiumで通常/狭幅/RTL/媒体エミュレーションを検証。実機touch/他browser/SRは未確認。全730再操作はしていない。最終production buildは全517完了時に実施。Liquid Glass部品ソースと外観は変更していない。

独立最終8全10合格。正本100hash/CSS10一致/99不変/navigation10export不変。R403は1000/320×LTRRTL×白暗の8像で外側真空隙/size/center/no-repeat一致、少数/先頭末尾8像/normal hover固定も成功。他9は正式7を不変hashで継承。

画像内蔵HTML単組10/80画像/454821bytes、全290/1376画像/10505849bytes。Chromium setContent初期810ms/全decode1299ms/通信0/例外0/390px溢れなし。直接file://は環境のnavigation制限で未確認。
