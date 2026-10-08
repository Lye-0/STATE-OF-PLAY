# B024 検証

独立3は6合格、R335調整・R325/R337/R342再設計。R325は既承認R263と同じV封筒を全撤去し、対角の上84px/下56pxを実紙輪郭から折返す単一の手紙へ再設計。R337は通常円/装飾楕円/点を全撤去し、左右二軌道を連続した一つの実SVGパスへ変更。0–50左軌道/50–100右軌道、全実長を100へ正規化し、独立した点と弧の遷移差も解消。native markup/empty mount/React renderは同じSVG。R342は格子と点を撤去し、上下10pxガイドと22px走査ヘッドの実機構へ再設計。独立5は9合格・342端のヘッドが半分隠れる問題を調整。最終6は両端11px予約の有効軸へ実割合を合わせ、予約部を固定端座とし左止壁を撤去。320/768×LTR/RTL×0/1/50/100全16条件でhead全22px可視/外逃げ0、全10合格。100hash/CSS10配布一致、他9件90ファイルは5から不変。R335通常形は保持、不定時のanimation/transformを止め、実書背内で中立35%（reduced40%）を表示し外流出を解消。独立通常不定全9の外流出0/hover本文固定成功。

実native進捗9最終6で0/1/25/50/72/99/100、native値/数値/実fill幅、min20 max120 value70＝50%、表示clamp、long320390768、RTL、fixed reading、indeterminate native値無し/省略記号/reduced中立幅、forced文字、cleanup成功。配布React9×4最終6でnative値/props0–25–100、二instanceの独立imperative値、minmax更新、不定状態、長文320390768、RTL/forced/reduced/refs/StrictMode cleanup成功。R325実hint最終5とReact1×4最終5はnative checkbox/ARIA/Escape/focus保持/値保持/実action/任意内容/局所scroll/長文狭幅/RTL/forced/reduced/tooltip/cleanup成功、6と正本同一。

型/730配布契約/native20hints+20progress×2layoutsは5成功、6差分は342CSSのみで型/API/実import不変。実ギャラリー10最終6成功。自検1–2で小進捗の遮蔽と到達点半径を修正、自検4で手紙上折が四角になったpolygonを三角背景へ変更（最終5/6）。共有runtimeに変更なし。beforeは元正本/CSSの実配布進捗と実開hint、hint依存にはB022標準focus修正あり。Chromium/媒体エミュレーション、実機touch/他ブラウザ/スクリーンリーダーは未確認。全730再操作はしていない。B001 build参照、最終全体buildは全対象完了時に実施。

HTML全240件/1003画像/7695844bytes、Chromium setContent初期575ms/全decode979ms/通信0/エラー0/390px溢れなし。直接file://は環境navigation制限で未確認。
