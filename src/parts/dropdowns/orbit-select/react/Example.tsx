'use client';
import React,{useState} from 'react';
import OrbitSelect from './OrbitSelect';
const items=[
  {
    "value": "terra",
    "label": "Terra station",
    "description": "青い惑星を見下ろす軌道",
    "icon": "T",
    "badge": "LOW"
  },
  {
    "value": "luna",
    "label": "Lunar archive",
    "description": "月の裏側に眠る記録",
    "icon": "L",
    "badge": "NEAR"
  },
  {
    "value": "io",
    "label": "Io observatory",
    "description": "火山と木星の巨大な影",
    "icon": "I",
    "badge": "DEEP"
  },
  {
    "value": "titan",
    "label": "Titan relay",
    "description": "金色の大気、その向こう",
    "icon": "R",
    "badge": "FAR"
  }
];
export default function Example(){
 const [value,setValue]=useState(items[0].value);
 return <OrbitSelect label="DESTINATION / 観測地点" name="choice" items={items} value={value} onValueChange={setValue}/>;
}
