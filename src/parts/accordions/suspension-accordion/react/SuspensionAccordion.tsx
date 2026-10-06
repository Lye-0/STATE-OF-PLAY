'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 細い吊り線で支えた見出しが、開いた本文と静かに離れる。 */
export default function SuspensionAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-suspension-accordion ${className}`}/>;
}
