import React,{useState,useId} from 'react';
import PrismWindow from './PrismWindow';
/** Content example. Buttons close locally; attach your own application operation explicitly. */
export default function Example(){
  const [open,setOpen]=useState(false);const paletteName=useId();
  return <PrismWindow title="Every angle, a new idea." description="光の欠片を、あなたのデザインへ。" kicker="LIGHT STUDIES / 05" triggerLabel="Open Prism Window" open={open} onOpenChange={setOpen} confirmLabel="コレクションを見る" cancelLabel="閉じる">
    <div className="pp-split"><div className="pp-art pp-art-prism" aria-hidden="true"><i></i><i></i><i></i><span>FORM / LIGHT</span></div><div className="pp-note"><h3>Refraction studies.</h3><p>選ぶたびに、少し違う表情が見えてくる。丁寧な陰影と、控えめな透明感。</p><div className="pp-tags"><span>SPECTRUM</span><span>STUDY 05</span></div></div></div>
  </PrismWindow>;
}
