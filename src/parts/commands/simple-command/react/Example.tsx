import React, {useState} from 'react';
import SimpleCommand, {type SimpleCommandProps} from './SimpleCommand';
const initial: SimpleCommandProps = {
  "label": "Your next move.",
  "triggerLabel": "コマンドを探す",
  "items": [
    {
      "id": "create",
      "label": "新しいドキュメント",
      "description": "空白のページから始める",
      "group": "CREATE",
      "icon": "plus",
      "shortcut": "N",
      "keywords": [
        "new",
        "create",
        "作成"
      ]
    },
    {
      "id": "project",
      "label": "プロジェクトを開く",
      "description": "最近使ったワークスペース",
      "group": "NAVIGATE",
      "icon": "folder",
      "shortcut": "G P"
    },
    {
      "id": "search",
      "label": "すべての資料を検索",
      "description": "名前・本文・タグから探す",
      "group": "NAVIGATE",
      "icon": "search",
      "shortcut": "/"
    },
    {
      "id": "view",
      "label": "表示を切り替える",
      "description": "一覧とグリッド",
      "group": "PREFERENCES",
      "icon": "grid",
      "children": [
        {
          "id": "list",
          "label": "リスト表示",
          "icon": "file"
        },
        {
          "id": "grid",
          "label": "グリッド表示",
          "icon": "grid"
        }
      ]
    },
    {
      "id": "preferences",
      "label": "環境設定",
      "description": "自分に合う使い方に",
      "group": "PREFERENCES",
      "icon": "settings",
      "shortcut": ","
    },
    {
      "id": "export",
      "label": "エクスポート",
      "description": "権限が必要です",
      "group": "PREFERENCES",
      "icon": "arrow",
      "disabled": true
    }
  ],
  "hotkey": false
};
export default function Example() {
 const [message,setMessage]=useState('');
 return <><SimpleCommand {...initial} hotkey onExecute={(item,signal)=>{if(!signal.aborted)setMessage('実行先へ接続: '+item.label);}}/><p role="status">{message}</p></>;
}
