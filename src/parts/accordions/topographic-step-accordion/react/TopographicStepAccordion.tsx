'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 等高線の段が開いたページの下に現れる。 */
export default function TopographicStepAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-topographic-step-accordion ${className}`}/>;
}
