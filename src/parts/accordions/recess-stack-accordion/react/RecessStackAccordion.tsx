'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 凹んだ段の中で選択中の面だけが明るくなる、小さな器械の積層。 */
export default function RecessStackAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-recess-stack-accordion ${className}`}/>;
}
