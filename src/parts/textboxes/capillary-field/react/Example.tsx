'use client';
import React,{useState} from 'react';
import CapillaryField from './CapillaryField';
/** Native input value belongs to this component. No API or storage is required. */
export default function Example(){
 const [value,setValue]=useState('');
 return <CapillaryField label="アイデアの雫" placeholder="透明なことばを、ひとしずく。" description="文字を入力して、質感の変化を試してください。" caption="FLOW / INPUT" name="capillary-field" value={value} onValueChange={setValue} maxLength={120}/>;
}
