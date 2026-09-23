# TRANSFORM — v4.6.0

タブ・セグメント・ポップアップ・スライダーのAタイプを各16種類、計64種類改修しました。新しいIDを追加する更新ではなく、合計は25カテゴリ・588パーツのままです。

## デザインと操作

選択した値や表示する内容は、その操作で直ちに確定します。ばねで遅れて追従するのは、選択片・背景面・反射などの装飾だけです。ラベル、入力文字、フォーカス、rangeの論理値を演出のために遅らせません。

- タブ：選択面の材質と本文の背後の構造が同じ操作に応答します。本文は非選択時にhiddenにするだけで、再生成しません。
- セグメント：実際のラジオ項目の位置と幅を測り、選択片を動かします。2択・3択・4択以上、横・縦、折り返し、RTLへ対応します。値には安定した文字列を使ってください。
- ポップアップ：本物のdialogのトップレイヤー、フォーカス復帰、スクロールロックを維持しながら、紙、膜、開口、シャッターなどの展開を加えます。閉じる処理は180msで、演出中もトップレイヤーを保持します。本文をクローンせず、ユーザーの入力を維持します。
- スライダー：本物のinput[type=range]とSVGの装飾レールを分離します。上下限の2ハンドルは同じmin/maxの尺度を使い、交差する入力は相手の値までに制限します。装飾が描画されなくても値・フォーム操作は独立しています。

アイコンやサンプル文章がなくても成立する造形です。実際のアプリへ組み込む際は、items、children、footer、ラベル、単位などを置き換えてください。

## 公開API

既存の公開props・controllerのメソッドを維持しています。

| カテゴリ | React | 通常HTML / TS / JS |
|---|---|---|
| Tabs | items / value / defaultValue / onValueChange / activation / orientation / disabled | setValue / getValue / refresh / setOrientation / setDisabled / destroy |
| Segments | items / value / defaultValue / onValueChange / name / form / orientation | setValue / getValue / refresh / setOrientation / setDisabled / destroy |
| Popups | title / children / footer / open / defaultOpen / onOpenChange / closeOnEscape / closeOnBackdrop | setOpen / getOpen / updateOptions / setDisabled / destroy |
| Sliders | value / defaultValue / onValueChange / min / max / step / range / unit / disabled / readOnly / controllerRef | getData / setData / updateFoundation / setDisabled / setPaused / destroy |

Reactのスライダーは、外側の要素をReactが管理し、その内側だけを専用コントローラーが管理する既存のDOM領域分離を引き継ぎます。`value`を渡す場合は`onValueChange`から親の値を更新してください。親が変更を採用しない場合、部品も元の値を維持します。

### 項目数を変更する

ReactのTabs/Segmentsは`items`の配列を変更します。Tabsの項目には`content`を渡してください。HTML版は自分のリスト直下の項目を増減し、Tabsでは同じ`data-choice-value`に対応する`data-panel-value`のパネルを用意して`refresh()`を実行します。選択面の幅を手動計算する必要はありません。配布ZIP内のExampleと使い方を参照してください。

### 2ハンドルのスライダー

```tsx
<TideRange
  label="表示範囲"
  range
  min={0}
  max={100}
  step={1}
  unit="%"
  value={range}
  onValueChange={next => {
    if (Array.isArray(next) && next.every(v => typeof v === 'number')) {
      setRange(next as number[]);
    }
  }}
/>
```

`range=false`では数値を、`range=true`では数値2個の配列を渡します。設定変更は`updateFoundation({min,max,step,unit,value})`でも可能です。readOnlyはネイティブrangeに対応する読み取り専用属性がないため、入力操作を無効にする既存の方式です。readOnly/disabledの入力は標準のFormDataに含まれません。送信する必要がある値はアプリの状態から扱ってください。

## 内部構成

