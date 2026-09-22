'use client';
import React,{useState} from 'react';
import PasswordField from './PasswordField';
/** Native input value belongs to this component. No API or storage is required. */
export default function Example(){
 const [value,setValue]=useState('');
 return <PasswordField label="パスワード" placeholder="パスワードを入力" description="入力はこのページ内だけで扱い、保存・送信しません。" caption="" name="password-field" value={value} onValueChange={setValue} maxLength={120} autoComplete="new-password"/>;
}
