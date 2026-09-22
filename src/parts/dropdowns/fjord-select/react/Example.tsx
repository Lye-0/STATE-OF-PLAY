'use client';
import React,{useState} from 'react';
import FjordSelect from './FjordSelect';
const items=[
  {
    "value": "valley",
    "label": "Valley walk",
    "description": "川沿いの穏やかな道",
    "icon": "V",
    "badge": "2.4 km"
  },
  {
    "value": "ridge",
    "label": "Ridge route",
    "description": "空に近い尾根を歩く",
    "icon": "R",
    "badge": "6.8 km"
  },
  {
    "value": "lake",
    "label": "Glacier lake",
    "description": "氷河の色を映す湖へ",
    "icon": "G",
    "badge": "4.1 km"
  },
  {
    "value": "summit",
    "label": "Summit path",
    "description": "遠くまで続く山の景色",
    "icon": "S",
    "badge": "9.2 km"
  }
];
export default function Example(){
 const [value,setValue]=useState(items[0].value);
 return <FjordSelect label="TRAIL / 稜線を選ぶ" name="choice" items={items} value={value} onValueChange={setValue}/>;
}
