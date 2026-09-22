# Studio Rack — 再現仕様

ラックマウント機器の溝と小さなメーター。音の設定が内側に続く。
タイプA / ANALOG / AUDIO。閉じた見出しだけでなく、展開内容のタイポグラフィ・数値カード・罫線・図版の余白も維持する。

## 外観の正本
styles.css + accordion-base.css + panel-content.css。値: {
  "bg": "linear-gradient(170deg,#393b35,#232822)",
  "accent": "#d5bd89",
  "muted": "#a9aa95",
  "line": "#70715a5c",
  "radius": "6px"
}

## 状態と操作
固定の高さをアニメーションしない。grid-template-rows:0frから1frへ400msで展開し、内部内容の高さに追従する。reduced-motionでは即時。複数/単一展開、外部制御、見出し間のキー移動、閉じたパネルのinert、同時配置時のID分離を維持。ネストした入力のクリックでパネルを閉じない。

## 組み込み
見出し・説明・数値・図版は展示例。利用先の情報に差し替え、component items.contentへ渡す。画面全体やアプリ入口を上書きしない。panel-content.cssの内側デザイン用クラスは再利用可能で、必須の固定文言ではない。
