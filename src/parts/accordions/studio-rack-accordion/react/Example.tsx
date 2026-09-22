'use client';
import React from 'react';
import StudioRackAccordion from './StudioRackAccordion';
const items=[
{value:"section-1",title:"Signal chain",subtitle:"入力から出力まで",badge:"STEREO",content:<> <div className="sop-panel-art" aria-hidden="true"><span>AUDIO / STUDY 01</span></div><p>必要な音だけを丁寧につなぐ。入力、空間、出力の順で、聴き心地を整えます。</p><div className="sop-panel-metrics"><div><b>48</b><small>KHZ</small></div><div><b>-6</b><small>DB HEADROOM</small></div><div><b>2.4</b><small>MS LATENCY</small></div></div> </>},
{value:"section-2",title:"Room response",subtitle:"空間の響き",badge:"WARM",content:<> <p>壁や床の反射を抑え、音の輪郭を明確に。小さな部屋にも、豊かな奥行きをつくります。</p><div className="sop-panel-tags"><span>DETAILS</span><span>CRAFT</span><span>REFERENCE</span></div> </>},
{value:"section-3",title:"Listening notes",subtitle:"試聴の記録",badge:"LOG",content:<> <p>低い音量でも声が自然に届くか。長く聴いて疲れないか。最後は数字より、耳で確かめます。</p><div className="sop-panel-foot"><span>COLLECTION / 2026</span><span>END OF NOTES ↗</span></div> </>}
];
export default function Example(){return <StudioRackAccordion items={items} defaultExpanded={['section-1']}/>;}
