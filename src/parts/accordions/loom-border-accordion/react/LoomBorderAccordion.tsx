'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 織り目の背骨と本文を二つの領域に分ける。 */
export default function LoomBorderAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-loom-border-accordion ${className}`}/>;
}
