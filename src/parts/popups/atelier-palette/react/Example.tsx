import React,{useState,useId} from 'react';
import AtelierPalette from './AtelierPalette';
/** Content example. Buttons close locally; attach your own application operation explicitly. */
export default function Example(){
  const [open,setOpen]=useState(false);const paletteName=useId();
  return <AtelierPalette title="Choose your atmosphere." description="配色を選んで、作品の空気を整える。" kicker="ATELIER / PIGMENT 12" triggerLabel="Open Atelier Palette" open={open} onOpenChange={setOpen} confirmLabel="この色を使う" cancelLabel="キャンセル">
    <fieldset className="pp-palette"><legend>カラーの選択</legend><label><input type="radio" name={paletteName} value="CLAY" defaultChecked/><i style={{"background": "#be8a73"}}></i>CLAY</label><label><input type="radio" name={paletteName} value="MOSS"/><i style={{"background": "#879481"}}></i>MOSS</label><label><input type="radio" name={paletteName} value="CHALK"/><i style={{"background": "#eae3d6"}}></i>CHALK</label><label><input type="radio" name={paletteName} value="INK"/><i style={{"background": "#4b5559"}}></i>INK</label></fieldset><div className="pp-note"><h3>Made of little choices.</h3><p>色を選んでも、このデモは保存や送信を行いません。</p><div className="pp-tags"></div></div>
  </AtelierPalette>;
}
