'use client';
import React,{useState} from 'react';
import ContactField from './ContactField';
/** Native input value belongs to this component. No API or storage is required. */
export default function Example(){
 const [value,setValue]=useState('');
 return <ContactField label="メールアドレス" placeholder="you@example.com" description="メールの形式を確認します。" caption="" name="contact-field" value={value} onValueChange={setValue} maxLength={120} autoComplete="email" validateOnBlur/>;
}
