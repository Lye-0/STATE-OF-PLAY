'use client';
import React from 'react';
import GlassVaultAccordion from './GlassVaultAccordion';
const items=[
{value:"section-1",title:"Personal archive",subtitle:"日々の記録",badge:"PRIVATE",content:<> <div className="sop-panel-art" aria-hidden="true"><span>STORAGE / STUDY 01</span></div><p>写真、文章、作業の断片。大切な記録を、探しやすい小さなまとまりに整理します。</p><div className="sop-panel-metrics"><div><b>248</b><small>ITEMS</small></div><div><b>12</b><small>FOLDERS</small></div><div><b>68</b><small>USED %</small></div></div> </>},
{value:"section-2",title:"Shared collections",subtitle:"共有する場所",badge:"TEAM",content:<> <p>必要な人に、必要な内容だけ。公開範囲と更新の意図が分かるようにまとめます。</p><div className="sop-panel-tags"><span>DETAILS</span><span>CRAFT</span><span>REFERENCE</span></div> </>},
{value:"section-3",title:"Version history",subtitle:"変更の履歴",badge:"HISTORY",content:<> <p>以前の状態へ戻れる安心感。大きな変更の前には、比較できる記録を残します。</p><div className="sop-panel-foot"><span>COLLECTION / 2026</span><span>END OF NOTES ↗</span></div> </>}
];
export default function Example(){return <GlassVaultAccordion items={items} defaultExpanded={['section-1']}/>;}
