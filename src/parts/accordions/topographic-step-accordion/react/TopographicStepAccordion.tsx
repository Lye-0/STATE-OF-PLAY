'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 段差のある細い外縁で、開いた面を一段高く見せる。 */
export default function TopographicStepAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-topographic-step-accordion ${className}`}/>;
}
