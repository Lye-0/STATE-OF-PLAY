# サイトのカテゴリ選択へAurora Selectを統合

## 目的

サイト上部の「COLLECTION」カテゴリ移動を、Aurora Selectの低彩度ガラス面と追従する選択面で表示する。既存パーツを複製せず、既存の共有コントローラーとAuroraの共有スキンを使用する。組み込み元のAurora Selectはv4.3.0で、外部依存はない。

## 接続

カテゴリ一覧から日本語名・英語名・パーツ数を候補に構築し、選択値を既存のsetCategoryへ渡す。タブ選択や直リンクによるカテゴリ変更はSelectController.setValueで表示へ同期する。上下/Home/End/文字検索、Escapeでの取消、Popover API、画面端での配置、縮小モーションはAurora Selectの実装を使う。

ギャラリーは共有のselect-controller.tsから初期化し、src/shared/aurora-select.cssを起動時に読み込む。Aurora Selectパーツのstyles.cssも同じ共有スキンを参照するため、外観のCSSは一元化される。アプリ側からsrc/parts/dropdowns/aurora-selectをimportせず、初回表示でドロップダウンカテゴリの実装が先読みされないようにする。遅延読み込みの契約は維持する。

## 確認

npm run test:category-selectで26候補、件数、Escape取消、タブとの同期、390px幅の配置を確認する。tests/lazy-loading.browser.tsでは初期表示にドロップダウンカテゴリの実装が取得されず、遅延読み込み・競合・直リンク・失敗時復旧が保たれることを確認する。
