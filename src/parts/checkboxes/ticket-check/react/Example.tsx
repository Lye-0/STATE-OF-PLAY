import React,{useState} from 'react';
import TicketCheck from './TicketCheck';
/** Example only. Replace the labels and form values with your application's data. */
export default function Example(){
  const [checked,setChecked]=useState(false);
  return <TicketCheck label="ADMIT ONE" description="新しい体験を、ひとつ。" badge="013248" checked={checked} onCheckedChange={setChecked} name="preference" value="yes"/>;
}
