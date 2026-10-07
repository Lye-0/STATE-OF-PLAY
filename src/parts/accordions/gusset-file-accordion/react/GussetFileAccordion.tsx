'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** マチが内容の高さに沿って開く。 */
export default function GussetFileAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-gusset-file-accordion ${className}`}/>;
}
