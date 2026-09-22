import React,{useState,useId} from 'react';
import FolioWindow from './FolioWindow';
/** Content example. Buttons close locally; attach your own application operation explicitly. */
export default function Example(){
  const [open,setOpen]=useState(false);const paletteName=useId();
  return <FolioWindow title="A note worth keeping." description="よいアイデアは、書き留めるところから。" kicker="THE FIELD NOTES / VOL.03" triggerLabel="Open Folio Window" open={open} onOpenChange={setOpen} confirmLabel="読み終える" cancelLabel="閉じる">
    <div className="pp-note"><h3>Small ideas.<br/><em>Lasting impressions.</em></h3><p>このメモ欄は実際に入力できます。言葉や内容は自由に差し替えてください。</p><div className="pp-tags"><span>PERSONAL</span><span>EDITION 03</span></div></div><div className="pp-fields"><label>Your note<textarea rows={3} placeholder="ひらめいたことを、ひとこと。"></textarea></label></div>
  </FolioWindow>;
}
