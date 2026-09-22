import React,{useState} from 'react';
import TitaniumCheck from './TitaniumCheck';
/** Example only. Replace the labels and form values with your application's data. */
export default function Example(){
  const [checked,setChecked]=useState(false);
  return <TitaniumCheck label="LOCK POSITION" description="削り出した精度を、手の中に。" badge="MK.02" checked={checked} onCheckedChange={setChecked} name="preference" value="yes"/>;
}
