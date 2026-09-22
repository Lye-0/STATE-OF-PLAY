'use client';
import React,{useState} from 'react';
import EssentialSelect from './EssentialSelect';
const items=[
  {
    "value": "draft",
    "label": "下書き",
    "description": "編集を続けられます",
    "icon": "D",
    "badge": ""
  },
  {
    "value": "review",
    "label": "レビュー待ち",
    "description": "内容を確認しています",
    "icon": "R",
    "badge": ""
  },
  {
    "value": "published",
    "label": "公開済み",
    "description": "閲覧できる状態です",
    "icon": "P",
    "badge": ""
  }
];
export default function Example(){
 const [value,setValue]=useState(items[0].value);
 return <EssentialSelect label="STATUS / ステータス" name="choice" items={items} value={value} onValueChange={setValue}/>;
}
