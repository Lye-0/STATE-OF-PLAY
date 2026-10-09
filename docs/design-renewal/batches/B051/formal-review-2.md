# B051 round 2 独立検査

**changes_requested — 1 redesign / 1 adjust / 8 pass。**

native操作全10は成功。R706のA主形を再設計、R710の可視軌道と光点の接続を調整。

## R699 paper-fan-fold-ornament — pass

元の平行短冊面を廃し、六つの幅広い表裏の紙骨が同じ固定支点で開閉する主形になった。全開で紙面の違いと実pivot、閉じ側で折れの密度が読める。R719の細い放射線とは面の量と開角の連動が異なり、通常/reducedでも扇の姿を保つ。

最寄比較: R719 sunrise-ribs-ornament, R697 balanced-shards-ornament

## R701 offset-portals-ornament — pass

元の直角門の入れ子を保持し、3px正面と6px側面で奥行きを明確化。全体hover拡大を除き、同じ軸の左右視差へ整理。Tとして原型を磨いており、R711の対角曲辺/傾斜とは静止像から区別できる。

最寄比較: R711 nested-saddles-ornament, R696 telescopic-stroke-loader

## R702 expanding-brackets-loader — pass

六対の開いた括弧を保ち、中心まで長さのある3px弧と9px間隔で暗い密集を軽減した。上下が閉じず横の呼吸として読め、R694の円ゲートとは輪郭/方向が異なる。

最寄比較: R694 rotary-gate-loader, R708 segment-orbit-loader

## R703 linkage-crosses-ornament — pass

元の連結折線を5px腕・13px関節へ太くし、共通角度から各腕位置を計算して隣接関節を維持。全周期の屈伸で細いグラフから機構としての見通しが改善。Tの主形を崩していない。

最寄比較: R704 crossing-pins-loader, R698 lift-platform-loader

## R705 ribbon-lattice-ornament — pass

三本ずつの帯を維持し、交点ごとの下通りを透明にして前後を交互にした。単なる半透明格子から実重なりへ改善し、通常/forcedとも帯の端と織りの空隙が読める。

最寄比較: R498 woven-rating, R715 elliptic-weave-ornament

## R706 rolling-diamonds-loader — redesign

旧版の小片の波から一塊にはなったが、実像は六つの四角い額縁/カードを少しずらして重ねた束が面内で90度傾くだけ。正面の三角グラデーションと内側L線を足しても一つの厚いrollとしての側面・端面の関係が弱く、A主形の再設計を継続する。

最寄比較: R697 balanced-shards-ornament, R713 prismatic-slats-ornament, R261 three-layer paper choice, R696 telescopic-stroke-loader

- **R706-stacked-frames-not-solid-roll**: 全周期0/25/50/75/100%を見ても、平行な四角い枠が数pxずつずれた束が面内回転する。個々の枠線が前後に反復し、連続した側面がないため、一つの厚いrollより紙/カードの積層に見える。既存の積層片・入れ子枠の系統から十分離れていない。
  改善方向: 六枚を平行な枠として描く構成を廃す。例えば共通の大きい菱形断面を前後二端面と、その端点を正確につなぐ四つの長い側面で構成する一つの斜めの立体へ。70〜90px程度の端面と80〜110px程度の深さが作る連続シルエットを主形にし、辺の接点を一致させる。回転は同じ立体の面が前後へ交代する運動とし、単なる面内のカード束の傾きや別の小片の波へ戻さない。内側の額縁線は撤去し、端面/側面の向きと前後で厚みを示す。通常・reduced・forcedの実像で改めて独立性を判断する。
  証拠: captures/reviewer-phases-2/rolling-diamonds-loader-0.png, captures/reviewer-phases-2/rolling-diamonds-loader-0.75.png, captures/reviewer-mechanisms-2/rolling-diamonds-loader-forced-dark.png, captures/reviewer-neighbours-2.png

## R707 stone-stack-mobile-ornament — pass

元の大小の積石を保持し、22px厚/20px段と4px小口で上下を重ねた。中心線の実ピクセルは全5位相で68–189pxまで連続しており、前版の等間隔に浮く石から支持のある積層へ改善。微小な揺りも重量感を崩さない。

