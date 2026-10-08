'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 本の見出しを章扉として扱い、開いた章の本文へ同じ幅の余白を続ける。 */
export default function HatchDividerAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-hatch-divider-accordion ${className}`}/>;
}
