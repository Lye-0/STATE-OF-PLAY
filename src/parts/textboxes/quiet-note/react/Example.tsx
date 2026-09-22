'use client';
import React,{useState} from 'react';
import QuietNote from './QuietNote';
/** Native input value belongs to this component. No API or storage is required. */
export default function Example(){
 const [value,setValue]=useState('');
 return <QuietNote label="メモ" placeholder="気づいたことを書き留める…" description="複数行で入力できます。長さに合わせて高さを調整。" caption="" name="quiet-note" value={value} onValueChange={setValue} maxLength={500}/>;
}
