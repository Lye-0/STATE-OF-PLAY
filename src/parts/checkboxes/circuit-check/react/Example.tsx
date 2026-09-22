import React,{useState} from 'react';
import CircuitCheck from './CircuitCheck';
/** Example only. Replace the labels and form values with your application's data. */
export default function Example(){
  const [checked,setChecked]=useState(false);
  return <CircuitCheck label="Connect the dots" description="選択するたびに、回路が閉じる。" badge="PCB" checked={checked} onCheckedChange={setChecked} name="preference" value="yes"/>;
}
