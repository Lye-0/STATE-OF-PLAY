'use client';
import React from 'react';
import {UnfoldAccordionView} from '../../../../shared/unfold-accordion-view';
import type {AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 紙の背から、折り畳まれた面がほどける。 */
export default function FolioAccordion({className='',...props}:AccordionProps){
 return <UnfoldAccordionView {...props} mode="folio" className={`sop-folio-accordion ${className}`}/>;
}
