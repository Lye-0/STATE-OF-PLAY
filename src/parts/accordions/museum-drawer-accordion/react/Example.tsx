'use client';
import React from 'react';
import MuseumDrawerAccordion from './MuseumDrawerAccordion';
const items=[
{value:"section-1",title:"Specimen cabinet",subtitle:"標本の分類",badge:"CAT. 01",content:<> <div className="sop-panel-art" aria-hidden="true"><span>COLLECTION / STUDY 01</span></div><p>かたち、色、採集した場所。記録を揃えると、違いだけでなく共通点も見えてきます。</p><div className="sop-panel-metrics"><div><b>128</b><small>SPECIMENS</small></div><div><b>08</b><small>GROUPS</small></div><div><b>04</b><small>DRAWERS</small></div></div> </>},
{value:"section-2",title:"Classification",subtitle:"分類の基準",badge:"INDEX",content:<> <p>似ているものを近くに、例外には短い注記を。探し方が伝わる並べ方を大切にします。</p><div className="sop-panel-tags"><span>DETAILS</span><span>CRAFT</span><span>REFERENCE</span></div> </>},
{value:"section-3",title:"Conservation notes",subtitle:"保存の記録",badge:"CARE",content:<> <p>保管場所や状態の変化を、日付と一緒に残します。次に読む人が経緯をたどれる記録にします。</p><div className="sop-panel-foot"><span>COLLECTION / 2026</span><span>END OF NOTES ↗</span></div> </>}
];
export default function Example(){return <MuseumDrawerAccordion items={items} defaultExpanded={['section-1']}/>;}
