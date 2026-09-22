'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 色を含んだ輪郭と断面。情報にも透明な層をつくる。 */
export default function PrismStackAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-prism-stack-accordion ${className}`}/>;
}
