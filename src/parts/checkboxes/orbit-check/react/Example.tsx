import React,{useState} from 'react';
import OrbitCheck from './OrbitCheck';
/** Example only. Replace the labels and form values with your application's data. */
export default function Example(){
  const [checked,setChecked]=useState(false);
  return <OrbitCheck label="Stay in orbit" description="大切なものを、視界の中に。" badge="08" checked={checked} onCheckedChange={setChecked} name="preference" value="yes"/>;
}
