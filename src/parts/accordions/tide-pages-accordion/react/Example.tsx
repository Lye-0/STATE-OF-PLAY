'use client';
import React from 'react';
import TidePagesAccordion from './TidePagesAccordion';
const items=[
{value:"section-1",title:"Coastal study",subtitle:"海辺の観測",badge:"TIDE",content:<> <div className="sop-panel-art" aria-hidden="true"><span>SEA / STUDY 01</span></div><p>水面の光、風の向き、波の間隔。変わり続ける景色を、小さな観測記録にまとめます。</p><div className="sop-panel-metrics"><div><b>18</b><small>TEMP °C</small></div><div><b>0.8</b><small>WAVE m</small></div><div><b>6.2</b><small>INTERVAL s</small></div></div> </>},
{value:"section-2",title:"Water layers",subtitle:"水のレイヤー",badge:"DEPTH",content:<> <p>浅い青から深い緑へ。色の重なりで奥行きを表し、境界には淡い光だけを残します。</p><div className="sop-panel-tags"><span>DETAILS</span><span>CRAFT</span><span>REFERENCE</span></div> </>},
{value:"section-3",title:"Field notes",subtitle:"岸辺のメモ",badge:"NOTES",content:<> <p>これは架空の展示データです。実際の海況や行動判断には使わず、情報デザインの参考として扱います。</p><div className="sop-panel-foot"><span>COLLECTION / 2026</span><span>END OF NOTES ↗</span></div> </>}
];
export default function Example(){return <TidePagesAccordion items={items} defaultExpanded={['section-1']}/>;}
