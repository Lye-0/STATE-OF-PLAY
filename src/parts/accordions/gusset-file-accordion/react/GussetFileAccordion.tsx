'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 開いた項目の脇にマチの帯が現れ、収納された内容の厚みを見せる。 */
export default function GussetFileAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-gusset-file-accordion ${className}`}/>;
}
