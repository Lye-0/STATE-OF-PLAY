'use client';
import React,{useState} from 'react';
import ResonanceSelect from './ResonanceSelect';
const items=[
  {
    "value": "vinyl",
    "label": "Warm vinyl",
    "description": "丸い低音と、針のかすかな音",
    "badge": "WARM"
  },
  {
    "value": "tape",
    "label": "Tape memories",
    "description": "柔らかな揺れ、夕方の記憶",
    "badge": "SOFT"
  },
  {
    "value": "studio",
    "label": "Studio reference",
    "description": "音の輪郭をクリアに聴く",
    "badge": "PURE"
  },
  {
    "value": "night",
    "label": "Late night",
    "description": "小さな音でも、豊かな余韻",
    "badge": "CALM"
  }
];
export default function Example(){
 const [value,setValue]=useState(items[0].value);
 return <ResonanceSelect label="LISTENING ROOM / 音の温度" name="choice" items={items} value={value} onValueChange={setValue}/>;
}
