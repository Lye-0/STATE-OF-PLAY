'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 絹のような陰影と細い見出し。物語が柔らかく折り重なる。 */
export default function SilkChapterAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-silk-chapter-accordion ${className}`}/>;
}
