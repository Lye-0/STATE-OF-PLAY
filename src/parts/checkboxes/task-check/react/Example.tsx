import React,{useState} from 'react';
import TaskCheck from './TaskCheck';
/** Example only. Replace the labels and form values with your application's data. */
export default function Example(){
  const [checked,setChecked]=useState(false);
  return <TaskCheck label="デザインをレビュー" description="フィードバックを確認する" badge="" checked={checked} onCheckedChange={setChecked} name="preference" value="yes"/>;
}
