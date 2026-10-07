import React,{useState} from 'react';
import SmallSquarePulseLoader from './SmallSquarePulseLoader';
export default function Example(){const [paused,setPaused]=useState(false);return <section><SmallSquarePulseLoader content="データを読み込んでいます…" paused={paused}/><button type="button" onClick={()=>setPaused(v=>!v)}>{paused?'再開':'動きを止める'}</button></section>;}
