'use client';
import React,{useState} from 'react';
import MonoSelect from './MonoSelect';
const items=[
  {
    "value": "dev",
    "label": "Development",
    "description": "ローカルで変更を確認",
    "icon": "D",
    "badge": "LOCAL"
  },
  {
    "value": "stage",
    "label": "Staging",
    "description": "公開前の最終チェック",
    "icon": "S",
    "badge": "TEST"
  },
  {
    "value": "prod",
    "label": "Production",
    "description": "公開中の環境",
    "icon": "P",
    "badge": "LIVE"
  }
];
export default function Example(){
 const [value,setValue]=useState(items[0].value);
 return <MonoSelect label="ENVIRONMENT / 環境" name="choice" items={items} value={value} onValueChange={setValue}/>;
}
