import React, {useState} from 'react';
import OrbitalDock, {type OrbitalDockProps} from './OrbitalDock';
const initial: OrbitalDockProps = {
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
      "id": "settings",
      "label": "設定",
      "href": "#destination",
      "icon": "settings"
    }
  ],
  "defaultActive": "overview",
  "layout": "dock"
};
export default function Example() {
 const [active,setActive]=useState('overview');
 return <><OrbitalDock {...initial} active={active} onActiveChange={setActive}/><section id="destination"><h2>移動先</h2><p>hrefを実際のルートへ変更してください。</p></section></>;
}
