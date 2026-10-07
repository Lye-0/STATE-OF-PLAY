'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** ハッチの対角線を欄外に限定し、本文を開く。 */
export default function HatchDividerAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-hatch-divider-accordion ${className}`}/>;
}
