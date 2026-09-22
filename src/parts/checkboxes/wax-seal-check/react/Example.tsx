import React,{useState} from 'react';
import WaxSealCheck from './WaxSealCheck';
/** Example only. Replace the labels and form values with your application's data. */
export default function Example(){
  const [checked,setChecked]=useState(true);
  return <WaxSealCheck label="Seal this choice" description="小さな約束を、そっと封じる。" badge="\u2726" checked={checked} onCheckedChange={setChecked} name="preference" value="yes"/>;
}
