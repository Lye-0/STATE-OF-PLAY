'use client';
import React from 'react';
import {UnfoldAccordionView} from '../../../../shared/unfold-accordion-view';
import type {AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 葉のような紙の重なりが、左右にひらく。 */
export default function GardenNotesAccordion({className='',...props}:AccordionProps){
 return <UnfoldAccordionView {...props} mode="garden" className={`sop-garden-notes-accordion ${className}`}/>;
}
