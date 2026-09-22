'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 整理された標本とラベル。小さな博物館の引き出しをひらく。 */
export default function MuseumDrawerAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-museum-drawer-accordion ${className}`}/>;
}
