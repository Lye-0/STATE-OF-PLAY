import React,{useState} from 'react';
import LgcCheckboxesMist from './LgcCheckboxesMist';
/** Example only. Replace the labels and form values with your application's data. */
export default function Example(){
  const [checked,setChecked]=useState(true);
  return <LgcCheckboxesMist label="自動で保存する" description="変更した内容を下書きに残します。" badge="" checked={checked} onCheckedChange={setChecked} name="preference" value="yes"/>;
}
