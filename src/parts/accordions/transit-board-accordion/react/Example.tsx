'use client';
import React from 'react';
import TransitBoardAccordion from './TransitBoardAccordion';
const items=[
{value:"section-1",title:"Morning departure",subtitle:"朝の旅程",badge:"09:20",content:<> <div className="sop-panel-art" aria-hidden="true"><span>TRAVEL / STUDY 01</span></div><p>街が目を覚ますころ、駅から一日の旅が始まる。余白のある予定と、歩く時間を持って出かけます。</p><div className="sop-panel-metrics"><div><b>03</b><small>STOPS</small></div><div><b>2h</b><small>DURATION</small></div><div><b>08</b><small>PLATFORM</small></div></div> </>},
{value:"section-2",title:"Along the route",subtitle:"途中で立ち寄る",badge:"ROUTE",content:<> <p>川沿いの道、古い書店、小さな喫茶店。目的地だけでなく、道中で見つける場所も記録します。</p><div className="sop-panel-tags"><span>DETAILS</span><span>CRAFT</span><span>REFERENCE</span></div> </>},
{value:"section-3",title:"Travel essentials",subtitle:"持ち物のメモ",badge:"CHECK",content:<> <p>歩きやすい靴、水、充電した端末。予定に詰め込みすぎず、戻る時間も先に確認しておきます。</p><div className="sop-panel-foot"><span>COLLECTION / 2026</span><span>END OF NOTES ↗</span></div> </>}
];
export default function Example(){return <TransitBoardAccordion items={items} defaultExpanded={['section-1']}/>;}
