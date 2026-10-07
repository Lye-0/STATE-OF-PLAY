'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 穏やかな紙色と十分な行間で、長いヘルプを読みやすくする。 */
export default function WarmHelpAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-warm-help-accordion ${className}`}/>;
}
