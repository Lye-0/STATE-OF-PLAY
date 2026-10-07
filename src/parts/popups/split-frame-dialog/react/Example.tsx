import React,{useState,useId} from 'react';
import SplitFrameDialog from './SplitFrameDialog';
/** Content example. Buttons close locally; attach your own application operation explicitly. */
export default function Example(){
  const [open,setOpen]=useState(false);const paletteName=useId();
  return <SplitFrameDialog title="変更を確認しますか？" description="現在の設定を確認してから、次へ進んでください。" kicker="CONFIRMATION" triggerLabel="Open Split Frame Dialog" open={open} onOpenChange={setOpen} confirmLabel="確認する" cancelLabel="戻る">
    <div className="pp-callout"><b>変更内容のプレビュー</b><br/>ここに確認が必要な情報を表示します。操作はデモです。</div>
  </SplitFrameDialog>;
}
