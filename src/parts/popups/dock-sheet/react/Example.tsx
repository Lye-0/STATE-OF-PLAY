import React,{useState,useId} from 'react';
import DockSheet from './DockSheet';
/** Content example. Buttons close locally; attach your own application operation explicitly. */
export default function Example(){
  const [open,setOpen]=useState(false);const paletteName=useId();
  return <DockSheet title="Make some room." description="自分のペースに合わせて、体験を整える。" kicker="QUICK PREFERENCES / 16" triggerLabel="Open Dock Sheet" open={open} onOpenChange={setOpen} confirmLabel="適用する" cancelLabel="キャンセル">
    <div className="pp-split"><div className="pp-note"><h3>A calmer workspace.</h3><p>必要なものを選んで、使いやすい場所に。</p><div className="pp-tags"><span>FOCUS</span><span>PERSONAL</span></div></div><div className="pp-preferences"><label><span>新しいお知らせ<small>大切な更新を受け取ります</small></span><input type="checkbox" defaultChecked/></label><label><span>静かなモード<small>通知の頻度を控えめにします</small></span><input type="checkbox"/></label></div></div>
  </DockSheet>;
}
