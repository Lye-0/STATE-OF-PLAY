# B029 round-4 独立検査

**5 pass / 3 adjust / 2 redesign。** R399/R404は支持接合、R412はRTLの読字予約を調整。R401/R403はAの主形を再設計する必要がある。共有メニューの実クリック不具合は修正を確認した。

## R398 stitched-index-pages — pass

合格。一枚の織布へ上下の厚い返しを作り、16pxピッチの実孔と32px周期の前糸の端点を合わせた。単なる点線の枠から、索引を布面に載せる連続した素材へ変わった。R278の候補ごとの縫い代、R333の二片の縫合、R265の縦帯とは支持と読む面の関係が異なる。

近似比較: [278, 333, 265]

## R399 open-bracket-pages — adjust

調整。48px高さを違えた二つの大きい開括弧の外形は独立しているが、中央の読む索引から左右へ離れており、受けとしての接合が成立しない。RTLで曲率と厚い辺も整合しない。

**R399-support-gap / major**

34px幅の括弧に対し、中央索引は広幅44px/狭幅38px内側から始まり、10px/4pxの空隙を残す。読む面を受けるという説明に反して、支持から浮いた標準番号列を二つの記号で囲んでいる。

根拠: reviewer-contacts-4/checks.json、open-bracket-pages-1000-ltr.png/320-ltr.png。

改善: 中央の実索引を一枚の読む面にし、括弧の上下端がその紙へ明確に重なるよう接合する。たとえば論理padding26pxで34pxの端が8px紙へ入る。ただし文字/hitは動かさず、上下の受けが本当に重なる位置を画像で確認する。

**R399-rtl-curve-edge / major**

論理border-inline-start/endをRTLへ動かした上にscaleX(-1)を適用し、曲げ端と縦の肉厚面が別々に反転する。RTL像では弧の端が中央の索引から外へ曲がり、LTRと同じ開括弧の断面になっていない。

根拠: reviewer-contacts-4/open-bracket-pages-320-rtl.png と computed borderStart12px/scaleX(-1)。

改善: 論理側へ位置だけ移す場合は輪郭全体を一度だけ鏡映し、borderの辺・角丸・返しを一つの座標系へ揃える。紙面接合もRTLで同じ重なりを確保する。

近似比較: [284, 164, 262]

## R400 coin-stack-pages — pass

合格、T保持。元の硬貨の曲率を保ち、実番号も64pxの正円と6pxの小口へ統一した。丸い前後操作だけが別素材になる不整合を除いた。長い番号も面内に収まり、現在貨の濃さは一貫する。

近似比較: [180, 234]

## R401 margin-line-pages — redesign

再設計。実現在数字を大きくする意味は明瞭で端正だが、通常像は細い赤罫を添えた標準的な縦番号リストと44pxの現在数字に留まる。元監査で問題だった赤い選択数字の主張を拡大した範囲で、Aとしての固有の形・支持関係がまだ弱い。

**R401-large-number-alone / major**

現在数字44pxと赤い細線・基線だけでは、元の汎用ページ送りからAに求める大胆な独自性へ届かない。大きいマークだけを合格理由にしない基準に該当する。

根拠: reviewer-page-materials-4/margin-line-pages-1000-12-4.png、320-12-4.png。元監査R401。

改善: 校正余白を実際の組版受けにする。一つの開いたL断面の台へ大きい現在ノンブルの厚い活字面と小さい索引を載せ、実上肩/側面/下受面で大小の組版を接続する。四辺額縁や小カードの反復を増やさず、実数字と操作は固定する。

近似比較: [380, '元R401']

## R402 shuttle-key-pages — pass

合格、T保持。元の丸い前後端と通しの外周軌道、実索引を横断する内側の軌道を揃え、舟形の番号面が軌道を受ける。狭幅の折り返しでも各行へ軌道が続く。標準番号箱の色違いから、元の主題に沿う一つの構成へ整理された。

近似比較: [63, 237, '元R402']

## R403 folded-tab-pages — redesign

再設計。上下44pxの台形はあるが、左右12pxの全高の側壁と結合して対称な閉じた額縁になる。広幅・狭幅とも一枚のZ折紙の開いた側端や異なる返し方向が読めず、普通の深い面取り枠の範囲を出ない。

**R403-closed-bevel-frame / major**

上下の台形が左右の全高側壁に接続し、外形も内側の読む面も閉じた四辺の額になる。Z折の三面という説明を読まないと判別できず、普通の厚い枠からの差が弱い。

根拠: reviewer-page-materials-4/folded-tab-pages-1000-12-4.png/320-12-4.png、source styles.css左右border12px・上下44px。

改善: 全高の側壁と上下対称な台形を廃止し、中央の読む一枚紙に対して上と下が逆の方向へ返る開いたZ断面を作る。側端に実際の折れ点と薄い紙の切口を露出し、面同士の同一端点を接続する。R222の三つの内容面をそのまま縮小せず、実索引の連続した一枚紙として固有の外形を作る。

近似比較: [222, 293, 353, 393]

## R404 slatted-pages — adjust

調整。実番号を幅広い54pxの板面へ揃え、12/10pxの上・下木口と省略区間の開きで同じ素材へ統一した。ただし二本の胴縁と全ての板端に6pxの空隙があり、取り付けられた羽目板にはなっていない。

