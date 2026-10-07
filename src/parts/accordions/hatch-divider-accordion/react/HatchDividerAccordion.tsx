'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 四隅の小さな金具が回り、開く項目の輪郭だけを強調する。 */
export default function HatchDividerAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-hatch-divider-accordion ${className}`}/>;
}
