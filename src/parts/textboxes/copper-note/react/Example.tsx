'use client';
import React,{useState} from 'react';
import CopperNote from './CopperNote';
/** Native input value belongs to this component. No API or storage is required. */
export default function Example(){
 const [value,setValue]=useState('');
 return <CopperNote label="記録のプレート" placeholder="ここに、残しておきたいことを。" description="複数行で入力できます。長さに合わせて高さを調整。" caption="PLATE \u2014 11" name="copper-note" value={value} onValueChange={setValue} maxLength={500}/>;
}
