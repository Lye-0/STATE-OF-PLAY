'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 大きな章番号と、紙の余白。ひらいた内容まで一冊の本のように。 */
export default function FolioAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-folio-accordion ${className}`}/>;
}
