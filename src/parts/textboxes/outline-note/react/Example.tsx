'use client';
import React,{useState} from 'react';
import OutlineNote from './OutlineNote';
/** Native input value belongs to this component. No API or storage is required. */
export default function Example(){
 const [value,setValue]=useState('');
 return <OutlineNote label="備考" placeholder="補足事項を入力してください。" description="複数行で入力できます。長さに合わせて高さを調整。" caption="" name="outline-note" value={value} onValueChange={setValue} maxLength={500}/>;
}
