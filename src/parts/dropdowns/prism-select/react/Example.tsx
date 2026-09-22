'use client';
import React,{useState} from 'react';
import PrismSelect from './PrismSelect';
const items=[
  {
    "value": "clear",
    "label": "Crystal clear",
    "description": "透過する、純粋な光",
    "icon": "C",
    "badge": "100%"
  },
  {
    "value": "iridescent",
    "label": "Iridescent",
    "description": "角度によって変わる色",
    "icon": "I",
    "badge": "88%"
  },
  {
    "value": "rose",
    "label": "Rose diffusion",
    "description": "肌に柔らかな温度を添える",
    "icon": "R",
    "badge": "75%"
  },
  {
    "value": "polar",
    "label": "Polarized",
    "description": "反射を抑え、奥の色を",
    "icon": "P",
    "badge": "62%"
  }
];
export default function Example(){
 const [value,setValue]=useState(items[0].value);
 return <PrismSelect label="FILTER / 光の仕上げ" name="choice" items={items} value={value} onValueChange={setValue}/>;
}
