# B043 round-9 独立再レビュー

9 pass / 1 adjust（R594の長見出しと縦小口の干渉）。通常造形は全10合格。

## R585 letterpress-stage-wizard — pass

実Nextを片持ち腕の平らな押し面へ置き、40×44pxの先端が24px空隙を渡って記入紙へ8px接する。通常大数字フォームから、実操作と一枚の紙が形を担う構造へ変わった。Nextは上部右／RTL左の明瞭な52px面として発見でき、字や入力を変形しない。

## R591 card-catalog-search — pass

閉じた外枠を撤去し、112pxの検索前板が一枚の記録束へ16px重なる。左右の斜め奥行き面は紙の下端24px手前で終わり、自由端が露出する。R251各行引出し／R511SVと色引出しとは、一つの前板が実候補全体の束を保持する関係を区別できる。前回の額縁像を解消し、A通常形合格。 共有sr修正によりtrusted選択後statusはabsoluteの1pxへ戻り、label focus／外部focus非奪取／第二候補id通知も成功。

## R592 radar-window-search — pass

Tの検索軸と実候補中央の照準を保持。2px軸／14px点／読み面の階層は整理され、実説明・metaを隠さず読める。通常造形合格。 共有sr修正によりtrusted選択後statusはabsoluteの1pxへ戻り、label focus／外部focus非奪取／第二候補id通知も成功。

## R593 folded-query-search — pass

入口の背景を実query／filtersの自然高へ確保。全幅の直線折返しから候補紙の右の返りへ続く形が実像で読める。R575の巻き曲面と自由端、R222三面の交互ずれとは折れの方向・読む面の接続を区別できる。通常形合格。 共有sr修正によりtrusted選択後statusはabsoluteの1pxへ戻り、label focus／外部focus非奪取／第二候補id通知も成功。

## R594 stone-desk-search — adjust

連続した116pxの実側面にmetaを揃え、各metaの独立箱を廃した。斜めの一体石と6pxの彫った小口が接続し、主形は合格。ただし側面境界が長い検索名を横断する読字・素材の干渉が残る。 共有sr修正によりtrusted選択後statusはabsoluteの1pxへ戻り、label focus／外部focus非奪取／第二候補id通知も成功。

幅768pxで長い実検索名の途中を、full-height側面の6px縦小口が横切る。入力面は自身の不透明背景で保護されるが、labelは透明なため文字の途中に材料の境界が入る。

改善：側面を結果領域から下へ限定するか、実labelの読面を不透明にして小口を背面へ通す。通常の石形・meta接続は保持し、長名LTR/RTLで字面を保護する。

証拠：docs/design-renewal/batches/B043/captures/reviewer-material-9/stone-desk-search-768-ltr.png

## R595 letterpress-query-search — pass

大題字の通常誌面を廃し、実query/filtersの黒い胴と一枚の校正紙を非対称の受けで接続。96px受けが24px空隙と104px開口を渡って底へ入り、本文は独立カードに分かれない。R534の嵌合石二片やR545活字スラグとは読み／操作面の関係が異なる。通常形合格。 共有sr修正によりtrusted選択後statusはabsoluteの1pxへ戻り、label focus／外部focus非奪取／第二候補id通知も成功。

## R596 slotted-mail-search — pass

Tの差込口と候補棚を保持し、1px入口／3px底の役割、14px本文と独立meta行が一貫する。通常形合格。 共有sr修正によりtrusted選択後statusはabsoluteの1pxへ戻り、label focus／外部focus非奪取／第二候補id通知も成功。

## R597 rail-mounted-search — pass

共通20pxレールと検索・各候補の36px腕が実際に接合する。候補は左／下の小口を持つ棚として統一。R282の照合顎・目盛梁やR302のI形一枚通知とは部材配置・結果群の保持を区別できる。通常形合格。 共有sr修正によりtrusted選択後statusはabsoluteの1pxへ戻り、label focus／外部focus非奪取／第二候補id通知も成功。

## R598 stitched-query-search — pass

root/shellを透明化し、32px通し背／候補紙だけに面を限定。孔と12px隙間は実展示背景へ抜け、40px糸は一対孔中心を結ぶ。query〜filtersの実header紙とcaption紙を確保して読字も回復。R578の大穴番号橋、R538二枚布、R378斜め週縫合とは一本背と独立資料の関係を区別し、通常形合格。 共有sr修正によりtrusted選択後statusはabsoluteの1pxへ戻り、label focus／外部focus非奪取／第二候補id通知も成功。

## R599 open-shelf-search — pass

Tの開いた検索面・余白を維持。候補名／説明／metaの三行と細い罫で読み順が明瞭。通常形合格。 共有sr修正によりtrusted選択後statusはabsoluteの1pxへ戻り、label focus／外部focus非奪取／第二候補id通知も成功。

## 確認範囲

- source100 SHA-256／配布CSS10一致。round7から97authorファイル不変、変更はR591/594/598のCSS3のみ。reviewer-hashes-9.json。共有base修正は100hash外で別確認。
- 9Search最終native全protocol成功：構造filter/resultfocus、active semanticid reorder、native編集/Undo/caret/FormData/reset、key/IME、controlled拒否、disabled、async中断とstale抑止、空/error/retry、長320/390/768LTRRTL、forced/reduced、cleanup。reviewer-search-9。
- 9Search×trusted labelclick／外部focus中update／実第二候補clickを再検証、全成功。statusは全9でabsolute・実幅1px、役割を保持。reviewer-api-extra-9。
- 9Search×320/768LTRRTL=36条件を独立撮影。R598は緑の展示背景へ実孔・隙間が抜けることを確認。reviewer-material-9。
- React実4形式×9の追加36条件：accepted controlled native insertText→Control+Z、拒否値、outsidefocus保持が全成功。reviewer-react-extra-7。既存main生成React fixtureをread-onlyで実操作したもの。
- Wizard585はround7からauthor10ファイル不変、native protocol成功を継承。display:contents footerを実子へ集計した章数helperで1/2/4/7全現在位置×320/768LTRRTL成功。reviewer-wizard-counts-7。

## 限定事項

- R594の長見出しと側面境界だけ残件。通常造形は全10合格として次回保持する。
- React追加検査は既存生成実fixtureを使用。immutable native snapshotの全protocol検査と区別し、React全protocolをこちらで再実行したとは扱わない。

追加確認：9Search×320/768LTRRTL=36条件、normal hover→leave→reenter後の実label/input/candidate/meta位置・寸法・font不変。reviewer-hover-9/checks.json。
