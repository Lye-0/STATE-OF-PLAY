'use client';
import React,{useState} from 'react';
import PaperField from './PaperField';
/** Native input value belongs to this component. No API or storage is required. */
export default function Example(){
 const [value,setValue]=useState('');
 return <PaperField label="プロジェクト名" placeholder="例：新しいポートフォリオ" description="文字を入力して、質感の変化を試してください。" caption="" name="paper-field" value={value} onValueChange={setValue} maxLength={120}/>;
}
