'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 開閉記号の専用列と本文列を分け、精密な記録簿の構造にする。 */
export default function LedgerGateAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-ledger-gate-accordion ${className}`}/>;
}
