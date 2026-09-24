import React, {useState} from 'react';
import PaperContext, {type PaperContextProps} from './PaperContext';
const initial: PaperContextProps = {
  "label": "ドキュメントの操作",
  "targetLabel": "Project notes",
  "targetDescription": "右クリック、Shift F10、または …",
  "items": [
    {
      "id": "open",
      "label": "開く",
      "icon": "file",
      "shortcut": "Enter"
    },
    {
      "id": "copy",
      "label": "複製",
      "icon": "copy",
      "shortcut": "Ctrl D"
    },
    {
      "id": "move",
      "label": "移動先を選ぶ",
      "icon": "folder",
      "children": [
        {
          "id": "folder-work",
          "label": "作業フォルダー",
          "icon": "folder"
        },
        {
          "id": "folder-archive",
          "label": "アーカイブ",
          "icon": "folder"
        }
      ]
    },
    {
      "id": "sep-a",
      "label": "",
      "kind": "separator"
    },
    {
      "id": "pin",
      "label": "ピン留め",
      "kind": "checkbox",
      "checked": true
    },
    {
      "id": "notify",
      "label": "更新を通知",
      "kind": "checkbox"
    },
    {
      "id": "sep-b",
      "label": "",
      "kind": "separator"
    },
    {
      "id": "delete",
      "label": "削除",
      "icon": "trash",
      "danger": true
    },
    {
      "id": "share",
      "label": "共有リンクを作成",
      "description": "管理者のみ",
      "disabled": true,
      "icon": "arrow"
    }
  ]
};
export default function Example() {
 const [message,setMessage]=useState('');
 return <><PaperContext {...initial} onAction={item=>setMessage('操作要求: '+item.label)}/><p role="status">{message}</p></>;
}
