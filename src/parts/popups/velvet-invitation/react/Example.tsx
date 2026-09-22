import React,{useState,useId} from 'react';
import VelvetInvitation from './VelvetInvitation';
/** Content example. Buttons close locally; attach your own application operation explicitly. */
export default function Example(){
  const [open,setOpen]=useState(false);const paletteName=useId();
  return <VelvetInvitation title="A moment, reserved." description="あなたのための、小さな時間。" kicker="PRIVATE INVITATION / 09" triggerLabel="Open Velvet Invitation" open={open} onOpenChange={setOpen} confirmLabel="招待を確認" cancelLabel="あとで">
    <div className="pp-stamp" aria-hidden="true">✦</div><ul className="pp-lines"><li><span>Occasion</span><b>A quiet gathering</b></li><li><span>Date</span><b>Your chosen day</b></li><li><span>Dress code</span><b>Just be yourself</b></li></ul>
  </VelvetInvitation>;
}
