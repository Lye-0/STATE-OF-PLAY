'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 赤銅の縁と打刻番号。素材の履歴が精密な表になって現れる。 */
export default function CopperLedgerAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-copper-ledger-accordion ${className}`}/>;
}
