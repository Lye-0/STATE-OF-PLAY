'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 縦の細い糸を切らず、見出しと本文の面だけを増やす。 */
export default function LoomBorderAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-loom-border-accordion ${className}`}/>;
}
