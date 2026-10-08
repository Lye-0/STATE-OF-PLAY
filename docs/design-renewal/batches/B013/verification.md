# B013 検証

最終round-7 native6セグメントの実radio/フォーム/reset/キー/disabled/縦/固定文字/長文320・390・768px/RTL/forced/reduced、native4チェックの実FormData/required/Space/label/reset/mixed/disabled/固定文字/長文/RTL/native hit==visible box/forced/reduced、React実6items・4チェック各4配布形式のcontrolled/uncontrolled/rejected/実フォーム/required/reset/混在/Space/label/disabled/ref/独立説明ID/長文/RTL/forced/StrictMode cleanup、ギャラリー10件が成功。20セグメント・20チェックnative2レイアウト、型チェック3構成、730配布契約4件成功。セグメントReactは最終書出しと同じround-5以降不変の6ソースを検証。

独立Astra round-5ではR181の折返しが紙に隠れる問題と、R193が一般的な折角カードに留まる問題を指摘。R181は上下22pxの折面を紙の前、文字の後ろへ移して実際に包む口を作った。R193は小折角を廃止し、左全高38pxの折面と本文の紙を別の実輪郭にして、10pxの受けを確認欄へ接続。round-6ではRTL時に支持が離れる問題を指摘され、紙/折面/受け/破線/paddingをlogical方向へ一括変更。round-7全10件合格。LTR/RTL×短文/長文320×off/on/mixedの12状態で48px input==box、実中央クリックとglyph余白、接合を独立確認。100hash/CSS10一致。

補助nativeのdisabled label clickはPlaywrightがdisabled操作を拒否するため、イベントをdispatchしてchecked不変を検証。fixture側の操作方法だけを訂正。React固定fixtureのconfigFile:falseではappのvirtual:sop-browserの依存スキャン警告が出たが、書出しコンポーネント各4形式は実行成功、pageerror0。アプリの実ギャラリー検証は通常Vite設定で成功。

共有runtime/import変更なし、B001 production build成功を参照。新6iはnative markup/例/React markerArtで一致。Chromiumとメディアエミュレーションの検証で、他ブラウザ/実機touchは未確認。全730を再操作せず、元監査と近似候補を比較。