最寄比較: R693 tilting-shelves-ornament, R174 stone planes

## R708 segment-orbit-loader — pass

元の六弧の花軌道を保持し、3px輪郭と交互の明度で暗部の存在感を改善。±8度の位相差でも中心と外形が保たれ、forcedでも閉じた六輪にならず弧として読める。

最寄比較: R694 rotary-gate-loader, R715 elliptic-weave-ornament

## R710 counterflow-lines-loader — adjust

元の対向する二閉路と三組の流れを保持し、軌道と光点の可読性は改善。ただし可視capsuleと実Bezier軌道が別の形で、光点が線から大きく離れる。通常形の根本変更は不要だが接合調整が必要。

最寄比較: R715 elliptic-weave-ornament, R337 figure-eight progress

- **R710-flow-detached-from-visible-track**: 可視軌道は146×82pxの角丸閉路を±24度回転、光点は別のBezier offset-pathを走る。offset-distance91%/4914msで実光点中心は(39.496,90.681)。可視二閉路のどちらからも約14.7px離れ、厚さ4pxの光点が左内側へ浮く。通常/reduced時の線と流れの説明が一致しない。
  改善方向: 描画する閉路と光点のoffset-pathを同じ幾何から生成する。二つの実SVG経路を描画と移動で共用するか、同じpathを両者へ反映し、色と進行方向を一致させる。0/25/50/75/91/100%と停止/reducedで中心が可視線上にあることを測定。既存の二閉路と対向流のT主形は保持する。
  証拠: captures/reviewer-phases-2/counterflow-lines-loader-4914.png, captures/reviewer-phases-2/counterflow-actual.json, captures/reviewer-phases-2/checks.json

## R711 nested-saddles-ornament — pass

対角二隅の曲辺・反対二隅の直辺、側断面と44度の静止傾斜が入れ子全体を特徴づける。R701の直角門の単なる色替えではなく、reduced/forcedでも対角曲率を保持。Tの保持調整として承認。

最寄比較: R701 offset-portals-ornament, R702 expanding-brackets-loader

## 実施検査

- 固定2のauthor100hash/manifestと配布CSS10を照合し全一致。reviewer-hashes-2.json。作者/shared/snapshot無編集。
- 元auditのR2/T8を確認し、原版全10stage画像と既存730件の近似を比較。reviewer-baseline-2.png、reviewer-neighbours-2.png。Tを不要に作り直さず元の長所と指摘箇所で評価。
- actual portable native全10でrunningを確認、公開setPaused停止/再開、6要素、0/650/1300msの実境界、320390768LTRRTL、reducedでanimation0、dark/light forced、destroy/pageerrors=[]を独立実行。全10機能PASS。reviewer-mechanisms-2/checks.json。
- 追加で各実durationの0/25/50/75/100%を撮影し全周期の主形を確認。hover/leave/reenterの実文字/字体/位置が全10不変。reviewer-phases-2/checks.json。
- R707は全5位相の中央ピクセル列が連続し、上石/下石の支持が保たれることを画像で確認。R703共通角度の連結、R705交互前後、R701/711の通常と静止の差を確認。
- R710は可視capsuleの実computed寸法/transformと、actual pointの91%座標を採取。Bezier101点と両閉路のサンプル比較で約14.7pxの実乖離。補助計算だけでなく4914ms画像と実DOM中心で確認。
- forcedは全10dark/light実像確認。通常の材質色を失っても、ゲート/括弧/軸/織り/支点/曲率の主要形は保持。R706はforcedでも額縁束の主形不足が残る。

## 限界

- React全4形式、既存native2layouts/React4forms互換性、type/contracts/galleryは主担当の検証。独立は固定portable native全10とsource/export CSS・実像。
- 固定native fixtureにgallery専用pauseボタンはないため、公開setPaused APIで停止再開を操作。galleryボタン自身のclick連携は今回独立再検査していない。
- 形の名称を文字通り再現すること自体は目的にしていない。R706の指摘はrollという名だけでなく、反復する平板の束から独立したA主形への不足。提案採用だけでは合格を保証しない。
