'use client';
import React from 'react';
import {UnfoldAccordionView} from '../../../../shared/unfold-accordion-view';
import type {AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 四隅から額縁が伸び、余白の中に内容を展示する。 */
export default function GalleryFrameAccordion({className='',...props}:AccordionProps){
 return <UnfoldAccordionView {...props} mode="frame" className={`sop-gallery-frame-accordion ${className}`}/>;
}
