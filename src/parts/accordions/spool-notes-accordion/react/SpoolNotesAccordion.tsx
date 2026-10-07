'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 丸い軸の印と横へ伸びる罫線で、内容を巻き出す印象をつくる。 */
export default function SpoolNotesAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-spool-notes-accordion ${className}`}/>;
}
