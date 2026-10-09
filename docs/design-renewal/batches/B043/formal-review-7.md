# B043 round-7 正式独立レビュー

changes_requested。1 pass / 8 adjust / 1 redesign。予備提案への一致を合格理由とせず、実像と操作に基づく。

## R585 letterpress-stage-wizard — pass

実Nextを片持ち腕の平らな押し面へ置き、40×44pxの先端が24px空隙を渡って記入紙へ8px接する。通常大数字フォームから、実操作と一枚の紙が形を担う構造へ変わった。Nextは上部右／RTL左の明瞭な52px面として発見でき、字や入力を変形しない。

## R591 card-catalog-search — redesign

候補ごとのnotch反復は廃止されたが、全体は四辺の太い茶色枠＋上の凹んだ検索枠へ見える。前板が記録束を保持する前後関係と開いた外形が十分に読めず、A主形として再設計継続。

共有baseの .wb-search-shell > :not(.wb-art) が .wb-sr のposition:absoluteをrelativeへ上書きする。trusted候補選択後のlive statusが実本文の下に視覚表示される。R594の320pxでは172.406pxのinline文字が右へ9.406px流出。全9件でrelativeと実字幅を確認。

改善：search shell前面化からsrを除く、または検索statusだけabsolute/論理原点を明示。既存1px寸法/clipを保持し、live roleは残す。候補選択後の実statusを確認する。

証拠：docs/design-renewal/batches/B043/captures/reviewer-api-extra-7/checks.json, docs/design-renewal/batches/B043/captures/reviewer-search-7/stone-status-overflow.log, docs/design-renewal/batches/B043/captures/reviewer-search-7/stone-desk-search-precheck-ltr-320.png

一つの引出しという説明に対し、実像は閉じた太枠と上の凹んだ検索枠。保持前板と束の重なりが外形を変えておらず、普通の額縁フォームから十分離れていない。

改善：四辺外枠を撤去し、実検索前板を読む束の上端へ16px程度重ねる。両側に開いた斜めの奥行き面を出し、紙の下端手前で終わらせて自由端を露出する。meta札を増やすのでなく、前板と全候補一束の実関係を主形へ。

証拠：docs/design-renewal/batches/B043/captures/reviewer-search-7/card-catalog-search-initial.png

## R592 radar-window-search — adjust

Tの検索軸と実候補中央の照準を保持。2px軸／14px点／読み面の階層は整理され、実説明・metaを隠さず読める。通常造形合格。

共有baseの .wb-search-shell > :not(.wb-art) が .wb-sr のposition:absoluteをrelativeへ上書きする。trusted候補選択後のlive statusが実本文の下に視覚表示される。R594の320pxでは172.406pxのinline文字が右へ9.406px流出。全9件でrelativeと実字幅を確認。

改善：search shell前面化からsrを除く、または検索statusだけabsolute/論理原点を明示。既存1px寸法/clipを保持し、live roleは残す。候補選択後の実statusを確認する。

証拠：docs/design-renewal/batches/B043/captures/reviewer-api-extra-7/checks.json, docs/design-renewal/batches/B043/captures/reviewer-search-7/stone-status-overflow.log, docs/design-renewal/batches/B043/captures/reviewer-search-7/stone-desk-search-precheck-ltr-320.png

## R593 folded-query-search — adjust

入口の背景を実query／filtersの自然高へ確保。全幅の直線折返しから候補紙の右の返りへ続く形が実像で読める。R575の巻き曲面と自由端、R222三面の交互ずれとは折れの方向・読む面の接続を区別できる。通常形合格。

共有baseの .wb-search-shell > :not(.wb-art) が .wb-sr のposition:absoluteをrelativeへ上書きする。trusted候補選択後のlive statusが実本文の下に視覚表示される。R594の320pxでは172.406pxのinline文字が右へ9.406px流出。全9件でrelativeと実字幅を確認。

改善：search shell前面化からsrを除く、または検索statusだけabsolute/論理原点を明示。既存1px寸法/clipを保持し、live roleは残す。候補選択後の実statusを確認する。

証拠：docs/design-renewal/batches/B043/captures/reviewer-api-extra-7/checks.json, docs/design-renewal/batches/B043/captures/reviewer-search-7/stone-status-overflow.log, docs/design-renewal/batches/B043/captures/reviewer-search-7/stone-desk-search-precheck-ltr-320.png

