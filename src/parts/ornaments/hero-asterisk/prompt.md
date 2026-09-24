# Hero Asteriskを既存プロジェクトへ組み込む

STATE OF PLAYの見出しで使う星形の印「✳」を、装飾パーツとして再現してください。同梱の`markup.html`、`styles.css`、React版、Vanilla版を正本とし、別の星形や画像へ置き換えないでください。

文字は63px、Arial系の細い字形、基準色は`#d1e6b2`です。ホバー中は中心を軸に180度回転し、`1.4s cubic-bezier(.16,1,.3,1)`で静かに止まります。クリック・選択の機能は持たせません。図形は`aria-hidden`で、複数配置しても互いに干渉しません。

React版は`paused`、通常DOM版は`data-paused`と`setPaused()`で回転を停止します。取り外す際はVanilla版の`destroy()`を呼びます。`prefers-reduced-motion`では静止し、強制配色でも印の存在が分かるようにします。

利用先のディレクトリ構造とCSS管理を確認し、TSX／JSX／TS／JSから選んだ形式に必要なファイルを省かず導入してください。ホバー前後、停止、動きを減らす設定、幅320px、配布用ZIPの依存関係を確認し、未実行の検証は明記してください。
