'use client';
import React,{useState} from 'react';
import TeamSelect from './TeamSelect';
const items=[
  {
    "value": "ak",
    "label": "Aki Kondo",
    "description": "プロダクトデザイン",
    "icon": "AK",
    "badge": "ONLINE"
  },
  {
    "value": "mt",
    "label": "Mio Takahashi",
    "description": "フロントエンド開発",
    "icon": "MT",
    "badge": ""
  },
  {
    "value": "rs",
    "label": "Ren Sato",
    "description": "ブランドとビジュアル",
    "icon": "RS",
    "badge": ""
  }
];
export default function Example(){
 const [value,setValue]=useState(items[0].value);
 return <TeamSelect label="ASSIGNEE / 担当者" name="choice" items={items} value={value} onValueChange={setValue}/>;
}
