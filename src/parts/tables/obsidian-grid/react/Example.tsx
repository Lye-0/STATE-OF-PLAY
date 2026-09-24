import React, {useState} from 'react';
import ObsidianGrid, {type ObsidianGridProps} from './ObsidianGrid';
const initial: ObsidianGridProps = {
  "label": "Workspace files",
  "description": "変更と進行状況を、一つの一覧に。",
  "columns": [
    {
      "id": "name",
      "label": "ドキュメント",
      "width": 190
    },
    {
      "id": "status",
      "label": "状態",
      "kind": "badge",
      "width": 110
    },
    {
      "id": "size",
      "label": "容量 KB",
      "kind": "number",
      "width": 106
    },
    {
      "id": "progress",
      "label": "進行度",
      "kind": "progress",
      "width": 140
    }
  ],
  "rows": [
    {
      "id": "r1",
      "name": "Design principles",
      "status": "Ready",
      "size": 128,
      "progress": 100
    },
    {
      "id": "r2",
      "name": "Interaction notes",
      "status": "Review",
      "size": 64,
      "progress": 72
    },
    {
      "id": "r3",
      "name": "Component inventory",
      "status": "Draft",
      "size": 256,
      "progress": 35
    },
    {
      "id": "r4",
      "name": "Release checklist",
      "status": "Ready",
      "size": 32,
      "progress": 92
    },
    {
      "id": "r5",
      "name": "Accessibility review",
      "status": "Review",
      "size": 96,
      "progress": 60
    },
    {
      "id": "r6",
      "name": "Motion studies",
      "status": "Draft",
      "size": 48,
      "progress": 24
    },
    {
      "id": "r7",
      "name": "Project overview",
      "status": "Ready",
      "size": 180,
      "progress": 100
    },
    {
      "id": "r8",
      "name": "Implementation plan",
      "status": "Review",
      "size": 86,
      "progress": 80
    }
  ],
  "pageSize": 4,
  "selectable": true,
  "resizable": true,
  "stickyFirst": true,
  "rowActions": [
    {
      "id": "open",
      "label": "詳細を開く",
      "icon": "arrow"
    },
    {
      "id": "more",
      "label": "その他の操作",
      "icon": "more"
    }
  ]
};
export default function Example() {
 const [selected,setSelected]=useState<string[]>([]);
 const [message,setMessage]=useState('');
 return <><ObsidianGrid {...initial} selected={selected} onSelectionChange={setSelected} onRowAction={(action,row)=>setMessage(action.label+': '+String(row.name))}/><p role="status">{message}</p></>;
}
