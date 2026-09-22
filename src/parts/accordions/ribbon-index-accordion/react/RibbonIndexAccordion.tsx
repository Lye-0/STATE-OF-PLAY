'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 折り返されたリボンと暖かい紙。見出し自体がしおりになる。 */
export default function RibbonIndexAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-ribbon-index-accordion ${className}`}/>;
}
