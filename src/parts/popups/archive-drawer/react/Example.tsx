import React,{useState,useId} from 'react';
import ArchiveDrawer from './ArchiveDrawer';
/** Content example. Buttons close locally; attach your own application operation explicitly. */
export default function Example(){
  const [open,setOpen]=useState(false);const paletteName=useId();
  return <ArchiveDrawer title="A place for everything." description="手元に置きたい情報を、整理する。" kicker="THE ARCHIVE / 15" triggerLabel="Open Archive Drawer" open={open} onOpenChange={setOpen} confirmLabel="一覧を確認" cancelLabel="閉じる">
    <div className="pp-fields"><label>検索<input type="search" placeholder="コレクションを探す"/></label></div><ul className="pp-lines"><li><span>01 / Materials</span><b>12 items</b></li><li><span>02 / Typography</span><b>08 items</b></li><li><span>03 / Interactions</span><b>24 items</b></li><li><span>04 / Notes</span><b>16 items</b></li></ul><div className="pp-note"><h3>Keep your references close.</h3><p>検索欄は入力例です。検索処理は利用先に接続してください。</p><div className="pp-tags"></div></div>
  </ArchiveDrawer>;
}
