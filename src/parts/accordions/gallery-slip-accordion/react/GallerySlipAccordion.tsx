'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 短い見出し札と広い本文の余白を分け、作品札のように開く。 */
export default function GallerySlipAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-gallery-slip-accordion ${className}`}/>;
}
