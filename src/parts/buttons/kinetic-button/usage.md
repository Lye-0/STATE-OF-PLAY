# Kinetic Button
重なったプレートと、独立した矢印セルが動く。

## 用途と接続
ネイティブbuttonを使う、操作のためのパーツです。処理は利用先のonClickまたはaddEventListenerへ接続します。コンポーネント自体は送信・保存・削除・通信を行いません。破壊的操作を接続する場合は、アプリ側で確認や取消を設計してください。
初期のtypeはbuttonです。フォーム送信はtype="submit"、リセットはtype="reset"を明示します。name/value/form/formAction等はネイティブ属性を利用できます。

## 状態
Reactではloading/disabledを渡します。通常DOMではinit(root)の返り値のsetLoading(bool)/setDisabled(bool)を利用します。処理中はaria-busyとaria-disabledで表し、キャプチャ段階で再操作を防ぎつつフォーカスを保持します。disabledは標準の無効状態です。既存の祖先captureハンドラーまでは抑止できないため、実際の処理はボタン自身のonClickに接続します。
ラベルはchildren、装飾アイコンはiconで差し替えます。子要素に別の操作部品を入れません。refを渡して通常のボタンへアクセスできます。処理の結果表示はアプリ側のstatus領域で行います。

## アニメーションと配布
CSSのみのhover/focus/active表現と、処理中のスピナーです。常時RAF・Canvas・依存ライブラリはありません。通常DOMのdestroy()は登録解除と初期属性の復帰を行います。展示用カウンターや疑似処理時間はパーツ本体には含めません。CSSと内部ファイルを一緒に配置してください。
