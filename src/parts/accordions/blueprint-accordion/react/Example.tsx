'use client';
import React from 'react';
import BlueprintAccordion from './BlueprintAccordion';
const items=[
{value:"section-1",title:"Spatial structure",subtitle:"空間の構成",badge:"PLAN",content:<> <div className="sop-panel-art" aria-hidden="true"><span>ARCHITECTURE / STUDY 01</span></div><p>構造と余白をひとつの平面に。光の通り道と、人の動線を重ねて、静かな空間を設計します。</p><div className="sop-panel-metrics"><div><b>84</b><small>AREA m²</small></div><div><b>2.8</b><small>HEIGHT m</small></div><div><b>04</b><small>ZONES</small></div></div> </>},
{value:"section-2",title:"Material schedule",subtitle:"仕上げと接合",badge:"SPEC",content:<> <p>木、石、金属の接点に小さな目地を設ける。素材の違いを隠さず、丁寧につなぎます。</p><div className="sop-panel-tags"><span>DETAILS</span><span>CRAFT</span><span>REFERENCE</span></div> </>},
{value:"section-3",title:"Technical notes",subtitle:"寸法と記録",badge:"REV 03",content:<> <p>変更した理由を短く記録する。後から読む人にも意図が伝わる、設計のための余白です。</p><div className="sop-panel-foot"><span>COLLECTION / 2026</span><span>END OF NOTES ↗</span></div> </>}
];
export default function Example(){return <BlueprintAccordion items={items} defaultExpanded={['section-1']}/>;}
