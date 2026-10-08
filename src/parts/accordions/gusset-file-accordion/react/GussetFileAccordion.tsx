'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** ガセットを開く書類綴じ。左の蛇腹が開いた本文面の高さまで広がる。 */
export default function GussetFileAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-gusset-file-accordion ${className}`}/>;
}
