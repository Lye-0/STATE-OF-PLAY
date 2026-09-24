'use client';
import React from 'react';
import SilkChapterAccordion from './SilkChapterAccordion';
const items=[
{value:"section-1",title:"Weave & texture",subtitle:"織りと手触り",badge:"SILK",content:<> <div className="sop-panel-art" aria-hidden="true"><span>TEXTILE / STUDY 01</span></div><p>経糸と緯糸の交わりが、光の表情をつくります。近くで触れるものだからこそ、肌への感触を大切に。</p><div className="sop-panel-metrics"><div><b>140</b><small>THREADS</small></div><div><b>12</b><small>MOMME</small></div><div><b>100</b><small>NATURAL %</small></div></div> </>},
{value:"section-2",title:"Color story",subtitle:"染めの記憶",badge:"DYE",content:<> <p>一度で強く染めず、淡い色を何度も重ねる。奥行きのある色が、日々の暮らしになじんでいきます。</p><div className="sop-panel-tags"><span>SHADE</span><span>DYE BATH</span><span>HAND FEEL</span></div> </>},
{value:"section-3",title:"Care guide",subtitle:"長く使うために",badge:"CARE",content:<> <p>風を通し、直射日光を避けて保管します。繊維の特徴に合わせて、やさしく整えてください。</p><div className="sop-panel-foot"><span>COLLECTION / 2026</span><span>END OF NOTES ↗</span></div> </>}
];
export default function Example(){return <SilkChapterAccordion items={items} defaultExpanded={['section-1']}/>;}
