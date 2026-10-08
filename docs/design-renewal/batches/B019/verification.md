# B019 検証

独立round2は6合格、R262/R263/R275再設計、R265調整。R262の二重四辺枠を廃止、上左28/下右28の開口がある二つの独立三面レールへ変更。R263はR259との番号タブ付きファイル反復を廃止し、V開口の48px前蓋を持つ封筒と便箋へ変更、表示名Envelope Letter Choice、ID/API維持。R275の単一矩形中央帯を廃止、名称と説明へ独立した紙面/小口を与え、22px谷を上下の実綴じ腕が8pxずつ跨ぐ。狭幅でも二票を保持し左の綴じへ並べる。R265前面の親帯が番号/留めを覆っていたため、親を後ろへ分離、紙の実抜きから前へ出る布を各行に配置。round4でwide RTL本文被覆が見つかり、物理paddingを論理方向へ変更。最終5で長文全3行、1000/768/390/320×LTR/RTLの布と本文の非交差、12選択/途中/hover離脱再入状態の相対本文/font固定を独立assertと実像で確認。最終10合格、100hash/CSS10配布一致。実講評2/4/5と対応2/4を保存。

最終5型チェック3構成/730配布契約4件/ギャラリー10/20radio+20combo native2レイアウト成功。4radio native最終5の実フォーム/reset/矢印/disabled/長文320390768/全行hit/本文固定/RTL/forced/reduced成功、配布React4×4形式最終5のcontrolled/uncontrolled/rejected/dynamic/required/forms/reset/ref/controllerRef/ID/狭幅/RTL/forced/StrictMode cleanup成功。6combo native最終4（5とソース同一）の実フィルタ/IME/active-descendant/キー/disabledskip/required有効先頭候補選択/実フォーム/reset/readOnly/disabled/multiple/削除/empty/loading/error/長文/局所スクロール/active露出/320390768/RTL/通常hover文字固定/forced確定印/reduced/open cleanup成功、配布React6×4形式最終5でcontrolled/uncontrolled/rejected/フォーム/reset/props更新/複数/ID/狭幅/RTL/forced/open StrictMode cleanup成功。React自己検証round4に同時Vite cacheを共有する起動timeoutが一度あり、fixtureごとにignored cacheDirを分けた最終5は全形式完走。正本の機能runtimeやテストassertは変更なし。

Chromium/メディアエミュレーション。他ブラウザ/実機touchは未確認。原730監査と既承認近似を比較し、全730の再操作はしていない。共有runtime/import変更なし、B001 production build成功を参照。before immutable原版、after実ギャラリーを単体埋込みHTMLへ保存。

原版snapshot0の6配布版を実際に開きbefore候補画像を保存。after実ギャラリー候補と配布版320長文を単体HTMLへ内蔵。HTML190件/661画像/5227641bytes、Chromium setContent初期441ms/全decode748ms/外部通信0/エラー0/390px溢れなし。環境のfile navigation制限により直接file://確認はしていない。
