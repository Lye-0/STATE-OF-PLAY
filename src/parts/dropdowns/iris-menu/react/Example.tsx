'use client';
import React,{useState} from 'react';
import IrisMenu from './IrisMenu';
const items=[
  {
    "value": "recent",
    "label": "最近更新した順",
    "description": "いま動いているものから"
  },
  {
    "value": "name",
    "label": "名前の昇順",
    "description": "A–Z、五十音順で整える"
  },
  {
    "value": "created",
    "label": "作成日の新しい順",
    "description": "新しく加わったものから"
  },
  {
    "value": "priority",
    "label": "優先度の高い順",
    "description": "大切なものを先頭に"
  }
];
export default function Example(){const [value,setValue]=useState('recent');return <IrisMenu label="並び順" name="sort" items={items} value={value} onValueChange={setValue}/>;}
