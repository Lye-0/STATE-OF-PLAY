import React,{useState,useId} from 'react';
import FormDialog from './FormDialog';
/** Content example. Buttons close locally; attach your own application operation explicitly. */
export default function Example(){
  const [open,setOpen]=useState(false);const paletteName=useId();
  return <FormDialog title="プロフィールを編集" description="表示する情報を入力してください。" kicker="PROFILE" triggerLabel="Open Form Dialog" open={open} onOpenChange={setOpen} confirmLabel="内容を確認" cancelLabel="キャンセル">
    <div className="pp-fields"><label>名前<input type="text" placeholder="表示名"/></label><label>メール<input type="email" placeholder="name@example.com"/></label></div>
  </FormDialog>;
}
