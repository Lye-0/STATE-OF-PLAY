'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 巻き取った見出しをほどく横長の紙。本文の左右に軸を置き、開いた量を高さで示す。 */
export default function LoomBorderAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-loom-border-accordion ${className}`}/>;
}
