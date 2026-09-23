import React,{useState} from 'react';
import EclipseArcLoader from './EclipseArcLoader';
export default function Example(){const [paused,setPaused]=useState(false);return <section><EclipseArcLoader content="データを読み込んでいます…" paused={paused}/><button type="button" onClick={()=>setPaused(v=>!v)}>{paused?'再開':'動きを止める'}</button></section>;}
