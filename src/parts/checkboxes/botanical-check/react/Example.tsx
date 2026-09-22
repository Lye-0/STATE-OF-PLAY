import React,{useState} from 'react';
import BotanicalCheck from './BotanicalCheck';
/** Example only. Replace the labels and form values with your application's data. */
export default function Example(){
  const [checked,setChecked]=useState(true);
  return <BotanicalCheck label="Let it grow" description="続けたいことを、ひとつずつ。" badge="SEED" checked={checked} onCheckedChange={setChecked} name="preference" value="yes"/>;
}
