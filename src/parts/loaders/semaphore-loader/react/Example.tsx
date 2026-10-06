import React,{useState} from 'react';
import SemaphoreLoader from './SemaphoreLoader';
export default function Example(){const [paused,setPaused]=useState(false);return <section><SemaphoreLoader content="データを読み込んでいます…" paused={paused}/><button type="button" onClick={()=>setPaused(v=>!v)}>{paused?'再開':'動きを止める'}</button></section>;}
