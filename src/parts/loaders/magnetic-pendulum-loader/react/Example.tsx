import React,{useState} from 'react';
import MagneticPendulumLoader from './MagneticPendulumLoader';
export default function Example(){const [paused,setPaused]=useState(false);return <section><MagneticPendulumLoader content="データを読み込んでいます…" paused={paused}/><button type="button" onClick={()=>setPaused(v=>!v)}>{paused?'再開':'動きを止める'}</button></section>;}
