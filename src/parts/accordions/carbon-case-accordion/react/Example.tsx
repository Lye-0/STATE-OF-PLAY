'use client';
import React from 'react';
import CarbonCaseAccordion from './CarbonCaseAccordion';
const items=[
{value:"section-1",title:"Field equipment",subtitle:"道具の構成",badge:"READY",content:<> <div className="sop-panel-art" aria-hidden="true"><span>GEAR / STUDY 01</span></div><p>軽さ、丈夫さ、取り出しやすさ。よく使うものほど手前に置き、必要な道具だけを持ち出します。</p><div className="sop-panel-metrics"><div><b>1.4</b><small>WEIGHT kg</small></div><div><b>06</b><small>ITEMS</small></div><div><b>92</b><small>BATTERY %</small></div></div> </>},
{value:"section-2",title:"Protection layers",subtitle:"保護のレイヤー",badge:"CASE",content:<> <p>衝撃を受ける外側と、触れてほしくない内側。素材を使い分けて、道具を静かに固定します。</p><div className="sop-panel-tags"><span>DETAILS</span><span>CRAFT</span><span>REFERENCE</span></div> </>},
{value:"section-3",title:"Before departure",subtitle:"出発前の確認",badge:"CHECK",content:<> <p>電源と接続、予備の小物、保存先。短い確認リストが、現場での落ち着きをつくります。</p><div className="sop-panel-foot"><span>COLLECTION / 2026</span><span>END OF NOTES ↗</span></div> </>}
];
export default function Example(){return <CarbonCaseAccordion items={items} defaultExpanded={['section-1']}/>;}
