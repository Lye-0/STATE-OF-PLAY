import React,{useState} from 'react';
import HelixThreadLoader from './HelixThreadLoader';
export default function Example(){const [paused,setPaused]=useState(false);return <section><HelixThreadLoader content="データを読み込んでいます…" paused={paused}/><button type="button" onClick={()=>setPaused(v=>!v)}>{paused?'再開':'動きを止める'}</button></section>;}
