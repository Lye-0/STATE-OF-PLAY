# B043 — 最終実装

## letterpress-stage-wizard

実「次へ」を押し版の片持ち腕の操作面へ載せ、一枚の現在の記入紙をその下へ通す。32pxの鋳物の支持脚、76pxの開いた腕、40pxの押し面が24pxの空間を渡って紙へ8px接する関係が実作用を示す。native入力と字面を押し潰さず、完了・エラー・戻るも同じ記入紙で保つ。上の実操作は52px以上の明瞭な押し面、狭幅では脚を22pxへ縮めて読む幅を守る。

## card-catalog-search

実検索口を112pxの前板として、一枚の候補の記録束へ16px被せる開いた引出し。上の12pxの返りと18pxの小口、左右28pxの斜めの奥行き面が前板から記録束へ接し、奥行き面は紙の自由端の24px手前で終わる。四辺の外枠と候補ごとの半円切欠きを廃し、名前と説明は連続紙面、実補足は側端の索引耳へ置く。狭幅は奥行き面18px、空・非同期・失敗も同じ読む束で確認する。

## radar-window-search

検索軸と実候補の照準を保ち、14pxの検索名・48pxの実操作・17pxの候補名と14pxの説明へ整える。照準は実候補の中央に固定し、検索軸の2pxと14pxの点が対応する。狭幅・RTLでも軸と候補の関係を保ち、実補足を消さず自然に折り返す。

## folded-query-search

検索と対象を置く上の面が52pxの折り返しを通り、実候補の紙の背へ降りる一枚の折り紙。本文の紙は右の返しから24px内側へ浮かせ、6pxの側面と10pxの自由端が紙の厚みを示す。通常の同色の枠を廃し、native検索欄と候補の読む面を平らに保つ。

## stone-desk-search

検索の開口から実候補へ続く、一体の石の斜め切断面。全体の左側に72pxの大きい傾きを作り、検索の16pxの切口をその起点へ置く。各候補の箱を廃し、名前と説明は一枚の連続した切断床、実補足だけが6pxの小口で側面の彫った段へ接続する。狭幅は実補足を本文直下へ戻し、石の外形と字面の間に十分な読む幅を残す。

## letterpress-query-search

実queryと対象を組む黒い胴が、全候補の一枚の校正紙を非対称の開口で保持する。胴の幅96pxの受けは24pxの空間を通り、104pxの開口の底へ8px接する。本文はカードへ分けず、実候補名22pxと実説明14px、朱の欄外の実補足で照合する。飾りの大題字を廃し、問い合わせを組む側と読む紙の実接合を主形へ変える。

## slotted-mail-search

差込口と実候補の棚を保ち、実補足を独立した読む行へ揃える。検索口は1px、棚の底は3pxと役割を分け、操作48pxと14pxの対象名を確保。狭幅でも補足を消さず、長い候補と空・失敗・再試行で同じ読む順序を保つ。

## rail-mounted-search

一つの厚い縦レールに、実検索口と候補の棚を組む。検索口の36pxの腕はレールへ入り、候補の紙面は8pxの左小口と12pxの下側を持つ。細い青い罫を太らせただけの箱を廃し、読む面をレールから16px離した位置に揃える。字面・native入力は動かさず、17件でも読む棚の中だけでスクロールする。

## stitched-query-search

queryの補強から下端まで32pxの一本の布背を通し、実候補の独立紙を一対の孔で綴じる。候補の布側孔と紙側孔は同じ実y32px、中心間40pxの糸が12pxの空間を渡る。各候補間も背を連続し、孔の下へ同色の面を敷かない。繰り返す斜線を廃し、一本の背と実資料の綴じる位置を構造にする。native名・説明・補足は孔から離れた平らな紙面で読む。

## open-shelf-search

開いた検索面の余白を保ち、20pxの実候補名・14pxの説明・13pxの実補足を三つの読む行へ整える。欄全体の枠を増やさず、入口の2px、実補足の左の22px、結果の1pxの罫が役割を分ける。48pxの実操作と14pxの対象名で、狭幅とRTLでも読む順序を保つ。

Native undo uses keyboard.insertText for one real insertion. Individual keyboard.type character events may form separate native undo groups (first probe reverted the last character); undo assertions must verify one editor action, rather than assuming Chromium groups all separate key events.

Native form IME reproduction: Enter during synthetic composition bypassed search handlers but still submitted the real enclosing form, resetting the page. Prevent the premature Enter form default while composition is active; commit still handled by compositionend.

Workbench HTTP suite watch ENOSPC: this real fixture suite does not exercise HMR, so its local Vite server now has hmr:false/watch:null to avoid watching archived design evidence. No assertions skipped. Real watcher behavior remains covered by gallery browser suite.

Actual React controlled editor reproduction: controller restored old query before React batched parent accepted it, destroying native undo. SearchView flushes only controlled onQueryChange acceptance through installed ReactDOM.flushSync before controller paint. Export dependency closure explicitly allows the existing ReactDOM module; delivery manifests declare react-dom (18+) only when included source imports it. Other React parts and native exports keep their dependency list.
