'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 番号の軸を内容まで連続させ、開いた箇所に巻きの印を置く。 */
export default function SpoolNotesAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-spool-notes-accordion ${className}`}/>;
}
