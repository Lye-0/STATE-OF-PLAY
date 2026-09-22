import React,{useState,useId} from 'react';
import BlueprintSheet from './BlueprintSheet';
/** Content example. Buttons close locally; attach your own application operation explicitly. */
export default function Example(){
  const [open,setOpen]=useState(false);const paletteName=useId();
  return <BlueprintSheet title="Draw the next chapter." description="名前を付けて、新しいプロジェクトを始めましょう。" kicker="PROJECT DRAFT / 07" triggerLabel="Open Blueprint Sheet" open={open} onOpenChange={setOpen} confirmLabel="作成する" cancelLabel="キャンセル">
    <div className="pp-split"><div className="pp-art pp-art-blueprint" aria-hidden="true"><i></i><i></i><i></i><span>SCALE / 1:1</span></div><div className="pp-fields"><label>Project name<input type="text" placeholder="New perspective"/></label><label>Version label<input type="text" placeholder="Draft 01"/></label></div></div>
  </BlueprintSheet>;
}
