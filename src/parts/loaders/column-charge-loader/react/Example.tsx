import React,{useState} from 'react';
import ColumnChargeLoader from './ColumnChargeLoader';
export default function Example(){const [paused,setPaused]=useState(false);return <section><ColumnChargeLoader content="データを読み込んでいます…" paused={paused}/><button type="button" onClick={()=>setPaused(v=>!v)}>{paused?'再開':'動きを止める'}</button></section>;}
