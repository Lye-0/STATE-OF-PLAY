import React,{useState,useId} from 'react';
import TitaniumDialog from './TitaniumDialog';
/** Content example. Buttons close locally; attach your own application operation explicitly. */
export default function Example(){
  const [open,setOpen]=useState(false);const paletteName=useId();
  return <TitaniumDialog title="Precision, confirmed." description="次の工程へ進む前に、設定を確認します。" kicker="CONTROL UNIT / 04" triggerLabel="Open Titanium Dialog" open={open} onOpenChange={setOpen} confirmLabel="確定する" cancelLabel="戻る">
    <div className="pp-split"><div className="pp-art pp-art-disc" aria-hidden="true"><i></i><i></i><i></i><span>CALIBRATION / READY</span></div><ul className="pp-lines"><li><span>Profile</span><b>Standard</b></li><li><span>Tolerance</span><b>0.02 mm</b></li><li><span>Status</span><b>Ready</b></li></ul></div>
  </TitaniumDialog>;
}
