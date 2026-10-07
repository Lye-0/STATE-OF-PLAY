'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 奥まった項目の底面が開くと明るくなる。 */
export default function RecessStackAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-recess-stack-accordion ${className}`}/>;
}
