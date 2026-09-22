'use client';
import React,{useState} from 'react';
import UnderlineField from './UnderlineField';
/** Native input value belongs to this component. No API or storage is required. */
export default function Example(){
 const [value,setValue]=useState('');
 return <UnderlineField label="タイトル" placeholder="シンプルな、はじまり。" description="文字を入力して、質感の変化を試してください。" caption="" name="underline-field" value={value} onValueChange={setValue} maxLength={120}/>;
}
