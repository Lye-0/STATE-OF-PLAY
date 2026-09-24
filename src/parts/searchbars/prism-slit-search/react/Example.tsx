import React, {useState} from 'react';
import PrismSlitSearch, {type PrismSlitSearchProps} from './PrismSlitSearch';
const initial: PrismSlitSearchProps = {
  "label": "Find your next idea.",
  "placeholder": "キーワードを入力",
  "filters": [
    {
      "id": "all",
      "label": "すべて"
    },
    {
      "id": "docs",
      "label": "ドキュメント"
    },
    {
      "id": "settings",
      "label": "設定"
    }
  ],
  "items": [
    {
      "id": "design",
      "label": "Design system",
      "description": "部品とトークンの設計資料",
      "group": "docs",
      "meta": "DOC",
      "keywords": [
        "設計",
        "デザイン"
      ]
    },
    {
      "id": "research",
      "label": "Research notes",
      "description": "検討した内容と決定事項",
      "group": "docs",
      "meta": "NOTE"
    },
    {
      "id": "workspace",
      "label": "Workspace settings",
      "description": "表示や通知の設定",
      "group": "settings",
      "meta": "SETUP"
    },
    {
      "id": "prototype",
      "label": "Prototype review",
      "description": "動きと操作の確認",
      "group": "docs",
      "meta": "DRAFT"
    },
    {
      "id": "team",
      "label": "Team directory",
      "description": "一緒に作るメンバー",
      "group": "settings",
      "meta": "TEAM"
    }
  ]
};
export default function Example() {
 const [query,setQuery]=useState('');
 const [message,setMessage]=useState('');
 return <><PrismSlitSearch {...initial} query={query} onQueryChange={setQuery} onSubmit={value=>setMessage('検索要求: '+value)} onResult={item=>setMessage('選択: '+item.label)}/><p role="status">{message}</p></>;
}
