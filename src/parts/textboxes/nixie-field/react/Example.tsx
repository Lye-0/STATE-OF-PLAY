'use client';
import React,{useState} from 'react';
import NixieField from './NixieField';
/** Native input value belongs to this component. No API or storage is required. */
export default function Example(){
 const [value,setValue]=useState('');
 return <NixieField label="信号の名前" placeholder="SIGNAL_01" description="文字を入力して、質感の変化を試してください。" caption="TYPE / SIGNAL" name="nixie-field" value={value} onValueChange={setValue} maxLength={120}/>;
}
