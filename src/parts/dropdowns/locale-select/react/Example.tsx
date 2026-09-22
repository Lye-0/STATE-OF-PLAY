'use client';
import React,{useState} from 'react';
import LocaleSelect from './LocaleSelect';
const items=[
  {
    "value": "ja",
    "label": "日本語",
    "description": "Japanese",
    "icon": "JA",
    "badge": "日本"
  },
  {
    "value": "en",
    "label": "English",
    "description": "English",
    "icon": "EN",
    "badge": "Global"
  },
  {
    "value": "fr",
    "label": "Français",
    "description": "French",
    "icon": "FR",
    "badge": "France"
  },
  {
    "value": "ko",
    "label": "한국어",
    "description": "Korean",
    "icon": "KO",
    "badge": "한국"
  }
];
export default function Example(){
 const [value,setValue]=useState(items[0].value);
 return <LocaleSelect label="LANGUAGE / 言語" name="choice" items={items} value={value} onValueChange={setValue}/>;
}
