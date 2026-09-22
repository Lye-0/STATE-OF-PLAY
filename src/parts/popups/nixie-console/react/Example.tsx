import React,{useState,useId} from 'react';
import NixieConsole from './NixieConsole';
/** Content example. Buttons close locally; attach your own application operation explicitly. */
export default function Example(){
  const [open,setOpen]=useState(false);const paletteName=useId();
  return <NixieConsole title="Transmission complete." description="デモの処理が完了しました。実際の通信は行いません。" kicker="SIGNAL / CHANNEL 06" triggerLabel="Open Nixie Console" open={open} onOpenChange={setOpen} confirmLabel="了解" cancelLabel="閉じる">
    <div className="pp-metrics"><div><small>PACKETS</small><b>024</b></div><div><small>LATENCY</small><b>12 ms</b></div><div><small>STATUS</small><b>OK</b></div></div><ul className="pp-lines"><li><span>Session</span><b>SOP-06</b></li><li><span>Integrity</span><b>Verified</b></li><li><span>Mode</span><b>Local demo</b></li></ul>
  </NixieConsole>;
}
