'use client';
import React,{useState} from 'react';
import EngravedLabelField from './EngravedLabelField';
/** Native input value belongs to this component. No API or storage is required. */
export default function Example(){
 const [value,setValue]=useState('');
 return <EngravedLabelField label="表示名" placeholder="例：lye" description="文字を入力して、質感の変化を試してください。" caption="" name="engraved-label-field" value={value} onValueChange={setValue} maxLength={120}/>;
}
