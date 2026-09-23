'use client';
import React from 'react';
import {UnfoldAccordionView} from '../../../../shared/unfold-accordion-view';
import type {AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 折り返した帯がほどけて、ひとつの長い紙面になる。 */
export default function RibbonIndexAccordion({className='',...props}:AccordionProps){
 return <UnfoldAccordionView {...props} mode="ribbon" className={`sop-ribbon-index-accordion ${className}`}/>;
}
