import React,{useState,useId} from 'react';
import HelpDialog from './HelpDialog';
/** Content example. Buttons close locally; attach your own application operation explicitly. */
export default function Example(){
  const [open,setOpen]=useState(false);const paletteName=useId();
  return <HelpDialog title="使い方を確認" description="3つのステップで、このパーツを導入できます。" kicker="QUICK GUIDE" triggerLabel="Open Help Dialog" open={open} onOpenChange={setOpen} confirmLabel="はじめる" cancelLabel="閉じる">
    <ol className="pp-steps"><li><div><b>パーツを選ぶ</b>必要な形式と配置を選択します。</div></li><li><div><b>ソースを配置する</b>内部の参照を保って、フォルダーを配置します。</div></li><li><div><b>画面へ接続する</b>ラベル・状態・処理をアプリに合わせます。</div></li></ol>
  </HelpDialog>;
}
