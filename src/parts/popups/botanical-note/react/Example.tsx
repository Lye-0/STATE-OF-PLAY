import React,{useState,useId} from 'react';
import BotanicalNote from './BotanicalNote';
/** Content example. Buttons close locally; attach your own application operation explicitly. */
export default function Example(){
  const [open,setOpen]=useState(false);const paletteName=useId();
  return <BotanicalNote title="Let an idea grow." description="思いついたことを、ここに残してみましょう。" kicker="GARDEN NOTES / 13" triggerLabel="Open Botanical Note" open={open} onOpenChange={setOpen} confirmLabel="読み終える" cancelLabel="閉じる">
    <div className="pp-split"><div className="pp-art pp-art-leaf" aria-hidden="true"><i></i><i></i><i></i><span>GROWTH / STUDY</span></div><div className="pp-fields"><label>A little thought<textarea rows={3} placeholder="小さなアイデアを、ひとつ。"></textarea></label></div></div>
  </BotanicalNote>;
}
