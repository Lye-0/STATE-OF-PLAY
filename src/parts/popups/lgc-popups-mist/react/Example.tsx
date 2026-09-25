import React,{useState,useId} from 'react';
import LgcPopupsMist from './LgcPopupsMist';
/** Content example. Buttons close locally; attach your own application operation explicitly. */
export default function Example(){
  const [open,setOpen]=useState(false);const paletteName=useId();
  return <LgcPopupsMist title="名前を変更" description="新しい表示名を入力してください。" kicker="EDIT DETAILS" triggerLabel="Open Mist Dialog" open={open} onOpenChange={setOpen} confirmLabel="変更する" cancelLabel="キャンセル">
    <div className="pp-fields"><label>表示名<input type="text" placeholder="プロジェクト名"/></label></div>
  </LgcPopupsMist>;
}
