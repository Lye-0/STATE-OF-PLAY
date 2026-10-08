'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderProgress, mountProgress} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "book-spine-progress",
  "kind": "progress",
  "variant": "essential",
  "label": "ここまでの歩みを。",
  "description": "",
  "defaultValue": 72,
  "min": 0,
  "max": 100
};
export type BookSpineProgressProps = FoundationProps;
/** 書背から、実進捗に応じた厚みの紙束を組む表示。縁の付いた標準バーを廃止し、20pxの三面書背と、88px高の上下の表紙/縦の紙小口を作る。表紙と紙束の到達幅は実割合で増え、0%では紙束がなく、100%で全幅を満たす。数字は本の下へ固定して表示する。 */
export default forwardRef<HTMLDivElement, BookSpineProgressProps>(function BookSpineProgress(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderProgress} mountContent={mountProgress}/>;
});
