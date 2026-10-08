'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 折り返した見出しの下へ同じ紙の本文を接続。開閉で紙の端の折り返しが変わる。 */
export default function SailPocketAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-sail-pocket-accordion ${className}`}/>;
}
