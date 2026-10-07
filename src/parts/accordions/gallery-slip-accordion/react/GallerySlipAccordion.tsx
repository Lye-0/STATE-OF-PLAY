'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 展示札と解説面の間に大きな呼吸を置く。 */
export default function GallerySlipAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-gallery-slip-accordion ${className}`}/>;
}
