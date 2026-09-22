import React,{useState} from 'react';
import OpalCheck from './OpalCheck';
/** Example only. Replace the labels and form values with your application's data. */
export default function Example(){
  const [checked,setChecked]=useState(true);
  return <OpalCheck label="Something luminous" description="淡い光を、日常の中へ。" badge="OPAL" checked={checked} onCheckedChange={setChecked} name="preference" value="yes"/>;
}
