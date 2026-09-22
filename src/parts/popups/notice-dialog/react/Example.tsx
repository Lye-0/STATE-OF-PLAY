import React,{useState,useId} from 'react';
import NoticeDialog from './NoticeDialog';
/** Content example. Buttons close locally; attach your own application operation explicitly. */
export default function Example(){
  const [open,setOpen]=useState(false);const paletteName=useId();
  return <NoticeDialog title="準備が整いました" description="続ける前に、以下の内容をご確認ください。" kicker="INFORMATION" triggerLabel="Open Notice Dialog" open={open} onOpenChange={setOpen} confirmLabel="わかりました" cancelLabel="閉じる">
    <ol className="pp-steps"><li><div><b>プレビューを確認</b>変更内容をこの画面で見直せます。</div></li><li><div><b>必要なときに実行</b>ボタンの処理は利用先のアプリと接続します。</div></li></ol>
  </NoticeDialog>;
}
