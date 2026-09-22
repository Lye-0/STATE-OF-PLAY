import React,{useState,useId} from 'react';
import CompactDialog from './CompactDialog';
/** Content example. Buttons close locally; attach your own application operation explicitly. */
export default function Example(){
  const [open,setOpen]=useState(false);const paletteName=useId();
  return <CompactDialog title="下書きを残しますか？" description="入力した内容は、このデモを閉じても保持されます。" kicker="QUICK CHECK" triggerLabel="Open Compact Dialog" open={open} onOpenChange={setOpen} confirmLabel="確認" cancelLabel="戻る">
    <div className="pp-callout">閉じるだけの操作です。<br/>外部への保存や送信はしません。</div>
  </CompactDialog>;
}
