'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 工業用の解錠パネル。見出しの状態灯と展開面を同じ機構にまとめる。 */
export default function TopographicStepAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-topographic-step-accordion ${className}`}/>;
}
