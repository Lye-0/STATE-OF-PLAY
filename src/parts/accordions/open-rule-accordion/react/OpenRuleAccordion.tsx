'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 背景を増やさず、横罫と開閉記号だけで構成する。 */
export default function OpenRuleAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-open-rule-accordion ${className}`}/>;
}
