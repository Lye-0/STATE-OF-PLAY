'use client';
import React,{useState} from 'react';
import AuroraField from './AuroraField';
/** Native input value belongs to this component. No API or storage is required. */
export default function Example(){
 const [value,setValue]=useState('');
 return <AuroraField label="新しいプロジェクト" placeholder="まだ、名前のないアイデア。" description="文字を入力して、質感の変化を試してください。" caption="IDEA / 001" name="aurora-field" value={value} onValueChange={setValue} maxLength={120}/>;
}
