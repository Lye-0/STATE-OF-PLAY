import React,{useState} from 'react';
import SegmentOrbitLoader from './SegmentOrbitLoader';
export default function Example(){const [paused,setPaused]=useState(false);return <section><SegmentOrbitLoader content="データを読み込んでいます…" paused={paused}/><button type="button" onClick={()=>setPaused(v=>!v)}>{paused?'再開':'動きを止める'}</button></section>;}