- `presentation-spring.ts`：一時的な数値チャンネルの有限ばね。表示中かつ移動中だけRAFを要求。
- `transit-selection.ts` / `transit-selection-view.tsx` / `transit-selection.css`：通常版とReact版で同じ装飾計測・CSSを使用。
- `transit-popup.ts` / `transit-popup-view.tsx` / `transit-popup.css`：ポインター光と一回のCSS展開。モーダルの状態は既存コントローラーの担当。
- `drive-slider.ts` / `drive-range-art.ts` / `drive-slider.css`：native rangeと16種類の有限SVG形状。1個体48pathまで。

既存のtabs-view / segment-view / popup-viewには、内部用の任意のroot参照と装飾スロットだけを追加しました。利用者がこれらの内部propsを手動で設定する必要はありません。

## モーションと後片付け

動きを減らす設定では状態を即座に表示し、装飾の連続描画・CSSアニメーションを止めます。強制配色では装飾を隠し、ネイティブの操作と選択表示を残します。非表示タブ・画面外ではばねを最終位置へ合わせ、取り外し時にはRAF・Observer・イベントを解除します。本文やラベルは動作処理が勝手に書き換えません。

## 配布と更新

「導入向け」「元の構成」の両方、およびTSX/JSX/TS/JSを引き続き生成します。新しいファイルは依存解析の対象なので、ソース表示とパーツZIPにも含まれます。新しいCSSだけを抜き出すのではなく、パーツZIPの本体フォルダーをまとめて更新してください。

v4.5.0への差分適用では、ZIP内のSTATE-OF-PLAY/の中身を同じ位置へ重ねます。削除対象はありません。.git、既存のロックファイル、独自変更を事前に保護してください。依存ライブラリの追加・バージョン変更はありません。

## 改修一覧

### タブ

| ID | 演出 |
|---|---|
| `atlas-tabs` | 紙の索引が持ち上がり、地図の折り目が選択位置からひらく。 |
| `aurora-tabs` | 選択面を追う透明な層と、本文の背後へ流れる光の幕。 |
| `blueprint-tabs` | 移動する基準線と、選択時だけ開く製図のグリッド。 |
| `copper-tabs` | 押し込まれた銅のキーが滑り、二枚の薄板がひらく。 |
| `folio-tabs` | 選んだインデックスから紙の束がほどけ、ページにつながる。 |
| `kinetic-tabs` | レールの裂け目が選択位置へ走り、二枚の面が左右に分かれる。 |
| `nixie-tabs` | スモークガラスの奥でフィラメントが切り替わり、暖かい光が走る。 |
| `observatory-tabs` | 軌道を持つ選択窓と、回転して開く観測面。 |
| `obsidian-tabs` | 黒い板が割れ目から滑り、奥の細い光を露出させる。 |
| `optic-tabs` | レンズ状の指標が滑り、薄い絞り羽根がひらく。 |
| `prism-tabs` | 結晶のファセットが切り替え方向へ回り、分光する面を作る。 |
| `ribbon-tabs` | 選択中の帯が持ち上がり、折り返しと影が次の位置へ渡る。 |
| `signal-tabs` | 走るドットの窓と、切り替え時だけ立ち上がる走査面。 |
| `studio-tabs` | 選択キーの移動に合わせて金属ルーバーが一度ひらく。 |
| `ticket-tabs` | 切符の端が持ち上がり、ミシン目から次の面がひらく。 |
| `velvet-tabs` | 布の選択面が沈み、重なったひだが本文の両側へ退く。 |

### セグメント

| ID | 演出 |
|---|---|
| `atlas-segments` | 精密な折り目のあるキーが、測った位置へ滑り込む。 |
| `blueprint-segments` | 選択に追従するグリッド窓と伸縮する基準線。 |
| `capillary-segments` | 液体レンズが伸び、次の候補で丸みを取り戻す。 |
| `ceramic-segments` | 釉薬を帯びた選択片が少し傾き、静かに着地する。 |
| `copper-segments` | 幅を変えながら滑る銅の面と、移動方向に走る細い反射。 |
| `detent-segments` | ばねの溝がキーの前後で開き、定位置へ吸い付く。 |
| `lens-segments` | 厚い縁のレンズが候補を包み、周囲の反射が曲がる。 |
| `mercury-segments` | 鏡面の選択片が移動中に伸び、止まると金属の面に戻る。 |
| `nixie-segments` | 真空管の選択窓が移動し、電極が短く点灯する。 |
| `orbital-segments` | 選択窓の二つの軌道が回転しながら次の候補へ移る。 |
| `origami-segments` | 薄い折り返しがひらき、次の候補の下に紙が伸びる。 |
| `prism-segments` | 六つの結晶面が移動中に展開し、次の選択面を結ぶ。 |
| `signal-segments` | 配列した光点が移動方向へ短く伝わる選択キー。 |
| `studio-segments` | 小さなルーバーが回り、選んだモードへキーが収まる。 |
| `ticket-segments` | 紙のキーの端が一度折れ、切り離さずに位置を変える。 |
| `velvet-segments` | 布のひだがキーの移動で開き、停止すると柔らかな面に整う。 |

