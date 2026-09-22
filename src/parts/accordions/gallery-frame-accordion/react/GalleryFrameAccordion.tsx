'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 額縁のような線と展示の余白。アートの背景を読むアコーディオン。 */
export default function GalleryFrameAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-gallery-frame-accordion ${className}`}/>;
}
