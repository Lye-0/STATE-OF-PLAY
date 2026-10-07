'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 見出しの薄い差し込み口から、淡い本文シートを引き出す構成。 */
export default function MetalSlotAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-metal-slot-accordion ${className}`}/>;
}
