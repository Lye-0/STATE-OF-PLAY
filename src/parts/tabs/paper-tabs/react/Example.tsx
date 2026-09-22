import React,{useState} from 'react';
import PaperTabs,{type TabItem} from './PaperTabs';
// Stable values, not positional indices. Add/remove items here; layout is not fixed to 3.
const items:readonly TabItem[]=[
{value:"choice-1",label:"概要",content:(<div className="sop-choice-demo" data-illustration="orbit"><span className="sop-choice-demo-kicker">ESSENTIAL / LIGHT</span><span className="sop-choice-demo-art" aria-hidden="true"></span><h3>大切な情報を、<br/>ひとつずつ。</h3><p>白い画面に、なじむ。<br/>見出しを選ぶと、内容が切り替わります。</p><div className="sop-choice-demo-footer"><span>COLLECTION / 01</span><b>01 — 03</b></div></div>)},
{value:"choice-2",label:"詳細",content:(<div className="sop-choice-demo"><span className="sop-choice-demo-kicker">DESIGN SPECIFICATION</span><h3>Built for<br/><em>your ideas.</em></h3><ul className="sop-choice-demo-list"><li>構成<b>項目数を自由に変更</b></li><li>入力内容<b>切り替えても保持</b></li><li>移動方法<b>キー・クリック</b></li></ul></div>)},
{value:"choice-3",label:"メモ",content:(<div className="sop-choice-demo"><span className="sop-choice-demo-kicker">YOUR FIELD NOTES</span><h3>A thought<br/><em>worth keeping.</em></h3><label>メモ<input type="text" placeholder="アイデアをここに…" aria-label="このタブのメモ"/></label><p>表示を切り替えても、入力は残ります。<br/>ページを離れると消えるデモです。</p></div>)}
];
export default function Example(){const[value,setValue]=useState('choice-1');return <PaperTabs items={items} value={value} onValueChange={setValue} aria-label="Paper Tabs"/>;}
