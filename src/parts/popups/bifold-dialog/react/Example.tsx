import React,{useState,useId} from 'react';
import BifoldDialog from './BifoldDialog';
/** Content example. Buttons close locally; attach your own application operation explicitly. */
export default function Example(){
  const [open,setOpen]=useState(false);const paletteName=useId();
  return <BifoldDialog title="変更を確認しますか？" description="現在の設定を確認してから、次へ進んでください。" kicker="CONFIRMATION" triggerLabel="Open Bifold Dialog" open={open} onOpenChange={setOpen} confirmLabel="確認する" cancelLabel="戻る">
    <div className="pp-callout"><b>変更内容のプレビュー</b><br/>ここに確認が必要な情報を表示します。操作はデモです。</div>
  </BifoldDialog>;
}
