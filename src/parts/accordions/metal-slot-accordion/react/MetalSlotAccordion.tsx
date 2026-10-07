'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 金属のスロットから内容用の床が引き出される。 */
export default function MetalSlotAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-metal-slot-accordion ${className}`}/>;
}
