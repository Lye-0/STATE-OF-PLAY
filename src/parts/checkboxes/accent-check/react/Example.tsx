import React,{useState} from 'react';
import AccentCheck from './AccentCheck';
/** Example only. Replace the labels and form values with your application's data. */
export default function Example(){
  const [checked,setChecked]=useState(true);
  return <AccentCheck label="お気に入りに追加" description="あとで見返すために保存します。" badge="" checked={checked} onCheckedChange={setChecked} name="preference" value="yes"/>;
}
