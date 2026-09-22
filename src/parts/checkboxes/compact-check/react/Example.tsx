import React,{useState} from 'react';
import CompactCheck from './CompactCheck';
/** Example only. Replace the labels and form values with your application's data. */
export default function Example(){
  const [checked,setChecked]=useState(true);
  return <CompactCheck label="完了済みを表示" description="リストの絞り込み" badge="" checked={checked} onCheckedChange={setChecked} name="preference" value="yes"/>;
}
