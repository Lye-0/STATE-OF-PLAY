'use client';
import React from 'react';
import DocumentationAccordion from './DocumentationAccordion';
const items=[
{value:"section-1",title:"Installation",subtitle:"導入手順",badge:"01",content:<> <p>既存の構成を保ったまま、コンポーネントとCSSを読み込みます。依存ファイルも本体のフォルダーに含まれています。</p><pre className="sop-panel-code"><code>import Panel from &quot;./panel&quot;;
// Pass your content as items</code></pre> </>},
{value:"section-2",title:"Configuration",subtitle:"公開する設定",badge:"02",content:<> <p>単一または複数の展開、初期状態、状態変更の通知を設定できます。Reactでは外部から状態を制御することもできます。</p><pre className="sop-panel-code"><code>multiple: true
expanded: [&quot;overview&quot;]</code></pre> </>},
{value:"section-3",title:"Lifecycle",subtitle:"取り外しと後片付け",badge:"03",content:<> <p>Vanilla版では取り外す前にdestroy()を呼びます。React版はコンポーネントの取り外しに合わせて解除します。</p><pre className="sop-panel-code"><code>const control = init(element);
control.destroy();</code></pre> </>}
];
export default function Example(){return <DocumentationAccordion items={items} defaultExpanded={['section-1']}/>;}
