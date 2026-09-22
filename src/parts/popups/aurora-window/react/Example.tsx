import React,{useState,useId} from 'react';
import AuroraWindow from './AuroraWindow';
/** Content example. Buttons close locally; attach your own application operation explicitly. */
export default function Example(){
  const [open,setOpen]=useState(false);const paletteName=useId();
  return <AuroraWindow title="Step into the light." description="次のアイデアを、ここから。" kicker="OPEN EDITION / 01" triggerLabel="Open Aurora Window" open={open} onOpenChange={setOpen} confirmLabel="見てみる" cancelLabel="あとで">
    <div className="pp-split"><div className="pp-art pp-art-spectrum" aria-hidden="true"><i></i><i></i><i></i><span>FORM / LIGHT</span></div><div className="pp-note"><h3>A new perspective.</h3><p>柔らかな光と余白を、あなたのプロジェクトへ。細部から、新しい体験が生まれます。</p><div className="pp-tags"><span>CREATIVE</span><span>01 / 24</span></div></div></div>
  </AuroraWindow>;
}
