'use client';
import React,{useState} from 'react';
import SignalField from './SignalField';
/** Native input value belongs to this component. No API or storage is required. */
export default function Example(){
 const [value,setValue]=useState('');
 return <SignalField label="メッセージ" placeholder="Make something worth keeping." description="文字を入力して、質感の変化を試してください。" caption="CHANNEL \u2014 A" name="signal-field" value={value} onValueChange={setValue} maxLength={120}/>;
}
