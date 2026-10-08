'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 設計図の座標列と本文を接続する。展開した領域にだけ薄い補助線が現れる。 */
export default function LedgerGateAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-ledger-gate-accordion ${className}`}/>;
}
