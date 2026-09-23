# カテゴリ読み込み中のOrbital Loom

カテゴリ切り替え中の文字だけの待機表示を、Orbital Loomに置き換えました。添付された「HTML + TypeScript／導入向け (portable)」プロンプトと既存の `src/parts/loaders/orbital-loom-loader/` を照合しています。3本の帯、中心の球、8秒の立体回転、読込メッセージを保持しました。

サイトには同じパーツの正本がすでにあります。ローダーカテゴリを初回から読み込まないよう、`src/app/category-loading.ts` にサイトの待機表示、`src/app/category-loading.css` に必要な造形と動きだけを置いています。配布用パーツ本体とそのコード・使い方・AI用プロンプトは変更していません。今後Orbital Loom本体の造形を修正するときは、ギャラリー側の待機表示も照合してください。

`src/app/gallery.ts` は初期カテゴリとカテゴリ変更時に表示し、完了・失敗・次のリクエスト時に監視を解除します。前の一覧の高さを保つのでページ位置が跳ねません。アニメーションは画面外・非表示タブ・縮小モーションで停止し、装飾は読み上げ対象から外して、メッセージをstatusとして残します。初回起動前のNixie表示は別の責務です。

検証は `npm run test:gallery-navigation` で行います。実ブラウザーでカテゴリ取得を遅らせ、Orbital Loomの形・動き、縮小モーション、1440px／390pxのページ位置と取り外しを確認します。`npm run test:lazy-loading` では開発・本番のカテゴリ別取得を確認します。
