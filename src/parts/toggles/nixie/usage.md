## Nixie の補足

Type A / CSS + Spring。ガラス管に浮かぶ0と1。真鍮のキーで、静かな発光を切り替える。

基準サイズ: 274×148px。展示ページの倍率ではなく、実際の部品サイズです。素材とばねの動きはstyles.cssと共通コントローラーで完結します。

React: checked/onCheckedChangeによる外部制御、またはdefaultCheckedで内部制御します。aria-labelを実際の機能名に変更してください。
Vanilla: 対象buttonをinitへ渡し、取り外すときはdestroy()を呼びます。同じページへ何個でも独立配置できます。
無効状態、キーボード、縮小モーションを確認してください。
