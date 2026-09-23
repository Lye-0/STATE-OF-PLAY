import React,{useState} from 'react';
import ThreeDotsLoader from './ThreeDotsLoader';
export default function Example(){const [paused,setPaused]=useState(false);return <section><ThreeDotsLoader content="データを読み込んでいます…" paused={paused}/><button type="button" onClick={()=>setPaused(v=>!v)}>{paused?'再開':'動きを止める'}</button></section>;}
