'use client';
import React from 'react';
import ObservatoryAccordion from './ObservatoryAccordion';
const items=[
{value:"section-1",title:"Lunar observation",subtitle:"月面の観測記録",badge:"LUNA",content:<> <div className="sop-panel-art" aria-hidden="true"><span>SPACE / STUDY 01</span></div><p>静かな軌道から見下ろす、クレーターと影。光の角度が変わるたび、地形の別の表情が現れます。</p><div className="sop-panel-metrics"><div><b>384k</b><small>DISTANCE km</small></div><div><b>0.17</b><small>GRAVITY G</small></div><div><b>28</b><small>CYCLE DAYS</small></div></div> </>},
{value:"section-2",title:"Orbital parameters",subtitle:"軌道パラメーター",badge:"ORBIT",content:<> <p>視線の向きと観測時間を整理します。数値は展示用のサンプルであり、実際の運用データではありません。</p><div className="sop-panel-tags"><span>DETAILS</span><span>CRAFT</span><span>REFERENCE</span></div> </>},
{value:"section-3",title:"Field journal",subtitle:"観測ノート",badge:"LOG",content:<> <p>見えたものと、まだ分からないもの。どちらも同じように記録し、次の観測につなげます。</p><div className="sop-panel-foot"><span>COLLECTION / 2026</span><span>END OF NOTES ↗</span></div> </>}
];
export default function Example(){return <ObservatoryAccordion items={items} defaultExpanded={['section-1']}/>;}
