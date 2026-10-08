# B029 round-7 独立検査

**9 pass / R403のみadjust。** R399少数時の支持を解消。R403のRTL背景サイズ指定だけが残る。

## R398 stitched-index-pages — pass

合格。一枚の織布へ上下の厚い返しを作り、16pxピッチの実孔と32px周期の前糸の端点を合わせた。単なる点線の枠から、索引を布面に載せる連続した素材へ変わった。R278の候補ごとの縫い代、R333の二片の縫合、R265の縦帯とは支持と読む面の関係が異なる。

## R399 open-bracket-pages — pass

合格。曲材の差をmin(48px,25%)へ制限し、総数1の44pxの紙でも33px高の二つの支持が残る。物理的な12pxの肉厚と曲率を一体で鏡映し、通常7slotの48px差/紙への8px接合も維持。1000LTR/320RTLの総数1・7・12/先頭末尾で支持と紙が接続する。

## R400 coin-stack-pages — pass

合格、T保持。元の硬貨の曲率を保ち、実番号も64pxの正円と6pxの小口へ統一した。丸い前後操作だけが別素材になる不整合を除いた。長い番号も面内に収まり、現在貨の濃さは一貫する。

## R401 margin-line-pages — pass

合格。赤罫と大数字だけの構成から、28pxの厚いL側受けと14px下底、連続した込め物床が実索引を受ける組版台へ変わった。現在ノンブルは100px高の実活字面となり、14px上肩・8px側面・12px下受面を同じ床へ接続する。全体を閉じる四辺枠や小カードの反復にせず、大小の実数字を支える断面が主形になった。LTR/RTL、少数・末尾・5桁も読む面を保持。

## R402 shuttle-key-pages — pass

合格、T保持。元の丸い前後端と通しの外周軌道、実索引を横断する内側の軌道を揃え、舟形の番号面が軌道を受ける。狭幅の折り返しでも各行へ軌道が続く。標準番号箱の色違いから、元の主題に沿う一つの構成へ整理された。

## R403 folded-tab-pages — adjust

通常造形の再設計は合格。LTRでは中央紙をy44〜H−44へ限定し、Z返しの外側が実背景へ抜けるようになった。RTLでは高詳細度のbackground shorthandがsize/position/repeatを戻すため、中央紙が全面に描かれ白い三角を残す。

R403-rtl-background-shorthand: :dir(rtl)のbackground shorthandが末尾の低詳細度size/position/repeatより優先し、折返し外側の左上/左下を白い三角で塞ぐ。LTRのみ修正されRTLの全層外形が不一致。

根拠: reviewer-z-layer-7/320-rtl-dark.pngおよび1000-rtl-dark.png、checks.json。RTL computedはrepeat/0% 0%/auto、LTRはno-repeat/50% 50%/100% calc(100% - 88px)。

改善: RTLにも同じ100%×calc(100% - 88px)、center、no-repeatを同等以上の詳細度で指定する。白/暗背景と長短のLTR/RTLでcomputed値と実空隙を再確認する。

## R404 slatted-pages — pass

合格。胴縁10pxに対し板端を6pxとし、両端4pxの実重なりを確認。上木口・下木口・読む板面が一つの支持へ接続し、板間と省略区間だけに胴縁が現れる。R394の一体石梁とは、独立した板/実空隙/共通胴縁の構造が異なる。

## R405 bookplate-pages — pass

合格、T保持。各番号の重い二重枠を廃し、一枚書票の薄い輪郭・左右の貼り代・小さい隅留めへ線量を整理。現在番号も同じ紙の印として落ち着く。新規Rの大胆な機構を要求する部品とは区別し、元の紙票の精度を改善したと判断する。

## R411 archive-route-trail — pass

合格、T保持。別段の現在地という元の明快な階層を維持し、祖先の経路・一枚の収蔵票・6px小口と9px貼り背をまとめた。長い現在地と祖先は全文を折り返し、実省略メニューも同じ左背の素材を保つ。

## R412 rail-junction-trail — pass

合格。全祖先の論理padding38px/12pxとmore58pxを揃え、RTLでも文字・Homeアイコンが右の線路と床から離れる。実moreの分岐と終端ホームは維持。通常hoverと実第二メニューリンク遷移も成功。

## 検査範囲

固定round-7正本100hashと10native配布CSSは全一致。reviewer-extra-7/checks.json。

round-6比でopen-bracket-pages/styles.cssとfolded-tab-pages/styles.cssだけ変更、残り98正本不変。共有navigationの10固定exportもバイト同一。reviewer-extra-7/inheritance.json。

R399/R403を1000LTR/320RTL×総数1・7・12/現在先頭末尾の16実像で検査。両者normal hover/leave/reenterで文字/hit/font固定。reviewer-page-materials-7。

R399広狭LTRRTLで26px紙端/34px支持端による8px接合と曲率を確認。総数1では差11px/支持33pxとなり消失しない。reviewer-contacts-7、reviewer-page-materials-7。

R403広狭×LTRRTL×白暗の8実像とcomputed背景を照合。LTR修正成立、RTLはshorthandの詳細度でauto/repeatへ戻ることを確認。reviewer-z-layer-7。

全8ページ×320390768×LTRRTL×current6234/12456の96状態528全表示番号で単一行/内面適合を確認。reviewer-page-glyphs-7。

変更のない8部品の合格と共有runtimeの操作検証はformal-review-6をバイト不変に基づき継承。2trailの通常motion/LTRRTL読字も追加のcontactsで確認。

## 限界

新規独立操作は変更2部品の通常/少数/RTL/全層背景と全8ページの数値に限定。共有API/forced/reduced等はround6の成功と不変runtimeを継承。

Chromium固定portable nativeで検査。React/恒久基盤回帰は主担当結果の補助参照。既承認造形と近似はformal-review-6を維持し、全730全面再監査はしていない。
