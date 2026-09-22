'use client';
import React from 'react';
import MinimalAccordion from './MinimalAccordion';
const items=[
{value:"section-1",title:"The art of noticing",subtitle:"観察するということ",badge:"ESSAY",content:<> <div className="sop-panel-art" aria-hidden="true"><span>EDITORIAL / STUDY 01</span></div><p>日常のなかの小さな違いに、少しだけ長く目を向ける。気づきはいつも、急がない時間から生まれます。</p><div className="sop-panel-metrics"><div><b>12</b><small>PAGES</small></div><div><b>03</b><small>CHAPTERS</small></div><div><b>08</b><small>MIN READ</small></div></div> </>},
{value:"section-2",title:"Quiet routines",subtitle:"静かな習慣",badge:"NOTES",content:<> <p>朝の光、湯気の立つ一杯、短い散歩。暮らしの輪郭を整える、小さな習慣を記録します。</p><div className="sop-panel-tags"><span>DETAILS</span><span>CRAFT</span><span>REFERENCE</span></div> </>},
{value:"section-3",title:"Further reading",subtitle:"読み進めるために",badge:"INDEX",content:<> <p>心に残った言葉や場所を、自分のノートに。ここから先の余白は、あなたの記録のためにあります。</p><div className="sop-panel-foot"><span>COLLECTION / 2026</span><span>END OF NOTES ↗</span></div> </>}
];
export default function Example(){return <MinimalAccordion items={items} defaultExpanded={['section-1']}/>;}
