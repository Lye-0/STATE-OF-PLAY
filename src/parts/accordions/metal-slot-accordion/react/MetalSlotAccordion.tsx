'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 帳簿の見出しと本文を二つの列へ。大きい索引と横書き本文を分けて読ませる。 */
export default function MetalSlotAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-metal-slot-accordion ${className}`}/>;
}
