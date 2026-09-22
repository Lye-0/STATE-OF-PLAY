## Rack の補足

Type A / CSS + Spring。歯車がラックを噛み、精密な目盛りの上を進んでいく。

基準サイズ: 268×124px。展示ページの倍率ではなく、実際の部品サイズです。素材とばねの動きはstyles.cssと共通コントローラーで完結します。

React: checked/onCheckedChangeによる外部制御、またはdefaultCheckedで内部制御します。aria-labelを実際の機能名に変更してください。
Vanilla: 対象buttonをinitへ渡し、取り外すときはdestroy()を呼びます。同じページへ何個でも独立配置できます。
無効状態、キーボード、縮小モーションを確認してください。
