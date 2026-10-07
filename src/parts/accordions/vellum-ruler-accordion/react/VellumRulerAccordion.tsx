'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 印刷した短い目盛りと半透明の縁で、開いた高さを感じさせる。 */
export default function VellumRulerAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-vellum-ruler-accordion ${className}`}/>;
}
