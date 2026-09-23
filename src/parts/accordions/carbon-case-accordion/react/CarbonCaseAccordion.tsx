'use client';
import React from 'react';
import {UnfoldAccordionView} from '../../../../shared/unfold-accordion-view';
import type {AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** ケースの蓋が起き、内側のライナーが奥から現れる。 */
export default function CarbonCaseAccordion({className='',...props}:AccordionProps){
 return <UnfoldAccordionView {...props} mode="clamshell" className={`sop-carbon-case-accordion ${className}`}/>;
}
