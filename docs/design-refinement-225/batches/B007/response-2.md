# round2への対応

設定変更後のform resetで初期値を現行のmin/max/step/rangeへ再正規化する。初期値62→step5なら60となり、getData・表示・native input・FormDataを一致させる。controlled・取消されたreset・destroy後の処理は従来どおり保持。共有coreの変更として回帰テストを追加する。

R234の補助文字は#535b59へ暗くして石面のコントラストを確保する。
