# round 2への対応

R112/114/119/121/124/125：枠色の--field-errorとエラー説明の文字色を分離。説明には淡い生成りの赤みを持つ不透明な下地（#fff1ea）と濃い赤（#852e28）を組み合わせ、ホストの明暗に依存しない読み面とした。小さな本文を12pxにし、長文は折り返す。左の3px線と既存aria-live/aria-invalidでエラーを伝える。通常時のhiddenは維持し、forced colorsではCanvas/CanvasText/LinkTextを使う。
残る4件と共有タブ処理はround 2から変更なし。
