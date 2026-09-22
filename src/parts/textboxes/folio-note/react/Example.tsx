'use client';
import React,{useState} from 'react';
import FolioNote from './FolioNote';
/** Native input value belongs to this component. No API or storage is required. */
export default function Example(){
 const [value,setValue]=useState('');
 return <FolioNote label="今日の記録" placeholder="思い浮かんだことを、そのまま。" description="複数行で入力できます。長さに合わせて高さを調整。" caption="FOLIO / 013" name="folio-note" value={value} onValueChange={setValue} maxLength={500}/>;
}
