import React,{useState,useId} from 'react';
import ObservatoryWindow from './ObservatoryWindow';
/** Content example. Buttons close locally; attach your own application operation explicitly. */
export default function Example(){
  const [open,setOpen]=useState(false);const paletteName=useId();
  return <ObservatoryWindow title="A quieter universe." description="見えなかったものに、焦点を合わせる。" kicker="OBSERVATION / NO.02" triggerLabel="Open Observatory Window" open={open} onOpenChange={setOpen} confirmLabel="観測を始める" cancelLabel="閉じる">
    <div className="pp-art pp-art-orbit" aria-hidden="true"><i></i><i></i><i></i><span>DEEP FIELD / 02</span></div><div className="pp-metrics"><div><small>DISTANCE</small><b>12.4</b></div><div><small>SIGNAL</small><b>98%</b></div><div><small>PASS</small><b>024</b></div></div>
  </ObservatoryWindow>;
}
