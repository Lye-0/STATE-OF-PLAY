'use client';
import React,{useState} from 'react';
import OpticSelect from './OpticSelect';
const items=[
  {
    "value": "wide",
    "label": "Wide angle",
    "description": "風景の奥行きを、そのまま",
    "icon": "24",
    "badge": "f/1.8"
  },
  {
    "value": "normal",
    "label": "Everyday lens",
    "description": "日常を自然な距離から",
    "icon": "35",
    "badge": "f/1.4"
  },
  {
    "value": "portrait",
    "label": "Portrait prime",
    "description": "柔らかな背景と表情",
    "icon": "85",
    "badge": "f/1.8"
  },
  {
    "value": "tele",
    "label": "Telephoto",
    "description": "遠くの輪郭を引き寄せる",
    "icon": "135",
    "badge": "f/2.8"
  }
];
export default function Example(){
 const [value,setValue]=useState(items[0].value);
 return <OpticSelect label="LENS SYSTEM / 焦点距離" name="choice" items={items} value={value} onValueChange={setValue}/>;
}
