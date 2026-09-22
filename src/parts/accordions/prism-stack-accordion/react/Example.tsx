'use client';
import React from 'react';
import PrismStackAccordion from './PrismStackAccordion';
const items=[
{value:"section-1",title:"Optical layers",subtitle:"光学レイヤー",badge:"RGB",content:<> <div className="sop-panel-art" aria-hidden="true"><span>LIGHT / STUDY 01</span></div><p>光が境界を通るときに生まれる色。透明な層と静かな背景を重ね、輪郭にだけ光を残します。</p><div className="sop-panel-metrics"><div><b>03</b><small>LAYERS</small></div><div><b>88</b><small>TRANSMIT %</small></div><div><b>6500</b><small>KELVIN</small></div></div> </>},
{value:"section-2",title:"Color dispersion",subtitle:"色の分離",badge:"SPECTRUM",content:<> <p>暖色から寒色へ、急に切り替えず連続した帯に。わずかな色の変化が素材を感じさせます。</p><div className="sop-panel-tags"><span>DETAILS</span><span>CRAFT</span><span>REFERENCE</span></div> </>},
{value:"section-3",title:"Surface notes",subtitle:"反射と粗さ",badge:"DETAIL",content:<> <p>強い反射だけでなく、薄い白の縁や柔らかな影が、光学素材の奥行きを支えます。</p><div className="sop-panel-foot"><span>COLLECTION / 2026</span><span>END OF NOTES ↗</span></div> </>}
];
export default function Example(){return <PrismStackAccordion items={items} defaultExpanded={['section-1']}/>;}
