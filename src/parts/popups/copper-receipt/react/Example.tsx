import React,{useState,useId} from 'react';
import CopperReceipt from './CopperReceipt';
/** Content example. Buttons close locally; attach your own application operation explicitly. */
export default function Example(){
  const [open,setOpen]=useState(false);const paletteName=useId();
  return <CopperReceipt title="A record of the moment." description="確認した内容を、わかりやすく。" kicker="RECEIPT / NO.0010" triggerLabel="Open Copper Receipt" open={open} onOpenChange={setOpen} confirmLabel="確認する" cancelLabel="戻る">
    <ul className="pp-lines"><li><span>Collection</span><b>STATE OF PLAY</b></li><li><span>Selection</span><b>Copper edition</b></li><li><span>Items</span><b>3 components</b></li><li><span>Delivery</span><b>Source files</b></li></ul><div className="pp-callout" style={{"marginTop": "20px"}}><b>Ready to keep.</b><br/>この画面はデザインサンプルです。</div>
  </CopperReceipt>;
}
