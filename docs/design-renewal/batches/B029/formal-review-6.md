# B029 round-6 独立検査

**8 pass / 2 adjust。** R399総数1で支持が消える点とR403の下層遮蔽が残る。

## R398 stitched-index-pages — pass

合格。一枚の織布へ上下の厚い返しを作り、16pxピッチの実孔と32px周期の前糸の端点を合わせた。単なる点線の枠から、索引を布面に載せる連続した素材へ変わった。R278の候補ごとの縫い代、R333の二片の縫合、R265の縦帯とは支持と読む面の関係が異なる。

## R399 open-bracket-pages — adjust

通常7slotの接合とRTL曲率は解消。中央索引紙の端26pxへ34px幅の括弧が8px重なり、曲材全体を一度鏡映して左右を揃えた。ただし総数1のとき高さ44pxよりずらし48pxが大きく、二つの括弧が消える。

R399-one-page-support-disappears: 総数1の44px高の紙に対して上下の差48pxが固定され、曲材の描画高がなくなる。実像では通常形の主役だった二つの支持が消え、単なる一行の紙になる。

改善: 差をmin(48px,25%)など実高さに制限し、少数でも二つの支持を残す。高さに応じSVG全体を潰して肉厚を消す方法も避け、角の曲率と12pxの小口を保って8px接合を確認する。

根拠: reviewer-page-materials-6/open-bracket-pages-1000-1-1.png と320-1-1.png。主担当から同じ少数不具合の連絡後、独立採取済み画像で再確認。

## R400 coin-stack-pages — pass

合格、T保持。元の硬貨の曲率を保ち、実番号も64pxの正円と6pxの小口へ統一した。丸い前後操作だけが別素材になる不整合を除いた。長い番号も面内に収まり、現在貨の濃さは一貫する。

## R401 margin-line-pages — pass

合格。赤罫と大数字だけの構成から、28pxの厚いL側受けと14px下底、連続した込め物床が実索引を受ける組版台へ変わった。現在ノンブルは100px高の実活字面となり、14px上肩・8px側面・12px下受面を同じ床へ接続する。全体を閉じる四辺枠や小カードの反復にせず、大小の実数字を支える断面が主形になった。LTR/RTL、少数・末尾・5桁も読む面を保持。

## R402 shuttle-key-pages — pass

合格、T保持。元の丸い前後端と通しの外周軌道、実索引を横断する内側の軌道を揃え、舟形の番号面が軌道を受ける。狭幅の折り返しでも各行へ軌道が続く。標準番号箱の色違いから、元の主題に沿う一つの構成へ整理された。

## R403 folded-tab-pages — adjust

Z折への通常造形の再設計方向は合格。対称台形と左右壁を外し、24pxずれた中央紙に上下逆方向の44px返しを接続した。ただし中央紙背景が上下のpaddingにも描かれ、返し外側の空隙を白い三角で塞ぐ。描画範囲の調整が残る。

R403-paper-underlayer-closes-void: 中央紙のbackgroundが上下44pxの返し領域まで全面に描かれ、斜め返しの外側に白い三角が残る。Zの外形が全レイヤーで開いていない。

改善: 中央の紙背景をy44〜H−44に限定し、返しの外側が実背景へ抜けるようにする。RTL/白暗背景/少数と多段で同じ端点接合を保つ。

根拠: reviewer-pages-6/folded-tab-pages-initial.png、reviewer-z-layer-6の白/暗背景×1000/320×LTRRTL8画像とcomputed背景。

## R404 slatted-pages — pass

合格。胴縁10pxに対し板端を6pxとし、両端4pxの実重なりを確認。上木口・下木口・読む板面が一つの支持へ接続し、板間と省略区間だけに胴縁が現れる。R394の一体石梁とは、独立した板/実空隙/共通胴縁の構造が異なる。

## R405 bookplate-pages — pass

合格、T保持。各番号の重い二重枠を廃し、一枚書票の薄い輪郭・左右の貼り代・小さい隅留めへ線量を整理。現在番号も同じ紙の印として落ち着く。新規Rの大胆な機構を要求する部品とは区別し、元の紙票の精度を改善したと判断する。

## R411 archive-route-trail — pass

合格、T保持。別段の現在地という元の明快な階層を維持し、祖先の経路・一枚の収蔵票・6px小口と9px貼り背をまとめた。長い現在地と祖先は全文を折り返し、実省略メニューも同じ左背の素材を保つ。

## R412 rail-junction-trail — pass

合格。全祖先の論理padding38px/12pxとmore58pxを揃え、RTLでも文字・Homeアイコンが右の線路と床から離れる。実moreの分岐と終端ホームは維持。通常hoverと実第二メニューリンク遷移も成功。

## 検査範囲

固定round-6の100正本SHA-256と10配布CSSを照合、全一致。reviewer-extra-6/checks.json。

8native pagesと2native trailsの基本操作/フォーム/キー/省略メニュー実click/外側焦点・pointer/Escape/disabled/readOnly/長文320390768/RTL/forced/reduced/destroyを全件独立再実行、成功。reviewer-pages-6、reviewer-trails-6。

ページ8×標準320390768×LTRRTL×current6234/12456で96状態528表示番号、追加10外幅で320状態1760番号を検査。全て一行・Rangeは内面内。reviewer-page-glyphs-6、reviewer-page-embedded-6。

readOnly/disabledの実72クリック組は全成功。reviewer-readonly-6。

全8ページの通常/少数/先頭末尾/狭幅RTL64実像とnormal hover/leave/reenter全体相対文字・hit固定を確認。reviewer-page-materials-6。

R399/R404左右の支持接触を広狭LTRRTLで測定。R399は通常8px、R404は4px接合。2trail正常motion/RTL読字を再確認。reviewer-contacts-6。

R403の背景を白/暗へ変えて8実像を採取し、切断外側の下層遮蔽を確認。reviewer-z-layer-6。

元の合格Tと布の通常形を維持し、固定min-height解除による少数形を実像比較。R399少数だけは支持消失として追加指摘。

## 限界

Chromiumの固定portable nativeで独立検査。React各形式・恒久基盤試験は主担当結果を補助参照。

既承認の近似と元監査の比較はformal-review-4を継承し、変更した主形の実像を重点評価。全730の全面再監査ではない。
