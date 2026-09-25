import React,{useState} from 'react';
import LgcLoadersMist from './LgcLoadersMist';
export default function Example(){const [paused,setPaused]=useState(false);return <section><LgcLoadersMist content="データを読み込んでいます…" paused={paused}/><button type="button" onClick={()=>setPaused(v=>!v)}>{paused?'再開':'動きを止める'}</button></section>;}
