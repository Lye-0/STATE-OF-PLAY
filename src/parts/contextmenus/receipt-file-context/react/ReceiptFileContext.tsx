'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as ReceiptFileContextProps };
/** 巻軸とカプセルを廃し、実対象名と実操作を一枚の現在票へ読む。下位階層だけ、実親名を読む大きい切離し片と現在票を24pxの真空隙で分け、64pxの残し紙へ実Backを置く。根元は一枚、下位は実親への戻りを持つ切離し票で、階層の実状態が主外形を変える。 */
export default function ReceiptFileContext(props:ContextProps) {
 return <ContextView {...props} skin="receipt-file-context" />;
}
