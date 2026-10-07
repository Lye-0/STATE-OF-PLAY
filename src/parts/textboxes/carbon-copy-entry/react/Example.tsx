'use client';
import React,{useState} from 'react';
import CarbonCopyEntry from './CarbonCopyEntry';
/** Native input value belongs to this component. No API or storage is required. */
export default function Example(){
 const [value,setValue]=useState('');
 return <CarbonCopyEntry label="表示名" placeholder="例：lye" description="文字を入力して、質感の変化を試してください。" caption="" name="carbon-copy-entry" value={value} onValueChange={setValue} maxLength={120}/>;
}
