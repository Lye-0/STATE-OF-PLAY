# UNFOLD / RESPONSIVE — v4.5.0

## 変更の考え方

アコーディオン16種類のAタイプと、入力欄6種類のAタイプを既存IDのまま改修しました。数は588種類・25カテゴリのままです。新しい装飾は各部品の一部であり、ギャラリー専用CSSに依存しません。

「特定の大きなマークを付ける」よりも、実際の操作で素材そのものが動く表現を中心にしています。汎用的なタイトルや本文へ変更でき、サンプル図版やバッジを入れなくても成立する設計です。

## アコーディオン

| パーツ | 固有の表現 |
| --- | --- |
| Folio / `folio-accordion` | 紙の背から、折り畳まれた面がほどける。 |
| Aurora Fold / `aurora-fold-accordion` | 光の幕が引き上がり、透明な面の奥から内容が現れる。 |
| Studio Rack / `studio-rack-accordion` | シャッターの羽根が起き上がり、ラックの内側が開く。 |
| Blueprint Fold / `blueprint-accordion` | 格子が立ち上がり、走査線が内容の輪郭を描く。 |
| Silk Chapter / `silk-chapter-accordion` | 畳まれた布のひだが解け、光沢だけがゆっくり移る。 |
| Glass Vault / `glass-vault-accordion` | 二枚のガラス扉が左右へ退き、内容が浮かび上がる。 |
| Copper Ledger / `copper-ledger-accordion` | 銅の帯が回転して開き、内側の暗い面を見せる。 |
| Observatory / `observatory-accordion` | 開口が円を描いて広がり、夜の奥行きが現れる。 |
| Garden Notes / `garden-notes-accordion` | 葉のような紙の重なりが、左右にひらく。 |
| Prism Stack / `prism-stack-accordion` | 結晶の断面が離れ、虹色の縁が内容を囲む。 |
| Transit Board / `transit-board-accordion` | 案内板のフラップが開き、次の情報へつながる。 |
| Gallery Frame / `gallery-frame-accordion` | 四隅から額縁が伸び、余白の中に内容を展示する。 |
| Carbon Case / `carbon-case-accordion` | ケースの蓋が起き、内側のライナーが奥から現れる。 |
| Ribbon Index / `ribbon-index-accordion` | 折り返した帯がほどけて、ひとつの長い紙面になる。 |
| Tide Pages / `tide-pages-accordion` | 水の膜が引かれ、波紋が内容の縁へ広がる。 |
| Museum Drawer / `museum-drawer-accordion` | 引き出しの側板が伸び、紙の底面が手前へ滑る。 |

- 開くときだけでなく、閉じる途中に再度開く操作にも追従します。古いアニメーションが最後まで再生されてから入力を処理する方式ではありません。
- `data-open` / `aria-expanded` / 本文の`inert`は実際の状態です。`--unfold`と`--unfold-lift`は表示専用の値であり、公開状態を遅らせません。
- 開閉のたびに本文を複製・作り直しません。入力欄・リンク・チェックボックスなどを本文へ配置でき、入力値を保持します。ただしアプリ側でコンポーネントを取り外した場合の永続保存は行いません。
- 複数展開、必ず1つ開く設定、無効見出し、動的な項目追加、長い本文、入れ子、RTLに対応する元の制御を保ちます。
- 一部のパーツは内容の登場にも短い遠近変化を使います。静止状態では本文のtransformを外し、文字を鮮明に表示します。
- `sop-unfold-scene`は装飾専用の8面です。読み上げ・ポインター操作の対象ではありません。実際の本文をこのレイヤーへ移さないでください。

Reactは既存のコンポーネントへ、これまでどおり`items`、`expanded`、`onExpandedChange`などを渡します。新しい内部レイヤーは自動で入ります。Vanilla版は新しい`markup.html`も同時に更新してください。古いマークアップのままCSSだけ更新すると、新しい面の演出は揃いません。

## 選択的に改修したテキストボックス

