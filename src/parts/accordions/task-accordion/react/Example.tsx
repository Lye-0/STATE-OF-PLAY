'use client';
import React from 'react';
import TaskAccordion from './TaskAccordion';
const items=[
{value:"section-1",title:"Design review",subtitle:"デザインの確認",badge:"2 / 3",content:<> <p>見出し、本文、操作状態の確認をひとまとまりに。リストは展示用で、チェックはページ内だけに反映されます。</p><label className="sop-panel-label"><span>見出しと余白を確認</span><input type="checkbox" defaultChecked /></label><label className="sop-panel-label"><span>操作状態を確認</span><input type="checkbox" /></label><label className="sop-panel-label"><span>モバイルで確認</span><input type="checkbox" /></label> </>},
{value:"section-2",title:"Implementation",subtitle:"実装すること",badge:"1 / 3",content:<> <p>既存のアプリ構成に合わせて配置し、状態とイベントを接続します。</p><label className="sop-panel-label"><span>見出しと余白を確認</span><input type="checkbox" defaultChecked /></label><label className="sop-panel-label"><span>操作状態を確認</span><input type="checkbox" defaultChecked /></label><label className="sop-panel-label"><span>モバイルで確認</span><input type="checkbox" /></label> </>},
{value:"section-3",title:"Final checks",subtitle:"最後の確認",badge:"0 / 3",content:<> <p>キーボード、狭い画面、複数配置を確認してから公開します。</p><label className="sop-panel-label"><span>見出しと余白を確認</span><input type="checkbox" defaultChecked /></label><label className="sop-panel-label"><span>操作状態を確認</span><input type="checkbox" defaultChecked /></label><label className="sop-panel-label"><span>モバイルで確認</span><input type="checkbox" defaultChecked /></label> </>}
];
export default function Example(){return <TaskAccordion items={items} defaultExpanded={['section-1']}/>;}
