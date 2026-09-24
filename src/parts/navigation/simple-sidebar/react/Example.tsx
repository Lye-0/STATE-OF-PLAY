import React, {useState} from 'react';
import SimpleSidebar, {type SimpleSidebarProps} from './SimpleSidebar';
const initial: SimpleSidebarProps = {
  "label": "ワークスペース",
  "brand": "Fieldwork",
  "items": [
    {
      "id": "overview",
      "label": "概要",
      "description": "ワークスペースの全体像",
      "href": "#destination",
      "icon": "home"
    },
    {
      "id": "projects",
      "label": "プロジェクト",
      "description": "取り組んでいること",
      "href": "#destination",
      "icon": "grid",
      "badge": "04"
    },
    {
      "id": "library",
      "label": "ライブラリ",
      "description": "蓄積した資料と部品",
      "href": "#destination",
      "icon": "folder"
    },
    {
      "id": "more",
      "label": "もっと見る",
      "icon": "more",
      "children": [
        {
          "id": "recent",
          "label": "最近の更新",
          "description": "最新の変更を確認",
          "href": "#destination",
          "icon": "clock"
        },
        {
          "id": "settings",
          "label": "設定",
          "description": "表示とワークスペース",
          "href": "#destination",
          "icon": "settings"
        }
      ]
    }
  ],
  "defaultActive": "overview",
  "layout": "sidebar"
};
export default function Example() {
 const [active,setActive]=useState('overview');
 return <><SimpleSidebar {...initial} active={active} onActiveChange={setActive}/><section id="destination"><h2>移動先</h2><p>hrefを実際のルートへ変更してください。</p></section></>;
}