| パーツ | 固有の表現 |
| --- | --- |
| Obsidian Field / `obsidian-field` | 黒い二つの面が離れ、入力に合わせて光の切れ目が呼吸する。 |
| Capillary Field / `capillary-field` | フォーカスで水の膜が持ち上がり、入力に小さな波が返る。 |
| Prism Field / `prism-field` | 結晶の縁が開き、白い入力面に分光の余韻が走る。 |
| Ribbon Field / `ribbon-field` | 折り込まれた帯の端が、フォーカスに応じて広がる。 |
| Orbit Search / `orbit-search` | 検索面は静止したまま、二つの軌道がフォーカスへ整列する。 |
| Contour Note / `contour-note` | 等高線の層がフォーカスで広がり、入力の余韻だけが伝わる。 |

残り18種類（Aタイプ10種・Bタイプ8種）は維持しました。native input / textarea、ラベル、補助説明、クリア操作、エラー、readonly、disabled、フォーム、既存の公開APIを保ちます。

フォーカスで素材が変わり、入力で短い余韻が生まれます。input / textareaそのものにはtransformやfilterを掛けません。入力開始時にクリアボタンが出現しても編集面の幅を動かさないよう、選択したスキンではボタンの領域を確保しています。

装飾用の追加処理は入力イベントの発生のみを受け取り、入力値の内容を読み取り・保存・送信しません。IME変換中は入力の脈動を止め、確定後に短い反応を返します。フォーカス中に常時動かし続ける処理はありません。

文字数カウンター、クリア、パスワード表示切替、autoGrowなどは元の機能部が担当します。新しい装飾のために値を加工・フォーマット・自動送信しないでください。

## 内部構成と後片付け

| 機能 | 元の動作 | 追加した表現 |
| --- | --- | --- |
| アコーディオン | `accordion-controller.ts` / `accordion-view.tsx` | `unfold-accordion.ts` / `unfold-accordion-view.tsx` / `unfold-accordion.css` |
| 入力欄 | `text-field.ts` / `text-field-view.tsx` | `responsive-field.ts` / `responsive-field-view.tsx` / `responsive-field.css` |

機能側のネイティブコントローラーは変更していません。React共通ビューには内部用の任意`rootRef`、アコーディオンには任意`motionLayer`を加えました。これらはnative inputの属性として流しません。通常の利用者が指定する必要はありません。

Vanillaの`init()`の返り値は従来どおりです。画面から取り外すときは`destroy()`を呼びます。ReactではEffectのcleanupから解除します。Observer・イベント・RAFは各個体の管理です。初期化関数を二重に呼ばないでください。

縮小モーションでは表示値を最終状態へ合わせます。強制配色では装飾を取り除き、本物の操作部と本文を残します。非表示ページや取り外した要素を描き続けません。

## 配布コードとプロンプト

パーツごとのバージョンを2.0.0へ更新しています。TSX/JSX/TS/JS、導入向け/元の構成、個別ファイル・パーツZIP・AIプロンプトは同じ元ソースから生成されます。新しい共有CSSと動作処理も依存として含まれます。

プロンプトには、素材の特徴、状態と表示進捗を分離すること、入力面を動かさないこと、本文を再生成しないことを記載しました。旧デザインへの指示を残していません。配置先は利用するプロジェクトの規約へ合わせて変更できますが、importとCSSの参照先も一緒に更新してください。

## v4.4.0からの更新

今回の差分ZIPはv4.4.0に対するものです。`STATE-OF-PLAY/`の中身を既存リポジトリに重ねて配置します。削除対象ファイルはありません。`.git`、ロックファイル、独自変更は保護してください。個々のパーツを既に他のアプリへ移植している場合は、該当パーツのZIPを改めて取得し、ローカル修正と比較して更新します。

依存ライブラリの追加・バージョン変更はありません。確認用コマンドは次のとおりです。

```sh
npm install
npx playwright install chromium
npm run verify
npm run dev
```

新しい操作試験だけなら`npm run test:unfold`です。通常はViteでテスト用の分離文書を配信し、Playwrightから操作します。ネットワーク制約のある検証環境専用に明示的なoffline経路があります。利用時にoffline環境変数を設定する必要はありません。
