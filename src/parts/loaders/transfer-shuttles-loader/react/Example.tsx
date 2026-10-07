import React,{useState} from 'react';
import TransferShuttlesLoader from './TransferShuttlesLoader';
export default function Example(){const [paused,setPaused]=useState(false);return <section><TransferShuttlesLoader content="データを読み込んでいます…" paused={paused}/><button type="button" onClick={()=>setPaused(v=>!v)}>{paused?'再開':'動きを止める'}</button></section>;}
