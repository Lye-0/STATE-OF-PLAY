'use client';
import React,{useState} from 'react';
import VelvetField from './VelvetField';
/** Native input value belongs to this component. No API or storage is required. */
export default function Example(){
 const [value,setValue]=useState('');
 return <VelvetField label="小さなひらめき" placeholder="やわらかな、ことばを。" description="文字を入力して、質感の変化を試してください。" caption="PERSONAL / 12" name="velvet-field" value={value} onValueChange={setValue} maxLength={120}/>;
}
