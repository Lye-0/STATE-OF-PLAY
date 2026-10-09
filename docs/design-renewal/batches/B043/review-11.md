# B043 round-11 最終独立レビュー

全10件 pass。R594の長見出しと側面境界の干渉を解消、通常造形は保持。

## R585 letterpress-stage-wizard — pass

実Nextを片持ち腕の平らな押し面へ置き、40×44pxの先端が24px空隙を渡って記入紙へ8px接する。通常大数字フォームから、実操作と一枚の紙が形を担う構造へ変わった。Nextは上部右／RTL左の明瞭な52px面として発見でき、字や入力を変形しない。 round11で対象10authorファイル不変としてround9の合格を継承。

## R591 card-catalog-search — pass

閉じた外枠を撤去し、112pxの検索前板が一枚の記録束へ16px重なる。左右の斜め奥行き面は紙の下端24px手前で終わり、自由端が露出する。R251各行引出し／R511SVと色引出しとは、一つの前板が実候補全体の束を保持する関係を区別できる。前回の額縁像を解消し、A通常形合格。 共有sr修正によりtrusted選択後statusはabsoluteの1pxへ戻り、label focus／外部focus非奪取／第二候補id通知も成功。 round11は4説明ファイルだけを112px前板／16px重なり／左右28px（狭幅18px）奥行き面／紙端24px手前という実実装に同期。React差分もJSDocのみで実行内容不変。

## R592 radar-window-search — pass

Tの検索軸と実候補中央の照準を保持。2px軸／14px点／読み面の階層は整理され、実説明・metaを隠さず読める。通常造形合格。 共有sr修正によりtrusted選択後statusはabsoluteの1pxへ戻り、label focus／外部focus非奪取／第二候補id通知も成功。 round11で対象10authorファイル不変としてround9の合格を継承。

## R593 folded-query-search — pass

入口の背景を実query／filtersの自然高へ確保。全幅の直線折返しから候補紙の右の返りへ続く形が実像で読める。R575の巻き曲面と自由端、R222三面の交互ずれとは折れの方向・読む面の接続を区別できる。通常形合格。 共有sr修正によりtrusted選択後statusはabsoluteの1pxへ戻り、label focus／外部focus非奪取／第二候補id通知も成功。 round11で対象10authorファイル不変としてround9の合格を継承。

## R594 stone-desk-search — pass

一体の斜め石と連続meta側面／6pxの彫った小口の通常合格を保持。実labelに不透明な読面を確保し、長い検索名の途中へ側面境界が入る残件を解消。320/390/768のLTR/RTL実像で文字を保護し、横overflow0。dark/light forcedでも白黒の実字形が明瞭。

## R595 letterpress-query-search — pass

大題字の通常誌面を廃し、実query/filtersの黒い胴と一枚の校正紙を非対称の受けで接続。96px受けが24px空隙と104px開口を渡って底へ入り、本文は独立カードに分かれない。R534の嵌合石二片やR545活字スラグとは読み／操作面の関係が異なる。通常形合格。 共有sr修正によりtrusted選択後statusはabsoluteの1pxへ戻り、label focus／外部focus非奪取／第二候補id通知も成功。 round11で対象10authorファイル不変としてround9の合格を継承。

## R596 slotted-mail-search — pass

Tの差込口と候補棚を保持し、1px入口／3px底の役割、14px本文と独立meta行が一貫する。通常形合格。 共有sr修正によりtrusted選択後statusはabsoluteの1pxへ戻り、label focus／外部focus非奪取／第二候補id通知も成功。 round11で対象10authorファイル不変としてround9の合格を継承。

## R597 rail-mounted-search — pass

共通20pxレールと検索・各候補の36px腕が実際に接合する。候補は左／下の小口を持つ棚として統一。R282の照合顎・目盛梁やR302のI形一枚通知とは部材配置・結果群の保持を区別できる。通常形合格。 共有sr修正によりtrusted選択後statusはabsoluteの1pxへ戻り、label focus／外部focus非奪取／第二候補id通知も成功。 round11で対象10authorファイル不変としてround9の合格を継承。

## R598 stitched-query-search — pass

root/shellを透明化し、32px通し背／候補紙だけに面を限定。孔と12px隙間は実展示背景へ抜け、40px糸は一対孔中心を結ぶ。query〜filtersの実header紙とcaption紙を確保して読字も回復。R578の大穴番号橋、R538二枚布、R378斜め週縫合とは一本背と独立資料の関係を区別し、通常形合格。 共有sr修正によりtrusted選択後statusはabsoluteの1pxへ戻り、label focus／外部focus非奪取／第二候補id通知も成功。 round11で対象10authorファイル不変としてround9の合格を継承。

## R599 open-shelf-search — pass

Tの開いた検索面・余白を維持。候補名／説明／metaの三行と細い罫で読み順が明瞭。通常形合格。 共有sr修正によりtrusted選択後statusはabsoluteの1pxへ戻り、label focus／外部focus非奪取／第二候補id通知も成功。 round11で対象10authorファイル不変としてround9の合格を継承。

## 今回の確認

- 固定source100 SHA-256／native CSS10一致。round9から95ファイル不変、R591の説明4ファイルとR594 CSS1だけ変更。reviewer-hashes-11.json。
- R591 ReactはJSDocのみ、meta/usage/promptも実寸法との整合更新。R594 CSSはlabel background:var(--paper)の追加だけとexact diff確認。
- R594長い検索名・17長候補を320/390/768 LTR/RTL=6条件で描画。labelの字面へ側面小口が入り込まなくなり、横overflow0。reviewer-material-11。
- R594 dark/light forced×LTR/RTL=4条件を2RAF後実描画。白字黒面／黒字白面、検索文字・候補・meta・controlsを確認。reviewer-forced-11。
- 通常造形全10、他9の最終合格、Search9 native全protocolとfocus/status/hover、React追加36条件、Wizard章数は変更範囲外としてround9から継承。

## 限定事項

- 限定追検査。全API・React4形式をround11で再実行したとは扱わず、実行内容不変と前回成功を根拠に継承。
- 共有runtimeはround9から不変という固定入力範囲で評価。
