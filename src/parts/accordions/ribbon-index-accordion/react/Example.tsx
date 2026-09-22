'use client';
import React from 'react';
import RibbonIndexAccordion from './RibbonIndexAccordion';
const items=[
{value:"section-1",title:"Morning pages",subtitle:"朝に書くこと",badge:"DAY 01",content:<> <div className="sop-panel-art" aria-hidden="true"><span>JOURNAL / STUDY 01</span></div><p>まだ整理されていない考えを、そのまま短く書き出す。完成した文章より、いまの感覚を残します。</p><div className="sop-panel-metrics"><div><b>03</b><small>PAGES</small></div><div><b>15</b><small>MINUTES</small></div><div><b>07</b><small>DAYS</small></div></div> </>},
{value:"section-2",title:"Collected moments",subtitle:"集めた断片",badge:"NOTES",content:<> <p>目に留まった色や、聞こえた言葉。小さな断片をまとめると、日々の輪郭が見えてきます。</p><div className="sop-panel-tags"><span>DETAILS</span><span>CRAFT</span><span>REFERENCE</span></div> </>},
{value:"section-3",title:"Weekly reflection",subtitle:"一週間を振り返る",badge:"WEEK",content:<> <p>続けられたことと、無理のあったこと。評価のためではなく、来週を少し軽くするために。</p><div className="sop-panel-foot"><span>COLLECTION / 2026</span><span>END OF NOTES ↗</span></div> </>}
];
export default function Example(){return <RibbonIndexAccordion items={items} defaultExpanded={['section-1']}/>;}
