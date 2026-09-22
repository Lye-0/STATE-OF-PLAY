'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 織り込まれたカーボンと控えめな識別色。道具を納めるケースの質感。 */
export default function CarbonCaseAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-carbon-case-accordion ${className}`}/>;
}
