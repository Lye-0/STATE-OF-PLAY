import React,{useState} from 'react';
import BookplateCheck from './BookplateCheck';
/** Example only. Replace the labels and form values with your application's data. */
export default function Example(){
  const [checked,setChecked]=useState(false);
  return <BookplateCheck label="通知を受け取る" description="必要なお知らせだけを受け取ります。" badge="" checked={checked} onCheckedChange={setChecked} name="preference" value="yes"/>;
}
