# B012 検証

最終round-6 native9セグメントの実radio/選択値/FormData/reset/disabled skip/キー/縦/固定文字/長文320・390・768px/RTL/forced/reduced、React9×4形式の実items/description/icon/controlled/uncontrolled/rejected/native form/required/reset/disabled/縦/RTL/StrictMode cleanup、ギャラリー10件が成功。R170タブはround-1 native及びReact1×4の関連ARIA/本文/入力/キー/長文検証成功を参照し、正本不変。20タブ・20セグメントのnative2レイアウト、型チェック3構成、730配布契約4件成功。

独立Astra round-4でR174の断面の接点とR178の長文時の縫い目を指摘。R174は3種類の輪郭を同形の下の投影断面へ接続。R178は狭幅でwrap、固定skewを除いて端点が8pxの斜め切口に合う縫い目へ変更。round-5で中央が塗り潰されるpolygonの問題を追加指摘され、左右の独立した9px背景と破線maskへ修正。round-6全10件合格、100hash/CSS10一致。短文と320pxの長文、横/縦、白/暗色、選択1/2/3を独立撮影して文字上の横縞消失を確認。

React補助と既存native全カテゴリ検証では、幅変更直後に旧marker geometryを計測する競合が発生。responsive controllerのResizeObserver/RAF更新を2描画フレーム待って、同じscrollWidth判定を行うよう検証側を修正。2レイアウト全対象と4React形式で再実行成功。native操作や長文の判定基準は変更していない。

共有runtime/import変更なし、B001 production build成功を参照。新6iはnative markup/例/React markerArtで一致。Chromiumとメディアエミュレーションの検証で、他ブラウザ/実機touchは未確認。全730の再操作は行わず元監査と近似候補から造形比較。
