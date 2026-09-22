import React,{useState} from 'react';
import PaperCheck from './PaperCheck';
/** Example only. Replace the labels and form values with your application's data. */
export default function Example(){
  const [checked,setChecked]=useState(false);
  return <PaperCheck label="メールを購読する" description="更新のお知らせをメールで受信します。" badge="" checked={checked} onCheckedChange={setChecked} name="preference" value="yes"/>;
}
