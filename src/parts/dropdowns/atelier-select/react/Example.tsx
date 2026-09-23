'use client';
import React,{useState} from 'react';
import AtelierSelect from './AtelierSelect';
const items=[
  {
    "value": "clay",
    "label": "Burnt clay",
    "description": "テラコッタ、陽に乾いた土",
    "badge": "#C87961"
  },
  {
    "value": "sage",
    "label": "Garden sage",
    "description": "葉の裏に潜む穏やかな緑",
    "badge": "#91A68A"
  },
  {
    "value": "ocean",
    "label": "Indigo wash",
    "description": "水彩の深い青、柔らかな濃淡",
    "badge": "#546B89"
  },
  {
    "value": "sand",
    "label": "Linen sand",
    "description": "布と紙に寄り添う生成り",
    "badge": "#D8C8AA"
  }
];
export default function Example(){
 const [value,setValue]=useState(items[0].value);
 return <AtelierSelect label="PALETTE / 顔料の記録" name="choice" items={items} value={value} onValueChange={setValue}/>;
}
