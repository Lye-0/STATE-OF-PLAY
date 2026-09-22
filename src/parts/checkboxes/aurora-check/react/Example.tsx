import React,{useState} from 'react';
import AuroraCheck from './AuroraCheck';
/** Example only. Replace the labels and form values with your application's data. */
export default function Example(){
  const [checked,setChecked]=useState(true);
  return <AuroraCheck label="Save the light" description="この空気感を、コレクションへ。" badge="01" checked={checked} onCheckedChange={setChecked} name="preference" value="yes"/>;
}
