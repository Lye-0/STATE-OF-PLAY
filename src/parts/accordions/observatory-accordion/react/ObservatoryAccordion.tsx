'use client';
import React from 'react';
import {UnfoldAccordionView} from '../../../../shared/unfold-accordion-view';
import type {AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 開口が円を描いて広がり、夜の奥行きが現れる。 */
export default function ObservatoryAccordion({className='',...props}:AccordionProps){
 return <UnfoldAccordionView {...props} mode="iris" className={`sop-observatory-accordion ${className}`}/>;
}
