'use client';
import React from 'react';
import {UnfoldAccordionView} from '../../../../shared/unfold-accordion-view';
import type {AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 銅の帯が回転して開き、内側の暗い面を見せる。 */
export default function CopperLedgerAccordion({className='',...props}:AccordionProps){
 return <UnfoldAccordionView {...props} mode="copper" className={`sop-copper-ledger-accordion ${className}`}/>;
}
