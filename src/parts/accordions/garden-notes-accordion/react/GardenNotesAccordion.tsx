'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 葉色の紙と標本ラベル。植物の手入れを静かに整理する。 */
export default function GardenNotesAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-garden-notes-accordion ${className}`}/>;
}
