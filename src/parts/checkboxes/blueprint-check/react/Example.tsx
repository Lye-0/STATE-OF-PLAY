import React,{useState} from 'react';
import BlueprintCheck from './BlueprintCheck';
/** Example only. Replace the labels and form values with your application's data. */
export default function Example(){
  const [checked,setChecked]=useState(true);
  return <BlueprintCheck label="APPROVE THE PLAN" description="輪郭から、確かな選択へ。" badge="1:1" checked={checked} onCheckedChange={setChecked} name="preference" value="yes"/>;
}
