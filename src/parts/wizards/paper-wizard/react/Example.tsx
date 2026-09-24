import React, {useState} from 'react';
import PaperWizard, {type PaperWizardProps} from './PaperWizard';
const initial: PaperWizardProps = {
  "label": "ワークスペースの準備 / デモ",
  "steps": [
    {
      "id": "name",
      "title": "名前",
      "description": "新しいワークスペースに、名前を付けましょう。",
      "fields": [
        {
          "name": "workspace",
          "label": "ワークスペース名",
          "placeholder": "例：Design studio",
          "required": true
        }
      ]
    },
    {
      "id": "note",
      "title": "内容",
      "description": "取り組むことを、ひとこと残す。",
      "fields": [
        {
          "name": "note",
          "label": "メモ",
          "placeholder": "どんなものを作りますか？",
          "type": "textarea"
        }
      ]
    },
    {
      "id": "review",
      "title": "確認",
      "description": "入力内容はデモ内だけで扱います。完了しても保存・送信はしません。"
    }
  ]
};
export default function Example() {
 const [result,setResult]=useState('');
 return <><PaperWizard {...initial} onComplete={values=>setResult(JSON.stringify(values))} /><output>{result ? 'デモ完了：'+result : ''}</output></>;
}
