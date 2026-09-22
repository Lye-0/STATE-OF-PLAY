'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 設計図の細線と寸法表記。詳細な仕様を美しく展開する。 */
export default function BlueprintAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-blueprint-accordion ${className}`}/>;
}
