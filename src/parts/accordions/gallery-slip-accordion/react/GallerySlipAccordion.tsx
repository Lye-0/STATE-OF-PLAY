'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 石の段を降りる読み順。閉じた段は薄く、開いた本文は段の内側へ収まる。 */
export default function GallerySlipAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-gallery-slip-accordion ${className}`}/>;
}
