import React,{useState} from 'react';
import PorcelainCheck from './PorcelainCheck';
/** Example only. Replace the labels and form values with your application's data. */
export default function Example(){
  const [checked,setChecked]=useState(false);
  return <PorcelainCheck label="A quiet ritual" description="いつもの習慣を、丁寧に。" badge="11" checked={checked} onCheckedChange={setChecked} name="preference" value="yes"/>;
}
