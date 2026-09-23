'use client';
import React from 'react';
import {UnfoldAccordionView} from '../../../../shared/unfold-accordion-view';
import type {AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 引き出しの側板が伸び、紙の底面が手前へ滑る。 */
export default function MuseumDrawerAccordion({className='',...props}:AccordionProps){
 return <UnfoldAccordionView {...props} mode="drawer" className={`sop-museum-drawer-accordion ${className}`}/>;
}
