import React,{useState} from 'react';
import FoldingCubeLoader from './FoldingCubeLoader';
export default function Example(){const [paused,setPaused]=useState(false);return <section><FoldingCubeLoader content="データを読み込んでいます…" paused={paused}/><button type="button" onClick={()=>setPaused(v=>!v)}>{paused?'再開':'動きを止める'}</button></section>;}