## R594 stone-desk-search — adjust

個別の欠け板を廃し、一体の大きい斜め切断へ変わった。ただしmetaの小板が連続床の内側に浮き、実側面に彫った段という材料関係は未成立。

共有baseの .wb-search-shell > :not(.wb-art) が .wb-sr のposition:absoluteをrelativeへ上書きする。trusted候補選択後のlive statusが実本文の下に視覚表示される。R594の320pxでは172.406pxのinline文字が右へ9.406px流出。全9件でrelativeと実字幅を確認。

改善：search shell前面化からsrを除く、または検索statusだけabsolute/論理原点を明示。既存1px寸法/clipを保持し、live roleは残す。候補選択後の実statusを確認する。

証拠：docs/design-renewal/batches/B043/captures/reviewer-api-extra-7/checks.json, docs/design-renewal/batches/B043/captures/reviewer-search-7/stone-status-overflow.log, docs/design-renewal/batches/B043/captures/reviewer-search-7/stone-desk-search-precheck-ltr-320.png

実metaの小口付き矩形が床の内側に独立して置かれている。石の側面に彫った段という説明と実際の接続が異なり、再び小カード追加へ寄る。

改善：実側面を一つの連続した肉厚として露出し、metaの読む場所をその面と接続させる。個別背景箱を撤去してnative補足の下側だけに彫った小口を残す。本文床の幅と狭幅の字面を守る。

証拠：docs/design-renewal/batches/B043/captures/reviewer-search-7/stone-desk-search-initial.png

## R595 letterpress-query-search — adjust

大題字の通常誌面を廃し、実query/filtersの黒い胴と一枚の校正紙を非対称の受けで接続。96px受けが24px空隙と104px開口を渡って底へ入り、本文は独立カードに分かれない。R534の嵌合石二片やR545活字スラグとは読み／操作面の関係が異なる。通常形合格。

共有baseの .wb-search-shell > :not(.wb-art) が .wb-sr のposition:absoluteをrelativeへ上書きする。trusted候補選択後のlive statusが実本文の下に視覚表示される。R594の320pxでは172.406pxのinline文字が右へ9.406px流出。全9件でrelativeと実字幅を確認。

改善：search shell前面化からsrを除く、または検索statusだけabsolute/論理原点を明示。既存1px寸法/clipを保持し、live roleは残す。候補選択後の実statusを確認する。

証拠：docs/design-renewal/batches/B043/captures/reviewer-api-extra-7/checks.json, docs/design-renewal/batches/B043/captures/reviewer-search-7/stone-status-overflow.log, docs/design-renewal/batches/B043/captures/reviewer-search-7/stone-desk-search-precheck-ltr-320.png

## R596 slotted-mail-search — adjust

Tの差込口と候補棚を保持し、1px入口／3px底の役割、14px本文と独立meta行が一貫する。通常形合格。

共有baseの .wb-search-shell > :not(.wb-art) が .wb-sr のposition:absoluteをrelativeへ上書きする。trusted候補選択後のlive statusが実本文の下に視覚表示される。R594の320pxでは172.406pxのinline文字が右へ9.406px流出。全9件でrelativeと実字幅を確認。

改善：search shell前面化からsrを除く、または検索statusだけabsolute/論理原点を明示。既存1px寸法/clipを保持し、live roleは残す。候補選択後の実statusを確認する。

証拠：docs/design-renewal/batches/B043/captures/reviewer-api-extra-7/checks.json, docs/design-renewal/batches/B043/captures/reviewer-search-7/stone-status-overflow.log, docs/design-renewal/batches/B043/captures/reviewer-search-7/stone-desk-search-precheck-ltr-320.png

## R597 rail-mounted-search — adjust

共通20pxレールと検索・各候補の36px腕が実際に接合する。候補は左／下の小口を持つ棚として統一。R282の照合顎・目盛梁やR302のI形一枚通知とは部材配置・結果群の保持を区別できる。通常形合格。

共有baseの .wb-search-shell > :not(.wb-art) が .wb-sr のposition:absoluteをrelativeへ上書きする。trusted候補選択後のlive statusが実本文の下に視覚表示される。R594の320pxでは172.406pxのinline文字が右へ9.406px流出。全9件でrelativeと実字幅を確認。

改善：search shell前面化からsrを除く、または検索statusだけabsolute/論理原点を明示。既存1px寸法/clipを保持し、live roleは残す。候補選択後の実statusを確認する。

