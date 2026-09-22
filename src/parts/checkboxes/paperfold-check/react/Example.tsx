import React,{useState} from 'react';
import PaperfoldCheck from './PaperfoldCheck';
/** Example only. Replace the labels and form values with your application's data. */
export default function Example(){
  const [checked,setChecked]=useState(true);
  return <PaperfoldCheck label="A little intention" description="書き留めるように、選ぶ。" badge="P.06" checked={checked} onCheckedChange={setChecked} name="preference" value="yes"/>;
}
