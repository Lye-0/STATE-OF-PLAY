'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 台帳の門が開いた行の左右を支持する。 */
export default function LedgerGateAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-ledger-gate-accordion ${className}`}/>;
}
