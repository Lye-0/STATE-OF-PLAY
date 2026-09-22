'use client';
import React,{useState} from 'react';
import LetterpressNote from './LetterpressNote';
/** Native input value belongs to this component. No API or storage is required. */
export default function Example(){
 const [value,setValue]=useState('');
 return <LetterpressNote label="余白に、ひとこと" placeholder="ここから、物語が始まります。" description="複数行で入力できます。長さに合わせて高さを調整。" caption="NOTES / N\u00ba 01" name="letterpress-note" value={value} onValueChange={setValue} maxLength={500}/>;
}
