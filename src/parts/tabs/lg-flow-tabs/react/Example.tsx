import React from 'react';
import FlowTabs from './FlowTabs';
const items=[{value:'overview',label:'概要',content:<><h3>余白から、はじまる。</h3><p>必要なコントロールだけが、内容の上に静かに浮かぶ。</p></>},{value:'details',label:'詳細',content:<><h3>必要な情報を、ここへ。</h3><p>説明・画像・フォームなどを自由に配置できます。</p></>},{value:'notes',label:'メモ',content:<><h3>入力は、そのまま。</h3><p>タブを切り替えても、本文の入力値を保ちます。</p></>}];
export default function Example(){return <FlowTabs items={items} aria-label="表示する内容"/>;}
