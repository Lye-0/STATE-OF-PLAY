import React,{useState} from 'react';
import OutlineCheck from './OutlineCheck';
/** Example only. Replace the labels and form values with your application's data. */
export default function Example(){
  const [checked,setChecked]=useState(true);
  return <OutlineCheck label="サイドバーを表示" description="画面のレイアウトを設定します。" badge="" checked={checked} onCheckedChange={setChecked} name="preference" value="yes"/>;
}
