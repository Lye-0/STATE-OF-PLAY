'use client';
import React,{useState} from 'react';
import OutlineSelect from './OutlineSelect';
const items=[
  {
    "value": "updated",
    "label": "更新日が新しい",
    "description": "最近の変更を先頭に",
    "icon": "↑",
    "badge": ""
  },
  {
    "value": "name",
    "label": "名前順",
    "description": "AからZの順に表示",
    "icon": "A",
    "badge": ""
  },
  {
    "value": "created",
    "label": "作成日順",
    "description": "新しく追加した順",
    "icon": "+",
    "badge": ""
  }
];
export default function Example(){
 const [value,setValue]=useState(items[0].value);
 return <OutlineSelect label="SORT BY / 並び順" name="choice" items={items} value={value} onValueChange={setValue}/>;
}
