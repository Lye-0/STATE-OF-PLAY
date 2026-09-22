import React,{useState} from 'react';
import VelvetCheck from './VelvetCheck';
/** Example only. Replace the labels and form values with your application's data. */
export default function Example(){
  const [checked,setChecked]=useState(true);
  return <VelvetCheck label="Keep it close" description="触れたくなる、静かな陰影。" badge="V.10" checked={checked} onCheckedChange={setChecked} name="preference" value="yes"/>;
}
