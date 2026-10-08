'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 陶器の浅い受け皿から本文が現れる。開いた面を同じ内壁の中に保つ。 */
export default function RecessStackAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-recess-stack-accordion ${className}`}/>;
}
