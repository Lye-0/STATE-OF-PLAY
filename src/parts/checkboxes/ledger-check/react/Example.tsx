import React,{useState} from 'react';
import LedgerCheck from './LedgerCheck';
/** Example only. Replace the labels and form values with your application's data. */
export default function Example(){
  const [checked,setChecked]=useState(true);
  return <LedgerCheck label="One thing at a time" description="今日のリストを、軽やかに。" badge="16" checked={checked} onCheckedChange={setChecked} name="preference" value="yes"/>;
}
