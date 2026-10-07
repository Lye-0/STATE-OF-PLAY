'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 見出しだけを緩やかな弧で囲み、開く本文は平らに残す。 */
export default function CurvedHeaderAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-curved-header-accordion ${className}`}/>;
}
