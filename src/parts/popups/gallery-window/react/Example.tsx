import React,{useState,useId} from 'react';
import GalleryWindow from './GalleryWindow';
/** Content example. Buttons close locally; attach your own application operation explicitly. */
export default function Example(){
  const [open,setOpen]=useState(false);const paletteName=useId();
  return <GalleryWindow title="An ordinary wonder." description="小さな形の中に、ひとつの風景を。" kicker="GALLERY / PRIVATE VIEW" triggerLabel="Open Gallery Window" open={open} onOpenChange={setOpen} confirmLabel="作品を見る" cancelLabel="閉じる">
    <div className="pp-art pp-art-spectrum" aria-hidden="true"><i></i><i></i><i></i><span>UNTITLED / NO.08</span></div><div className="pp-note"><h3>The quiet collection.</h3><p>素材、光、余白。日常の細部を、少しだけ特別に。</p><div className="pp-tags"><span>EXHIBITION</span><span>2026</span></div></div>
  </GalleryWindow>;
}
