'use client';
import React,{useState} from 'react';
import GlasshouseSelect from './GlasshouseSelect';
const items=[
  {
    "value": "fern",
    "label": "Bird’s nest fern",
    "description": "やわらかな間接光を好む",
    "icon": "F",
    "badge": "SHADE"
  },
  {
    "value": "pilea",
    "label": "Chinese money plant",
    "description": "丸い葉が光を集める",
    "icon": "P",
    "badge": "SOFT"
  },
  {
    "value": "olive",
    "label": "Olive tree",
    "description": "乾いた風と、明るい窓辺",
    "icon": "O",
    "badge": "SUN"
  },
  {
    "value": "ficus",
    "label": "Ficus elastica",
    "description": "厚い葉と穏やかな存在感",
    "icon": "R",
    "badge": "SOFT"
  }
];
export default function Example(){
 const [value,setValue]=useState(items[0].value);
 return <GlasshouseSelect label="BOTANICAL / 今日の植物" name="choice" items={items} value={value} onValueChange={setValue}/>;
}
