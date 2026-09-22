'use client';
import React from 'react';
import GardenNotesAccordion from './GardenNotesAccordion';
const items=[
{value:"section-1",title:"Botanical profile",subtitle:"植物のプロフィール",badge:"FERN",content:<> <div className="sop-panel-art" aria-hidden="true"><span>GARDEN / STUDY 01</span></div><p>間接光のなかで、ゆっくり葉を広げるシダ。新しい葉の巻き方や、色の変化を観察します。</p><div className="sop-panel-metrics"><div><b>18–24</b><small>TEMP °C</small></div><div><b>60</b><small>HUMIDITY %</small></div><div><b>02</b><small>WEEKLY CHECK</small></div></div> </>},
{value:"section-2",title:"Water & light",subtitle:"水と光のメモ",badge:"CARE",content:<> <p>土の表面だけでなく、鉢の重さや葉の状態も見て判断します。育て方は植物と環境に合わせて調整します。</p><div className="sop-panel-tags"><span>DETAILS</span><span>CRAFT</span><span>REFERENCE</span></div> </>},
{value:"section-3",title:"Seasonal notes",subtitle:"季節ごとの記録",badge:"NOTES",content:<> <p>窓辺の光は、季節ごとに少しずつ変わります。新芽や葉色の小さな変化を残しましょう。</p><div className="sop-panel-foot"><span>COLLECTION / 2026</span><span>END OF NOTES ↗</span></div> </>}
];
export default function Example(){return <GardenNotesAccordion items={items} defaultExpanded={['section-1']}/>;}
