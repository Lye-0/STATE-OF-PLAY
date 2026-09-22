import React,{useState} from 'react';
import ConsentCheck from './ConsentCheck';
/** Example only. Replace the labels and form values with your application's data. */
export default function Example(){
  const [checked,setChecked]=useState(false);
  return <ConsentCheck label="内容を確認しました" description="選択が必要な理由を、ここで簡潔に説明します。" badge="" checked={checked} onCheckedChange={setChecked} name="preference" value="yes"/>;
}
