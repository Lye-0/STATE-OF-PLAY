'use client';
import React from 'react';
import PlanAccordion from './PlanAccordion';
const items=[
{value:"section-1",title:"Personal",subtitle:"個人の制作に",badge:"FREE",content:<> <div className="sop-panel-art" aria-hidden="true"><span>PLANS / STUDY 01</span></div><p>小さなアイデアを形にする、個人向けの架空プランです。比較UIのサンプルとして自由に置き換えてください。</p><div className="sop-panel-metrics"><div><b>3</b><small>PROJECTS</small></div><div><b>1</b><small>MEMBER</small></div><div><b>∞</b><small>NOTES</small></div></div> </>},
{value:"section-2",title:"Studio",subtitle:"チームの共同作業に",badge:"TEAM",content:<> <p>プロジェクトの共有とレビューをまとめる、展示用の架空プランです。実際の購入機能はありません。</p><ul className="sop-panel-list"><li><span>共同編集</span><span>対応</span></li><li><span>履歴とレビュー</span><span>標準</span></li><li><span>書き出し</span><span>制限なし</span></li></ul> </>},
{value:"section-3",title:"Included features",subtitle:"共通する機能",badge:"ALL",content:<> <p>どのプランにも、基本の編集・プレビュー・書き出しを含む想定で構成しています。</p><ul className="sop-panel-list"><li><span>共同編集</span><span>対応</span></li><li><span>履歴とレビュー</span><span>標準</span></li><li><span>書き出し</span><span>制限なし</span></li></ul> </>}
];
export default function Example(){return <PlanAccordion items={items} defaultExpanded={['section-1']}/>;}
