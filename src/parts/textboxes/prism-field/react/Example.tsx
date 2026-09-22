'use client';
import React,{useState} from 'react';
import PrismField from './PrismField';
/** Native input value belongs to this component. No API or storage is required. */
export default function Example(){
 const [value,setValue]=useState('');
 return <PrismField label="観測したことば" placeholder="A spectrum of ideas" description="文字を入力して、質感の変化を試してください。" caption="REFRACTION / 08" name="prism-field" value={value} onValueChange={setValue} maxLength={120}/>;
}
