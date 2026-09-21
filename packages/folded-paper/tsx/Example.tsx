import React from 'react';
import FoldedPaper from './FoldedPaper';

export default function Example() {
  return <FoldedPaper style={{maxWidth: 420}}>
    <h3>Your next idea.</h3>
    <p>ここに、あなたのコンテンツを。</p>
    <button type="button">はじめる</button>
  </FoldedPaper>;
}
