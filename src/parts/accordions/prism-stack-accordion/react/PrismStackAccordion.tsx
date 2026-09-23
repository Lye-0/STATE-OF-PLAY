'use client';
import React from 'react';
import {UnfoldAccordionView} from '../../../../shared/unfold-accordion-view';
import type {AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 結晶の断面が離れ、虹色の縁が内容を囲む。 */
export default function PrismStackAccordion({className='',...props}:AccordionProps){
 return <UnfoldAccordionView {...props} mode="prism" className={`sop-prism-stack-accordion ${className}`}/>;
}
