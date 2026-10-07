'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 曲がった見出しの下に水平な本文台を置く。 */
export default function CurvedHeaderAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-curved-header-accordion ${className}`}/>;
}
