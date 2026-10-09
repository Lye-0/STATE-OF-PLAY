# 共有 context 焦点露出の独立補足検査

pass。対象は `src/shared/workbench/context.ts` の焦点処理に限り、B020作者の造形・可読性・狭幅指摘の合格とは別。

B020 round5の作者CSSを固定し、現行共有処理だけを使用。5個体×LTR/RTL×通常/forced×700/300px高×1/.75倍の80条件、800確認が成功。End/Home/矢印循環/文字キー検索/更新後焦点復帰/再openで焦点全体がpanel内へ露出し、外側scrollYは保持された。実画像10枚を視認した。

React StrictModeの5個体×4配色方向条件も120確認成功。props更新後の焦点と露出を保持し、unmount後の残存0、runtime error0。

コード差分はfocus + panel.scrollTopの補正に限定し、panel境界とscaleを考慮。pointer操作、選択値、action callback、cleanupを変更せず、新しいlistenerや非同期処理も増やさない。親担当によるWorkbench41・全50skinの1000焦点露出・型チェック成功ログと、修正前の回帰失敗を確認した。

最終source/test hash・証拠は [context-focus-review.json](context-focus-review.json)。B020 round5の旧exportは差戻しのまま。新freezeでこの共有hashを取り込む必要がある。
