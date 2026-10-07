import React,{useState} from 'react';
import RotaryGateLoader from './RotaryGateLoader';
export default function Example(){const [paused,setPaused]=useState(false);return <section><RotaryGateLoader content="データを読み込んでいます…" paused={paused}/><button type="button" onClick={()=>setPaused(v=>!v)}>{paused?'再開':'動きを止める'}</button></section>;}
