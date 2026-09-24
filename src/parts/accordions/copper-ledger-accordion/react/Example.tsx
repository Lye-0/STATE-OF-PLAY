'use client';
import React from 'react';
import CopperLedgerAccordion from './CopperLedgerAccordion';
const items=[
{value:"section-1",title:"Material profile",subtitle:"素材の性質",badge:"Cu",content:<> <div className="sop-panel-art" aria-hidden="true"><span>MATERIALS / STUDY 01</span></div><p>温度を感じる金属、銅。使うほどに変わる表面の色と、加工の痕跡をそのまま残します。</p><div className="sop-panel-metrics"><div><b>8.9</b><small>DENSITY</small></div><div><b>99</b><small>PURITY %</small></div><div><b>02</b><small>FINISHES</small></div></div> </>},
{value:"section-2",title:"Surface treatment",subtitle:"表面の仕上げ",badge:"SATIN",content:<> <p>研磨の方向を揃え、光の反射を落ち着かせる。手で触れたときの温度と質感まで設計します。</p><div className="sop-panel-tags"><span>BRUSH</span><span>SATIN</span><span>PATINA</span></div> </>},
{value:"section-3",title:"Maintenance",subtitle:"経年を楽しむ",badge:"CARE",content:<> <p>柔らかな布で汚れを拭き取ります。自然な色の変化は、使い手と時間がつくる模様です。</p><div className="sop-panel-foot"><span>COLLECTION / 2026</span><span>END OF NOTES ↗</span></div> </>}
];
export default function Example(){return <CopperLedgerAccordion items={items} defaultExpanded={['section-1']}/>;}
