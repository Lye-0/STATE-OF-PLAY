import React,{useState} from 'react';
import KineticAbacusLoader from './KineticAbacusLoader';
export default function Example(){const [paused,setPaused]=useState(false);return <section><KineticAbacusLoader content="データを読み込んでいます…" paused={paused}/><button type="button" onClick={()=>setPaused(v=>!v)}>{paused?'再開':'動きを止める'}</button></section>;}
