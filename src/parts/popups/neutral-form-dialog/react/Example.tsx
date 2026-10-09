import React,{useState,useId} from 'react';
import NeutralFormDialog from './NeutralFormDialog';
/** Content example. Buttons close locally; attach your own application operation explicitly. */
export default function Example(){
  const [open,setOpen]=useState(false);const paletteName=useId();
  return <NeutralFormDialog title="プロジェクトを編集" description="名前とメモを確認できます。" kicker="PROJECT DETAILS" triggerLabel="入力内容を編集" open={open} onOpenChange={setOpen} confirmLabel="確認する" cancelLabel="戻る">
    <div className="pp-callout"><b>変更内容のプレビュー</b><br/>ここに確認が必要な情報を表示します。操作はデモです。</div>
  </NeutralFormDialog>;
}
