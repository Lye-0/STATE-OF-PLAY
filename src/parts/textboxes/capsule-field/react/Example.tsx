'use client';
import React,{useState} from 'react';
import CapsuleField from './CapsuleField';
/** Native input value belongs to this component. No API or storage is required. */
export default function Example(){
 const [value,setValue]=useState('');
 return <CapsuleField label="プライベートメモ" placeholder="ここだけの、ひとこと。" description="入力はこのページ内だけで扱い、保存・送信しません。" caption="PRIVATE / LOCAL" name="capsule-field" value={value} onValueChange={setValue} maxLength={120} autoComplete="new-password"/>;
}
