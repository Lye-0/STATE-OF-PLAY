import React from 'react';
import LgcScrollbarsMist from './LgcScrollbarsMist';
/** Replace this sample content with your own. Keep a constrained viewport height. */
export default function Example() {
  return <LgcScrollbarsMist style={{height: 320, maxWidth: 480}} viewportLabel="ドキュメント">
    {Array.from({length: 8}, (_, index) => <section key={index} style={{padding: '20px 16px'}}>
      <h3>Section {index + 1}</h3><p>ここにあなたのコンテンツを配置してください。ホイール、タッチ、キーボードで読み進められます。</p>
    </section>)}
  </LgcScrollbarsMist>;
}
