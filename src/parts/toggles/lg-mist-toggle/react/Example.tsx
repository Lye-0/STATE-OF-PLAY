import React,{useState} from 'react';
import MistToggle from './MistToggle';
export default function Example(){const [enabled,setEnabled]=useState(false);return <MistToggle aria-label="通知を有効にする" checked={enabled} onCheckedChange={setEnabled}/>;}
