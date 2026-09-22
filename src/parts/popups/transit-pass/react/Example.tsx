import React,{useState,useId} from 'react';
import TransitPass from './TransitPass';
/** Content example. Buttons close locally; attach your own application operation explicitly. */
export default function Example(){
  const [open,setOpen]=useState(false);const paletteName=useId();
  return <TransitPass title="Your next departure." description="いつもの場所から、新しいアイデアへ。" kicker="BOARDING PASS / 11" triggerLabel="Open Transit Pass" open={open} onOpenChange={setOpen} confirmLabel="出発する" cancelLabel="閉じる">
    <div className="pp-ticket"><div className="pp-route"><div><b>HERE</b><small>DEPARTURE</small></div><i></i><div><b>NEXT</b><small>DESTINATION</small></div></div><div className="pp-barcode" aria-hidden="true"></div></div><div className="pp-metrics"><div><small>GATE</small><b>A11</b></div><div><small>SEAT</small><b>01A</b></div><div><small>CLASS</small><b>Studio</b></div></div>
  </TransitPass>;
}
