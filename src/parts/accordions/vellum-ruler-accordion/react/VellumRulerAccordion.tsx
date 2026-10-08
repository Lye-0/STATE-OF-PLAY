'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** レタープレスの大きい見出し段。本文は細い罫線から下へ続き、不要な内側の箱を作らない。 */
export default function VellumRulerAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-vellum-ruler-accordion ${className}`}/>;
}
