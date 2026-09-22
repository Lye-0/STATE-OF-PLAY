'use client';
import React,{useState} from 'react';
import AuroraSelect from './AuroraSelect';
const items=[
  {
    "value": "arctic",
    "label": "Arctic dawn",
    "description": "夜明けのミントと淡い光",
    "icon": "01",
    "badge": "4800 K"
  },
  {
    "value": "violet",
    "label": "Violet hour",
    "description": "夕暮れの紫、静かな余韻",
    "icon": "02",
    "badge": "3200 K"
  },
  {
    "value": "solar",
    "label": "Solar haze",
    "description": "暖かな光が満ちる午後",
    "icon": "03",
    "badge": "5600 K"
  },
  {
    "value": "lunar",
    "label": "Lunar mist",
    "description": "月光と深い青のあいだ",
    "icon": "04",
    "badge": "6500 K"
  }
];
export default function Example(){
 const [value,setValue]=useState(items[0].value);
 return <AuroraSelect label="ATMOSPHERE / 空気を選ぶ" name="choice" items={items} value={value} onValueChange={setValue}/>;
}
