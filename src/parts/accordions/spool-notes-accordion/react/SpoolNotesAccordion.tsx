'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 上下の二つの巻き枠から一本の糸を引くノート。本文の高さに沿って糸をつなぎ、横の留めで紙を支える。開閉時は巻き枠が回り、見出しと本文は静止する。 */
export default function SpoolNotesAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} motionLayer={<span className="sop-acc-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-spool-notes-accordion ${className}`}/>;
}
