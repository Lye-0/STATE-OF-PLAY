'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 揺りかごの底に独立した本文面を収める。 */
export default function CradleFoldAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-cradle-fold-accordion ${className}`}/>;
}
