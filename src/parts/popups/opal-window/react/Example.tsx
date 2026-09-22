import React,{useState,useId} from 'react';
import OpalWindow from './OpalWindow';
/** Content example. Buttons close locally; attach your own application operation explicitly. */
export default function Example(){
  const [open,setOpen]=useState(false);const paletteName=useId();
  return <OpalWindow title="A little more possibility." description="静かな変化を、気持ちよく。" kicker="SOFT LAUNCH / 14" triggerLabel="Open Opal Window" open={open} onOpenChange={setOpen} confirmLabel="詳しく見る" cancelLabel="あとで">
    <div className="pp-split"><div className="pp-art pp-art-prism" aria-hidden="true"><i></i><i></i><i></i><span>OPAL / FINISH</span></div><div className="pp-note"><h3>Soft by design.</h3><p>淡い色、丸み、整った余白。主張しすぎない美しさを。</p><div className="pp-tags"><span>CALM</span><span>NEW</span></div></div></div>
  </OpalWindow>;
}
