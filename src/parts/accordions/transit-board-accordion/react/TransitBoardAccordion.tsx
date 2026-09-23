'use client';
import React from 'react';
import {UnfoldAccordionView} from '../../../../shared/unfold-accordion-view';
import type {AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 案内板のフラップが開き、次の情報へつながる。 */
export default function TransitBoardAccordion({className='',...props}:AccordionProps){
 return <UnfoldAccordionView {...props} mode="flap" className={`sop-transit-board-accordion ${className}`}/>;
}
