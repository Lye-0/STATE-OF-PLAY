import React,{useState,useId} from 'react';
import SoftPreferences from './SoftPreferences';
/** Content example. Buttons close locally; attach your own application operation explicitly. */
export default function Example(){
  const [open,setOpen]=useState(false);const paletteName=useId();
  return <SoftPreferences title="表示と通知" description="毎日の使い方に合わせて設定できます。" kicker="PREFERENCES" triggerLabel="Open Soft Preferences" open={open} onOpenChange={setOpen} confirmLabel="設定を確認" cancelLabel="閉じる">
    <div className="pp-preferences"><label><span>新しいお知らせ<small>大切な更新を受け取ります</small></span><input type="checkbox" defaultChecked/></label><label><span>静かなモード<small>通知の頻度を控えめにします</small></span><input type="checkbox"/></label></div>
  </SoftPreferences>;
}
