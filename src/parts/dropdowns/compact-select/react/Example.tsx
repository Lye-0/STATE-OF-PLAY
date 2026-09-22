'use client';
import React,{useState} from 'react';
import CompactSelect from './CompactSelect';
const items=[
  {
    "value": "10",
    "label": "10件ずつ",
    "description": "少ない項目を集中して読む",
    "icon": "10",
    "badge": ""
  },
  {
    "value": "25",
    "label": "25件ずつ",
    "description": "日常の一覧に",
    "icon": "25",
    "badge": ""
  },
  {
    "value": "50",
    "label": "50件ずつ",
    "description": "まとめて確認する",
    "icon": "50",
    "badge": ""
  }
];
export default function Example(){
 const [value,setValue]=useState(items[0].value);
 return <CompactSelect label="DISPLAY / 表示件数" name="choice" items={items} value={value} onValueChange={setValue}/>;
}
