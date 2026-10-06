import React,{useState} from 'react';
import LozengeTransferLoader from './LozengeTransferLoader';
export default function Example(){const [paused,setPaused]=useState(false);return <section><LozengeTransferLoader content="データを読み込んでいます…" paused={paused}/><button type="button" onClick={()=>setPaused(v=>!v)}>{paused?'再開':'動きを止める'}</button></section>;}
