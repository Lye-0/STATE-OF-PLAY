'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 見出しの横から布の小片が出る、柔らかい保存ファイル。 */
export default function LinenTabAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-linen-tab-accordion ${className}`}/>;
}
