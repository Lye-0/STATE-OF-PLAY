import React,{useState} from 'react';
import MagneticCheck from './MagneticCheck';
/** Example only. Replace the labels and form values with your application's data. */
export default function Example(){
  const [checked,setChecked]=useState(true);
  return <MagneticCheck label="Pin this moment" description="かちり、と決まる感覚。" badge="KEY" checked={checked} onCheckedChange={setChecked} name="preference" value="yes"/>;
}
