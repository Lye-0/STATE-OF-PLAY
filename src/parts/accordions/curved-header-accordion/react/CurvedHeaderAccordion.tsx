'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** ループの支点に見出しを通す。開いた本文を二つの支点で固定する綴じ本の構成。 */
export default function CurvedHeaderAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-curved-header-accordion ${className}`}/>;
}