**R404-slats-detached / major**

胴縁は左右0–10px、板は16pxから始まるため左右6pxずつ離れる。すべての実番号板が胴縁から浮き、説明する取り付けが実物にない。

根拠: reviewer-contacts-4/checks.json、slatted-pages-1000-ltr.png/320-rtl.png。

改善: 板端を左右胴縁へ明確に重ねる。padding6pxなら胴縁10pxに4px重なり、板間と省略区間にだけ背の胴縁を見せられる。上木口・下木口を含めて同じ接合にし、読み幅は削らない。

近似比較: [394, 219, 322]

## R405 bookplate-pages — pass

合格、T保持。各番号の重い二重枠を廃し、一枚書票の薄い輪郭・左右の貼り代・小さい隅留めへ線量を整理。現在番号も同じ紙の印として落ち着く。新規Rの大胆な機構を要求する部品とは区別し、元の紙票の精度を改善したと判断する。

近似比較: [197, 218, '元R405']

## R411 archive-route-trail — pass

合格、T保持。別段の現在地という元の明快な階層を維持し、祖先の経路・一枚の収蔵票・6px小口と9px貼り背をまとめた。長い現在地と祖先は全文を折り返し、実省略メニューも同じ左背の素材を保つ。

近似比較: [220, 82, '元R411']

## R412 rail-junction-trail — adjust

調整。二本の連続縦線路に祖先の停車床、実moreの分岐、現在地の広い終端ホームをつなぐ構成は固有性があり通常造形は合格。ただしRTLで線路/床と文字予約領域の移動が揃わず、祖先の文字・Homeアイコンへ支持が侵入する。

**R412-rtl-reading-reserve / major**

通常祖先行の物理padding-left38/right12がRTLで反転せず、右へ移った線路と停車床に文字・Homeアイコンが重なる。320px長文の祖先5はRangeが線路帯227–237pxを横断して右240.875pxまで達する。

根拠: reviewer-trails-4/rail-junction-trail-long-rtl-320.png、reviewer-contacts-4/checks.json。

改善: 全祖先行をpadding-block:8px; padding-inline:38px 12pxへ統一し、more58px/current38pxだけ論理側で上書きする。Homeアイコンを含めて支持帯と読字領域をRTL/LTRで分離する。

近似比較: [256, 302, 277]

## 実施検査

固定正本100 SHA-256がreview-input-4と全一致。native配布CSS10もimport除去後一致。reviewer-extra-4/checks.json。

独立nativeページ8件で値/フォーム/キー/前後/先頭末尾/disabled/readOnly/href/長文320390768/RTL/forced/reduced/destroyを実操作、基本検査全PASS。reviewer-pages-4/checks.json と logs/reviewer-pages-r4.log。

全8ページ×320390768×LTRRTL×current6234/12456（total12456）96状態、全visible528番号をRange/単一行/内面で測定、全適合。さらに外幅318/336/354/370で128状態704番号、全適合。reviewer-page-glyphs-4 と reviewer-page-embedded-4。

全8ページで1000LTR/320RTL×total1/7/12・先頭/末尾を含む64実像を撮影。normal hover/leave/reenterで実文字・hit・fontを全体相対座標で確認し全8固定。reviewer-page-materials-4。

8ページのreadOnly/disabled × button/anchor ×通常/Ctrl実クリック64組＋解除後href復帰8組の計72組成功。URL/値/通知不変とtrustedイベントを確認。reviewer-readonly-4/checks.json。

2パンくずで7階層/empty/one/3階層、省略メニューEnter/実第二リンククリック遷移/Escape復帰/外側pointer・focus/disableditem/全disabled/長文320390768×LTRRTL/forced/reduced/destroyを独立実操作、全2基本PASS。reviewer-trails-4/checks.json。

2パンくずのnormal motionをLTR/RTL長文320pxで350ms hover/leave/reenter×2、全体相対のリンク・アイコン・現在地の矩形/字体固定を確認。reviewer-contacts-4。基本overflow適合とは別にRTL読字と線路の衝突を実像/Rangeで指摘。

shared/foundation/navigation.tsのfocusout relatedTarget内部保持/外部閉鎖/null時timer再判定、sync/destroy清掃を読んだ。固定10exportのnavigation.jsは同一hash。正本100hash外の共有変更として別記録。reviewer-extra-4/shared-runtime.json。メニュー第二リンクはsyntheticではなく実クリックで確認。

R399/404支持の左右距離を1000/320×LTRRTLでcomputed+実矩形測定。R399広幅10px/狭幅4px、R404全幅6pxの空隙を確認。reviewer-contacts-4/checks.json。

元730監査の該当R/T理由、固定元版実像と既承認近似を比較。T400/402/405/411は元identityの精度改善、RはAの独自性で判定。機能成功をA造形合格の代用にしていない。

## 限界

Chromiumでの実操作・forced/reducedエミュレーション。他ブラウザ/実OS全環境は未検証。

React実配布4形式と基盤恒久回帰は主担当結果を補助参照し、独立再実行とは扱わない。今回の独立操作はimmutable portable native。

全730件の全面再監査ではなく、元監査と近似候補を照合。ページャーの通常造形は既定anchoredを対象とし、全任意props/無限桁数を保証しない。
