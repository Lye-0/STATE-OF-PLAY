'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 丸みのある受け皿の中に、直線的な本文面を置く。 */
export default function CradleFoldAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-cradle-fold-accordion ${className}`}/>;
}
