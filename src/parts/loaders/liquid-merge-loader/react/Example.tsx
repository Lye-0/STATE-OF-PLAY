import React,{useState} from 'react';
import LiquidMergeLoader from './LiquidMergeLoader';
export default function Example(){const [paused,setPaused]=useState(false);return <section><LiquidMergeLoader content="データを読み込んでいます…" paused={paused}/><button type="button" onClick={()=>setPaused(v=>!v)}>{paused?'再開':'動きを止める'}</button></section>;}
