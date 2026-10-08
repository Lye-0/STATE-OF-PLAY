'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 大型の索引番号を左へ独立させた誌面。番号と本文の基準線を揃え、開いた行を面で区切る。 */
export default function LinenTabAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-linen-tab-accordion ${className}`}/>;
}
