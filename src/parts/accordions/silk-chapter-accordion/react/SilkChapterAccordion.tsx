'use client';
import React from 'react';
import {UnfoldAccordionView} from '../../../../shared/unfold-accordion-view';
import type {AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 畳まれた布のひだが解け、光沢だけがゆっくり移る。 */
export default function SilkChapterAccordion({className='',...props}:AccordionProps){
 return <UnfoldAccordionView {...props} mode="silk" className={`sop-silk-chapter-accordion ${className}`}/>;
}
