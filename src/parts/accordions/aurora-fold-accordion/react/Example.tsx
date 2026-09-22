'use client';
import React from 'react';
import AuroraFoldAccordion from './AuroraFoldAccordion';
const items=[
{value:"section-1",title:"Northern lights",subtitle:"光と色のレイヤー",badge:"LIVE",content:<> <div className="sop-panel-art" aria-hidden="true"><span>ATMOSPHERE / STUDY 01</span></div><p>薄い光を重ねて、空間の温度を変える。深い緑から紫へ続くグラデーションが、静かに視線を導きます。</p><div className="sop-panel-metrics"><div><b>4800</b><small>KELVIN</small></div><div><b>68</b><small>SOFTNESS</small></div><div><b>03</b><small>LAYERS</small></div></div> </>},
{value:"section-2",title:"Color balance",subtitle:"色の均衡",badge:"TONE",content:<> <p>明るさを抑えた背景に、淡い発光色をひとつ。余白が光の輪郭を引き立てます。</p><div className="sop-panel-tags"><span>DETAILS</span><span>CRAFT</span><span>REFERENCE</span></div> </>},
{value:"section-3",title:"Motion language",subtitle:"動きの文法",badge:"EASE",content:<> <p>開く動きはゆっくり、閉じる動きは短く。操作した瞬間と、残る余韻を分けて設計します。</p><div className="sop-panel-foot"><span>COLLECTION / 2026</span><span>END OF NOTES ↗</span></div> </>}
];
export default function Example(){return <AuroraFoldAccordion items={items} defaultExpanded={['section-1']}/>;}