証拠：docs/design-renewal/batches/B043/captures/reviewer-api-extra-7/checks.json, docs/design-renewal/batches/B043/captures/reviewer-search-7/stone-status-overflow.log, docs/design-renewal/batches/B043/captures/reviewer-search-7/stone-desk-search-precheck-ltr-320.png

## R598 stitched-query-search — adjust

一本の32px背と一対孔に40px糸を合わせ、旧周期斜線の不一致は解消。ただしroot/shellの同色背景が孔と12px隙間の下に残り、真の空隙は未成立。

共有baseの .wb-search-shell > :not(.wb-art) が .wb-sr のposition:absoluteをrelativeへ上書きする。trusted候補選択後のlive statusが実本文の下に視覚表示される。R594の320pxでは172.406pxのinline文字が右へ9.406px流出。全9件でrelativeと実字幅を確認。

改善：search shell前面化からsrを除く、または検索statusだけabsolute/論理原点を明示。既存1px寸法/clipを保持し、live roleは残す。候補選択後の実statusを確認する。

証拠：docs/design-renewal/batches/B043/captures/reviewer-api-extra-7/checks.json, docs/design-renewal/batches/B043/captures/reviewer-search-7/stone-status-overflow.log, docs/design-renewal/batches/B043/captures/reviewer-search-7/stone-desk-search-precheck-ltr-320.png

孔と紙／布間の12px隙間をrootとshellの#eadbe6が塞ぐ。展示背景を緑へ変えても孔・隙間は同じピンクのままで、全層の真空隙ではない。

改善：root/shellを透明化し、読む面・補強・背・紙自身だけに不透明面を置く。孔の一対中心と糸は維持し、dark/white/色付き展示背景で全層透過を再確認。

証拠：docs/design-renewal/batches/B043/captures/reviewer-material-7/stitched-query-search-ltr-background.png

## R599 open-shelf-search — adjust

Tの開いた検索面・余白を維持。候補名／説明／metaの三行と細い罫で読み順が明瞭。通常形合格。

共有baseの .wb-search-shell > :not(.wb-art) が .wb-sr のposition:absoluteをrelativeへ上書きする。trusted候補選択後のlive statusが実本文の下に視覚表示される。R594の320pxでは172.406pxのinline文字が右へ9.406px流出。全9件でrelativeと実字幅を確認。

改善：search shell前面化からsrを除く、または検索statusだけabsolute/論理原点を明示。既存1px寸法/clipを保持し、live roleは残す。候補選択後の実statusを確認する。

証拠：docs/design-renewal/batches/B043/captures/reviewer-api-extra-7/checks.json, docs/design-renewal/batches/B043/captures/reviewer-search-7/stone-status-overflow.log, docs/design-renewal/batches/B043/captures/reviewer-search-7/stone-desk-search-precheck-ltr-320.png

## 確認範囲

- 固定100author hash一致、配布CSS10一致。reviewer-hashes-7.json。
- Wizard585実native protocol成功。上方Nextの押面・紙への接触と実操作を確認。
- Search実nativeは8件protocol成功。R594は構造focus/結果focus/semantic reorder/nativeUndo/IME/async後の長文320pxでstatus横overflowにより停止。独立調査でvisible本文ではなく共有srのposition上書きと特定。padding不足の初期仮説は撤回。
- 9Search全てでlabel trusted click→native input focus、外部focus中updateがfocusを奪わないこと、trusted第二候補clickが実id bを通知することを追加確認。reviewer-api-extra-7。
- 9Search×320/768 LTR/RTL=36条件を別の実描画で保存。元の長文probeの一部画像は撮影前viewport resetを含んだため、幅評価の主画像はreviewer-material-7を使う。
- R598の下層透過を背景色変更で確認。糸の位置一致と全層の孔を別に判断。
- 予備旧版／元native beforeと今回の実像を比較し、既承認の最寄部品との差を記録。

## 限定事項

- round8が提出されたが、この記録は固定round7の履歴として保存。修正の成功は別判定。
- React追加の独立検査は別作業中。主担当4形式の成功を独立native成功と混同しない。
- Wizard章数helperはdisplay:contents footerのゼロ矩形で一度停止。これは製品の欠陥ではなく子の実矩形へ集約する検査器修正対象。通常native protocolは成功。
