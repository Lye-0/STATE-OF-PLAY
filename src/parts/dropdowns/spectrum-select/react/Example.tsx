'use client';
import React,{useState} from 'react';
import SpectrumSelect from './SpectrumSelect';
const items=[
  {
    "value": "sine",
    "label": "Sine wave",
    "description": "滑らかに続く、純粋な周期",
    "icon": "~",
    "badge": "440 Hz"
  },
  {
    "value": "triangle",
    "label": "Triangle",
    "description": "柔らかな角を持つ波形",
    "icon": "△",
    "badge": "220 Hz"
  },
  {
    "value": "square",
    "label": "Square",
    "description": "はっきりした輪郭と強さ",
    "icon": "□",
    "badge": "110 Hz"
  },
  {
    "value": "saw",
    "label": "Sawtooth",
    "description": "明るい倍音の重なり",
    "icon": "/",
    "badge": "330 Hz"
  }
];
export default function Example(){
 const [value,setValue]=useState(items[0].value);
 return <SpectrumSelect label="WAVEFORM / 波形" name="choice" items={items} value={value} onValueChange={setValue}/>;
}
