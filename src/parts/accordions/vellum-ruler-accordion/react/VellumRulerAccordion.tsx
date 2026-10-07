'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 透明な定規を欄外に残し、読む面を無地にする。 */
export default function VellumRulerAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-vellum-ruler-accordion ${className}`}/>;
}
