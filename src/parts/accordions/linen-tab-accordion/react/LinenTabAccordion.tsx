'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 布のタブを見出しに縫い、本文は広い無地面に置く。 */
export default function LinenTabAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-linen-tab-accordion ${className}`}/>;
}
