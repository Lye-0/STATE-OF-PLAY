'use client';
import React,{useState} from 'react';
import TerminalField from './TerminalField';
/** Native input value belongs to this component. No API or storage is required. */
export default function Example(){
 const [value,setValue]=useState('');
 return <TerminalField label="コマンドノート" placeholder="あなたのアイデアを記述…" description="文字を入力して、質感の変化を試してください。" caption="LOCAL INPUT" name="terminal-field" value={value} onValueChange={setValue} maxLength={120}/>;
}
