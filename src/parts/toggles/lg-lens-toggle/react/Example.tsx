import React,{useState} from 'react';
import LensToggle from './LensToggle';
export default function Example(){const [enabled,setEnabled]=useState(false);return <LensToggle aria-label="通知を有効にする" checked={enabled} onCheckedChange={setEnabled}/>;}
