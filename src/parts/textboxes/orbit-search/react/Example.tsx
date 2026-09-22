'use client';
import React,{useState} from 'react';
import OrbitSearch from './OrbitSearch';
/** Native input value belongs to this component. No API or storage is required. */
export default function Example(){
 const [value,setValue]=useState('');
 return <OrbitSearch label="コレクションを探す" placeholder="探している、まだ知らないもの。" description="文字を入力して、質感の変化を試してください。" caption="EXPLORE / 10" name="orbit-search" value={value} onValueChange={setValue} maxLength={120}/>;
}
