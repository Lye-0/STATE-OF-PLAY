import React,{useState} from 'react';
import BimetalLoader from './BimetalLoader';
export default function Example(){const [paused,setPaused]=useState(false);return <section><BimetalLoader content="データを読み込んでいます…" paused={paused}/><button type="button" onClick={()=>setPaused(v=>!v)}>{paused?'再開':'動きを止める'}</button></section>;}
