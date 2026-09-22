'use client';
import React,{useState} from 'react';
import SilkSelect from './SilkSelect';
const items=[
  {
    "value": "silk",
    "label": "Mulberry silk",
    "description": "細く、滑らかな光沢",
    "icon": "01",
    "badge": "12 mm"
  },
  {
    "value": "linen",
    "label": "Belgian linen",
    "description": "乾いた手触りと自然な節",
    "icon": "02",
    "badge": "180 g"
  },
  {
    "value": "velvet",
    "label": "Cotton velvet",
    "description": "深い色としっとりした毛並み",
    "icon": "03",
    "badge": "320 g"
  },
  {
    "value": "wool",
    "label": "Merino wool",
    "description": "空気を含む、やわらかな繊維",
    "icon": "04",
    "badge": "18 μm"
  }
];
export default function Example(){
 const [value,setValue]=useState(items[0].value);
 return <SilkSelect label="TEXTILE / 素材の選択" name="choice" items={items} value={value} onValueChange={setValue}/>;
}
