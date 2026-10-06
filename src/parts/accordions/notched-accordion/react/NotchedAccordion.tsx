'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 片側の切欠きが、選んだ段の見出しと内容を一枚に結ぶ。 */
export default function NotchedAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-notched-accordion ${className}`}/>;
}
