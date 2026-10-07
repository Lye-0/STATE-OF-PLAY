'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 碑の番号台と本文を分ける。 */
export default function MonumentPanelAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-monument-panel-accordion ${className}`}/>;
}
