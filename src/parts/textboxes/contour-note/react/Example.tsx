'use client';
import React,{useState} from 'react';
import ContourNote from './ContourNote';
/** Native input value belongs to this component. No API or storage is required. */
export default function Example(){
 const [value,setValue]=useState('');
 return <ContourNote label="思考の地図" placeholder="まだ見ぬ場所へ、ことばをつなぐ。" description="複数行で入力できます。長さに合わせて高さを調整。" caption="FIELD NOTES / 16" name="contour-note" value={value} onValueChange={setValue} maxLength={500}/>;
}
