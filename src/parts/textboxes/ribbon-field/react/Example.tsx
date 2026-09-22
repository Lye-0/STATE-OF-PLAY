'use client';
import React,{useState} from 'react';
import RibbonField from './RibbonField';
/** Native input value belongs to this component. No API or storage is required. */
export default function Example(){
 const [value,setValue]=useState('');
 return <RibbonField label="アイデアのタイトル" placeholder="ひらめきを、結んでおく。" description="文字を入力して、質感の変化を試してください。" caption="KEEP / 09" name="ribbon-field" value={value} onValueChange={setValue} maxLength={120}/>;
}
