'use client';
import React,{useState} from 'react';
import CeramicSelect from './CeramicSelect';
const items=[
  {
    "value": "cup",
    "label": "Tea cup",
    "description": "手になじむ、低い重心",
    "badge": "180 ml"
  },
  {
    "value": "bowl",
    "label": "Rice bowl",
    "description": "薄い縁と丸い底",
    "badge": "120 mm"
  },
  {
    "value": "plate",
    "label": "Dinner plate",
    "description": "料理を包む、大きな余白",
    "badge": "240 mm"
  },
  {
    "value": "vase",
    "label": "Flower vessel",
    "description": "一輪を引き立てる高さ",
    "badge": "160 mm"
  }
];
export default function Example(){
 const [value,setValue]=useState(items[0].value);
 return <CeramicSelect label="CERAMICS / 器のかたち" name="choice" items={items} value={value} onValueChange={setValue}/>;
}