### ポップアップ

| ID | 演出 |
|---|---|
| `archive-drawer` | 薄い資料の層が横にほどけ、その奥から引き出しがひらく。 |
| `atelier-palette` | 重なった紙面がわずかに扇状へひらき、内容の面を支える。 |
| `aurora-window` | 液体の膜が押し広がり、反射する縁を持つ窓になる。 |
| `blueprint-sheet` | 中央の交点から四方向へ設計面が展開する。 |
| `botanical-note` | 薄い葉のような紙の層が左右へほどける。 |
| `copper-receipt` | 巻かれた薄い銅の面が伸び、平らな受け取り面になる。 |
| `dock-sheet` | 下辺に沿う一枚の板が起き上がり、奥行きのあるシートになる。 |
| `folio-window` | 本の表紙のように面がひらき、重なった紙が見える。 |
| `gallery-window` | 額のシャッターが四辺へ退き、中央の内容が現れる。 |
| `nixie-console` | 縦に走るフィラメントが開口をつくり、琥珀色の窓を点灯する。 |
| `observatory-window` | 回転する開口が広がり、観測窓の内部が現れる。 |
| `opal-window` | 白い膜が膨らんでほどけ、光を含む磁器ガラスになる。 |
| `prism-window` | 斜めの結晶板が重なりから分離し、窓の輪郭に収まる。 |
| `titanium-dialog` | 二枚の金属シェルが逆方向へひらき、内側の操作面を見せる。 |
| `transit-pass` | 中央の折り目から切符が広がり、ミシン目の面をつなぐ。 |
| `velvet-invitation` | ベルベットのひだが左右へ流れ、内容の舞台をひらく。 |

### スライダー

| ID | 演出 |
|---|---|
| `aurora-range` | 引いた量に合わせて光の層が波打ち、指を離すと落ち着く。 |
| `mercury-range` | 鏡面のレールがつまみの周囲で膨らみ、金属の液面をつくる。 |
| `nixie-range` | 値に応じて電極が点灯し、操作中だけ熱が走る。 |
| `folio-range` | つまみの前後で紙のひだが折り畳まれ、広げた範囲を示す。 |
| `blueprint-range` | 基準線がつまみ付近で分かれ、移動先へ製図の線が集まる。 |
| `prism-range` | 進めた部分でファセットが向きを変え、分光面がひらく。 |
| `copper-range` | コイルの間隔と反射が値に応じて変化する銅のレール。 |
| `botanical-range` | 細い葉脈がつまみの周りでひらき、元の形へ戻る。 |
| `velvet-range` | 柔らかなひだがつまみに押され、布の張りが変わる。 |
| `obsidian-range` | 黒い板の割れ目がつまみの周囲で開き、奥の光をのぞかせる。 |
| `ceramic-range` | 磁器の同心線がつまみの移動に反応する。 |
| `tide-range` | 透明な水路の波が値と速度に連動して広がり、停止すると静まる。 |
| `aperture-range` | つまみを囲む絞り羽根が量と操作に合わせて角度を変える。 |
| `transit-range` | 進んだ範囲へ送り目が現れ、紙の軌道が切り替わる。 |
| `relay-range` | レールの金属セグメントがつまみの通過順に反転する。 |
| `contour-range` | いくつもの等高線がつまみを中心に持ち上がり、地形を作る。 |

