import React,{useState} from 'react';
import NixieCheck from './NixieCheck';
/** Example only. Replace the labels and form values with your application's data. */
export default function Example(){
  const [checked,setChecked]=useState(true);
  return <NixieCheck label="SIGNAL RECEIVED" description="手触りを感じる、静かな発光。" badge="240" checked={checked} onCheckedChange={setChecked} name="preference" value="yes"/>;
}
