'use client';
import React from 'react';
import GalleryFrameAccordion from './GalleryFrameAccordion';
const items=[
{value:"section-1",title:"Still landscape",subtitle:"静かな風景",badge:"WORK 01",content:<> <div className="sop-panel-art" aria-hidden="true"><span>ART / STUDY 01</span></div><p>かたちを減らすことで、色の距離が見えてくる。地平線と円だけで構成した、架空の小さな展示です。</p><div className="sop-panel-metrics"><div><b>2026</b><small>EDITION</small></div><div><b>03</b><small>LAYERS</small></div><div><b>01</b><small>STUDY</small></div></div> </>},
{value:"section-2",title:"Behind the work",subtitle:"制作の背景",badge:"PROCESS",content:<> <p>最初は大きな面を置き、その後に小さな線を加える。偶然に見える余白も、丁寧に残しています。</p><div className="sop-panel-tags"><span>DETAILS</span><span>CRAFT</span><span>REFERENCE</span></div> </>},
{value:"section-3",title:"Exhibition notes",subtitle:"展示の記録",badge:"LABEL",content:<> <p>作品名、素材、制作の意図。鑑賞を妨げない小さな文字で、背景の情報を添えます。</p><div className="sop-panel-foot"><span>COLLECTION / 2026</span><span>END OF NOTES ↗</span></div> </>}
];
export default function Example(){return <GalleryFrameAccordion items={items} defaultExpanded={['section-1']}/>;}
