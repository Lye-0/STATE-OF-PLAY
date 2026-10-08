# B017 検証

独立round-3では8件合格、R239再設計、R251調整。R239は二重の丸い引き手と端点で溝の外へ出る構造を廃止し、上下のずれた肩・指穴・四辺の物理的溝へ変更した。値の主軌道とは別に溝を全幅へ広げ、0/100で引き手全体が溝内に入る。R251は元のhover移動を上書きし、選択・離脱・再入でも文字が固定される。幅が自動のform内でinline-size containmentが縮む問題はintrinsic inline sizeを指定し、長文320pxで説明幅54px以上と全行のnative hitを確認。最終round-5で独立10件合格、100hashと10CSS配布一致。

最終5の型チェック3構成、730配布契約4件、ギャラリー10件、20slider+20radioのnative2レイアウト成功。9sliderの最終4（5と同一ソース）native実pointer0/50/100・キー・上下限・step・範囲・FormData/reset・disabled/readonly・文字固定・RTL・forced/reduced成功、React9×4形式controlled/uncontrolled/rejected/実native API/StrictMode cleanup成功。radio最終5のnative実フォーム・矢印・reset・disabled・長文320/390/768・RTL・通常hover/選択の文字固定・全行hit・forced/reduced成功、React1×4形式のcontrolled/uncontrolled/rejected/フォーム/reset/動的項目/required/ID/cleanup成功。独立レビューではR239の12実drag点とR251の12選択/hover動作も追加確認。

共有runtime/importの変更なし。B001 production build成功を参照。検証はChromiumとメディアエミュレーションで、他ブラウザや実機touchは未確認。原監査と既承認の近い構造を比較し、全730の再操作はしていない。beforeはimmutable baseline、afterは最終ギャラリーの実像を単体画像埋込みHTMLへ保存する。

単体HTML170件の読み込みはChromium setContentで成功。測定値はlogs/report-all.logへ保存。画像埋込み、外部通信0、エラー0、390px溢れなし。環境のfile navigation制限により直接file://で開く確認はしていない。
