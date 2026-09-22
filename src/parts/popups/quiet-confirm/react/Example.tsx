import React,{useState,useId} from 'react';
import QuietConfirm from './QuietConfirm';
/** Content example. Buttons close locally; attach your own application operation explicitly. */
export default function Example(){
  const [open,setOpen]=useState(false);const paletteName=useId();
  return <QuietConfirm title="アーカイブに移動しますか？" description="一覧から非表示になります。あとで元に戻すことができます。" kicker="REVIEW ACTION" triggerLabel="Open Quiet Confirm" open={open} onOpenChange={setOpen} confirmLabel="移動する" cancelLabel="キャンセル">
    <div className="pp-callout"><b>対象：Untitled project</b><br/>この画面はデモです。ファイルの移動や削除は実行しません。</div>
  </QuietConfirm>;
}
