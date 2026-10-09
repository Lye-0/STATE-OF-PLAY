# B050 最終設計と比較

6表は同じ横帯・切離し票を反復しない。formal6の全6再設計要求から、実情報が異なる造形の読む面を構成する実装へ改め、比較と再検査を継続した。過去案と変更履歴はformal-review各回/response各回へ保存する。

- R680 Folio：実列名・sortを一続きの大きい紙の折冠へ。104px実resizerは実header内。本文は平面。
- R681 Caption：題字・説明・件数の三面が一つの自立した三角captionへ。natural height、狭幅は全幅へ。表全高の側札にしない。
- R682 Blueprint：実列名の上軸と実表示位置の側軸。12px上面・端面、20px空隙・実行中央の接点で開いた測定部材へ。架空目盛りや外側額縁を作らず、実番号がsort/filter/page/serverに追従する。読む文字に軸線を重ねない。
- R683 Ribbon：実検索の裏面から実選択の前面へ大きい半ねじれ。狭幅は検索の自然高→48px折面→選択自然高。非選択では布面を残し、数・解除のみ隠す。
- R684 Ceramic：実rowActionsが一本の深い陶の溝を構成。192px実列内に2個の44px操作を横に保持。actionなしなら溝もなし。
- R685 Receipt：実checkbox列80pxと行ごとの交互紙肩が全高の確認控えを構成。native列幅/toolbar/表全体を一致させ、selectable:falseでは控え無し。読字列の固定を解除し、隣列を遮らない。
- R694 Rotary Gate：開いた6同心ゲートを保持して輪郭・余白・往復を磨く。forcedでも開口を維持。
- R695 Spooling Ovals：一本の芯と6楕円の主形を保持。forcedの透明内面で芯を遮蔽しない。
- R696 Telescopic Stroke：6段の入れ子と水平伸縮を保持。筒の厚み・間隔・方向を整える。
- R698 Lift Platform：6昇降床と伸縮支柱が基床へ連続する。forcedでも基床を実borderで保持。

全6表は既定で現在ページ全行を表示。導入側が局所高さを制限する場合は--wb-table-max-heightを指定できる。文字/操作は変形せず、native table/sort/query/IME/checkbox/action/page/resize/controlled/focus/ARIAを保持する。Aの評価は新APIの存在ではなく、実像の主形・情報との関係・近似比較で独立判定する。
