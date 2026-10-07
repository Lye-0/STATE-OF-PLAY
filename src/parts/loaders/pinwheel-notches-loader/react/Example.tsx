import React,{useState} from 'react';
import PinwheelNotchesLoader from './PinwheelNotchesLoader';
export default function Example(){const [paused,setPaused]=useState(false);return <section><PinwheelNotchesLoader content="データを読み込んでいます…" paused={paused}/><button type="button" onClick={()=>setPaused(v=>!v)}>{paused?'再開':'動きを止める'}</button></section>;}
