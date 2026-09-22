'use client';
import React,{useState} from 'react';
import SoftSearch from './SoftSearch';
/** Native input value belongs to this component. No API or storage is required. */
export default function Example(){
 const [value,setValue]=useState('');
 return <SoftSearch label="ライブラリ内を検索" placeholder="キーワードを入力" description="文字を入力して、質感の変化を試してください。" caption="" name="soft-search" value={value} onValueChange={setValue} maxLength={120}/>;
}
