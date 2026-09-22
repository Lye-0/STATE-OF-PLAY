'use client';
import React from 'react';
import SoftAccordion from './SoftAccordion';
const items=[
{value:"section-1",title:"Focus time",subtitle:"集中する時間",badge:"25 MIN",content:<> <p>ひとつだけ取り組むことを決め、短い時間を確保する。通知を少なくして、区切りまで続けます。</p> </>},
{value:"section-2",title:"Take a pause",subtitle:"小さな休憩",badge:"05 MIN",content:<> <p>画面から目を離し、少し歩く。次に始めることを決めてから戻ると、切り替えが穏やかになります。</p><div className="sop-panel-tags"><span>DETAILS</span><span>CRAFT</span><span>REFERENCE</span></div> </>},
{value:"section-3",title:"Daily notes",subtitle:"今日の記録",badge:"NOTES",content:<> <p>終えたことを短く記録する。明日へ持ち越すことも、一か所にまとめておきます。</p><div className="sop-panel-foot"><span>COLLECTION / 2026</span><span>END OF NOTES ↗</span></div> </>}
];
export default function Example(){return <SoftAccordion items={items} defaultExpanded={['section-1']}/>;}
