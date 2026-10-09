# B005 round4 独立検査

8件 pass、R164/R169の2件 changes_required。

- R162 rung-tabs: **pass** — 縦の索引が狭いホストでは本文上に並び、縦ARIA・上下キーを保つ。本文幅と末尾選択の保持を確認。

- R163 embossed-archive-tabs: **pass** — 浮彫りの保存帳の面と選択差を保ち、縮小後も選択とフォーカスが見える。

- R164 open-corner-tabs: **changes_required** — 222pxホストで本文の実幅が102pxに縮まり、既定見出しthought/keepingが語末1文字で折れる。

- R165 film-caption-tabs: **pass** — フィルムの穴とキャプションの構成を保つ。round4のインク修正後、状態別最小コントラスト5.004:1。

- R169 warm-reading-tabs: **changes_required** — 長い選択ラベルの項目がホスト幅を超え、クリック後とEnd移動後で文字列の反対側が欠ける。

- R170 night-work-tabs: **pass** — 暗い作業面の階調と選択表示を保ち、狭幅・手動選択・RTLで選択が見える。

- R176 lever-stop-segments: **pass** — レバーの終端と軌道に個性があり、等幅、ネイティブ選択とフォーム値を確認。

- R177 raised-bridge-segments: **pass** — 橋脚と実際のアーチ空隙を視認。hover往復中も文字位置を保ち、解除で元の形へ復帰する。

- R178 tape-splice-segments: **pass** — テープの継目を保ち、長いラベルを狭幅内で折り返す。3/7項目とも等幅。

- R180 coin-seat-segments: **pass** — 丸い座とコインの選択差が明瞭。狭幅等幅、ネイティブキー、フォーム値とresetを確認。

再現数値は review-4.json と narrow-probe-4.json を参照。R164は222pxホストでの本文幅問題。R169は実gallery詳細でも再現する長い項目の両端欠け。

全10件について通常・hover入口/解除/再進入・320px・長文・keyboard・reduced/forcedを確認。tabsの末尾縮小/LTR/RTL/manual/7項目/縮小ホスト、segmentsのnative form/reset/disabled/縦・RTLも確認した。主要・特殊条件のcontact sheetsを全視認。round4のR165インク変更後を含む全20経路の定常コントラストを再測定し全件4.5:1以上。

末尾hash照合時点では主担当のR164/R169修正が進行中で2ファイル差分あり。round4の指摘はその前に取得した実gallery測定と不変の凍結portableから確定。作者ファイルは検査担当では変更していない。
