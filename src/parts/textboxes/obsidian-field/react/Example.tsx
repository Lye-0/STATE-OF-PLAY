'use client';
import React,{useState} from 'react';
import ObsidianField from './ObsidianField';
/** Native input value belongs to this component. No API or storage is required. */
export default function Example(){
 const [value,setValue]=useState('');
 return <ObsidianField label="プロジェクト名" placeholder="Unknown territory" description="文字を入力して、質感の変化を試してください。" caption="OBSIDIAN \u2014 04" name="obsidian-field" value={value} onValueChange={setValue} maxLength={120}/>;
}
