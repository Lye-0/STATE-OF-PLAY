# Radio color review — final

**15件すべて合格。** 追加修正された4番号を含め、実際に描画された背景との測定値は全件5:1以上です。通常の配色系統と素材表現を保ち、文字・native input・labelの矩形とfontは変更前と一致しました。

|番号|部品|説明／番号の実背景最小比|判定|
|---|---|---:|---|
|R251|library-drawer-choice|5.657:1|pass|
|R252|perforated-ballot|5.599:1|pass|
|R253|loop-label-choice|5.669:1|pass|
|R254|stepped-tile-choice|5.679:1|pass|
|R255|folio-spine-choice|5.743:1|pass|
|R256|rail-seat-choice|5.623:1|pass|
|R257|numbered-pocket-choice|5.055:1|pass|
|R258|clasp-band-choice|5.691:1|pass|
|R259|open-file-choice|5.064:1|pass|
|R260|signpost-choice|5.540:1|pass|
|R261|stapled-card-choice|5.665:1|pass|
|R262|channelled-choice|5.846:1|pass|
|R263|letter-tab-choice|5.033:1|pass|
|R264|shallow-bowl-choice|5.592:1|pass|
|R265|index-ribbon-choice|5.044:1|pass|

初回はR257/R259/R263/R265の番号が3.188/2.959/3.800/2.611:1でした。祖先の背景色を調べるCI検査だけでは、その前に描かれる擬似面（袋・索引・封筒・布）の色を捉えません。番号だけの追加濃色化で解消しました。

独立React fixtureのCSSと正本15件を照合し、宣言済み色置換だけであることを確認。実Chromiumで各3選択状態（計45）を操作し、文字を一時透明にした実描画背景を採取して測定しました。320px RTLとdark/light強制色の証拠も保存。4修正件の強制色読字・選択視認に回帰はありません。

証拠: [source-checks-final.json](source-checks-final.json)、[pixel-contrast.json](pixel-contrast.json)、captures/final-four.jpg、captures/readings.json。初回結果はreview-1.json/mdに保持。画像とログはcaptures/以下のGit管理外です。

検査範囲は文字色修正です。独立ブラウザはTSX portableを使用し、残る3形式は主担当の成功ログを参照しました。任意のカスタムテーマと全API回帰は今回の判定範囲外です。作者・共有源・本番distは変更していません。
