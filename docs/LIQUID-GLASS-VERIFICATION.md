# v4.15.0 — Liquid Glass 統合検証

これはv4.15.0の検証記録です。v4.16.0の結果は [GLASS-COLLECTION-VERIFICATION.md](GLASS-COLLECTION-VERIFICATION.md) を参照してください。

## 統合範囲

トグル、ボタン、タブ、プルダウンにA/B各1種、計8種を追加した。現行リポジトリの817種を維持し、全825種・37カテゴリ。提供差分の基準版には、現在は削除済みのStitch CometとPaper Loaderが含まれ、Hero Asteriskが含まれていなかった。レジストリは置換せず、新作8種だけを追加した。

ギャラリーは現在のカテゴリ別遅延読み込みと、詳細ソースの要求時読み込みを保持した。新作は既存のカテゴリとA/Bの並びに加える。展示用背景とGLASS LAB設定は再利用コンポーネントの配布物へ含めない。詳細では背景・素材・文字配色・停止・任意の屈折を比較する。

## このリポジトリで確認したこと

| 検証 | 結果 |
| --- | --- |
| `npm run typecheck` | アプリ・React・ツールの3構成すべて成功 |
| `npm test` | 既存と新作を含む252/252件成功 |
| `npm run build` | Viteの本番ビルド成功 |
| `npm run test:liquid-glass` | 実Vite HTTPとChromiumで16項目成功。クリック、ドラッグ、キーボード、フォーム、背景、狭幅、強制配色、縮小モーション、停止、屈折リソースの後片付けを確認 |
| `npm run test:liquid-glass:gallery` | 全825件の本番プレビューで6項目成功。A/Bの通常順序と、外枠を固定したまま背景ドットが内側の風景を変えることを確認。8作品の4形式・2配置、計744ファイルの表示本文とプロンプトを配布内容と照合 |
| `npm run test:liquid-glass:exports` | 8種×2配置の16パッケージをChromiumのES Modulesで実行。操作と後片付けを含む4項目成功 |
| `npm run test:liquid-glass:react` | 実ReactのStrictModeで8作品を表示・操作し、SSR出力、hydration、取り外し後の後片付けを確認 |
| `npm run test:site-boot` | 初回26件、再読み込み、狭幅、縮小モーション、遅延と失敗の表示を確認 |
| `npm run test:browser` | Vite HTTPで23項目成功。全825件、A/B・カテゴリ、代表パーツの表示ソース7004ファイル、実JS・React配布、本番ビルドを確認 |
| `SOP_LAZY_MODE=production npm run test:lazy-loading` | 本番配信で全37カテゴリの遅延読み込み、順方向と逆方向のCSS順序、詳細ソース、ZIPと再試行を確認 |
| `npm run package` | v4.15.0の完全版ZIPを生成。マニフェストを含む8791ファイルのCRC・SHA-256を確認 |

検証はWindowsのローカルChromeを使用した。ブラウザーの実際の画素はOS・GPU・背景に依存する。標準のCSS描画と任意の屈折表現を区別し、任意の屈折は既定でOFFにしている。

## 元差分の検証との違い

提供元の記録はLinux上のオフライン文書を使った確認であり、React/Viteの依存を取得できなかったと記している。本統合では、現行リポジトリの依存を用いて実Viteビルド・HTTP配信・本番プレビュー・実Reactを確認した。提供元に添付されたログを本統合の成功証拠として再利用していない。

## 未確認事項

GitHub Actions上のWindows/Ubuntuランナー、Safari/iOS・Firefox・Edge実機、OSの透明度低減設定と支援技術、あらゆる背景での文字コントラスト、`npm audit` は未確認。透明度の高いClearは背景によって読みにくくなるため、導入先でRegular/Solidも比較する。SVGの屈折はCSS構文のサポート判定だけでは画素の正しさを保証できない。

## 再実行

```sh
npm run typecheck
npm test
npm run build
npm run test:liquid-glass
npm run test:liquid-glass:gallery
npm run test:liquid-glass:exports
npm run test:liquid-glass:react
npm run package
```

全カテゴリのブラウザー回帰を通す場合は `npm run verify` を使用する。
