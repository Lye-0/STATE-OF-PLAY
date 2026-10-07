'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 斜めに張った縁とまっすぐな内容面で、帆のポケットを表す。 */
export default function SailPocketAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-sail-pocket-accordion ${className}`}/>;
}
