'use client';
import React from 'react';
import OutlineAccordion from './OutlineAccordion';
const items=[
{value:"section-1",title:"利用を始めるには？",subtitle:"Getting started",badge:"01",content:<> <p>パーツのZIPを取得し、本体フォルダーを既存のコンポーネント置き場へ配置してください。使用例を参考に、状態と内容を接続します。</p> </>},
{value:"section-2",title:"内容は変更できますか？",subtitle:"Customization",badge:"02",content:<> <p>はい。見出し、説明、画像やボタンなど、内側の内容を自由に差し替えられます。デザインのCSSと動作処理は分離されています。</p><div className="sop-panel-tags"><span>DETAILS</span><span>CRAFT</span><span>REFERENCE</span></div> </>},
{value:"section-3",title:"キーボードで操作できますか？",subtitle:"Accessibility",badge:"03",content:<> <p>見出しへTabで移動し、EnterまたはSpaceで開閉できます。矢印キーで見出し間を移動でき、閉じた内容はフォーカス対象から外れます。</p><div className="sop-panel-foot"><span>COLLECTION / 2026</span><span>END OF NOTES ↗</span></div> </>}
];
export default function Example(){return <OutlineAccordion items={items} defaultExpanded={['section-1']}/>;}
