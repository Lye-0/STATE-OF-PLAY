'use client';
import React,{useState} from 'react';
import BlueprintNote from './BlueprintNote';
/** Native input value belongs to this component. No API or storage is required. */
export default function Example(){
 const [value,setValue]=useState('');
 return <BlueprintNote label="設計メモ" placeholder="次の一手を、設計する。" description="複数行で入力できます。長さに合わせて高さを調整。" caption="REV. 01 / DRAFT" name="blueprint-note" value={value} onValueChange={setValue} maxLength={500}/>;
}
