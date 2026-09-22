'use client';
import React,{useState} from 'react';
import TransitSelect from './TransitSelect';
const items=[
  {
    "value": "kyoto",
    "label": "Kyoto",
    "description": "路地、庭、朝の静けさ",
    "icon": "KY",
    "badge": "09:20"
  },
  {
    "value": "kanazawa",
    "label": "Kanazawa",
    "description": "水路と工芸をたどる",
    "icon": "KZ",
    "badge": "11:45"
  },
  {
    "value": "matsumoto",
    "label": "Matsumoto",
    "description": "山の空気と古い街並み",
    "icon": "MT",
    "badge": "14:10"
  },
  {
    "value": "onomichi",
    "label": "Onomichi",
    "description": "坂道の先に広がる海",
    "icon": "ON",
    "badge": "16:30"
  }
];
export default function Example(){
 const [value,setValue]=useState(items[0].value);
 return <TransitSelect label="NEXT STOP / 行き先" name="choice" items={items} value={value} onValueChange={setValue}/>;
}
