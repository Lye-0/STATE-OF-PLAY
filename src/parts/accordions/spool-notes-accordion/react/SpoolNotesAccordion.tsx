'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 縫った見出し帯から布の本文面が広がる。選択した縫い目だけを濃く保つ。 */
export default function SpoolNotesAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-spool-notes-accordion ${className}`}/>;
}
