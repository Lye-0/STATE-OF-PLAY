import React,{useState} from 'react';
import PrismCheck from './PrismCheck';
/** Example only. Replace the labels and form values with your application's data. */
export default function Example(){
  const [checked,setChecked]=useState(true);
  return <PrismCheck label="Collect a fragment" description="ひとつの光、無数の表情。" badge="\u25c7" checked={checked} onCheckedChange={setChecked} name="preference" value="yes"/>;
}
