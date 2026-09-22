'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 読みやすい見出しと控えめな展開。日常の情報整理に使える実用的なUI。 */
export default function SoftAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-soft-accordion ${className}`}/>;
}
