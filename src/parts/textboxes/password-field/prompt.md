# Password Field — 入力可能なテキストボックスの再現仕様

デザイン分類: B。ESSENTIAL / PASSWORD。入力を隠し、必要なときだけ確認する。シンプルな認証フォームに。
見せる、隠す。 ネイティブのpassword inputを主役に、読みやすい16px以上の文字と静かなフォーカス反応を維持する。

## 外観
styles.cssのルート固有変数、グラデーション、レイヤー、線幅、角、文字組み、余白を正本とする。ラベル・入力面・補助説明・カウンター・エラー領域の順序を維持。装飾はsop-field-fx/symbol/baselineとCSSで描き、画像や絵文字に置き換えない。
フォーカスで光・縁・アイコンが変化するが、文字位置や入力幅が不必要に動かないようにする。
Bタイプは低い装飾密度と実用的な余白を優先する。常時アニメーションやCanvasを追加しない。

## 振る舞い
contenteditableや疑似入力に置換せず本物のinput/textareaを使う。表示名・placeholder・説明・name・valueは導入先へ適応させる。内部制御/外部制御、クリア、パスワード表示切替、readOnly/disabled、フォーム送信とresetを保持する。IME変換中の値をフォーマット/切断しない。Reactは入力された値を同期反映し、IME確定Enterを別操作に流用しない。
フォーカス・エラー・成功（利用先の指定）・disabled・readOnly・filledの視覚状態を確認。エラーは色だけでなく文章、aria-invalid、aria-describedbyで伝える。装飾用カウンターを毎打鍵読み上げない。labelの関連付け・同時配置時のID・外部inputRefを壊さない。

## データと後片付け
値はテキストとして扱い、innerHTMLへ入れない。パスワードや入力値を自動送信・localStorage保存・console出力しない。prefix/suffixは実値に混ぜない。import/CSS/内部依存を導入先に合わせて更新し、既存アプリの入口を上書きしない。observer/event/resetリスナーはdestroy/unmountで解除する。

## 確認
日本語IMEの開始・入力・確定、貼り付け、矢印によるキャレット移動、選択・Undo、maxlength、空文字、長文、外部からのvalue変更、複数配置、無効・読取専用、form.reset、Reactのアンマウント、スマホ幅、縮小モーションを確認する。合成IMEイベントによる検証とOSの実際の日本語IME検証は区別する。未実行の検証は実行したと書かない。
