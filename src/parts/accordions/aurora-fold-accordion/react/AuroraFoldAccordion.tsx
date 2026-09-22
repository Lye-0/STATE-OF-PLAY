'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 見出しをひらくと光の層が現れる、空気感のある情報パネル。 */
export default function AuroraFoldAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-aurora-fold-accordion ${className}`}/>;
}
