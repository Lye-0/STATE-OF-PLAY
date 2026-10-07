import React,{useState} from 'react';
import CrossbarCheck from './CrossbarCheck';
/** Example only. Replace the labels and form values with your application's data. */
export default function Example(){
  const [checked,setChecked]=useState(false);
  return <CrossbarCheck label="通知を受け取る" description="必要なお知らせだけを受け取ります。" badge="" checked={checked} onCheckedChange={setChecked} name="preference" value="yes"/>;
}
